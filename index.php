<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"/>

    <!-- Vue -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

    <link rel="stylesheet" href="style.css">
    <title>PHP ToDo List JSON</title>
</head>
<body>
    <div id="app">
        <div class="logo">
            <img src="img/logo.png" alt="logo">
            <h1>TO DO LIST</h1>
        </div>
        
        <div class="inputs">
            <input type = "text" placeholder = "Aggiungi una nuova task">
            <button>Aggiungi</button>
        </div>

        <div class="container">
            <ul class="todolist">
                <li v-for="task in tasksList">
                    <span>{{task.element}}</span>
                    
                    <i class="fa-solid fa-trash"></i>
                </li>
            </ul>
        </div>
    </div>

    <script src="main.js"></script>
</body>
</html>