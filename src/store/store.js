import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        persons:[
            {name:'張三', age:18, sex:'男', phone:'0911112304'},
            {name:'李四', age:28, sex:'女', phone:'0912112314'},
            {name:'王五', age:38, sex:'男', phone:'0911312324'},
            {name:'趙六', age:48, sex:'女', phone:'0914112344'},
            {name:'李七', age:58, sex:'男', phone:'0911512354'},
        ],
        newPerson:{name:'', age:0, sex:'男', phone:''},
        key: ''
    },
    actions: {

    },
    mutations: {
        ADD(state){
            const { name, age, sex, phone } = state.newPerson
            console.log(name, age, sex, phone) // 有空再篩選手機格式
            if(!name || !age || !phone){
                alert('請勿新增空資料')
                return
            }
            state.persons.unshift({...state.newPerson})
            state.newPerson = { name: '', age: 0, sex: '男', phone: '' };
        },
        DEL(state, index){
            state.persons.splice(index, 1)
        },
        GETKEY(state, value){
            state.key = value
        },
        SETKEY(state, value){
            state.key = value;
            // sessionStorage.setItem('key', value);
        },
        DELETEKEY(state){
            state.key = ''
            // sessionStorage.setItem('key', value);
        },
    }
})
export default store