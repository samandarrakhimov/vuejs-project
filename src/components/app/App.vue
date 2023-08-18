<template>
    <div class="box">
      <div class="content">
        <appInfo :allMovieCount="movies.length" :allfavoriteCount="movies.filter(c => c.favorite).length"/> 
        <div class="search-panel">
           <searchPanel :updateTermHandler="updateTermHandler"/> 
           <appFilter :updateFilterHandler="updateFilterHandler"  :filterName="filter"/>
        </div>
        <Box v-if="!movies.length && !loading">
          <h1 class="text-bold tex-upercase text-center text-danger">Kinolar yo'q</h1>  
        </Box>
        <Box v-else-if="loading">
          <Loader/>
        </Box>
        <movieList :movies="onFilterHandler(onSearchHandler(movies,term),filter)"
         @onTogle="onTogleHandler" @onremove="onremoveHandler"  v-else/>
        <movieAddForm @createMovie="createMovie"/>
      </div>
    </div>
</template>
<script>
import appInfo from '../app-Info/appInfo.vue'
import searchPanel from '../search-panel/search-panel.vue';
import appFilter from '../app-filter/app-filter.vue';
import movieList from '../movieList/movie-list.vue';
import movieAddForm from '../movie-addForm/movie-addForm.vue';
import axios from 'axios'
export default {
    components:{appInfo,searchPanel,appFilter,movieList,movieAddForm},
    data() {
    return {
        movies:[
            ],
        term :'',
        filter: 'all',
        limit:10,
        page: 1,
        loading: false,
    }
   },
   methods: {
    async createMovie(item){
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',item)
        this.movies.push(response.data)
    } catch (error) {
        alert(error.message)  
    }
    
    },
    onTogleHandler({id, prop}){
        this.movies = this.movies.map(item => {
            if (item.id == id) {
                return {...item,[prop]: !item[prop]}
            }
            return item
        })
    
    },
   async onremoveHandler(id){
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            this.movies = this.movies.filter(c => c.id !== id)
        } catch (error) {
           alert(error.message) 
        }
        
    },
    onSearchHandler(arr, term){
        if (term.length === 0) {
            return arr
        }
        return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
     
    },
    onFilterHandler(arr, filter){
      switch (filter) {
        case 'popular':
        return  arr.filter(c => c.like)
        
        case 'mostviewrs':
            return arr.filter(c => c.viewrs > 500)
            
        default:
           return arr
      }
     
    },
    updateTermHandler(term){
     this.term = term
    },
    updateFilterHandler(filter){
     this.filter = filter
    },
    async fetchMovie(){
        this.loading = true
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit:this.limit,
                    _page: this.page,
                },
            })
            const newArr = response.data.map(item => ({
                id: item.id,
                name: item.title,
                like: false,
                favorite: false,
                viewrs: item.id * 100,

            }))
            this.movies = newArr
            console.log(response.data);
        } catch (error) {
          console.log('erorr');
        } finally {
            this.loading = false
        }
    },
   },
   mounted() {
   this.fetchMovie();
    },
}
</script>
<style>
    .box{
        height: 100vh;
        background-color: #fff;
    }
    .content{
        margin: 0 auto;
        width: 1000px;
        min-height: 700px;
        
    }
    .search-panel{
        padding: 1.5rem;
        margin-top: 2rem;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    }
</style>