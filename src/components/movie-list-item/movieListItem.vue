<template>
    <li class="list-group-item d-flex justify-content-betwee "
    :class="[{like:movie.like},{favorite:movie.favorite}]">
        <span @click="$emit('onTogle',{id: movie.id, prop:'like'})" class="form-label">{{ movie.name }}</span>
        <input type="number" class="form-input" :value="movie.viewrs">

        <div class="d-flex justfy-content-center align-tems-center">
          <button class="btn-cookie btn-sm btn-outline-warning" @click="$emit('onTogle',{id: movie.id, prop:'favorite'})">
            <i class="fa-solid fa-cookie"></i>
          </button>
          <button class="btn-trash btn-sm btn-outline-danger" @click="$emit('onremove',movie.id)">
            <i class="fa-solid fa-trash"></i>
          </button>
          <i class="fa-solid fa-star"></i>
        </div>

    </li>
</template>
<script>
export default {
  props:{
    movie:{
      type: Object,
      required: true
    }
  }
}
</script>
<style>
   .list-group-item{
    border-bottom: 1px solid black;
   } 
   .list-group-item:last-child{
    border: 0;
   }
   .form-label{
    width: 750px;
    height: 27px;
    line-height: 35px;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    vertical-align: middle;
   }
   .form-input{
    width: 60px;
    height: 35px;
    border: 0;
    list-style: none;
    color: black;

   }
   .btn-cookie{
    width: 35px;
    height: 35px;
    margin: 3px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    background-color: aliceblue;
    color: rgb(201, 166, 26);
   }
   

   .btn-trash{
    width: 35px;
    height: 35px;
    margin: 3px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    background-color: aliceblue;
    color: rgb(208, 50, 7);
   }
   .fa-star{
    color: rgb(222, 222, 24);
    width: 15px;
    line-height: 35px;
    height: 35px;
    margin: 3px;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    opacity: 0;
    transform: translateX(30px);
    

   }
   .list-group-item.like .fa-star{
    opacity: 1;
    transform: translateX(0px);
    transition:  all .7s ease;
   }
   .list-group-item.favorite .form-label{
    color: rgb(201, 166, 26);
   }
   .list-group-item.favorite .form-input{
    color: rgb(201, 166, 26);
   }
   
</style>