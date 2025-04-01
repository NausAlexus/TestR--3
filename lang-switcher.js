document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Обработчик клика на кнопку языка
    langButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        
        // 1. Убираем активный класс у всех кнопок
        langButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 2. Обновляем текст на странице
        document.querySelectorAll('[data-translate]').forEach(el => {
          const translation = el.getAttribute(`data-${lang}`);
          if (translation) {
            el.textContent = translation;
          }
        });
        
        // 3. Сохраняем выбранный язык (опционально)
        localStorage.setItem('selectedLang', lang);
      });
    });
    
    // Загружаем сохранённый язык при загрузке страницы
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (activeBtn) activeBtn.click();
  });