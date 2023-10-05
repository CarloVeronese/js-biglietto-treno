// - Chiedere all'utente quanti km vuole percorrere
let userTrainKm
userTrainKm = parseFloat(prompt('Quanti km vuoi percorrere?'))
console.log(userTrainKm)
// - Chiedere all'utente l'età
let userAge
userAge = parseInt(prompt('Quanti anni hai?'))
console.log(userAge)
// - Calcolare lo sconto
//     - calcolare il prezzo base come km x prezzo/km
let standardPrice = 0.21 * userTrainKm
console.log(standardPrice)
//     - calcolare prezzo scontato come prezzo base x (1 - entità sconto)
let discountPerc = 0
if (userAge < 18){
    discountPerc = 0.2
} else if (userAge > 65){
    discountPerc = 0.4
    }
let finalPrice = standardPrice * (1 - discountPerc)
finalPrice = finalPrice.toFixed(2)
console.log(finalPrice)
const priceDomElement = document.getElementById('ticket-price')
priceDomElement.innerHTML = finalPrice