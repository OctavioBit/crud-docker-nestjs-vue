<template>
    <div>
        <h1>Usuarios</h1>
        <h1>Este es el usuario {{ $route.params.id }}</h1>
        <alertas tipo="success" 
                 v-if="visible"
                 :mensaje="textomsj"
                 @cerrar="visible=$event"></alertas>        
    </div>
</template>

<script>
import Alertas from '../components/Alertas'

export default {
    name: 'Usuarios',
    data: () => ({
         visible:true,
         textomsj:'lalalala' 
    }),
    components: {
        Alertas,
    }
}
</script>
