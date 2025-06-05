<template>
  <v-container>
    <v-row no-gutters>
      <v-col></v-col>
      <v-col cols="12">
        <v-card title="Busqueda">

        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    pepe: 16
  }),
  methods: {
    saludar: function(){
       console.log('Hola');  
       this.contar();
      },
    contar: function(){
        this.pepe++;
    }
  },
  mounted: function(){
    this.pepe = 0;
  }
}
</script>
