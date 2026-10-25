document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const type = (formData.get("type") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Photography inquiry: ${type || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project Type: ${type || "General"}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:kphotography.du@gmail.com?subject=${subject}&body=${body}`;
  });
});