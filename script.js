document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.textContent;

            if (value === "CE") {
                display.value = ""; // Ekranı tamamen temizle
            } else if (value === "C") {
                display.value = display.value.slice(0, -1); // Son karakteri sil
            } else if (value === "=") {
                try {
                    display.value = eval(display.value.replace("x", "*")); // Çarpma işaretini düzelt
                } catch {
                    display.value = "Hata!";
                }
            } else {
                display.value += value;
            }
        });
    });
});
