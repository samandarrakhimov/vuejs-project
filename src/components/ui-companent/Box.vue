<template>
  <div class="box1">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'Box'  
}
</script>
<style>
    .box1{
       padding: 1.5rem;
        margin-top: 1rem;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    }
</style>