import { users, orders, products, reviews } from './shop_data.js';

// 1. 구매 이력 조회 함수
const getPurchaseHistory = (userId) => {
  return orders.filter(order => order.userId === userId);
};

// 2. 상품별 구매 내역 조회 함수
const getProductPurchaseDetails = (productName) => {
  const product = products.find(p => p.name === productName);
  if (!product) {
    return `상품 "${productName}"을(를) 찾을 수 없습니다.`;
  }
  const productId = product.id;
  return orders.filter(order => order.productId === productId);
};

// 3. 특정 카테고리(categoryName)를 입력받아 해당 카테고리와 관련된 제품, 판매, 수익, 그리고 리뷰 데이터를 처리하고 요약 정보를 반환하는 함수
const getCategorySalesSummary = (categoryName) => {
  const categoryProducts = products.filter(product => product.category === categoryName);

  if (categoryProducts.length === 0) {
    return `카테고리 "${categoryName}"에 해당하는 상품이 없습니다.`;
  }
  const totalSales = categoryProducts.reduce((acc, product) => acc + product.sold, 0);
  const totalRevenue = categoryProducts.reduce((acc, product) => acc + product.price * product.sold, 0);// 3. 리
  const categoryProductIds = categoryProducts.map(product => product.id);
  const categoryReviews = reviews.filter(review => categoryProductIds.includes(review.productId));
  const totalRatings = categoryReviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = categoryReviews.length > 0 ? (totalRatings / categoryReviews.length).toFixed(1) : "평점 없음";
  return {
    카테고리: categoryName,
    총_판매량: totalSales,
    총_수익: totalRevenue,
    평균_평점: averageRating
  };
};

// 4. 제한된 수의 주문 데이터와 총 지출 합계를 계산하는 함수
function processUserOrders(users, orders, products, condition, limit) {
  const filteredOrders = orders.filter(order => {
    const user = users.find(user => user.id === order.userId);
    const product = products.find(product => product.id === order.productId);

    return (
            user &&
            product &&
            condition({
              ...order,
              userName: user.name,
              productName: product.name,
              productPrice: product.price,
            })
    );
  });

  const limitedData = filteredOrders.slice(0, limit).map(order => {
    const user = users.find(user => user.id === order.userId);
    const product = products.find(product => product.id === order.productId);

    return {
      ...order,
      userName: user?.name,
      productName: product?.name,
      productPrice: product?.price,
    };
  });

  const totalSum = limitedData.reduce(
          (sum, order) => sum + order.productPrice * order.quantity,
          0
  );
  return {
    totalSum,
    processedData: limitedData,
  };
}


// 1. 특정 사용자 구매 이력 조회 (예: 사용자 ID 1)
console.time("전체 수행 시간")
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

// 4. 제한된 수의 주문 데이터와 총 지출 합계를 계산하는 함수
console.log("=".repeat(50));
console.log("제한된 수의 주문 데이터와 총 지출 합계를 계산하는 함수");
console.log("=".repeat(50));
const condition = order => order.status === "Completed" && order.quantity > 1;
const result = processUserOrders(users, orders, products, condition, 5);
console.log(result);
console.timeEnd("전체 수행 시간")


// 사용자 데이터를 비동기로 가져오는 함수 (DEFAULT 함수)
const fetchUserById = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find(user => user.id === userId));
    }, 500); // 0.5초 딜레이
  });
};

// 제품 데이터를 비동기로 가져오는 함수 (DEFAULT 함수)
const fetchProductById = async (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === productId));
    }, 500); // 0.5초 딜레이
  });
};

// 비동기를 동기적으로 처리하는 `processUserOrders` 함수
const processUserOrdersAsync = async (condition, limit) => {
  const filteredOrders = [];

  // Step 1: 비동기적으로 주문 데이터 필터링
  for (const order of orders) {
    const user = await fetchUserById(order.userId);
    const product = await fetchProductById(order.productId);

    if (user && product && condition({
      ...order,
      userName: user.name,
      productName: product.name,
      productPrice: product.price
    })) {
      filteredOrders.push({
        ...order,
        userName: user.name,
        productName: product.name,
        productPrice: product.price
      });

      // Step 2: 제한된 수의 데이터만 가져오기
      if (filteredOrders.length === limit) break;
    }
  }

  // Step 3: 제한된 데이터의 총 지출 금액 계산
  const totalSum = filteredOrders.reduce(
          (sum, order) => sum + order.productPrice * order.quantity,
          0
  );

  return {
    totalSum,
    processedData: filteredOrders,
  };
};

(async () => {
  console.time("비동기 함수 실행")
  const condition = order => order.status === "Completed" && order.quantity > 1;
  console.log("비동기적으로 주문 데이터 처리 시작...");
  const result = await processUserOrdersAsync(condition, 5);
  console.log("비동기적으로 처리된 결과:", result);
  console.timeEnd("비동기 함수 실행")
})();



