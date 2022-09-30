/* let a = prompt('pls enter a?', '');
switch (a){
    case '0':
        alert('0');
        break;
    case '1':
        alert('1');
        break;
    case '2':
    case '3':
        alert('2, 3');
        break;
    default:
        alert('unknown value ' + a);
} */

/* let a = +prompt('Pls enter A?', '');
if (a === 0) {
  alert(0);
}
if (a === 1) {
  alert(1);
}
if (a === 2 || a === 3) {
  alert('2, 3');
} */
/* // Задача. Переписать код на if else
let browser; //0,1,2,3,4
switch (browser) {
  case 'IE':
    alert('О, да у вас IE!');
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Браузер норм!');
    break;
  default:
    alert('Кто здесь ?');
} */

/* let browser = prompt('input your browser');
if(browser === 'IE'){
    alert('О, да у вас IE!');
}
if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert('Браузер норм!');
}
else{
    alert('Кто здесь ?');
} */

// Задача. Переписать if..else с использованием нескольких операторов '?'
/* let message;
let login = prompt('Input login');
if (login == 'Сотрудник' ? 'Привет' : 'poka') {
  message = 'Привет';
  alert(message);
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
 */

// Задача. 
// Спросить у пользователя ввести число от 0 до 59 (включительно) и значение сохранить в переменной min.
//  Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).


/* let min = prompt('Input number from 0 to 59'); */
/* if (min <= 15){
    alert('number in first half');
}
else if (min >= 15 & min <= 30) {
    alert('number in second half');
}
else if (min >= 30 & min <= 45) {
    alert('number in third half');
}
else if (min >= 45 & min <= 59) {
    alert('number in fourth half');
}
else{
    alert('null');
}
 */
// Задача. При помощи цикла for выведите чётные числа от 2 до 13.

/* for(i=2; i<=13; i++){
    if(i%2){
        continue;
    }
    console.log(i);
} */

/* Задача. Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
 либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа.
Предусматривать обработку нечисловых строк в этой задаче необязательно. */


/* while(true){
    let a = prompt('Введите число больше 100', '');
    if(a > 100 || a == null) break;
}
 */

/* Задача. Спросить у пользователя ввести строку чисел, например, '12345'. 
Проверьте, что первым тремя символами этой строки являются цифры 1, 2 и 3. 
Если это так - выведите 'Да', в противном случае выведите 'Нет'. */

let numbers = prompt('Ввдите строчку чмсел ');
if(numbers[0] == 1 && numbers[1] == 2 && numbers[2] == 3){
    alert('Да')
}
else{
    alert('Нет');
}