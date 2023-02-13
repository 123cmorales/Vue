const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the ONE WHO KNOCKS</h2>'
    data(){
        return {
            title: 'I am Heisenberg',
            author: 'Walter Heartwell White',
            age: 52
        }
    },
    methods: {
        
    }
});

app.mount('#app')