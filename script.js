const editor = document.getElementById('editor');

const rareWords = ['serendipity', 'petrichor', 'sonder', 'defenestration', 'ephemeral'];
const ambiguousWords = ['bank', 'bark', 'bat', 'bow', 'fair'];

editor.addEventListener('input', () => {
    const text = editor.value;
    const words = text.split(/\s+/);
    const highlightedText = words.map(word => {
        if (rareWords.includes(word.toLowerCase())) {
            return `<span class="rare-word">${word}</span>`;
        } else if (ambiguousWords.includes(word.toLowerCase())) {
            return `<span class="ambiguous-word">${word}</span>`;
        } else {
            return word;
        }
    }).join(' ');

    editor.innerHTML = highlightedText;
});
