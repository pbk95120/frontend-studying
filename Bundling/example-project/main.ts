import { emojis } from "./emoji";
import { format } from "date-fns"; // date-fns에서 format 함수만 가져와요

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  // date-fns 모듈에서 가져온 format 함수를 호출해요
  const formattedDate = format(today, "MMMM d, yyyy");
  document.getElementById("dateDisplay")!.textContent = formattedDate; // 타입 문제를 임시로 해결해요

  showRandomEmoji();
});

function showRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];

  document.getElementById("emojiDisplay")!.textContent = selectedEmoji.icon; // 타입 문제를 임시로 해결해요
  document.getElementById("emojiName")!.textContent = selectedEmoji.name; // 타입 문제를 임시로 해결해요
}
