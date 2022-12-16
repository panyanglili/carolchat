<template>
  <div class="info">
    <div style="text-align: left;padding-bottom: 20px;font-size: larger">
      My personal information
      <el-button type="primary" icon="Edit" circle @click="showForm" />
    </div>
    <el-descriptions style="font-size: 40px" title="" size="large" direction="vertical">
      <el-descriptions-item label="Username">{{userInfo.name}}</el-descriptions-item>
      <el-descriptions-item label="Telephone">{{userInfo.telephone}}</el-descriptions-item>
<!--      <el-descriptions-item label="Remarks">-->
<!--        <el-tag size="small">School</el-tag>-->
<!--      </el-descriptions-item>-->
      <el-descriptions-item label="My shipping address"
      >{{userInfo.address}}</el-descriptions-item
      >
    </el-descriptions>
    <el-form v-if="formVisible" :model="form" label-width="120px" label-position="top" size="large">
      <el-form-item label="Account Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Telephone">
        <el-input v-model="form.telephone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="form.address" autocomplete="off" />
      </el-form-item>
<!--      <el-form-item label="Activity zone">-->
<!--        <el-select v-model="form.region" placeholder="please select your zone">-->
<!--          <el-option label="Zone one" value="shanghai" />-->
<!--          <el-option label="Zone two" value="beijing" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Activity time">-->
<!--        <el-col :span="11">-->
<!--          <el-date-picker-->
<!--              v-model="form.date1"-->
<!--              type="date"-->
<!--              placeholder="Pick a date"-->
<!--              style="width: 100%"-->
<!--          />-->
<!--        </el-col>-->
<!--        <el-col :span="2" class="text-center">-->
<!--          <span class="text-gray-500">-</span>-->
<!--        </el-col>-->
<!--        <el-col :span="11">-->
<!--          <el-time-picker-->
<!--              v-model="form.date2"-->
<!--              placeholder="Pick a time"-->
<!--              style="width: 100%"-->
<!--          />-->
<!--        </el-col>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Instant delivery">-->
<!--        <el-switch v-model="form.delivery" />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Activity type">-->
<!--        <el-checkbox-group v-model="form.type">-->
<!--          <el-checkbox label="Online activities" name="type" />-->
<!--          <el-checkbox label="Promotion activities" name="type" />-->
<!--          <el-checkbox label="Offline activities" name="type" />-->
<!--          <el-checkbox label="Simple brand exposure" name="type" />-->
<!--        </el-checkbox-group>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Resources">-->
<!--        <el-radio-group v-model="form.resource">-->
<!--          <el-radio label="Sponsor" />-->
<!--          <el-radio label="Venue" />-->
<!--        </el-radio-group>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Activity form">-->
<!--        <el-input v-model="form.desc" type="textarea" />-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button @click="formVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
export default {
  name: "myInfo",
  data(){
    return{
      userInfo:{
        name:'Perry',
        telephone:'+86 15145052701',
        address:'1 Century Dadao, Pudong New Area, Shanghai, China',
      },
      form:{
        name:'',
        telephone:'',
        address:'',
        // pass:'',
        // checkPass:'',
        // region:'',
        // date1:'',
        // date2:'',
        // delivery:false,
        // type:[],
        // resource:'',
        // desc:'',
      },
      formVisible:false,
    }
  },
  methods:{
    onSubmit(){
      // console.log('submit!')
      this.userInfo.name = this.form.name;
      this.userInfo.telephone = this.form.telephone;
      this.userInfo.address = this.form.address;
      ElMessage({
        message: 'Saving the modification succeeded!',
        type: 'success',
      })
      this.formVisible = false;
    },

    resetForm(){

    },
    showForm(){
      this.formVisible = true;
      this.form.name = this.userInfo.name;
      this.form.telephone = this.userInfo.telephone;
      this.form.address = this.userInfo.address;
    }
  }
}
</script>

<style scoped>
.info{
  margin: 10px !important;
  font-size: larger;
}
:deep(.el-form){
  width: 50%;
}
:deep(.el-form-item){
  padding: 5px;
}
:deep(.el-form-item__label),
:deep(.el-form-item__content){
  font-size: larger;
  display: flex;
  justify-content: right;
  padding-bottom: 5px;
}
:deep(.el-button){
  margin-left: 20px !important;
}
</style>