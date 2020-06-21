import axios from 'axios'
import moment from 'moment'
const state = {
    employees: []
};
const getters = {
    allEmployee: state => state.employees
};
const actions = {
    async fetchEmployee({ commit }) {
        const response = await axios.get('https://localhost:44346/api');
        console.log(response.data);
        commit('setEmployees', response.data.data);
    },
    async postEmployee({ commit }, employee) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post('https://localhost:44346/api', JSON.stringify(employee), config);
        console.log(response.data);

    },
    async putEmployee({ commit }, employee) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const url = 'https://localhost:44346/api/' + employee.employeeId;
        try {
            console.log(employee);
            const response = await axios.put(url, JSON.stringify(employee), config);
            console.log(response.data);
        } catch (ex) {
            console.log(ex)
        }

    },
    async deleteEmployee({ commit }, id) {

        const url = 'https://localhost:44346/api/' + id;
        const respone = await axios.delete(url);
        console.log(respone.data)
        if (respone.data.success === true) {
            commit('deleteEmployee', id);
        }
    },
    dataFormat(value) {
        if (value) {
            return moment(String(value)).format('yyyy-MM-DD')
        }
    }
};
const mutations = {
    setEmployees: (state, employees) => (state.employees = employees),
    deleteEmployee: (state, id) => (state.employees = state.employees.filter(e => e.employeeId != id))
};
export default {
    state,
    getters,
    actions,
    mutations
};