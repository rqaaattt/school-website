
  document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".skeleton-wrapper");

    wrappers.forEach(wrapper => {
      const img = wrapper.querySelector("img");
      if (img.complete) {
        wrapper.classList.add("loaded");
      } else {
        img.addEventListener("load", () => {
          wrapper.classList.add("loaded");
        });
      }
    });
  });