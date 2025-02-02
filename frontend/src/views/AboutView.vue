<template>
  <div class="about">
    <h1>Acerca de ...</h1>

    <v-btn @click="saludar">
      {{ pepe }}
    </v-btn>    
  </div>
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
