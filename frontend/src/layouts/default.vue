<template>
  <v-main>
    <router-view />
    <Notification/>
  </v-main>

  <AppFooter />
</template>

<script setup>
import Notification from '@/components/Notification.vue';

</script>
