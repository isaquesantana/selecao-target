let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = [numA, numB];

for (let i = 1; i <= 18; i++) {
    numC = numA + numB;

    fibonacci.push(numC);

    numA = numB;
    numB = numC;
};

console.log(fibonacci);

document.querySelector('button').addEventListener('click', () => {
    let numToCheck = parseInt(document.querySelector('input').value);
    verification(numToCheck);
});


function verification(numToCheck) {
    if (fibonacci.includes(numToCheck)) {
        console.log(`O numero ${numToCheck} pertence a sequencia de fibonacci!`);
    } else {
        console.log(`O numero ${numToCheck} não pertence a sequencia de fibonacci!`)
    };
};