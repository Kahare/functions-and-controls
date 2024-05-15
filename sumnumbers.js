function sumCommaNumbers(input) {
    if (!input) return 0; 
    const numbers = input.split(',').map(Number); 
    const sum = numbers.reduce((acc, current) => acc + (isNaN(current) ? 0 : current), 0);

    return sum;
}

console.log(sumCommaNumbers("10,21,32,43,54")); 
console.log(sumCommaNumbers("15,24,a,42,51")); 
console.log(sumCommaNumbers("")); 