const editor = document.getElementById('editor');

const rareWords = ['serendipity', 'petrichor', 'sonder', 'defenestration', 'ephemeral'];
const ambiguousWords = ['bank', 'bark', 'bat', 'bow', 'fair'];

// example paragraph: The bank can guarantee deposits will eventually cover future defenestration costs because it invests in adjustable-rate mortgage securities.

function isRareWord(word) {
    return rareWords.includes(word.toLowerCase());
}

function isAmbiguousWord(word) {
    return ambiguousWords.includes(word.toLowerCase());
}

function updateTextEditor() {
    const text = editor.value;
    const words = text.split(/\s+/);
    const highlightedText = words.map(word => {
        if (isRareWord(word)) {
            return `<span class="rare-word">${word}</span>`;
        } else if (isAmbiguousWord(word)) {
            return `<span class="ambiguous-word">${word}</span>`;
        } else {
            return word;
        }
    }).join(' ');

    editor.innerHTML = highlightedText;
}

editor.addEventListener('input', updateTextEditor);
