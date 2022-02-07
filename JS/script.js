const flight = document.querySelector('#flight');

flight.addEventListener ('click', function(){
    const distance = document.querySelector('#distance').value;
    const points = document.querySelector('#points').value;
    const pallet = document.querySelector('#pallet').value;
    document.querySelector('.cost__price').innerHTML = ('Себестоимость  ' + ((distance * 27) + (points * 250 - 500)) + ' рублей')
    document.querySelector('.вid').innerHTML = ('Желаемая ставка  ' + ((distance * 35) + (points * 500 - 500)) + ' рублей')
})

const sity = document.querySelector('#sity');

sity.addEventListener ('click', function(){
    const distance = document.querySelector('#distance').value;
    const points = document.querySelector('#points').value;
    const pallet = document.querySelector('#pallet').value;
    document.querySelector('.cost__price').innerHTML = ('Себестоимость  ' + ((distance * 27 ) + ( points * 250)) + ' рублей')
    document.querySelector('.вid').innerHTML = ('Желаемая ставка  ' + ((distance * 35 ) + ( points * 500)) + ' рублей')
})


const clear = document.querySelector('#clear');

clear.addEventListener ('click', function(){
    const distance = document.querySelector('#distance').value;
    const points = document.querySelector('#points').value;
    const pallet = document.querySelector('#pallet').value;
    document.querySelector('.cost__price').innerHTML = ('');
    document.querySelector('.вid').innerHTML = ('');
})