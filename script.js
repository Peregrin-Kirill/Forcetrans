document.querySelector('.outcome').addEventListener('click', ()=>{
    let distance = document.querySelector('.distance').value;
    let points = document.querySelector('.points').value;
    let pallet = document.querySelector('.pallet').value;
    let money = document.querySelector('.money').value;
    let formula = (1100+(27*distance)/12*pallet+(550*points-1100));
    document.querySelector('.result').innerHTML = ('Себестоимость ' + formula +' рублей');
    document.querySelector('.bid').innerHTML = ('Желаемая ставка ' + (formula*1.3) + ' рублей');
    document.querySelector('.proceeds').innerHTML = ('Выручка ' + (money-formula) + ' рублей');
    document.querySelector('.bonus').innerHTML = ('Бонусная часть ' + (money-formula)/100*10 + ' рублей');
})

document.querySelector('.outcome__gor').addEventListener('click', ()=>{
    let distance__gor = document.querySelector('.distance__gor').value;
    let points__gor = document.querySelector('.points__gor').value;
    let pallet__gor = document.querySelector('.pallet__gor').value;
    let money__gor = document.querySelector('.money__gor').value;
    let formula__gor = (3600 + (27*distance__gor) + (550*points__gor));
    document.querySelector('.result__gor').innerHTML = ('Себестоимость ' + formula__gor +' рублей');
    document.querySelector('.bid__gor').innerHTML = ('Желаемая ставка ' + (formula__gor*1.8) + ' рублей');
    document.querySelector('.proceeds__gor').innerHTML = ('Выручка ' + (money__gor-formula__gor) + ' рублей');
    document.querySelector('.bonus__gor').innerHTML = ('Бонусная часть ' + (money__gor-formula__gor)/100*10 + ' рублей');
})
