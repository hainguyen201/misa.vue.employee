<template>
  <div class="addform">
    <div>
      <span>Họ tên</span>
      <input type="text" v-model="emploeeName" />
    </div>
    <div>
      <span>Ngày sinh</span>
      <DatePicker
        style="display: inline-block"
        v-model="employeeDateOfBirth"
      ></DatePicker>
    </div>
    <div>
      <span>Địa chỉ</span>
      <input type="text" v-model="employeeAddress" />
    </div>
    <div><input type="file" accept="image/jpeg" ref="avatarImage" /></div>
    <button class="btn btn-dark" v-on:click="postData()">Thêm</button>
    <button class="btn btn-dark" v-on:click="getData()">Get</button>
    <div ref="listImage">
      <img v-for="avatar in avatars" :key="avatar.id" :src="avatar" />
    </div>
  </div>
</template>
<script>
import DatePicker from "vuejs-datepicker";
import moment from "moment";
import { mapActions } from "vuex";
export default {
  name: "AddEmployeeForm",
  data() {
    return {
      emploeeName: "",
      employeeAddress: "",
      employeeDateOfBirth: null,
      employee: {},
      avatars: [],
    };
  },
  components: {
    DatePicker,
  },
  methods: {
    ...mapActions(["postEmployee", "fetchEmployee"]),
    postData() {
      var employee = {};
      employee.employeeDateOfBirth = this.dataFormat(this.employeeDateOfBirth);
      employee.employeeName = this.emploeeName;
      employee.employeeAddress = this.employeeAddress;
      // employee.avatar=this.$refs.avatarImage.file[0];
      console.log(employee);
      let fd = new FormData();
      // new Blob([JSON.stringify(employee)], {type: "application/json"})
      let reader = new FileReader();
      let file = this.$refs.avatarImage.files[0];
      fd.append("employee", JSON.stringify(employee));
      if (typeof file !=='undefined' &&  file !== null) {
        debugger
        reader.readAsDataURL(this.$refs.avatarImage.files[0]);
        reader.onload = (e) => {
          fd.append("file", e.target.result);
          this.postEmployee(fd);
        };
      }else{
        fd.append("file", '');
        this.postEmployee(fd);
      }

    },
    getData() {
      this.avatars = [];
      this.fetchEmployee().then((data) => {
        data.forEach((element) => {
          console.log(this.dataFormat(element.employeeDateOfBirth));
          element.avatar = atob(element.avatar);
          console.log(element.avatar);
          this.avatars.push(element.avatar);
          // this.$refs.listImage.append(`<image src="${element.avatar}">`)
        });
        // console.log(data)
      });
    },
    dataFormat(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/yyyy");
      } else {
        return "";
      }
    },
  },
};
</script>
<style  scoped>
.addform span {
  display: inline-block;
  min-width: 100px;
}
.addform > div {
  margin: 10px;
}
</style>
diamond
