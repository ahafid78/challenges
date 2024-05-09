// JavaScript pour l'accordéon FAQS
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const question = item.querySelector(".accordion-question");
  const content = item.querySelector(".accordion-content");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    accordionItems.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".accordion-content").style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
