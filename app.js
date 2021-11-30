const app = Vue.createApp({
    data(){
        return {
            title: 'how i draw faces',
            author: 'doodleaf',
            age: 13
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }


})

app.mount('#app')