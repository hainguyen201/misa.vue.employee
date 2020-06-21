<template>
    <div class="addform">
    <div>
      <span>Họ tên</span>
      <input type="text" v-model="emploeeName"/>
    </div>
    <div>
      <span>Ngày sinh</span>
      <DatePicker style="display: inline-block" v-model="employeeDateOfBirth"></DatePicker>
    </div>
    <div>
      <span>Địa chỉ</span>
      <input type="text" v-model="employeeAddress"/>
    </div>
    <button class="btn btn-dark" v-on:click='putData()'>Thêm</button>
  </div>
</template>
<script>
import router from '../router'
import DatePicker from 'vuejs-datepicker'
import {mapActions} from 'Vuex'
import moment from 'moment'
export default {
    name: 'EditEmployeeForm',
    data(){
        return {
            id:this.$route.query.id,
            emploeeName:'',
            employeeDateOfBirth:null,
            employeeAddress:'',
            employee:{}
        }
    },
    created() {
        
    },
    components:{
        DatePicker
    },
    methods:{
        ...mapActions(['putEmployee']),
        putData(){
            this.employee.emploeeName=this.emploeeName;
            this.employee.employeeDateOfBirth=this.dataFormat(this.employeeDateOfBirth);
            this.employee.employeeAddress=this.employeeAddress;
            this.employee.employeeId=this.id
            console.log(this.employee);
            this.putEmployee(this.employee)
        },
        dataFormat(value){
          if(value){
              return moment(String(value)).format('yyyy-MM-DD')
          }
      }
    }
}

</script>
<style  scoped>
.addform span{
    display: inline-block;
    min-width: 100px;
}
.addform>div{
    margin: 10px;
}
</style>