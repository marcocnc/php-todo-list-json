const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php', // Endpoint
            tasksList : []  // Array vuoto che conterrà le task
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then(result =>{
                this.tasksList = result.data;  // L'array ora contiene le task del file json passate nel file php
            })
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');