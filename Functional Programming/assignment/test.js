import { go, take, map, filter, reduce } from "fxjs";
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";

const delay = (a, name) =>
        new Promise((resolve) => {
          console.log(`${name}: ${a}`);
          setTimeout(() => resolve(a), 2000);
        });

console.time("Processing Time");
// 즉시, 지연, Promise, 병렬 조합
go(
        [1, 2, 3, 4, 5, 6, 7, 8], // 입력 데이터
        L.map((a) => delay(a * a, "map 1")), // 각 값을 병렬로 제곱하고 500ms 딜레이
        L.filter((a) => delay(a % 2, "filter 2")), // 홀수 값만 필터링 (게으른 평가)
        C.map((a) => delay(a + 1, "map 3")), // 각 값을 병렬로 +1하고 500ms 딜레이
        take(3), // 상위 3개의 값만 가져오기
        // reduce((a, b) => {const sum =  a + b; console.log(`intermediate sum : ${sum}`); return sum;}),
        (result) => {
          console.log("Result:", result); // 최종 결과 출력
          console.timeEnd("Processing Time"); // 처리 시간 출력
        }
);
