<template>
      <div class="search-panel">
        <Input type="text" class="form-control" placeholder="Kinolarni qidiring" 
         v-model='term'
         @input="termHandler"/> 
      </div>
</template>
<script>
export default {
    props:{
      updateTermHandler:{
        type:Function,
        required:true
      },
      data() {
        return {
          term: '',
        }
      },
    },
    methods: {
      termHandler(e){
        this.term = e.target.value;
        this.updateTermHandler(this.term)
      }
    },
}
</script>
<style>
    .search-panel{
        padding: 1.5rem;
        border-radius: 4px;
       margin-bottom: 10px;
      box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);  
    }
</style>