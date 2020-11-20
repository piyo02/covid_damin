$(document).ready(function() {
    $.ajax({
        url: "http://localhost/damin/src/php/data.php",
        method: "GET",
        dataType: "json",
        success: function(results) {
        const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'];
        let dataIndonesia = [], dataFilipina = [], dataMalaysia = [], dataSingapura = [];

        results[0].forEach(data => {
            dataIndonesia.push(data.cumulative_deaths);
        })

        results[1].forEach(data => {
            dataFilipina.push(data.cumulative_deaths);
        })

        results[2].forEach(data => {
            dataMalaysia.push(data.cumulative_deaths);
        })
        
        results[3].forEach(data => {
            dataSingapura.push(data.cumulative_deaths);
        })

        var ctx = document.getElementById('chartDeath').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: labels,
                datasets: [
                    {
                    label: 'Indonesia',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#17a2b8',
                    data: dataIndonesia
                    },
                    {
                    label: 'Filipina',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#6c757d',
                    data: dataFilipina
                    },
                    {
                    label: 'Malaysia',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#343a40',
                    data: dataMalaysia
                    },
                    {
                    label: 'Singapura',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: '#28a745',
                    data: dataSingapura
                    }
                ]
            },
            options: {}
        });

        }
    })
});