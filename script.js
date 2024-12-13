function showResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.classList.add('active');
}