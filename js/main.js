function formatFio(input) {
  // Удаляем все символы, кроме букв, пробелов и одной точки (для отчества)
  input.value = input.value.replace(/[^a-zA-Zа-яА-Я\s.]/g, "");
}

function allowOnlyNumbers(event) {
  // Получаем введённый символ
  let char = event.key;

  // Проверяем, является ли введённый символ цифрой
  if (/\d/.test(char)) {
    return true; // Разрешаем ввод
  } else {
    event.preventDefault(); // Запрещаем ввод других символов
  }
}

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById('close-popup-btn');

    // Добавляем обработчик события клика для каждого элемента с классом 'item'
    items.forEach((item) => {
        item.addEventListener("click", function () {
            items.forEach(i => i.classList.remove("show")); // Удаляем класс 'show' у всех элементов
            item.classList.add("show"); // Добавляем класс 'show' к текущему элементу
            popup.classList.add("show"); // Добавляем класс 'show' для отображения popup
        });
    });

    // Добавляем обработчик события клика для закрытия popup при клике на фон
    popup.addEventListener("click", function (e) {
        if (e.target === this) {
            popup.classList.remove("show"); // Удаляем класс 'show' для скрытия popup
            items.forEach(i => i.classList.remove("show")); // Удаляем класс 'show' у всех элементов
        }
    });

    // Добавляем обработчик события клика для кнопки закрытия
    closePopupBtn.addEventListener('click', function() {
        popup.classList.remove("show"); // Удаляем класс 'show' для скрытия popup
        items.forEach(i => i.classList.remove("show")); // Удаляем класс 'show' у всех элементов
    });
});
