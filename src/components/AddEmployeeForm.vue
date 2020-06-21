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
    <button class="btn btn-dark" v-on:click='postData()'>Thêm</button>
  </div>
</template>
<script>
import DatePicker from "vuejs-datepicker";
import moment from 'moment';
import {mapActions} from "Vuex";
export default {
  name: "AddEmployeeForm",
  data() {
      return {
          emploeeName:'',
          employeeAddress:'',
          employeeDateOfBirth:null, 
          employee:{}
      }
  },
  components: {
    DatePicker
  },
  methods:{
      ...mapActions(['postEmployee']),
      postData(){
          var employee={};
          employee.employeeDateOfBirth=this.dataFormat(this.employeeDateOfBirth);
          employee.emploeeName=this.emploeeName;
          employee.employeeAddress=this.employeeAddress;
          console.log(employee)
          this.postEmployee(employee);

      },
      dataFormat(value){
          if(value){
              return moment(String(value)).format('yyyy-MM-DD')
          }
      }
  }
};
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