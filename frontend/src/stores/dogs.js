import { defineStore } from 'pinia'

export const useDogStore = defineStore('dog', {
    state: () => ({
        dogs: []
    }),
    actions: {
        async getAllDogs() {
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