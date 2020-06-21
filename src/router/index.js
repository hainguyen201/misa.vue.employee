import Vue from 'vue'
import Router from 'vue-router'
import Employee from '@/components/Employee'
import EditEmployeeForm from '@/components/EditEmployeeForm'
import AddEmployeeForm from '@/components/AddEmployeeForm'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Employee',
            component: Employee
        },
        {
            path: '/add',
            name: 'AddEmployeeForm',
            component: AddEmployeeForm
        },
        {
            path: '/edit',
            name: 'EditEmployeeForm',
            component: EditEmployeeForm,

        }
    ]
})