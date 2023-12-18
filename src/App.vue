<template>
  <div id="app">
    <nav>
      <router-link to="/">Home / </router-link>
      <router-link to="/employ">employ / </router-link>
      <router-link v-if="!key" to="/register">register / </router-link>
      <router-link v-if="!key" to="/login">login / </router-link>
      <button v-if="key" @click="signout">登出</button>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { mapState, mapMutations } from "vuex"
 export default {
   data(){
     return{
     }
   },
   methods:{
     ...mapMutations(['DELETEKEY']),
     signout(){
       sessionStorage.clear();
       this.DELETEKEY()
       if(this.$route.path !== '/login'){
         this.$router.push('/login')
       }
       alert('已登出')
     }
   },
   computed:{
     ...mapState(['key'])
   },
   mounted() {
   }
 }
</script>