<?php 


// apriamo un file json
// ne leggiamo il contenuto
// se arriva qualcosa dal client, lo aggiungiamo al contenuto
// inviamo il nuovo contenuto

//  Prendo i contenuti del file json
$filename = 'task-list.json';
$json_string = file_get_contents($filename);

// Li leggo
$array_tasks = json_decode($json_string, true);

// 
if (isset($_POST['todoItem'])) {
    // aggiunge l'elemento dell'utente in coda alla'array già esistente
    $array_tasks[] = $_POST['todoItem'];

    $json_string = json_encode($array_tasks, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json_string);
}


// Trasformo in un file json
header('Content-Type: application/json');

// Lo stampo 
echo json_encode($array_tasks);



?>