<template>
    <v-snackbar v-model="show" :timeout="2000" :color="color" rounded="pill">
        <v-icon :icon="icon"></v-icon>
        {{ message }}
    </v-snackbar>
</template>

<script setup>

import { useNotification } from '@/composables/useNotification'

const { show, message , icon, color } = useNotification()

</script>