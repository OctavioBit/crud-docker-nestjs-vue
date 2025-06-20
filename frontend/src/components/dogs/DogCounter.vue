<template>
  <div>
    <v-chip>#Dogs: {{ dogStore.dogs.length }}</v-chip>
  </div>
</template>

<script setup>

  import { useDogStore } from '@/stores/dogs'

  const dogStore = useDogStore();
  
</script>
