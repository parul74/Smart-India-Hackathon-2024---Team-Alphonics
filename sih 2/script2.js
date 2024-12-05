// // Toggle Sidebar
// const menuBtn = document.querySelector(".menu-btn");
// const sidebar = document.querySelector(".sidebar");

// menuBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// });

// Toggle Sidebar Visibility
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active"); // Add/remove the "active" class
});
