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

</style>
