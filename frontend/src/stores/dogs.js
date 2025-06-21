import { defineStore } from 'pinia'
import axios from 'axios'
const apiUrl = 'http://172.28.1.2:5000' /*import.meta.env.BACKEND_URL; TODO: No lo toma...*/

export const useDogStore = defineStore('dog', {
    state: () => ({
        dogs: []
    }),
    actions: {
        getAllDogs(searchFilters) {

            const filterQuerys = (searchFilters.name ? 'name=' + searchFilters.name : '') +
                (searchFilters.sex == 'All' ? '' : '&sex=' + searchFilters.sex) +
                (searchFilters.sterilized ? '&sterilized=' + searchFilters.sterilized : '');

            axios.get(apiUrl + '/dog/getAll?' + filterQuerys)
                .then(res => { console.log(res); this.dogs = res.data; })
                .catch(function (error) {                    
                   console.log(error);
                })     
        },        
        async newDog(dog) {

            axios({
                method: 'post',
                url: apiUrl + '/dog/newDog',
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
                url: apiUrl + '/dog/deleteDog',
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
                url: apiUrl + '/dog/updateDog',
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