<template>
  <v-form ref="dogForm" v-model="validDogForm">
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col cols="12">
          <v-row>
            <v-col>
              <v-text-field v-model="model.name" 
                            label="Name" 
                            required
                            :rules="[ v => vrules.required(v,'Name')]" >
              </v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="model.sex" 
                        label="Sex" 
                        :items="['Male', 'Female']">
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
  </v-form>
</template>


<script>

import { useDogStore } from '@/stores/dogs'
import { useRoute } from 'vue-router'
import { vrules } from '@/validation/rules'
import { useNotification } from '@/composables/useNotification'
import axios from 'axios'
const apiUrl = 'http://172.28.1.2:5000' /*import.meta.env.BACKEND_URL; TODO: No lo toma...*/

const dogStore = useDogStore();

const { showSuccess, showWarning } = useNotification();

export default {
  data: () => ({
    model: {
      id:null,
      name:null,
      sex:null,
      sterilized:null,
      birthdate:null
    },
    validDogForm:false,
    vrules: vrules
  }), 
  methods: {
    onClickSave: async function(){

      this.$refs.dogForm.validate();
      if (!this.validDogForm){
        showWarning("Please check the fields");
        return false;
      }

      if(this.model.id){
        await dogStore.updateDog(this.model);        
      }
      else{
        await dogStore.newDog(this.model);  
      }

      showSuccess("Dog saved OK!");
      
      this.onClickBack();
    },
    onClickBack:function(){
      this.$router.push("/dogs/list");      
    }
  },
  mounted: function(){
    const route = useRoute();
    const dogId = route.query.id;

    if (!dogId)
      return false;

    axios.get(apiUrl + '/dog/getById?id=' + dogId)
      .then(res => {
        console.log(res);         
        this.model = res.data;
        this.model.sterilized += '';
        this.model.id = dogId; })
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>
