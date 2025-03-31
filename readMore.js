document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".rummyInfinity-online-button");
    const additionalParagraphs = document.querySelector(".additionalInfinity-paragraphs");

    // Изначально скрываем дополнительные параграфы
    additionalParagraphs.classList.add("hiddenInfinity");

    button.addEventListener("click", function () {
        additionalParagraphs.classList.toggle("hiddenInfinity");
        button.textContent = additionalParagraphs.classList.contains("hiddenInfinity") ? "Read more" : "Hide";
    });
});