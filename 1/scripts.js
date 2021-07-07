/* Exercício 01 - Crie um programa que escreva os números de 1 a 100 (um número em cada linha).
Para cada número múltiplo de 3, escreva “Fizz” em vez do número.
Para cada número múltiplo de 5, escreva “Buzz” ao invés do número.
Para números que são múltiplos de 3 e 5, escreva “FizzBuzz” ao invés do número.*/


// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Se não for Divisível por 3 ou 5 => Entrada
// Se não for um Número => 'Não é um número'



for(let i = 1; i <= 100; i ++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i);
    }
       
}


