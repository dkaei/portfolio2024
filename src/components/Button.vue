<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: String,
  textClass: String,
  bgClass: String,
  link: String
  });
</script>

<template>
    <a 
      class="group relative inline-block text-sm font-medium focus:outline-none focus:ring"
      :class="textClass"
      :href="link">
      <span
        class="absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        :class="bgClass"
      ></span>
    
      <span class="relative block border border-current bg-white px-8 py-3"> {{ title }} </span>
    </a>
</template>