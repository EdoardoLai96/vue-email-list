const app = new Vue({
    el: '#app',
    data: {
        email_container: []
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

        .then(function (response) {
                for(let i=0; i < 10; i++){
                // handle success
                console.log(response.data.response);
                app.email_container.push(response.data.response);
            }
            })
    },
    methods: {

    }
        
    
})