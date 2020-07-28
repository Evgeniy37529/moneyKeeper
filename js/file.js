let open = document.getElementById('start'),
    budgetVal = document.querySelector ('.budget-value'),
    daybudgetVal = document.querySelector ('.daybudget-value'),
    levelVal = document.querySelector ('.level-value'),
    expensesVal = document.querySelector ('.expenses-value'),
    optionalexpensesVal = document.querySelector ('.optionalexpenses-value'),
    incomeVal = document.querySelector ('.income-value'),
    monthsavingsVal = document.querySelector ('.monthsavings-value'),
    yearsavingsVal = document.querySelector ('.yearsavings-value'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector ('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    btn = document.getElementsByTagName ('button'),
    expenses = document.getElementsByClassName ('expenses-item'),
    dayValue = document.querySelector('.day-value'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
    
let money, time;

open.addEventListener('click', function() {
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt ('Ваш бюджет на месяц?', '');
    while(isNaN(money) || money == "" || money == null) {
    money = +prompt ('Ваш бюджет на месяц?', '');
}
    obj.money = money;
    obj.timeData = time;
    budgetVal.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
btn[0].addEventListener('click' , function(){
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        let questOne = expenses[i].value;
            questTwo = expenses[++i].value;
         
         if ( (typeof(questOne))==='string' && (typeof(questOne)) != null && (typeof(questTwo)) != null
            && questOne != '' && questTwo != '' && questOne.length < 50  ) {
            obj.expenses [questOne] = questTwo;
            sum += +questTwo
        } else  {
          i = i - 1;
        }
    }
    expensesVal.textContent = sum;
})
btn[1].addEventListener('click' , function(){
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let questOpt = optionalexpensesItem[i].value;
        obj.optionalExpenses[i] = questOpt;
        optionalexpensesVal.textContent += obj.optionalExpenses[i] + ' ';

    }

});

btn[2].addEventListener('click' , function(){
if(obj.money !=undefined){
    obj.moneyPerDay = (money/30).toFixed();
    daybudgetVal.textContent = obj.moneyPerDay;
    if (obj.moneyPerDay < 100) {
        levelVal.textContent = 'Минимальный уровень достатка';
    } else if (obj.moneyPerDay > 100 && obj.moneyPerDay < 2000){
        levelVal.textContent = 'Средний уровень достатка';
    } else if (obj.moneyPerDay > 2000) {
        levelVal.textContent = 'Высокий уровень достатка';
    }else  levelVal.textContent = 'Ошибка';
}else{
    daybudgetVal.textContent = 'Произошла ошибка';
} 
});

incomeItem.addEventListener('change', function(){
    let items = incomeItem.value;
    obj.income = items.split(', ');
    incomeVal.textContent = obj.income;
});

checkSavings.addEventListener('click', function(){
    if (obj.savings == true){
        obj.savings = false;
    }else{
        obj.savings = true;
    }
});

sumValue.addEventListener('input', function(){
if (obj.savings == true){
    let sum =+ sumValue.value,
        percent = +percentValue.value;
        obj.monthIncome = sum/100/12*percent;
        obj.yearIncome = sum/100*percent;
        monthsavingsVal.textContent = obj.monthIncome.toFixed(1);
        yearsavingsVal.textContent = obj.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (obj.savings == true){
        let sum =+ sumValue.value,
        percent = +percentValue.value;
        obj.monthIncome = sum/100/12*percent;
        obj.yearIncome = sum/100*percent;
        monthsavingsVal.textContent = obj.monthIncome.toFixed(1);
        yearsavingsVal.textContent = obj.yearIncome.toFixed(1);    
    }
    });

let obj = {
money,
timeData: time,
expenses: {},
optionalExpenses: {},
income : [],
savings : false,
};
 


/*let questOne = prompt ('Введите обязательную статью расходов в этом месяце', '');
let questTwo = prompt ('Во сколько обойдется?','');
obj.expenses[questOne] = questTwo;

let questThree = prompt ('Введите обязательную статью расходов в этом месяце', '');
let questFour = prompt ('Во сколько обойдется?','');
obj.expenses[questThree] = questFour;
alert ('Бюджет на 1 день :' +  (money/30));*/


