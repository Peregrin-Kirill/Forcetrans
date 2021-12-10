document.querySelector('.outcome').addEventListener('click', ()=>{
    let distance = document.querySelector('.distance').value;
    let points = document.querySelector('.points').value;
    let pallet = document.querySelector('.pallet').value;
    let money = document.querySelector('.money').value;
    let formula = (27*distance)/12*pallet+(250*points-500);
    document.querySelector('.result').innerHTML = ('Себестоимость ' + formula +' рублей');
    document.querySelector('.bid').innerHTML = ('Желаемая ставка ' + (formula*1.35 + 550*points) + ' рублей');
    document.querySelector('.proceeds').innerHTML = ('Выручка ' + (money-formula) + ' рублей');
    document.querySelector('.bonus').innerHTML = ('Ставка логиста ' + (money-formula)/100*10 + ' рублей');
    document.querySelector('.money__driver').innerHTML = ('Ставка водителя ' + ((distance * 2) + (points * 250-500)) + ' рублей');
    document.querySelector('.profit').innerHTML = ('Прибыль ' + ((money-formula) - ((money-formula)/100*10))  + ' рублей');
})

document.querySelector('.outcome__gor').addEventListener('click', ()=>{
    let distance__gor = document.querySelector('.distance__gor').value;
    let points__gor = document.querySelector('.points__gor').value;
    let pallet__gor = document.querySelector('.pallet__gor').value;
    let money__gor = document.querySelector('.money__gor').value;
    let formula__gor = (3600 + (27*distance__gor) + (250*points__gor));
    document.querySelector('.result__gor').innerHTML = ('Себестоимость ' + formula__gor +' рублей');
    document.querySelector('.bid__gor').innerHTML = ('Желаемая ставка ' + (formula__gor*1.8 + 550*points__gor) + ' рублей');
    document.querySelector('.proceeds__gor').innerHTML = ('Выручка ' + (money__gor-formula__gor) + ' рублей');
    document.querySelector('.bonus__gor').innerHTML = ('Ставка логиста ' + (money__gor-formula__gor)/100*10 + ' рублей');
    document.querySelector('.money__driver__gor').innerHTML = ('Ставка водителя ' + ((distance__gor * 2) + (points__gor * 250)) + ' рублей');
    document.querySelector('.profit__gor').innerHTML = ('Прибыль ' + ((money__gor-formula__gor) - ((money__gor-formula__gor)/100*10))  + ' рублей');
})
