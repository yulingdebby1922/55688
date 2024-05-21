// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Sales and Orders Trend Data
    const trendData = {
        labels: ['4/6-4/20', '5/6-5/20'],
        datasets: [
            {
                label: 'Total Sales',
                data: [165440, 147420],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            },
            {
                label: 'Total Orders',
                data: [69, 58],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 1
            }
        ]
    };

    // Product Sales Comparison Data
    const comparisonData = {
        labels: [
            '訂閱3500元全時段搭車金',
            '訂閱40元搭車金大禮包（日）',
            '訂閱40元搭車金大禮包（夜）',
            '訂閱70元搭車金大禮包（日）',
            '訂閱70元搭車金大禮包（夜）',
            '訂閱全時段120元搭車金（20張）',
            '訂閱全時段120元搭車金（25張）',
            '訂閱全時段120元搭車金（5張）',
            '訂閱全時段40元搭車金（20張）',
            '訂閱全時段40元搭車金（5張）',
            '訂閱全時段85元搭車金（20張）',
            '70元面額訂閱日夜搭車金大禮包'
        ],
        datasets: [
            {
                label: 'April Sales',
                data: [73500, 22680, 7560, 26040, 8680, 9600, 0, 600, 9600, 600, 5100, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'May Sales',
                data: [77000, 10080, 5040, 13020, 6510, 14400, 12000, 1800, 4000, 0, 3400, 2170],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    // April Sales Composition Data
    const compositionData = {
        labels: [
            '訂閱3500元全時段搭車金',
            '訂閱40元搭車金大禮包（日）',
            '訂閱40元搭車金大禮包（夜）',
            '訂閱70元搭車金大禮包（日）',
            '訂閱70元搭車金大禮包（夜）',
            '訂閱全時段120元搭車金（20張）',
            '訂閱全時段120元搭車金（5張）',
            '訂閱全時段40元搭車金（20張）',
            '訂閱全時段40元搭車金（5張）',
            '訂閱全時段85元搭車金（20張）'
        ],
        datasets: [
            {
                data: [73500, 22680, 7560, 26040, 8680, 9600, 600, 9600, 600, 5100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    // Trend Chart
    const ctxTrend = document.getElementById('trendChart').getContext('2d');
    new Chart(ctxTrend, {
        type: 'line',
        data: trendData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Sales and Orders Trend'
                }
            }
        }
    });

    // Comparison Chart
    const ctxComparison = document.getElementById('comparisonChart').getContext('2d');
    new Chart(ctxComparison, {
        type: 'bar',
        data: comparisonData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Product Sales Comparison'
                }
            }
        }
    });

    // Composition Chart
    const ctxComposition = document.getElementById('compositionChart').getContext('2d');
    new Chart(ctxComposition, {
        type: 'pie',
        data: compositionData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'April Sales Composition'
                }
            }
        }
    });
});