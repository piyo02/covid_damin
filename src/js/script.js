$(document).ready(function() {
    $.ajax({
        url: "http://localhost/damin/src/php/data_case.php",
        method: "GET",
        dataType: "json",
        success: function(results) {
            let dataIndonesia = [], dataFilipina = [], dataMalaysia = [], dataSingapura = [];

            console.log(results);

            new jBox('Modal', {
                attach: '#modal-indonesia',
                title: '<span class="font-weight-bold">Indonesia</span>',
                content: `  <div>
                                <p class="font-weight-bold mb-1 text-warning"><i class="fas fa-virus mr-3"></i>Kasus Positif</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[0].new_cases_hight} kasus, di bulan ${results[0].month_hight_case}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[0].new_cases_low} kasus, di bulan ${results[0].month_low_case}</p>
                                <p class="font-weight-bold mb-2 mt-3 text-danger mt-2"><i class="fas fa-skull mr-3"></i>Kasus Kematian</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[0].new_deaths_hight} kasus, di bulan ${results[0].month_hight_death}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[0].new_deaths_low} kasus, di bulan ${results[0].month_low_death}</p>
                            </div>`,
                width: 400,
            });
            new jBox('Modal', {
                attach: '#modal-philippines',
                title: '<span class="font-weight-bold">Filipina</span>',
                content:  `  <div>
                                <p class="font-weight-bold mb-1 text-warning"><i class="fas fa-virus mr-3"></i>Kasus Positif</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[1].new_cases_hight} kasus, di bulan ${results[1].month_hight_case}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[1].new_cases_low} kasus, di bulan ${results[1].month_low_case}</p>
                                <p class="font-weight-bold mb-2 mt-3 text-danger mt-2"><i class="fas fa-skull mr-3"></i>Kasus Kematian</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[1].new_deaths_hight} kasus, di bulan ${results[1].month_hight_death}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[1].new_deaths_low} kasus, di bulan ${results[1].month_low_death}</p>
                            </div>`,
                width: 400,
            });
            new jBox('Modal', {
                attach: '#modal-malaysia',
                title: '<span class="font-weight-bold">Malaysia</span>',
                content:  `  <div>
                                <p class="font-weight-bold mb-1 text-warning"><i class="fas fa-virus mr-3"></i>Kasus Positif</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[2].new_cases_hight} kasus, di bulan ${results[2].month_hight_case}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[2].new_cases_low} kasus, di bulan ${results[2].month_low_case}</p>
                                <p class="font-weight-bold mb-2 mt-3 text-danger mt-2"><i class="fas fa-skull mr-3"></i>Kasus Kematian</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[2].new_deaths_hight} kasus, di bulan ${results[2].month_hight_death}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[2].new_deaths_low} kasus, di bulan ${results[2].month_low_death}</p>
                            </div>`,
                width: 400,
            });
            new jBox('Modal', {
                attach: '#modal-singapore',
                title: '<span class="font-weight-bold">Singapura</span>',
                content:  `  <div>
                                <p class="font-weight-bold mb-1 text-warning"><i class="fas fa-virus mr-3"></i>Kasus Positif</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[3].new_cases_hight} kasus, di bulan ${results[3].month_hight_case}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[3].new_cases_low} kasus, di bulan ${results[3].month_low_case}</p>
                                <p class="font-weight-bold mb-2 mt-3 text-danger mt-2"><i class="fas fa-skull mr-3"></i>Kasus Kematian</p>
                                <p class="ml-4 mb-1">Tertinggi: ${results[3].new_deaths_hight} kasus, di bulan ${results[3].month_hight_death}</p>
                                <p class="ml-4 mb-1">Terendah: ${results[3].new_deaths_low} kasus, di bulan ${results[3].month_low_death}</p>
                            </div>`,
                width: 400,
            });

        }
    })
});