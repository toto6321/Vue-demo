<template>
  <div class='page'>
    <h1>{{title}}</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      title: 'root router'
    };
  }
}) 
</script>

