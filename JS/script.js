const flight = document.querySelector('#flight');
const chbox = document.querySelector('#special');
const sity = document.querySelector('#sity');
const clear = document.querySelector('#clear');



flight.addEventListener ('click', function(){
    const distance = document.querySelector('#distance').value;
    const points = document.querySelector('#points').value;
    const pallet = document.querySelector('#pallet').value;
    document.querySelector('.cost__price').innerHTML = ('Себестоимость  ' + ((distance * 28) + (points * 250 - 500)) + ' рублей')
    if (chbox.checked) {
    document.querySelector('.вid').innerHTML = ('Желаемая ставка  ' + (((distance * 35 - distance * 28)/30)*pallet).toFixed(0) + ' рублей')
    } else {
    document.querySelector('.вid').innerHTML = ('Желаемая ставка  ' + (distance * 28 + ((distance * 35 - distance * 28)/30)*pallet).toFixed(0) + ' рублей')
    }
})



sity.addEventListener ('click', function(){
    const distance = document.querySelector('#distance').value;
    const points = document.querySelector('#points').value;
    document.querySelector('.cost__price').innerHTML = ('Себестоимость  ' + ((distance * 28 ) + ( points * 250)) + ' рублей')
    document.querySelector('.вid').innerHTML = ('Желаемая ставка  ' + ((distance * 45 ) + ( points * 500)) + ' рублей')
})



clear.addEventListener ('click', function(){
    const distance = document.querySelector('#distance').value;
    const points = document.querySelector('#points').value;
    const pallet = document.querySelector('#pallet').value;
    document.querySelector('.cost__price').innerHTML = ('');
    document.querySelector('.вid').innerHTML = ('');
})
