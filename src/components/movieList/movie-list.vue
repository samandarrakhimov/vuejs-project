<template>
    <ul class="list-group movie-list">
    <movieListItem 
    v-for="movie in movies"
     :movie="movie"
      :key="movie.id"
       @onTogle="$emit('onTogle', $event)"
       @onremove="$emit('onremove', $event)"/>
    </ul>
</template>
<script>
 import movieListItem from '../movie-list-item/movieListItem.vue';
export default {
     props:{
    movies:{
        type:Array,
        required:true
    }
     },
    components:{movieListItem}
}
</script>
<style>
  .movie-list{
        padding: 1.5rem;
        margin-top: 2rem;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    }
</style>