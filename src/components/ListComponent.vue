<script>
  import ItemComponent from '../components/ItemComponent.vue'
  export default {
    name:'ListComponent',
    data(){
      return{

      }
    },
    components:{
      ItemComponent
    }

  }
</script>
<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>姓名</th>
        <th>性別</th>
        <th>年齡</th>
        <th>手機</th>
        <th>刪除</th>
      </tr>
      </thead>
      <ItemComponent></ItemComponent>
    </table>
  </div>
</template>

<style scoped lang="css">
  table {
    width: 600px;
    border: 2px solid orangered;
    text-align: center;
  }
  thead {
    background-color: orangered;
  }
</style>
