// @ts-nocheck
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('order-button').addEventListener('click', (e) => {
        const pizzaType = document.getElementById('pizza-type').value
        const pizzaCount = document.getElementById('pizza-count').value

        if (!pizzaType || !pizzaCount || pizzaType === 'Válasszon egyet!' || pizzaCount === NaN) {
            alert('Válasszon ki egy pizzát a listából és írja be a darabszámot!')
            return
        }

        const pizzaPrice = {
            "Nápolyi pizza": 3200,
            "Bolognai pizza": 3000,
            "Songoku pizza": 2800,
            "Hawaii pizza": 2900
        }[pizzaType] * pizzaCount

        const orderID = Math.round(Math.random() * 100)

        document.getElementById('order-id').innerHTML = orderID
        document.getElementById('order-price').innerHTML = `${pizzaPrice} Ft`
    })
})