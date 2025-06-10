import { defineStore } from 'pinia'

export const useDogStore = defineStore('dog', {
    state: () => ({
        dogs: []
    }),
    actions: {
        async getAllDogs() {

            await fetch('http://172.28.1.2:5000/dog/getAll')
                .then(res => {
                    if (!res.ok) throw new Error('Error en la petición');
                    return res.json();
                })
                .then(data => {console.log(data); this.dogs = data;})
                .catch(err => console.error(err));

            /*const querySnapshot = await getDocs(collection(db, 'todos'))
            this.todos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))*/
        },
        async newDog(dog) {
            /*await addDoc(collection(db, 'todos'), todo)
            this.fetchTodos()*/
        },
        async deleteDog(id) {
            /*await deleteDoc(doc(db, 'todos', id))
            this.fetchTodos()*/
        },
        async updateDog(id, updated) {
            /*await updateDoc(doc(db, 'todos', id), updated)
            this.fetchTodos()*/
        }
    }
})