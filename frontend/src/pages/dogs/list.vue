<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel title="Search Filters">
            <v-row>
              <v-col>
                <v-text-field label="Name"></v-text-field>
              </v-col>
              <v-col>
                <v-select label="Sex" :items="['Male', 'Female']">
                </v-select>
              </v-col>
              <v-col>
                <v-select label="Sterilized" :items="['Yes', 'No']">
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Birthday From"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Birthday To"></v-text-field>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col cols="10"></v-col>
      <v-col><v-btn text="Search" v-on:click="onClickSearch"></v-btn></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table>

        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

/*
<script>

import { useDogStore } from '@/stores/dogs'

const dogStore = useDogStore();

export default {
  data: () => ({
    pepe: 16,
    dogs:[]
  }),
  methods: {
    onClickSearch: function(){
       console.log('Hola');  
      this.dogs = dogStore.getAllDogs();
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
