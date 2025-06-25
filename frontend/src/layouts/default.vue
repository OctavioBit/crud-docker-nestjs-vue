<template>
  <v-main>
    <router-view />
    <Notification/>
    <Confirm/>
  </v-main>

  <AppFooter />
</template>

<script setup>
import Notification from '@/components/Notification.vue';
import Confirm from '@/components/Confirm.vue';

</script>
