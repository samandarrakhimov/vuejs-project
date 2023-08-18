<template>
    <div class="btn-group">
     <Button class=" b-0 " v-for="btn in filterButtons" 
     @click="filterHandler(btn.name)"
     :class="[filterName === btn.name ? 'btn-dark': 'btn-outline-dark' ]">
      {{ btn.title }}  
     </Button>
    </div>
</template>
<script>
export default {
    props:{
        updateFilterHandler:{
        type: Function,
        required:true
        },
        filterName:{
         type:String,
         required:true
        }
    },
   data() {
    return {
   filterButtons:[
    {
        title:'Barcha kinolar',
        name: 'all'
    },
    {
        title:'Mashhur kinolar',
        name: 'popular'
    },
    {
        title:'Eng kop kinolar',
        name: 'mostviewrs'
    }
   ],
   filter:'all',
   }
},
methods: {
    filterHandler(filter){
    this.filter = filter
    this.updateFilterHandler(this.filter)
    }
},
}
</script>
<style>
    
</style>