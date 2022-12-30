// 2/4 - Fundamentos Aritméticos em JavaScript 


// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

const lines = gets();
const salary = Number(lines);
let percent;

//TODO: Complete os espaços em branco com uma possível solução para o problema:

if ( salary <= 400 ) {
  percent = 15;
} else if ( salary >= 400.01 && salary <= 800.00 ) {
  percent = 12;
} else if ( salary >= 800.01 && salary <= 1200.00 ) {
  percent = 10;
} else if ( salary >= 1200.00 && salary <= 2000.00 ) {
  percent = 7;
} else { 
  percent = 4;
}

const reajust = ( salary * percent ) / 100;
const newSalary = ( salary + reajust);

print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");

// Teste #1
//Dado de entrada: 9230.01
//Saída esperada:
//Novo salario: 9599.21
//Reajuste ganho: 369.20
//Em percentual: 4 %

//Sua Saída:
//Novo salario: 9599.21
//Reajuste ganho: 369.20
//Em percentual: 4 %


//Teste #2
//Dado de entrada: 10000.99
//Saída esperada:
//Novo salario: 10401.03
//Reajuste ganho: 400.04
//Em percentual: 4 %

//Sua Saída:
//Novo salario: 10401.03
//Reajuste ganho: 400.04
//Em percentual: 4 %
 

//Teste #3
//Dado de entrada: 2000.00
//Saída esperada:
//Novo salario: 2140.00
//Reajuste ganho: 140.00
//Em percentual: 7 %

//Sua Saída:
//Novo salario: 2140.00
//Reajuste ganho: 140.00
//Em percentual: 7 %