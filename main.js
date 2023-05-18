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

        addTask(e){
            e.preventDefault();
            // Nuovo oggetto da pushare
            const userTask = {
                element: this.newTask,
                isDone: false
            }

            const data = {
                todoItem : userTask
            }
            
            axios.post(this.apiUrl, data, 
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                this.tasksList = res.data;
            })

            // this.tasksList.unshift(userTask);
            console.log('this.tasksList', this.tasksList);

            // Oggetto che sarà inviato al server
            

            
            
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');