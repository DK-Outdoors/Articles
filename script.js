document.addEventListener("DOMContentLoaded", function() {
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "index.html") {
    currentPage = "index.html";
  }

  const navLinks = document.querySelectorAll("nav ul li a");
  
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage || (currentPage === "index.html" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });
});
