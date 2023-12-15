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
      { required: true, message: '請輸入密碼', validator: validatePass, trigger: 'blur' },
    ]">
            <el-input type="password" v-model="dynamicValidateForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('dynamicValidateForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
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
      validatePass(rule, value, callback){
        if (value === '') {
          callback(new Error('請輸入密碼'));
        } else if(value.length <= 5){
          callback(new Error('密碼要大於6個字元'));
        } else {
          callback();
        }
      },
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交');
          } else {
            return false;
          }
        });
      }
    }
  }
</script>