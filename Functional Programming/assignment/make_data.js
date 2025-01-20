import { writeFileSync } from 'fs';

// 데이터 생성 함수
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomFromArray = (array) => array[getRandomInt(0, array.length - 1)];

const sampleNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];
const sampleProducts = [
  { name: "Wireless Mouse", category: "Electronics" },
  { name: "Yoga Mat", category: "Fitness" },
  { name: "Coffee Mug", category: "Home" },
  { name: "Desk Lamp", category: "Office" },
  { name: "Backpack", category: "Accessories" }
];
const sampleReviews = [
  "Great product!", "Good quality.", "Not bad.", "Could be better.", "Excellent value for money.",
  "Highly recommend!", "Would buy again.", "Average performance.", "Not worth the price.", "Fantastic!"
];

const generateUsers = (count) => Array.from({ length: count }, (_, i) => ({
  id: i + 1,
  name: getRandomFromArray(sampleNames),
  email: `user${i + 1}@example.com`,
  age: getRandomInt(18, 60),
  gender: getRandomFromArray(["M", "F"]),
  joined: new Date(2020, getRandomInt(0, 11), getRandomInt(1, 28)).toISOString(),
  totalSpent: getRandomInt(100, 1000)
}));

const generateProducts = (count) => Array.from({ length: count }, (_, i) => ({
  id: i + 1,
  name: sampleProducts[i % sampleProducts.length].name,
  category: sampleProducts[i % sampleProducts.length].category,
  price: getRandomInt(10, 500),
  stock: getRandomInt(10, 100),
  sold: getRandomInt(0, 200)
}));

const generateOrders = (userCount, productCount, orderCount) => Array.from({ length: orderCount }, (_, i) => {
  const userId = getRandomInt(1, userCount);
  const productId = getRandomInt(1, productCount);
  const quantity = getRandomInt(1, 5);

  return {
    id: i + 1,
    userId,
    productId,
    quantity,
    orderDate: new Date(2023, getRandomInt(0, 11), getRandomInt(1, 28)).toISOString(),
    status: getRandomFromArray(["Completed", "Pending", "Cancelled", "Refunded"])
  };
});

const generateReviews = (userCount, productCount, reviewCount) => Array.from({ length: reviewCount }, (_, i) => ({
  id: i + 1,
  userId: getRandomInt(1, userCount),
  productId: getRandomInt(1, productCount),
  rating: getRandomInt(1, 5),
  content: getRandomFromArray(sampleReviews),
  date: new Date(2023, getRandomInt(0, 11), getRandomInt(1, 28)).toISOString()
}));

// 데이터 생성
const userCount = 5;
const productCount = 10;
const orderCount = 20;
const reviewCount = 10;

const users = generateUsers(userCount);
const products = generateProducts(productCount);
const orders = generateOrders(userCount, productCount, orderCount);
const reviews = generateReviews(userCount, productCount, reviewCount);

// JavaScript 파일로 저장
const dataFilePath = './shop_data.js';
const fileContent = `
export const users = ${JSON.stringify(users, null, 2)};
export const products = ${JSON.stringify(products, null, 2)};
export const orders = ${JSON.stringify(orders, null, 2)};
export const reviews = ${JSON.stringify(reviews, null, 2)};
`;

writeFileSync(dataFilePath, fileContent, 'utf-8');

// 결과 출력
console.log(`Data has been saved to ${dataFilePath}`);
