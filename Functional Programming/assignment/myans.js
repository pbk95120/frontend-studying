import { users, orders, products, reviews } from "./shop_data.js";
import { map, filter, reduce, go, find, curry, take } from "fxjs";
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";
import * as _ from "fxjs/Strict";

// 1. 구매 이력 조회 함수
// 단순 필터 연산이므로 즉시 평가, 단일 인자만 필요하기에, curry 적용 X
const getPurchaseHistory = (userId) =>
  go(
    orders,
    _.filter((order) => order.userId === userId)
  );
// --------------------------------------------------

// 2. 상품별 구매 내역 조회 함수
// 제품을 이름으로 찾는 함수
const findProductByName = (productName) =>
  find((p) => p.name === productName, products);

// 주문을 제품 ID로 필터링하는 함수, 지연평가 적용
const getOrdersForProduct = (productId) =>
  L.filter((order) => order.productId === productId, orders);

// 메인 함수
const getProductPurchaseDetails = (productName) =>
  go(productName, findProductByName, (product) =>
    product
      ? C.takeAll(getOrdersForProduct(product.id))
      : `상품 "${productName}"을(를) 찾을 수 없습니다.`
  );

// --------------------------------------------------
// 3. 특정 카테고리(categoryName)를 입력받아 해당 카테고리와 관련된 제품, 판매, 수익, 그리고 리뷰 데이터를 처리하고 요약 정보를 반환하는 함수
// 특정 카테고리의 제품을 찾는 함수
const getCategoryProducts = (categoryName) =>
  L.filter((product) => product.category === categoryName, products);

// 총 판매량 계산 함수
const calculateTotalSales = (categoryProducts) =>
  C.reduce((acc, product) => acc + product.sold, 0, categoryProducts);

// 총 수익 계산 함수
const calculateTotalRevenue = (categoryProducts) =>
  C.reduce(
    (acc, product) => acc + product.price * product.sold,
    0,
    categoryProducts
  );

// 카테고리의 리뷰를 찾는 함수
const getCategoryReviews = (categoryProducts) => {
  const productIds = map((product) => product.id, categoryProducts);
  return L.filter((review) => productIds.includes(review.productId), reviews);
};

// 평균 평점 계산 함수
const calculateAverageRating = (categoryReviews) => {
  const totalRatings = C.reduce(
    (acc, review) => acc + review.rating,
    0,
    categoryReviews
  );
  return categoryReviews.length > 0
    ? (totalRatings / categoryReviews.length).toFixed(1)
    : "평점 없음";
};

// 메인 함수
const getCategorySalesSummary = (categoryName) =>
  go(getCategoryProducts(categoryName), C.takeAll, (categoryProducts) => {
    // 카테고리 제품이 비어 있는지 확인
    if (!L.empty(categoryProducts)) {
      return `카테고리 "${categoryName}"에 해당하는 상품이 없습니다.`;
    }

    return go(
      getCategoryReviews(categoryProducts), // 카테고리 리뷰를 가져옴
      C.takeAll, // 이터러블 객체를 배열로 변환
      (categoryReviews) => ({
        카테고리: categoryName,
        총_판매량: calculateTotalSales(categoryProducts),
        총_수익: calculateTotalRevenue(categoryProducts),
        평균_평점: calculateAverageRating(categoryReviews),
      })
    );
  });

// --------------------------------------------------
// 4. 제한된 수의 주문 데이터와 총 지출 합계를 계산하는 함수
// 유저 찾기 함수
const findUser = (users, userId) => users.find((user) => user.id === userId);

// 상품 찾기 함수
const findProduct = (products, productId) =>
  products.find((product) => product.id === productId);

// 주문 데이터 보강 함수
const enrichOrder = (users, products, order) => {
  const user = findUser(users, order.userId);
  const product = findProduct(products, order.productId);

  return {
    ...order,
    userName: user?.name,
    productName: product?.name,
    productPrice: product?.price,
  };
};

// 주문 유효성 검증 함수
const isValidOrder = (condition, enrichedOrder) => {
  return (
    enrichedOrder &&
    enrichedOrder.userName &&
    enrichedOrder.productName &&
    condition(enrichedOrder)
  );
};

// 총합 계산 함수
const calculateTotalSum = (processedData) =>
  C.reduce(
    (sum, order) => sum + order.productPrice * order.quantity,
    0,
    processedData
  );

// 주문 처리 함수
const processUserOrders = curry((users, orders, products, condition, limit) => {
  return go(
    orders,
    L.map((order) => enrichOrder(users, products, order)),
    L.filter((enrichedOrder) => isValidOrder(condition, enrichedOrder)),
    L.take(limit),
    C.takeAll,
    (filteredOrders) => ({
      totalSum: calculateTotalSum(filteredOrders),
      processedData: filteredOrders,
    })
  );
});

// --------------------------------------------------
// 1. 특정 사용자 구매 이력 조회 (예: 사용자 ID 1)
console.time("전체 수행 시간");
console.log("=".repeat(50));
console.log(`사용자 ID 1의 구매 이력`);
console.log("=".repeat(50));
const userId = 1;
const purchaseHistory = getPurchaseHistory(userId);
console.log(purchaseHistory);

// 2. "Wireless Mouse"의 구매 내역 조회
console.log("=".repeat(50));
console.log("상품 'Wireless Mouse'의 구매 내역");
console.log("=".repeat(50));
const purchaseDetails = getProductPurchaseDetails("Wireless Mouse");
console.log(purchaseDetails);

// 3. 특정 카테고리(categoryName)를 입력받아 해당 카테고리와 관련된 제품, 판매, 수익, 그리고 리뷰 데이터를 처리하고 요약 정보를 반환하는 함수
console.log("=".repeat(50));
console.log("카테고리별 판매 요약");
console.log("=".repeat(50));
const categorySummary = getCategorySalesSummary("Electronics");
console.log("카테고리 판매 요약:", categorySummary);

console.log("=".repeat(50));
console.log("제한된 수의 주문 데이터와 총 지출 합계를 계산하는 함수");
console.log("=".repeat(50));
const condition = (order) => order.status === "Completed" && order.quantity > 1;
const result = processUserOrders(users, orders, products, condition, 5);
console.log(result);
console.timeEnd("전체 수행 시간");

// --------------------------------------------------
// 5. 비동기를 동기적으로 처리하는 `processUserOrders` 함수
// 사용자 데이터를 비동기로 가져오는 함수 (DEFAULT 함수)
const fetchUserById = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find((user) => user.id === userId));
    }, 500); // 0.5초 딜레이
  });
};

// 제품 데이터를 비동기로 가져오는 함수 (DEFAULT 함수)
const fetchProductById = async (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === productId));
    }, 500); // 0.5초 딜레이
  });
};

// 비동기를 동기적으로 처리하는 `processUserOrders` 함수
const processUserOrdersAsync = async (condition, limit) => {
  // fetchUserById와 fetchProductById를 병렬로 실행
  const fetchOrderData = async (order) => {
    const [user, product] = await Promise.all([
      fetchUserById(order.userId),
      fetchProductById(order.productId),
    ]);

    if (
      user &&
      product &&
      condition({
        ...order,
        userName: user.name,
        productName: product.name,
        productPrice: product.price,
      })
    )
      return {
        ...order,
        userName: user.name,
        productName: product.name,
        productPrice: product.price,
      };
  };

  return go(
    orders,
    L.map(fetchOrderData), // 각 주문의 병렬 데이터 병합
    L.filter((order) => order && condition(order)), // 조건 필터링
    take(limit), // 지정된 수만큼 가져오기
    (filteredOrders) => ({
      totalSum: calculateTotalSum(filteredOrders), // 3번에서 쓴 함수 재사용
      processedData: filteredOrders, // 처리된 데이터 반환
    })
  );
};

(async () => {
  console.time("비동기 함수 실행");
  const condition = (order) =>
    order.status === "Completed" && order.quantity > 1;
  console.log("비동기적으로 주문 데이터 처리 시작...");
  const result = await processUserOrdersAsync(condition, 5);
  console.log("비동기적으로 처리된 결과:", result);
  console.timeEnd("비동기 함수 실행");
})();
