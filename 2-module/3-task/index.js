let calculator = {
  read(a,b){
    calculator.a = a;
    calculator.b = b;
    },
  sum(){
    return Number(calculator.a) + Number(calculator.b);
    },
  mul(){
    return Number(calculator.a) * Number(calculator.b);
    },
    
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
