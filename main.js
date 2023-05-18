const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php', // Endpoint
            tasksList : [],  // Array vuoto che conterrà le task
            newTask : ''
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then(result =>{
                this.tasksList = result.data;  // L'array ora contiene le task del file json passate nel file php
            })
        },

        addTask(){
            // Nuovo oggetto da pushare
            const userTask = {
                element: this.newTask,
                isDone: false
            }

            this.tasksList.unshift(userTask);
            console.log('this.tasksList', this.tasksList);

            // Oggetto che sarà inviato al server
            // const data = {
            //     todoItem : this.newTask
            // }


            // axios.post(this.apiUrl, data, {
            //     headers: {'Content Type': 'multipart/form-data'}
            // })
            // .then(res =>{
            //     this.tasksList = res.data;
            //     console.log('CACCA', this.tasksList);
            // })
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');