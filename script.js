const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the ONE WHO KNOCKS</h2>'
    data(){
        return {
            showBooks: true,
            title: 'I am Heisenberg',
            author: 'Walter Heartwell White',
            age: 52
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        }
        //changeTitle(abc) {
          // this.title = 'Los Pollos Hermanos'
          //this.title = abc;
        //}
    }
});

app.mount('#app')