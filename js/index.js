import 'chartjs-plugin-style';

const cxc1 = document.getElementById('horizontalBar1').getContext('2d')
const HorizontalBar1 = new Chart(cxc1, {
    type: 'bar',
    data: {
        labels: ['Areia', 'Concreto', 'Pedra'],
        datasets: [
            {
                data: [49150, 69300, 29800],
                backgroundColor: [
                    '#cc0',
                    '#c00',
                    '#00c'
                ],
            }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                font: {
                    size: 18
                },
                color: '#111',
                display: true,
                text: 'Rendimento'
            }
        },
        indexAxis: 'y',
    }
});

const cxc2 = document.getElementById('horizontalBar2').getContext('2d')
const HorizontalBar2 = new Chart(cxc2, {
    type: 'bar',
    data: {
        labels: ['Areia', 'Concreto', 'Pedra'],
        datasets: [{
            data: [11, 10, 12],
            backgroundColor: [
                '#cc0',
                '#c00',
                '#00c'
            ],
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                font: {
                    size: 18
                },
                color: '#111',
                display: true,
                text: 'Quantidade Vendida'
            }
        },
        indexAxis: 'y',
        resposive: true
    }
});

const cxc3 = document.getElementById('pie').getContext('2d')
const Pie1 = new Chart(cxc3, {
    type: 'pie',
    data: {
        labels: ['Ana Xavier', 'João Gustavo', 'Laura Bernardes', 'Paulo Rodrigues', 'Renata Campos', 'Samuel Sousa', 'Saulo Martins'],
        datasets: [{
            data: [29650, 26450, 26500, 20700, 16000, 20600, 8350],
            backgroundColor: [
                '#cc0',
                '#c00',
                '#00c',
                '#751',
                '#f81',
                '#81f',
                '#008'
            ],
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                font: {
                    size: 18
                },
                color: '#111',
                display: true,
                text: 'Consumo dos Clientes'
            }
        },
        indexAxis: 'y',
        resposive: true
    }
});
