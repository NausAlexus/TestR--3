document.addEventListener('DOMContentLoaded', function() {
  // Получаем все кнопки переключения языка
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Функция для изменения языка
  function changeLanguage(lang) {
    // Устанавливаем активную кнопку
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Обновляем все тексты на странице
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.dataset.translate;
      element.textContent = translations[lang][key] || translations['en'][key];
    });

    // Обновляем placeholder для полей ввода
    document.querySelectorAll('[data-translate-placeholder]').forEach(input => {
      const key = input.dataset.translatePlaceholder;
      input.placeholder = translations[lang][key] || translations['en'][key];
    });
    
    // Сохраняем выбор языка в localStorage
    localStorage.setItem('preferredLanguage', lang);
  }
  
  // Обработчики кликов для кнопок языка
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.dataset.lang;
      changeLanguage(lang);
    });
  });
  
  // Проверяем сохраненный язык или язык браузера
  const savedLanguage = localStorage.getItem('preferredLanguage');
  const browserLanguage = navigator.language.split('-')[0];
  const defaultLanguage = savedLanguage || (browserLanguage === 'hi' ? 'hi' : 'en');
  
  // Устанавливаем язык по умолчанию
  changeLanguage(defaultLanguage);
});