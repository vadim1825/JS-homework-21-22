//Возводит число x в степень n

var pow = function (x, n) {

    var result = x;

    for (var i = 1; i < n; i++) {

        result *= x;
    };

    return result;
}

var n;

var x;

//Проверяет степень на натуральность
//Выводит результат вычислений в консоль

    if (n <= 1) {

        alert('Степень ' + n +
            'не поддерживается, введите целую степень, большую 1');

    } else {

        console.log(pow(x, n));

    };

module.exports = pow;
//Принимает от пользователя значения числа и степени

var x = prompt("введите целое число большее, меньшее или равное 0", '');
var n = prompt("Введите степень числа", '');

