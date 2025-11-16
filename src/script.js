const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const error = document.getElementById("error");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => calculate(button.dataset.action));
});

function calculate(action) {
    error.textContent = ""; // очищаємо попередню помилку

    const a = num1.value.trim();
    const b = num2.value.trim();

    // Перевірка на порожні поля
    if (a === "" || b === "") {
        error.textContent = "❗ Введіть обидва числа!";
        return;
    }

    // Перевірка на коректні числа
    if (isNaN(a) || isNaN(b)) {
        error.textContent = "❗ Дані повинні бути числами!";
        return;
    }

    let x = Number(a);
    let y = Number(b);
    let res;

    switch (action) {
        case "add": res = x + y; break;
        case "sub": res = x - y; break;
        case "mul": res = x * y; break;
        case "div":
            if (y === 0) {
                error.textContent = "❗ На нуль ділити не можна!";
                return;
            }
            res = x / y;
            break;
    }

    // Округлення до сотих, якщо не ціле число
    if (!Number.isInteger(res)) {
        res = res.toFixed(2);
    }

    result.textContent = `Результат: ${res}`;
}
