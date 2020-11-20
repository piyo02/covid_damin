<?php

    include 'connect.php';
    
    
    $countries = ['Indonesia', 'Filipina', 'Malaysia', 'Singapura'];
    $list_cases = [];
    foreach ($countries as $country) {
        $sql = "SELECT h_case.country, 
                        h_case.month as month_hight_case, 
                        h_case.new_cases as new_cases_hight, 
                        l_case.month as month_low_case, 
                        l_case.new_cases as new_cases_low,
                        h_death.month as month_hight_death, 
                        h_death.new_deaths as new_deaths_hight, 
                        l_death.month as month_low_death, 
                        l_death.new_deaths as new_deaths_low
                FROM `cases` as h_case, `cases` as l_case, `cases` as h_death, `cases` as l_death
                WHERE h_case.country='$country' AND l_case.country='$country'
                        AND h_death.country='$country' AND l_death.country='$country'
                ORDER BY h_case.new_cases desc, l_case.new_cases asc, h_death.new_deaths desc, l_death.new_deaths asc LIMIT 1";
        $result = mysqli_query($conn, $sql);
        
        while ($data = mysqli_fetch_assoc($result)) {
            $monthName = DateTime::createFromFormat('m', $data['month_hight_case'])->format('F');
            $data['month_hight_case'] = $monthName;

            $monthName = DateTime::createFromFormat('m', $data['month_low_case'])->format('F');
            $data['month_low_case'] = $monthName;

            $monthName = DateTime::createFromFormat('m', $data['month_hight_death'])->format('F');
            $data['month_hight_death'] = $monthName;

            $monthName = DateTime::createFromFormat('m', $data['month_low_death'])->format('F');
            $data['month_low_death'] = $monthName;
            
            array_push($list_cases, $data);
        }
    }
    
    echo json_encode($list_cases);

?>