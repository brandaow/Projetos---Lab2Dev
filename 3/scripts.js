/* 3. Escreva apenas o nome do produto mais caro de cada categoria.
4. Escreva o nome e o valor de todos os produtos da categoria “eletrodomestico”, aplicando
um desconto de 10% aos produtos que custam mais de $1000.00, 7% aos produtos que
custam mais de $500.00 e 5% aos produtos que custam menos de $500.00.
5. Escreva a média dos valores dos produtos de acordo com suas respectivas categorias.
Ex: eletrodomestico: $ xxx.xx
smartphone: $ xxx.xx
moveis: $ xxx.xx */

const array = [{ produto: "geladeira", categoria: "eletrodomestico", valor: 1432.67 },
            { produto: "fogao", categoria: "eletrodomestico", valor: 852.11 },
            { produto: "microondas", categoria: "eletrodomestico", valor: 933.42 },
            { produto: "liquidificador", categoria: "eletrodomestico", valor: 187.24 },
            { produto: "xiaomi", categoria: "smartphone", valor: 1375.66 },
            { produto: "iphone", categoria: "smartphone", valor: 8432.92 },
            { produto: "samsung", categoria: "smartphone", valor: 4221.44 },
            { produto: "lg", categoria: "smartphone", valor: 1224.88 },
            { produto: "sofa", categoria: "moveis", valor: 3745.61 },
            { produto: "mesa", categoria: "moveis", valor: 3111.82 },
            { produto: "cadeira", categoria: "moveis", valor: 329.41 }

];

let categories = array
    .map((item) => item.categoria)     // mapeia apenas os valores das categorias
    .filter((cat, pos) => array.findIndex(item => item.categoria === cat) === pos)     // filtra os valores duplicados

let products = categories.map(cat => array.filter(item => item.categoria === cat))     // mapeia os produtos por categoria em arrays separadas

let expansives = products.map(items => (items.map(item => item.valor)).reduce((a, b) => Math.max(a, b))) // obtem os produtos mais caros 

console.log("3- Mais caros:")
categories.map((item, pos) => console.log(item + ": R$" + expansives[pos]))
console.log('')

console.log("4- Eletrodomesticos:")
array
    .filter(item => item.categoria === 'eletrodomestico')   // filtra todos os produtos da categoria eletrodomestico
    .map(item => console.log(item.produto + ": R$", + item.valor * (item.valor > 1000 ? 0.90 : (item.valor > 500 ? 0.93 : 0.95))))    // mapeia cada produto, printando seu nome e seu valor aplicado o desconto
console.log('')

console.log("5- Média:")
products.map((items, pos) => console.log(categories[pos] + ": R$" + items.reduce((ac, cr) => ac + cr.valor, 0) / items.length))
console.log('')