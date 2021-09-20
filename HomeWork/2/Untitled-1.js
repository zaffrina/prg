// 1. 
//Перераспределить значения переменных 
//X и Y так, чтобы в X оказалось меньшее 
//из этих значений, а в Y — большее.
function one() {
    let x = +prompt("Введите x");
    let y = +prompt("Введите y"),
        min;
    if (x > y) {
        min = y;
        y = x;
        x = min;
        alert('Перераспределено: х= ' + x + " у= " + y);
    } else {
        alert('х уже меньше у' + y + " " + x);
    }
}
//2
/* Есть три вершины a, b и с. У каждой 
вершина заданы координатами x, y, z как 
целые числа. Нужно определить - является 
ли треугольник с заданными координатами 
прямоугольным.
*/
function two() {
    let ax = +prompt("Введите ax"),
        ay = +prompt("Введите ay"),
        az = +prompt("Введите az"),
        bx = +prompt("Введите bx"),
        by = +prompt("Введите by"),
        bz = +prompt("Введите bz"),
        cx = +prompt("Введите cx"),
        cy = +prompt("Введите cy"),
        cz = +prompt("Введите cz");
    let s1 = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by) + (az - bz) * (az - bz)),
        s2 = Math.sqrt((cx - ax) * (cx - ax) + (cy - ay) * (cy - ay) + (cz - az) * (cz - az)),
        s3 = Math.sqrt((cx - bx) * (cx - bx) + (cy - by) * (cy - by) + (cz - bz) * (cz - bz));
    d1 = s1 * s1;
    d2 = s2 * s2;
    d3 = s3 * s3;
    if ((d1 = d2 + d3) || (d2 = d1 + d3) || (d3 = d1 + d2)) {
        alert(" Треугольник прямоугольный");
    } else alert(" Треугольник не прямоугольный");
}
//3
/*
Дан номер месяца (1 — январь, 
2 — февраль, ...). Вывести название 
соответствующего времени года 
("зима", "весна" и т.д.). 
*/
function three() {
    while (i = 1) {
        let a = +prompt("Введите номер месяца:");
        if (typeof (a) != null && a > 0 && a < 13) {
            switch (a) {
                case 1:
                case 12:
                case 2:
                    alert('Зима');
                    break;
                case 3:
                case 4:
                case 5:
                    alert('Весна');
                    break;
                case 6:
                case 7:
                case 8:
                    alert('Лето');
                    break;
                case 9:
                case 10:
                case 11:
                    alert('Осень');
                    break;
            };
            break;
        } else {
            alert("Неверное число.Введите целое число в диапазоне 1 - 12:");
        }
    }
}

//4
/*
Единицы длины пронумерованы следующим 
образом: 
1 — дециметр, 2 — километр, 
3 — метр, 4 — миллиметр, 5 — сантиметр. 
Дан номер единицы длины и длина 
отрезка L в этих единицах (вещественное 
число). Вывести длину данного отрезка 
в метрах.
*/

function four() {
    let a = +prompt("Введите длинну отрезка:");
    let b = +prompt("Введите единицу длинны:");
    switch (b) {
        case 1:
            alert("Длинна отрезка в метрах: " + a / 10);
            break;
        case 2:
            alert("Длинна отрезка в метрах: " + a * 1000);
            break;
        case 3:
            alert("Длинна отрезка в метрах: " + a);
            break;
        case 4:
            alert("Длинна отрезка в метрах: " + a / 1000);
            break;
        case 5:
            alert("Длинна отрезка в метрах: " + a / 100);
            break;
        default:
            alert("Ошибка! Не найдена единица измерения!");
            break;
    }

}
//6*
/*. Пользователь вводит год, необходимо определить 
является ли он високосным. Примеры данных для тестирования:
1) '2000' – високосный год
2) '1800' – не високосный год */
function five() {
    let a = +prompt("Введите год");
    if ((a % 400) == 0) {
        alert("Високосный год");
    }
    else alert("Не високосный год");

}

let i = 0;
//Удобный вход в задания 
while (i = 1) {
    let a = +prompt("Какое задание вам нужно?5 - это 6*");
    if ((typeof (a)) != null && a != '' && a > 0 && a < 6) {
        i = 1;
        switch (a) {
            case 1:
                one();
                break;
            case 2:
                two();
                break;
            case 3:
                three();
                break;
            case 4:
                four();
                break;
            case 5:
                five();
                break;
        }

    } else {
        alert("Не верное число.Введите целое число в диапазоне 1 - 5:");
    }
}