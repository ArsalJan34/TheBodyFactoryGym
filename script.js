document.querySelectorAll("nav a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show");
}
function sendWhatsApp(planName) {
  const phoneNumber = "923420352902"; // Replace with your WhatsApp number (no + sign)
  const message = `Hello! I’m interested in the ${planName}. Please provide more details.`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}
  const backToTop = document.getElementById("backToTop");


  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Scroll smoothly to top when clicked
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
