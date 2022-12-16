<template>
  <div class="topic">
    <div class="search">
      <span style="display: flex;align-items: center">
        Search:&nbsp;
        <el-input style="width: 200px" v-model="searchInput" placeholder="Search for what interests you" clearable />
      </span>
      <el-button size="small" round style="display: flex;align-content: baseline" @click="dialogFormVisible = true">
        Say something &nbsp;
        <el-icon size="15"><Plus /></el-icon>
      </el-button>
    </div>
    <el-dialog id="newForm" v-model="dialogFormVisible"
               title="Let's talk about something interesting">
      <el-form :model="form">
        <el-form-item label="Title:" label-width="140px">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Content:" label-width="140px">
          <el-input v-model="form.content" autocomplete="off" />
          <!--          <el-select v-model="form.region" placeholder="Please select a zone">-->
<!--            <el-option label="Zone No.1" value="shanghai" />-->
<!--            <el-option label="Zone No.2" value="beijing" />-->
<!--          </el-select>-->
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="releaseNew">
          Release
        </el-button>
      </span>
      </template>
    </el-dialog>

    <ul>
<!--      循环谁给谁加v-for-->
      <li v-for="item in topicList" :key="item.id" v-show="item.show">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>
                {{item.title}}
                <el-tag class="ml-2" type="info">{{item.type}}</el-tag>
              </span>
              <el-button class="button" text>Show more</el-button>
            </div>
          </template>
          <div class="card-body"><p>{{item.content}}</p></div>
          <div class="icon">
            <span>
              <el-avatar :size="20"> {{item.account.slice(0,2)}} </el-avatar>
              {{item.account}}
            </span>
            <span style="display: flex;align-items: flex-start;padding-top: 5px">
              {{item.time}} &nbsp;
              <el-icon style="font-size: 15px"><ChatDotRound /></el-icon>
            </span>
          </div>
<!--          <div v-for="o in 1" :key="o" class="text item">{{ 'List item ' + o }}</div>-->
        </el-card>
      </li>
    </ul>
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>

<script>
import $ from 'jquery' //引入jquery库
export default {
  name: "hotTopic",
  data(){
    return{
      topicList:[
        {
          id:'001',
          account:'Flower',
          src:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          title:'How to get along with family better？',
          content:'Getting along with my family is a very important topic. I always feel that I am communicating with them in an incorrect way, but I can\'t help myself and it bothers me',
          type:'emotion',
          show:true,
          time:'2022-12-01 10:35:09',
        },
        {
          id:'002',
          account:'Nelson',
          title:'What if the interview result is not satisfactory?',
          content:'I caught a cold during the interview, and I was nervous to make the first speech. I failed to answer some questions. Friends, please help me think about the next steps.',
          type:'career',
          show:true,
          time:'2022-11-27 12:35:59',},
        {
          id:'003',
          account:'Annalee',
          title:'Friends, what do you do on the weekends',
          content:'What do you recommend for the weekend? I don\'t know what other activities I can do besides watching movies, eating, reading books. I really want to travel nearby, but I don\'t know where to go for fun',
          type:'casual',
          show:true,
          time:'2022-11-24 13:26:33',
        },
        {
          id:'004',
          account:'Columbine',
          title:'What does an adult breakup look like?',
          content:'He said break up with me on wechat, I was very calm say OK. I told my bestie that I broke up, she didn\'t say anything, just poured me a glass of wine. I was calm when I got home, took a hot bath and even applied a facial mask. The next day after work I went to buy new clothes and do a new hairstyle. I know that none of this is my fault. Only by making myself better can I meet a better person.',
          type:'emotion',
          show:true,
          time:'2022-11-22 22:15:33',
        },
        {
          id:'005',
          account:'Vincent',
          title:'Interview skills exchange!',
          content:'Interviews are so hard! I\'m in finance. There are so many good candidates. Welcome sisters, let\'s exchange interview skills!',
          type:'career',
          show:true,
          time:'2022-11-21 22:15:33',
        },
        {
          id:'006',
          account:'Marisol',
          title:'Date crush!',
          content:'I\'m so excited to have dinner with my crush tonight. He chose a very beautiful restaurant. He was a gentleman and took good care of me in many details. I was so happy!',
          type:'emotion',
          show:true,
          time:'2022-11-12 18:15:33',
        },
        {
          id:'007',
          account:'Breanna',
          title:'Don\'t know what to do in the future career development path, confused',
          content:'Sisters, please share some ideas. I used to study art, but I felt like I was losing interest, but I didn\'t know what to do, I didn\'t feel like I had any skills. What do you recommend?',
          type:'career',
          show:true,
          time:'2022-10-29 10:25:23',
        },
        {
          id:'008',
          account:'Lanaya',
          title:'Badminton makes friends!',
          content:'Are there any sisters who love playing badminton? We can communicate together. I play about once a week on average. I\'m a beginner and I want to share some skills with you.',
          type:'exercise',
          show:true,
          time:'2022-10-26 12:15:33',
        },
        {
          id:'009',
          account:'Danylynn',
          title:'Date crush!',
          content:'I\'m so excited to have dinner with my crush tonight. He chose a very beautiful restaurant. He was a gentleman and took good care of me in many details. I was so happy!',
          type:'emotion',
          show:true,
          time:'2022-10-19 17:15:33',
        },
        {
          id:'010',
          account:'Derrick',
          title:'What if the interview result is not satisfactory?',
          content:'I caught a cold during the interview, and I was nervous to make the first speech. I failed to answer some questions. Friends, please help me think about the next steps.',
          type:'career',
          show:true,
          time:'2022-10-14 17:15:33',
        },
        {
          id:'011',
          account:'Lexus',
          title:'It\'s too hard to play games. I can\'t play shooting games',
          content:'I don\'t seem to have any talent to play games, play games always lose, there are no sisters can teach me. I don\'t know how to play, but I love to play, you know',
          type:'casual',
          show:true,
          time:'2022-10-12 17:06:33',
        },
        {
          id:'012',
          account:'Astin',
          title:'Yoga can really improve your mood',
          content:'I started to do yoga in June this year. I feel my whole body is healthy and my muscles and bones are relaxed. And when you do yoga, you feel calm and you feel better.',
          type:'health',
          show:true,
          time:'2022-10-09 12:06:33',
        },
        {
          id:'013',
          account:'Freedom Wind',
          title:'How to get along with family better？',
          content:'Getting along with my family is a very important topic. I always feel that I am communicating with them in an incorrect way, but I can\'t help myself and it bothers me',
          type:'emotion',
          show:true,
          time:'2022-10-02 09:16:33',
        },
        {
          id:'014',
          account:'Aubree',
          title:'Don\'t know what to do in the future career development path, confused',
          content:'Sisters, please share some ideas. I used to study art, but I felt like I was losing interest, but I didn\'t know what to do, I didn\'t feel like I had any skills. What do you recommend?',
          type:'career',
          show:true,
          time:'2022-09-22 15:16:27',
        },
        {id:'015',
          account:'Anemone',
          title:'Yoga can really improve your mood',
          content:'I started to do yoga in June this year. I feel my whole body is healthy and my muscles and bones are relaxed. And when you do yoga, you feel calm and you feel better.',
          type:'health',
          show:true,
          time:'2022-09-19 15:16:27',
        },
        {
          id:'016',
          account:'Nicolas',
          title:'Interview skills exchange!',
          content:'Interviews are so hard! I\'m in finance. There are so many good candidates. Welcome sisters, let\'s exchange interview skills!',
          type:'career',
          show:true,
          time:'2022-09-15 22:16:27',
        },
        {
          id:'017',
          account:'Beth',
          title:'Yoga can really improve your mood',
          content:'I started to do yoga in June this year. I feel my whole body is healthy and my muscles and bones are relaxed. And when you do yoga, you feel calm and you feel better.',
          type:'health',
          show:true,
          time:'2022-09-12 23:16:27',
        },
        {id:'018',
          account:'Julius',
          title:'Date crush!',
          content:'I\'m so excited to have dinner with my crush tonight. He chose a very beautiful restaurant. He was a gentleman and took good care of me in many details. I was so happy!',
          type:'emotion',
          show:true,
          time:'2022-09-09 22:45:27',
        },
        {
          id:'019',
          account:'Mystery Lady',
          title:'What if the interview result is not satisfactory?',
          content:'I caught a cold during the interview, and I was nervous to make the first speech. I failed to answer some questions. Friends, please help me think about the next steps.',
          type:'career',
          show:true,
          time:'2022-09-02 23:22:27',
        },
        {id:'020',
          account:'Leonie',
          title:'Friends, what do you do on the weekends',
          content:'What do you recommend for the weekend? I don\'t know what other activities I can do besides watching movies, eating, reading books. I really want to travel nearby, but I don\'t know where to go for fun',
          type:'casual',
          show:true,
          time:'2022-08-27 23:05:27',
        },
      ],
      searchInput:'',
      dialogFormVisible:false,
      form:{
        title:'',
        content:'',
      },
    }
  },
  created() {
  },
  watch:{
    searchInput(){
      if (this.searchInput === ''){
        this.topicList.forEach(item =>{
          item.show = true
        })
      } else if (this.searchInput !== ''){
        this.topicList.forEach(item =>{
          if(item.title.indexOf(this.searchInput) == -1 && item.content.indexOf(this.searchInput) == -1){
            item.show = false
          }else if(item.title.indexOf(this.searchInput) != -1 || item.content.indexOf(this.searchInput) != -1){
            item.show = true
          }
        })
      }
    }
  },
  methods:{
    releaseNew(){
      let temp = {
        id:'001',
        account:'Flower',
        src:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        title:'',
        content:'',
        show:true,
        time:'2022-12-01 10:35:09',
      }
      temp.title = this.form.title;
      temp.content = this.form.content;
      this.topicList.unshift(temp);
      // $(document).ready(function (){
      //   let $newForm = $(".newForm");
      //   console.log('$newForm',$newForm);
      // });
      this.dialogFormVisible = false;
    }
  }
}
</script>

<style scoped>
.topic{
  margin: 10px 20px !important;
}
.topic li{
  margin-top: 12px !important;
  height: 116px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  /*text-decoration: underline;*/
  background-color: #F5F7FA;
}
.card-body{
  height: 47px;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  /*white-space: nowrap; !*超出的部分隐藏*!*/
  text-overflow: ellipsis;
}
:deep(.el-card__body){
  padding: 3px 10px 0px 10px;
  text-align: left;
  height: 70px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.box-card {
  width: 100%;
  height: 100%;
}
button{
  height: 40px;
}
:deep(.el-card__header){
  height: 40px;
  padding: 0px;
  line-height: 40px;
}
.icon {
  font-size: small;
  color: #909399;
  display: flex;
  justify-content: space-between;
}
:deep(.el-icon):hover{
  cursor:pointer; /*鼠标样式*/
}
.search{
  display: flex;
  justify-content: space-between;
}
:deep(.el-button--text) {
  margin-right: 15px;
}
:deep(.el-select) {
  width: 300px;
}
:deep(.el-input) {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
:deep(.el-button){
  margin-left: 20px !important;
}
:deep(.el-form-item){
  margin-bottom: 10px !important;
}
#newForm{
  width: 300px;
  height: 200px;
}
:deep(.el-dialog){
  margin: 200px auto !important;
}
</style>