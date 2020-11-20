<?php

    include 'connect.php';
    
    $datas = [];
    
    $countries = ['Indonesia', 'Filipina', 'Malaysia', 'Singapura'];
    foreach ($countries as $country) {
        $sql = "SELECT month, cumulative_cases, cumulative_deaths FROM `cases` WHERE country='$country';";
        $result = mysqli_query($conn, $sql);
        
        $list_cases = [];
        while ($data = mysqli_fetch_assoc($result)) {
            array_push($list_cases, $data);
        }
        array_push($datas, $list_cases);
    }
    echo json_encode($datas);

?>