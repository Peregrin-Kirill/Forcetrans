document.querySelector('.outcome').addEventListener('click', ()=>{
    let a = document.querySelector('.distance').value;
    let b = document.querySelector('.points').value;
    let c = document.querySelector('.pallet').value;
    let d = (27*a)/12*c+(550*b-1100);
    document.querySelector('.result').innerHTML = ('Себестоимость ' + d +' рублей');
    document.querySelector('.bid').innerHTML = ('Желаемая ставка ' + (d*1.3) + ' рублей');
    document.querySelector('.bonus').innerHTML = ('Бонусная часть ' + ((d*1.3) - d)/100*10 + ' рублей');
})
