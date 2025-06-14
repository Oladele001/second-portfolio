// const circle = document.getElementById('circle');
// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// circle.addEventListener('mousedown', function(e) {
//   isDragging = true;
//   offsetX = e.clientX - circle.offsetLeft;
//   offsetY = e.clientY - circle.offsetTop;
// });

// document.addEventListener('mousemove', function(e) {
//   if (isDragging) {
//     circle.style.left = (e.clientX - offsetX) + 'px';
//     circle.style.top = (e.clientY - offsetY) + 'px';
//   }
// });

// document.addEventListener('mouseup', function() {
//   isDragging = false;
// });

const FullName = document.getElementById("FullName");
const Email = document.getElementById("Email");
const Subject = document.getElementById("Subject");
const Message = document.getElementById("Message");

const Submit = () => {
  if (
    FullName.value === "" ||
    Email.value === "" ||
    Subject.value === "" ||
    Message.value === ""
  ) {
    alert("FILL THE EMPTY SPACE 🥷");
  } else {
    alert("WELL DONE 😎")
      FullName.value = "",
      Email.value = "",
      Subject.value = "",
      Message.value = "" 
  }
};

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const themeBox = document.getElementById("themeBox");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {
  // Toggle theme styles
  themeBox.classList.toggle("bg-white");
  themeBox.classList.toggle("bg-black");
  themeBox.classList.toggle("text-black");
  themeBox.classList.toggle("text-white");

  // Change icon
  const current = toggleIcon.getAttribute("data-lucide");
  const newIcon = current === "moon" ? "sun" : "moon";
  toggleIcon.setAttribute("data-lucide", newIcon);

  // Re-render the new icon
  lucide.createIcons();
});

// Initial render
lucide.createIcons();
