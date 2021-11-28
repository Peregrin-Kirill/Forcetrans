document.querySelector('.outcome').addEventListener('click', ()=>{
    let a = document.querySelector('.distance').value;
    let b = document.querySelector('.points').value;
    let c = document.querySelector('.pallet').value;
    document.querySelector('.result').innerHTML = ((27*a)/12*c+(550*b-1100)+' рублей');
})
