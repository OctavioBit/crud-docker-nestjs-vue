<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12">
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
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"></v-col>
      <v-col><v-btn text v-on:click="onClickSearch">Search</v-btn></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :items="dogs"
                      :headers="dogHeaders">
        </v-data-table>
      </v-col>
    </v-row>    
  </v-container>
</template>


<script>

import { useDogStore } from '@/stores/dogs'

const dogStore = useDogStore();

const dogHeaders = ref([
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Sex', key: 'sex', align: 'end' },
  { title: 'Sterilized', key: 'sterilized', align: 'start' },
  { title: 'Birthdate', key: 'birthdate', align: 'start' }  
])

export default {
  data: () => ({
    pepe: 16,    
    dogs: [],
    dogHeaders:dogHeaders
  }), 
  methods: {
    onClickSearch: async function(){        
      await dogStore.getAllDogs();
      this.dogs = dogStore.dogs;
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
