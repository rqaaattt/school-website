
const currentLangBtn = document.getElementById('current-lang');
const dropdown = document.getElementById('lang-dropdown');
// Показ или скрытие меню
currentLangBtn.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});
// Перенаправление при выборе языка
dropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const file = e.target.dataset.file;
    window.location.href = file;
  }
});
// Закрытие меню при клике вне
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    dropdown.classList.add('hidden');
  }
});
// Скрытие текущего языка
const currentFile = location.pathname;
const langMap = {
  'index-ru.html': 'Русский',
  'index-kz.html': 'Қазақша',
  'index-en.html': 'English'
};
const current = Object.entries(langMap).find(([file]) =>
  currentFile.includes(file)
);
if (current) {
  const [filename, label] = current;
  currentLangBtn.textContent = label;
  // Удаляем текущий язык из списка
  document.querySelectorAll('#lang-dropdown li').forEach((li) => {
    if (li.dataset.file === filename) {
      li.remove();
    }
  });
}

currentLangBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
  currentLangBtn.classList.toggle("open");
});

dropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const file = e.target.dataset.file;
    window.location.href = file;
  }
});

currentLangBtn.addEventListener("click", () => {
  const isOpen = dropdown.classList.contains("show");
  dropdown.classList.toggle("show", !isOpen);
  currentLangBtn.classList.toggle("open", !isOpen);
});



