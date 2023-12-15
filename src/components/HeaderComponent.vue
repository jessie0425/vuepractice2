<script>
  import {mapState, mapMutations} from "vuex";

  export default {
    name:'HeaderComponent',
    methods:{
      ...mapMutations(['ADD'])
    },
    computed:{
      ...mapState(['newPerson'])
    }
  }
</script>
<template>
  <div>
    <header>
      <h1>EmployView頁面</h1>
      <fieldset>
        <legend>指令綜合小練習</legend>
        <div>
          <span>姓名: </span>
          <input type="text" placeholder="請輸入姓名" v-model="newPerson.name">
        </div>
        <div>
          <span>年齡: </span>
          <input type="text" placeholder="請輸入年齡" v-model="newPerson.age">
        </div>
        <div>
          <span>性別: </span>
          <select v-model="newPerson.sex">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div>
          <span>手機: </span>
          <input type="text" placeholder="請輸入手機" v-model="newPerson.phone">
        </div>
        <button @click="ADD">創建新用戶</button>
      </fieldset>
    </header>
  </div>
</template>
<style scoped lang="css">
fieldset {
  border: 1px solid orangered;
  margin-bottom: 20px;
}
fieldset  input {
  width: 200px;
  height: 30px;
  margin: 10px 0;
}

</style>