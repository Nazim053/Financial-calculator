 let = summa = prompt('Какую сумму вы хотите получить?', 1000);
 let period = prompt('На сколько месяцев вы хотите взять кредит',12);
 let procent1 = prompt('Процент равен', 8);
 //let persenRatr = 0.2;
let table = document.querySelector('.table');
let str = 
`<table>
<tr>
<th class="m">Долг</th>
<th class="m">Долг на начало периода</th>
<th class="m">Процент</th>
<th class="m">Ежемесячный платеж</th>
</tr>`;

// Аннуитетный кредит;
// Сумма кредита * ежемесячный % ставка /  (1 - (1 / (1 + ежемесячная % ставка)^ период кредита));

let ann = 0; 
//let summa = 1000; // сумма кредита;
//let period = 12; // срок кредита;
let rate = procent1/100; // годовая % ставка;
let monthRate = rate / 12; // месячная % ставка;
let topPart = +(summa * monthRate).toFixed(3); // верхния часть; 
let bottomPart =  +(1 - (1 / Math.pow( 1 + monthRate, period ))).toFixed(3); // нижния  часть;
ann = +(topPart / bottomPart).toFixed(3);  // ежемесячный платеж;
console.log('Аннуитетный кредит '  +  ann)
// Дифферинцированный кредит;

let dif = 0; // считает сумму;
let persent = 0; // %
let remainSumm = summa; // оставшиеся сумма;
let mainDebt = +(summa/period).toFixed(2);  // основной долг;

for ( i=0; i <= period; i++) {
    str += 
    `
    <table>
    <tr >
    <td class="m1">${remainSumm}</td>
    <td class="m1"> ${mainDebt}</td>
    `;
    
    // console.log( 'Долг:' + remainSumm);
    persent = +(remainSumm * monthRate).toFixed(2);
    str += `<td class="m1">${persent}</td>`;
    // console.log( 'Процентная ставка:' + persent);
    remainSumm -= (mainDebt);
    remainSumm = +(remainSumm).toFixed(2);
    dif = persent + mainDebt;
    str += `<td class="m1">${dif}</td></tr>`;
    // console.log('Основной долг:' + mainDebt);
    // console.log('Ежемесячный платеж:' + dif);
}

str += '</table>';
table.innerHTML = str;