const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');

textArea.addEventListener('input', updateWordCount);

function updateWordCount() {
  const text = textArea.value.trim();
  const words = text.split(/\s+/).length;
  wordCountDisplay.textContent = 'Word Count: ' + words;
}
