const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                {title: 'outfit ideas', author: 'doodleaf', img: 'assets/1.jpg', isFav: true},
                {title: 'sketching expressions', author: 'doodleaf',img: 'assets/2.jpg', isFav: false},
                {title: 'drawing poses', author: 'doodleaf', img: 'assets/3.jpg', isFav: true},
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