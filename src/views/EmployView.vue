<template>
  <div id="employ">
    <HeaderComponent></HeaderComponent>
    <ListComponent></ListComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ListComponent from '../components/ListComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name:'EmployView',
  components:{
    HeaderComponent,
    ListComponent,
    FooterComponent
  },
  data() {
    return{
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="css">
#employ {
  margin: 50px auto; width: 600px;
}
fieldset {
  border: 1px solid orangered;
  margin-bottom: 20px;
}
fieldset  input {
  width: 200px;
  height: 30px;
  margin: 10px 0;
}
table {
  width: 600px;
  border: 2px solid orangered;
  text-align: center;
}
thead {
  background-color: orangered;
}
</style>
