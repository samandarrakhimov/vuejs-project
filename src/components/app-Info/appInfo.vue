<template>
    <div class="app-info">
      <p class="fs-3 text-uppercase">barcha kinolar: {{ allMovieCount }}</p>
      <p class="fs-4 mt-1 text-uppercase">ko'rilgan kinolar kinolar: {{ allfavoriteCount }}</p>
    </div>
</template>
<script>
export default {
    props:{
        allMovieCount:{
            type:Number,
            required:true
        },
        allfavoriteCount:{
           type:Number,
           required:true  
        }
    }
}
</script>
<style>
    .app-info{
        padding: 1.5rem;
        margin-top: 2rem;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    }
</style>