// Функция для генерации массива случайных чисел
function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        // Генерируем случайное число от 0 до 100
        const randomNumber = Math.random() * 100;
        array.push(randomNumber);
    }
    return array;
}
 
// Функция для вычисления максимального, минимального и среднего значения
function calculateStats(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const sum = array.reduce((acc, num) => acc + num, 0);
    const average = sum / array.length;

    return { max, min, average };
}

// Основной код
const size = 10; // Размер массива
const randomArray = generateRandomArray(size);
const stats = calculateStats(randomArray);

console.log('Сгенерированный массив:', randomArray);
console.log('Максимальное значение:', stats.max);
console.log('Минимальное значение:', stats.min);
console.log('Среднее значение:', stats.average);
