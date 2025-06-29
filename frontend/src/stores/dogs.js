import { defineStore } from 'pinia'
import axios from 'axios'
const backendURL = import.meta.env.VITE_BACKEND_URL;

export const useDogStore = defineStore('dog', {
    state: () => ({
        dogs: []
    }),
    actions: {
        getAllDogs(searchFilters) {

            const filterQuerys = (searchFilters.name ? 'name=' + searchFilters.name : '') +
                (searchFilters.sex == 'All' ? '' : '&sex=' + searchFilters.sex) +
                (searchFilters.sterilized ? '&sterilized=' + searchFilters.sterilized : '') + 
                (searchFilters.birthdateFrom ? '&birthdateFrom=' + searchFilters.birthdateFrom : '')+
                (searchFilters.birthdateTo ? '&birthdateTo=' + searchFilters.birthdateTo : '');

            axios.get(backendURL + '/dog/getAll?' + filterQuerys)
                .then(res => { console.log(res); this.dogs = res.data; })
                .catch(function (error) {                    
                   console.log(error);
                })     
        },        
        async newDog(dog) {

            axios({
                method: 'post',
                url: backendURL + '/dog/newDog',
                data: dog
            })
            .then(res => { console.log(res);})
            .catch(function (error) {
                console.log(error);
            })
        },
        async deleteDog(id) {

            axios({
                method: 'post',
                url: backendURL + '/dog/deleteDog',
                data: { id: id }
            })
            .then(res => { console.log(res); })
            .catch(function (error) {
                console.log(error);
            })
        },
        async updateDog(dog) {

            axios({
                method: 'post',
                url: backendURL + '/dog/updateDog',
                data: dog
            })
            .then(res => { console.log(res); })
            .catch(function (error) {
                console.log(error);
            })

        },
        async clear(){
            this.dogs = [];
        }

    }
})