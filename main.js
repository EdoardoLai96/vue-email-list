const app = new Vue({
    el: '#app',
    data: {
        email_container: []
    },
    mounted(){



        for(let i=0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        
        .then(function (response) {
                // handle success
                console.log(response.data.response);
                app.email_container.push(response.data.response);
            })
        }
    },
    methods: {

    }
        
    
})