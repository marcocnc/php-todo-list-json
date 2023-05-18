const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php'  // Endpoint
        }
    },

    methods:{
        getApi(){
            console.log('Questa sarà la chiamata API');
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');