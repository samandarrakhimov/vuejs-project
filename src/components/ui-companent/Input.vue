<template>
   <input :value='modelValue' @input="inputHandler" >
</template>
<script>
export default {
   props:{
      modelValue:[String, Number]
   },
   methods: {
      inputHandler(e){
      this.$emit('uptade: modalValue', e.target.value)
      }
   }, 
   name:'Input',
}
</script>
<style>
    
</style>