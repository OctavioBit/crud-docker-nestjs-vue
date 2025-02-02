<template>
    <div class="text-container mt-5">
        <v-alert :type="tipo">{{ mensaje }}</v-alert>
        <v-btn @click="cerrar()">cerrar</v-btn>
    </div>
</template>

<script>

export default {    
    props: ['tipo','mensaje'],    
    methods: {
        cerrar() {
            /* se emite el evento cerrar con el valor false, (se recupera con $event) */
            this.$emit('cerrar', false); 
            
        }
    }
}
</script>
