<template>
    <div>
       <table class="table">
           <thead>
               <tr>
                   <th>Họ tên</th>
                   <th>Địa chỉ</th>
                   <th>Ngày sinh</th>
               </tr>
           </thead>
           <tbody>
           <tr v-for='employee in allEmployee' :key="employee.employeeId">
               <td>{{employee.emploeeName}}</td>
               <td>{{employee.employeeAddress}}</td>
               <td>{{employee.employeeDateOfBirth}}</td>
               <td><router-link :to="{path:'/edit',params:employee, query:{id: employee.employeeId} }" class="btn btn-dark">Sua</router-link></td>
               <td><span class="btn btn-dark" v-on:click='deleteData(employee.employeeId)'>Xoa</span></td>
           </tr>
           </tbody>
       </table>
       <router-link class="btn btn-dark" to='add'>Them</router-link>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'Vuex'
import moment from 'moment'
export default{
    name: 'Employee',
    data(){ 
        return {
            
        }
    },
    methods: {
        ...mapActions(['fetchEmployee', 'deleteEmployee']),
        deleteData(id){
           
            this.deleteEmployee(id);
        }   
    },
    
    computed: mapGetters(['allEmployee']),
    created() {
        this.fetchEmployee();
    },
}
</script>
