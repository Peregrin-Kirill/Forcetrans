// let distance = prompt(['Расстояние']);
// let stops = prompt(['Остановки']);
// let volume = prompt(['Колличество палет']);
// alert((27*distance)/12*volume+(550*stops-2));



document.querySelector('.outcome').addEventListener('click', ()=>{
    let a = document.querySelector('.distance').value;
    let b = document.querySelector('.points').value;
    let c = document.querySelector('.pallet').value;
    document.querySelector('.result').innerHTML = ((27*a)/12*c+(550*b-1100));
})
