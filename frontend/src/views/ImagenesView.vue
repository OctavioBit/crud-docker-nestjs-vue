<template>
    <div>
        <h1>Imagenes</h1>
        <imagenCard :items="Items"></imagenCard>
    </div>
</template>

<script>
import imagenCard from "@/components/ImagenCard.vue"
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Imagenes',
    components: { imagenCard },
    created(){
        this.cargarImagenes();
    },
    data(){
        return { 
           
        }
    },
    methods: {
        ...mapActions('imagenesStore',['cargarImagenes'])
    },
    computed: {
        ...mapGetters('imagenesStore',['Items'])
    }
}
</script>
