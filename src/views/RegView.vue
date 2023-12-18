<template>
  <div>
    <h1>註冊</h1>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="email" label="信箱">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="確認密碼" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: 'RegView',
  data() {
    return {
      ruleForm: {
        email: '',
        pass: '',
        checkPass: '',
        key: ''
      },
      rules: {
        email: [
          { required: true, message: '請輸入信箱', trigger: 'blur' },
          { type: 'email', message: '請輸入正確的信箱格式', trigger: ['blur', 'change'] }
        ],
        pass: [
          { required: true, validator: this.validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: this.validatePass2, trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    ...mapMutations(['SETKEY']),
    validatePass(rule, value, callback){
      if (value === '' || value.length <= 5) {
        callback(new Error('密碼需大於6個字串'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    },
    validatePass2(rule, value, callback){
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const { email, pass } = this.ruleForm
            // 檢查是否重複
            const { data: repeat } = await this.$http.get(`http://localhost:3000/users?email=${email}`)
            console.log(!repeat.length, '內容是')
            if (repeat.length) {
              // 清空form
              this.$refs[formName].resetFields()
              alert('此信箱已註冊! 請使用其他信箱')
              return
            }
            // 送出
            this.ruleForm.key = new Date().getTime() + email
            const response = await this.$http.post(`http://localhost:3000/users`, {
              email,
              pass,
              key: this.ruleForm.key
            })
            console.log(response, '回傳結果')
          //   session
            sessionStorage.setItem('key', this.ruleForm.key);
            this.SETKEY(this.ruleForm.key)
            this.$router.push('/')
          } catch (error) {
            console.error('An error occurred:', error);
          }
        } else {
          // 表單失敗會到這
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>