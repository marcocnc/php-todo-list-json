<?php 

//  Prendo i contenuti del file json
$json_string = file_get_contents('task-list.json');

// Li leggo
$array_tasks = json_decode($json_string, true);

// Trasformo in un file json
header('Content-Type: application/json');

// Lo stampo 
echo json_encode($array_tasks);
?>