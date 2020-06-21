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
    async putEmployee({ commit }, employee, id) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.put('https://localhost:44346/api/' + id, JSON.stringify(employee), config);
        console.log(response.data);
    },
    dataFormat(value) {
        if (value) {
            return moment(String(value)).format('yyyy-MM-DD')
        }
    }
};
const mutations = {
    setEmployees: (state, employees) => (state.employees = employees)
};
export default {
    state,
    getters,
    actions,
    mutations
};