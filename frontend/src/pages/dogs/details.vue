<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12">
        <v-row>
          <v-col>
            <v-text-field v-model="model.name" label="Name">
            </v-text-field>
          </v-col>
          <v-col>
            <v-select v-model="model.sex" label="Sex" :items="['Male', 'Female']">
            </v-select>
          </v-col>
          <v-col>
            <v-radio-group label="Sterilized" inline v-model="model.sterilized">
              <v-radio label="Yes" value="true"></v-radio>
              <v-radio label="No" value="false"></v-radio>              
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="model.birthdate" label="Birthday">
            </v-text-field>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col cols="10"></v-col>
      <v-col><v-btn text v-on:click="onClickSave">Save</v-btn></v-col>
      <v-col><v-btn text v-on:click="onClickBack">Back</v-btn></v-col>
    </v-row>    
  </v-container>
</template>


<script>

import { useDogStore } from '@/stores/dogs'
import { useRoute } from 'vue-router'

const dogStore = useDogStore();

export default {
  data: () => ({
    model: {
      name:null,
      sex:null,
      sterilized:null,
      birthdate:null
    },
    yesNoItems: [{ text: "Yes", value: true },
    { text: "No", value: false }]    
  }), 
  methods: {
    onClickSave: async function(){              
      await dogStore.newDog(this.model);
      this.onClickBack();
    },
    onClickBack:function(){
      this.$router.push("/dogs/list");      
    }
  },
  mounted: function(){
    const route = useRoute();
    const dogId = route.query.id;

    fetch('http://172.28.1.2:5000/dog/getById?id=' + dogId)
      .then(res => {
        if (!res.ok) throw new Error('Error en la petición');
        return res.json();
      })
      .then(data => { console.log(data); this.model = data; })
      .catch(err => console.error(err)); 
  }
}
</script>
