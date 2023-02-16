const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the ONE WHO KNOCKS</h2>'
    data(){
        return {
            url: 'https://netninja.dev/',
            showBooks: true,
            books: [
                {title: 'wow', author: 'bobby'},
                {title: 'eric', author: 'Cartman'},
                {title: 'Jimmy', author: 'Timmah'},
            ]
            // title: 'I am Heisenberg',
            // author: 'Walter Heartwell White',
            // age: 52,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
        //changeTitle(abc) {
          // this.title = 'Los Pollos Hermanos'
          //this.title = abc;
        //}
    }
});

app.mount('#app')