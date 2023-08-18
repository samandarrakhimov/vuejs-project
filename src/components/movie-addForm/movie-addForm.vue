<template>
    <div class="movie-add-form">
      <h3 class="mb-4">Kino Qo'shing</h3>  
      <form class="add-form d-flex" @submit.prevent>
        <input type="text" class="form-control" placeholder="Qanday kino ?" v-model="name">
        <input type="number" class="form-control" placeholder="nechi martoba ko'rilgan" v-model="viewrs"/>
        <Button  class="btn-outline-dark" @click="submitHandler" >Qo'shish</Button>
      </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
        name: '',
        viewrs: ''
    }
  },
  methods: {
    submitHandler(){
      if (this.name === "" || this.viewrs === '') {
        return null
      }
      const array = {
        name:this.name,
        viewrs:this.viewrs,
        like: false,
        favorite:false,
      }  
     this.$emit("createMovie", array);
     this.name = '';
     this.viewrs = '';
    }
  },
}
</script>
<style>
   .movie-add-form{
    padding: 1.5rem;
    margin-top: 2rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  }   
</style>