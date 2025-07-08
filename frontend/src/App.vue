<template>
  <v-app>
    <v-app-bar app color="primary" light>
      <div class="d-flex align-center">
        <v-icon icon="mdi-dog" size="x-large" class="mr-3 ml-2"></v-icon>
        <span class="text-h6 font-weight-bold">My Dog House</span>
      </div>

      <v-spacer></v-spacer>
       
      <v-btn text @click="irARuta('/dogs/list')">
        Dogs
      </v-btn>

      <v-btn text @click="irARuta('/about')">
        About
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    irARuta(url) {
      this.$router.push(url);
    }
  }
}
</script>
