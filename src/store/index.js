import Vuex from 'Vuex';
import Vue from 'vue';
import EmployeeModule from './modules/EmployeeModule';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        EmployeeModule
    }
});