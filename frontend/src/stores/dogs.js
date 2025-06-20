import { defineStore } from 'pinia'
const apiUrl = 'http://172.28.1.2:5000' /*import.meta.env.BACKEND_URL; TODO: No lo toma...*/

export const useDogStore = defineStore('dog', {
    state: () => ({
        dogs: []
    }),
    actions: {
        async getAllDogs(searchFilters) {
            
            const filterQuerys = (searchFilters.name ? 'name=' + searchFilters.name : '') +
                                 (searchFilters.sex == 'All' ? '' : '&sex=' + searchFilters.sex )+
                                 (searchFilters.sterilized ? '&sterilized=' + searchFilters.sterilized : '');

            await fetch(apiUrl + '/dog/getAll?' + filterQuerys)
                .then(res => {
                    if (!res.ok) throw new Error('Error en la petición');
                    return res.json();
                })
                .then(data => {console.log(data); this.dogs = data;})
                .catch(err => console.error(err));
        },        
        async newDog(dog) {

            fetch(apiUrl + '/dog/newDog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dog),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error en la solicitud');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Respuesta del servidor:', data);
                })
                .catch(error => {
                    console.error('Hubo un error:', error);
                });                         
        },
        async deleteDog(id) {
            fetch(apiUrl + '/dog/deleteDog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id:id}),
            }).catch(error => {
                    console.error('Hubo un error:', error);
                });            
        },
        async updateDog(dog) {
            fetch(apiUrl + '/dog/updateDog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dog),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error en la solicitud');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Respuesta del servidor:', data);
                })
                .catch(error => {
                    console.error('Hubo un error:', error);
                });
        },
        async clear(){
            this.dogs = [];
        }

    }
})