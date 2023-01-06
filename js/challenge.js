const counterElement = document.getElementById("counter");
const increase = document.getElementById("plus");
const decrease = document.getElementById("minus");
const pause = document.getElementById("pause");
const like = document.getElementById("heart");
const comments = document.getElementById("list");
const commentForm = document.getElementById("comment-form");
const likeList = document.getElementById("likes");
let count = 0;

//counter code
const counterInterval = setInterval(() => {
  count++;
  counterElement.innerHTML = count;
}, 1000);
//manual increment
increase.addEventListener("click", () => {
  count++;
  counterElement.innerHTML = count;
});
//manual decrement
decrease.addEventListener("click", () => {
  count--;
  counterElement.innerHTML = count;
});
//like button
like.addEventListener("click", () => {
    let likeCount = 0;
    likeCount++;
    const likedItem = document.createElement("li");
    let likes =`${counterElement.innerHTML} has been liked ${likeCount} times`;
    likedItem.innerHTML = likes;
    likeList.appendChild(likedItem);
});
//pause
let isPlaying = false;
pause.addEventListener("click", () => {
    if (isPlaying) {
        clearInterval(counterInterval);
        pause.textContent = false;
        isPlaying = true;}
});