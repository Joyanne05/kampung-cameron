//Preview for products
function togglePopup1() {
  document.getElementById("popup_1").classList.toggle("active");
}

function togglePopup2() {
  document.getElementById("popup_2").classList.toggle("active");
}

// Hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu_links");
  const icon = document.querySelector(".hamburger_icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function category_details(){
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
      category.addEventListener("click", () => {
          category.classList.toggle("active");
      });
  });
}

//Popup box for bulk order name
function togglePopup3() {
  document.getElementById("popup_3").classList.toggle("active");
}
