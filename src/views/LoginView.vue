<template>
  <div>
    <h1>登入</h1>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
              prop="email"
              label="信箱"
              :rules="[
      { required: true, message: '請輸入信箱', trigger: 'blur' },
      { type: 'email', message: '請輸入正確的信箱格式', trigger: ['blur', 'change'] }
    ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
              label="密碼"
              prop="password"
              :rules="[
      { required: true, message: '密碼要大於6個字元', validator: validatePass, trigger: 'blur' },
    ]">
            <el-input type="password" v-model="dynamicValidateForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations } from "vuex"
  export default {
    name: 'LoginView',
    data(){
      return{
        dynamicValidateForm: {
          email: '',
          password: ''
        },
      }
    },
    methods:{
      ...mapMutations(['SETKEY']),
      validatePass(rule, value, callback){
        if (value === '') {
          callback(new Error('請勿輸入空密碼'));
        } else if(value.length <= 5){
          callback(new Error('密碼要大於6個字元'));
        } else {
          callback();
        }
      },
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            try {
              const { email, password } = this.dynamicValidateForm
              const { data } = await this.$http.get(`http://localhost:3000/users?email=${email}&password=${password}`)
              if(data.length){
                this.$router.push('/')
                sessionStorage.setItem('key', data[0].key)
                this.SETKEY(data[0].key)

                alert('登入成功')
              }else if(!data.length){
                alert('信箱或密碼錯誤，請重新輸入')
                this.$refs[formName].resetFields()
              }
            } catch (error) {
              console.error('An error occurred:', error);
            }
          } else {
            // 表單失敗會到這
            console.log('error submit!!失敗');
            return false;
          }
        });
      }
    }
  }
</script>