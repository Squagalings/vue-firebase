const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                {title: 'how i draw faces', author: 'doodleaf', img: 'assets/1.jpg', isFav: true},
                {title: 'guide to animaticion', author: 'doodleaf',img: 'assets/2.jpg', isFav: false},
                {title: 'wevideo tips & tricks', author: 'doodleaf', img: 'assets/3.jpg', isFav: true},
            ]
            
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
       
        },
        computed: {
            filteredBooks(){
                return this.books.filter((book) => book.isFav)
            }
        }


})

app.mount('#app')