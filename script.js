document.querySelector('.outcome').addEventListener('click', ()=>{
    let distance = document.querySelector('.distance').value;
    let points = document.querySelector('.points').value;
    let pallet = document.querySelector('.pallet').value;
    let money = document.querySelector('.money').value;
    let formula = (27*distance)/12*pallet+(550*points-1100);
    document.querySelector('.result').innerHTML = ('Себестоимость ' + formula +' рублей');
    document.querySelector('.bid').innerHTML = ('Желаемая ставка ' + (formula*1.3) + ' рублей');
    document.querySelector('.proceeds').innerHTML = ('Выручка ' + (money-formula) + ' рублей');
    document.querySelector('.bonus').innerHTML = ('Бонусная часть ' + (money-formula)/100*10 + ' рублей');
})
