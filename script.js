let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const appSection = document.getElementById("applicationCard");
console.log(appSection.children.length);

let interviewPart = [];
let rejectedPart = [];

const mainContainer = document.querySelector("main");

function totalCount() {
  total.innerText = appSection.children.length;
  interviewCount.innerText = interviewPart.length;
  rejectedCount.innerText = rejectedPart.length;
}
totalCount();

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function toggleStyle(id) {
  allFilterBtn.classList.add("bg-gray-300", "text-black");
  interviewBtn.classList.add("bg-gray-300", "text-black");
  rejectedBtn.classList.add("bg-gray-300", "text-black");

  allFilterBtn.classList.remove("bg-black", "text-white");
  interviewBtn.classList.remove("bg-black", "text-white");
  rejectedBtn.classList.remove("bg-black", "text-white");

  const selected = document.getElementById(id);
  console.log(selected);
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-black", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  console.log(event.target.parentNode.parentNode);
});
