const toggleAllArticles = (event) => {
  const button = event.target.closest("[data-all-articles-toggle]");
  if (!button) {
    return;
  }

  const section = button.closest("[data-all-articles-section]");
  if (!section) {
    return;
  }

  const hiddenItems = section.querySelectorAll("[data-all-article][data-initial-hidden=\"true\"]");
  const expanded = button.getAttribute("aria-expanded") === "true";

  hiddenItems.forEach((item) => {
    item.classList.toggle("hidden", expanded);
  });

  button.textContent = expanded ? "Show more" : "Show less";
  button.setAttribute("aria-expanded", expanded ? "false" : "true");
};

document.addEventListener("click", toggleAllArticles);
