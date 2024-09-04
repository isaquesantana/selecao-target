const text = 'Amanha sera um dia ensolarado';

const occurrences = text.match(/[A,a]/gi);

console.log(`O numero de ocorrencias de 'a' na frase: ${occurrences.length}`);
