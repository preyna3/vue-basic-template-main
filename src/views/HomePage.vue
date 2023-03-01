<script setup>
import { ref } from 'vue'
import useChucks from '../composables/useChuck'
const facts = useChucks()
const factoids = facts
//facts = factoids.data.data.result;//.value[0].data.data.result
</script>
<template>
 <div>
 <h1>test </h1>
 </div>
<div class="grid grid-cols-3 gap-16 pt-16">
 <p v-for="(factoid, index) in factoids" v-bind:key="index">
 {{ factoid.value.data.data.result }}
  </p> 
</div>
</template>

<style>
</style>