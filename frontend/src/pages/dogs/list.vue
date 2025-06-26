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
            <v-text-field type="date" v-model="searchFilters.birthDayFrom" label="Birthday From">
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field type="date" v-model="searchFilters.birthDayTo" label="Birthday To"></v-text-field>
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
        <v-data-table :items="dogStore.dogs" :headers="dogHeaders">
          <template v-slot:item.sterilized="{ item }">
            <v-icon v-if="item.sterilized">
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
          </template>
          <template v-slot:item.birthdate="{ item }">
            {{ new Date(item.birthdate).toLocaleDateString('es-AR') }}
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon v-on:click="onClickEdit(item.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon v-on:click="onClickDelete(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <DogCounter />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import { useDogStore } from '@/stores/dogs'
import { useNotification } from '@/composables/useNotification';
import { useConfirm } from '@/composables/useConfirm';

const dogStore = useDogStore();
const { showSuccess } = useNotification();
const { openConfirm } = useConfirm();

const dogHeaders = [
  { title: 'Name', key: 'name', align: 'center' },
  { title: 'Sex', key: 'sex', align: 'center' },
  { title: 'Sterilized', key: 'sterilized', align: 'center' },
  { title: 'Birthdate', key: 'birthdate', align: 'center' },
  { title: 'Actions', key:'actions', align: 'center' },
];

export default {
  data: () => ({
    searchFilters: {
      name:null,
      sex:'All',
      sterilized:'',
      birthDayFrom:null,
      birthDayTo:null
    },        
    dogStore:dogStore,
    dogHeaders:dogHeaders
  }), 
  methods: {
    onClickSearch: async function(){        
      
        await dogStore.getAllDogs(this.searchFilters);        
      },
    onClickDelete: async function (dogId) {

      //the closure preserves the value of dogId
      openConfirm("Delete Dog",
                  "Are you sure you want to delete the dog?", 
                  async () => {
                    await dogStore.deleteDog(dogId);
                    await dogStore.getAllDogs(this.searchFilters); 
                    showSuccess("Dog deleted OK!");
                  });
    },
    onClickNew:function(){
      this.$router.push("/dogs/details");
    },   
    onClickEdit:function(dogId){      
      this.$router.push({ path: "/dogs/details", query: { id: dogId } });
    }
  },
  mounted: function(){
    this.dogStore.clear();
  }
}
</script>
