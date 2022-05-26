<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
    <h2>{{$store.state.dia}}</h2>
    <h1>LISTA DE AMIGOS INGRESADOS</h1>
    <input type="text" v-model="amigoComponente">
    <button @click="addAmigoComponente">AGREGAR AMIGO</button>

    <ul v-for="(item, index) in amigos" :key="index">
      <li>{{index + 1}} - {{item}}</li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      amigoComponente:''
    }
  },
  computed:{
    ...mapState(['amigos'])
  },

  methods:{
    addAmigoComponente(){
      this.$store.dispatch('addAmigoAction', this.amigoComponente)
    }
  }
}
</script>
