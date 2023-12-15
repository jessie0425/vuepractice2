<script>
  import { mapState, mapMutations } from "vuex";
  export default {
    name:'ItemComponent',
    data(){
      return{
      }
    },
    methods:{
      ...mapMutations(['DEL'])
    },
    computed:{
      ...mapState(['persons'])
    }
  }
</script>
<template>
    <tbody>
      <tr v-for="(person, i) in persons" :key="person.phone">
        <td>{{person.name}}</td>
        <td>{{person.sex}}</td>
        <td>{{person.age}}</td>
        <td v-text="person.phone"></td>
        <td>
          <button @click="DEL(i)">刪除</button>
        </td>
      </tr>
    </tbody>
</template>