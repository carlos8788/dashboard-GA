
export function createChart(arr) {
    const products = arr.map(product => product.nombre);
    const stocks = arr.map(product => product.stock);
    console.log(products, stocks)
    const data = {
        labels: products,
        datasets: [{
            label: 'Stocks de los productos',
            data: stocks,
            backgroundColor: [
                'rgb(255, 99, 132)',   // Rosado brillante
                'rgb(54, 162, 235)',   // Azul cielo
                'rgb(255, 205, 86)',   // Amarillo claro
                'rgb(75, 192, 192)',   // Turquesa
                'rgb(153, 102, 255)',  // Violeta
                'rgb(255, 159, 64)',   // Naranja
                'rgb(199, 199, 199)',  // Gris claro
                'rgb(233, 30, 99)',    // Fucsia
                'rgb(32, 201, 151)',   // Verde agua
                'rgb(255, 87, 34)',    // Rojo anaranjado
                'rgb(126, 87, 194)',   // Lila
                'rgb(207, 216, 220)',  // Gris azulado
                'rgb(255, 138, 101)'   // Salmón
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);
}