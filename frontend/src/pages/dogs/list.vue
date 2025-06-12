<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12">
        <v-row>
          <v-col>
            <v-text-field v-model="searchFilters.name" label="Name">
            </v-text-field>
          </v-col>
          <v-col>
            <v-select v-model="searchFilters.sex" label="Sex" :items="['Male', 'Female','All']">
            </v-select>
          </v-col>
          <v-col>
            <v-radio-group label="Sterilized" inline v-model="searchFilters.sterilized">
              <v-radio label="Yes" value="true"></v-radio>
              <v-radio label="No" value="false"></v-radio>
              <v-radio label="All" value=""></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="searchFilters.birthDayFrom" label="Birthday From">
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="searchFilters.birthDayTo" label="Birthday To"></v-text-field>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col cols="9"></v-col>
      <v-col><v-btn text v-on:click="onClickSearch">Search</v-btn></v-col>
      <v-col><v-btn text v-on:click="onClickNew">New</v-btn></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :items="dogs" :headers="dogHeaders">
          <template v-slot:item.actions="{ item }">
            <v-btn icon color="blue">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          <v-btn icon color="red">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import { useDogStore } from '@/stores/dogs'

const dogStore = useDogStore();

const dogHeaders = ref([
  { title: 'Name', key: 'name', align: 'center' },
  { title: 'Sex', key: 'sex', align: 'center' },
  { title: 'Sterilized', key: 'sterilized', align: 'center' },
  { title: 'Birthdate', key: 'birthdate', align: 'center' },
  { title: 'Actions', key:'actions', align: 'center' },
])

export default {
  data: () => ({
    searchFilters: {
      name:null,
      sex:'All',
      sterilized:'',
      birthDayFrom:null,
      birthDayTo:null
    },
    yesNoItems: [{ text: "Yes", value: true },
    { text: "No", value: false }],
    pepe: 16,    
    dogs: [],
    dogHeaders:dogHeaders
  }), 
  methods: {
    onClickSearch: async function(){        
      await dogStore.getAllDogs(this.searchFilters);
      this.dogs = dogStore.dogs;
      },
    onClickNew:function(){
      this.$router.push("/dogs/details");
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
