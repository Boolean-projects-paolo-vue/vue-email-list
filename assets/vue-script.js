const app = Vue.createApp({
    data() {
        return {
            mailArray:[]
        };
    },
    methods: {
        generateRandomMail() {
            this.mailArray = [];
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverResponse => this.mailArray.push(serverResponse.data.response));
            }
        },
    },
    created() {
        this.generateRandomMail();
    },
});

app.mount('#app')

