postData(){
          var employee={};
          employee.employeeDateOfBirth=this.dataFormat(this.employeeDateOfBirth);
          employee.employeeName=this.emploeeName;
          employee.employeeAddress=this.employeeAddress;
          // employee.avatar=this.$refs.avatarImage.file[0];
          console.log(employee)
          let fd= new FormData();
          // new Blob([JSON.stringify(employee)], {type: "application/json"})
          let reader= new FileReader();
          reader.readAsDataURL(this.$refs.avatarImage.files[0])
          reader.onload= (e)=>{
            fd.append('employee', JSON.stringify(employee));
            fd.append('file', e.target.result)
            this.postEmployee(fd);
          }


      },
