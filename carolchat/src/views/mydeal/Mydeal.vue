<template>
  <div class="radio">
    <el-radio-group  v-model="radio">
      <el-radio-button label="What I buy" />
      <el-radio-button label="What I sell" />
      <el-radio-button label="Order statistics" />
    </el-radio-group>
  </div>
    <div  class="table" v-if="radio === 'What I buy'">
      <el-table :data="buyTableData" style="width: 100%" stripe="stripe" :row-style="{height:'50px'}">
        <el-table-column prop="name" label="Trading account" min-width="110" />
        <el-table-column prop="item" label="Item Information" min-width="200"/>
        <el-table-column prop="price" label="Purchase price" min-width="100"/>
        <el-table-column prop="id" label="Order No." min-width="120"/>
        <el-table-column prop="date" label="Trade Date" min-width="100" />
        <el-table-column prop="region" label="Region" min-width="100" />
      </el-table>
    </div>
    <div  class="table" v-if="radio === 'What I sell'">
      <el-table :data="sellTableData" style="width: 100%" stripe="stripe" :row-style="{height:'50px'}">
        <el-table-column prop="name" label="Trading account" min-width="120" />
        <el-table-column prop="item" label="Item Information" min-width="190"/>
        <el-table-column prop="price" label="Selling price" min-width="120"/>
        <el-table-column prop="id" label="Order No." min-width="120"/>
        <el-table-column prop="date" label="Trade Date" min-width="100" />
        <el-table-column prop="region" label="Region" min-width="100" />
      </el-table>
    </div>
    <div style="display: flex">
      <div class="mapBox" v-if="radio === 'Order statistics'">
        <div id="chart"  :style="mapStyle">
          <!--    <el-empty description="I'm working hard on it ~" />-->
        </div>
      </div>
      <div class="barBox" v-if="radio === 'Order statistics'">
        <div id="barBuy" :style="barStyle"></div>
        <div id="barSell" :style="barStyle"></div>
      </div>
    </div>
  <div class="page">
    <el-pagination layout="prev, pager, next" :total="totalDealNo" current-page= "currentPage" @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import * as echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例
import UKmap from "./UKmap.json"
export default {
  name: "myDeal",
  data(){
    return{
      oriBuyTableData:[
        {
          id:'0001',
          date: '2022-05-01',
          name: 'Jack',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0002',
          date: '2022-05-02',
          name: 'Aril',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0003',
          date: '2022-05-04',
          name: 'Perry',
          item: 'L\'Étranger (The Outsider) , a short story by Albert Camus from France, is a representative work of existentialist literature',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0004',
          date: '2022-05-14',
          name: 'A cloud',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£12.0',
          region:'England',
        },
        {
          id:'0005',
          date: '2022-05-25',
          name: 'Rock',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£9.0',
          region:'England',
        },
        {
          id:'0006',
          date: '2022-06-06',
          name: 'Kai',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£3.9',
          region:'England',
        },
        {
          id:'0007',
          date: '2022-06-13',
          name: 'Peter',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0008',
          date: '2022-07-10',
          name: 'Kaiser',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£1.2',
          region:'England',
        },
        {
          id:'0009',
          date: '2022-08-16',
          name: 'Tom',
          item: 'A sofa throw pillow, brown, 40cm by 40cm, very soft',
          price: '£2.0',
          region:'England',
        },
        {
          id:'0010',
          date: '2022-09-17',
          name: 'Leona',
          item: 'A blue baseball cap, dark blue like the sea, almost new',
          price: '£1.9',
          region:'England',
        },
        {
          id:'0011',
          date: '2022-10-07',
          name: 'Agatha',
          item: 'Front-end development professional books, 9 new, very suitable for beginners',
          price: '£2.9',
          region:'England',
        },
        {
          id:'0012',
          date: '2022-10-17',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0013',
          date: '2022-10-24',
          name: 'Neymar001',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£0.9',
          region:'England',
        },
        {
          id:'0014',
          date: '2022-10-29',
          name: 'Breanna',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£0.6',
          region:'England',
        },
        {
          id:'0015',
          date: '2022-11-04',
          name: 'Breanna',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£5.5',
          region:'England',
        },
        {
          id:'0016',
          date: '2022-11-15',
          name: 'Breanna',
          item: 'A clear glass for drinking wine or coffee, with a lid',
          price: '£1.7',
          region:'England',
        },
        {
          id:'0017',
          date: '2022-11-19',
          name: 'Deja',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£9.9',
          region:'England',
        },
        {
          id:'0018',
          date: '2022-11-23',
          name: 'Siri',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£10.0',
          region:'England',
        },
        {
          id:'0019',
          date: '2022-12-01',
          name: 'Gala',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£6.0',
          region:'England',
        },
        {
          id:'0020',
          date: '2022-12-02',
          name: 'Tierney',
          item: 'A beautiful mirror can be used for makeup, white, can not adjust the height',
          price: '£1.5',
          region:'England',
        },
        {
          id:'0021',
          date: '2022-12-04',
          name: 'Columbine',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£6.0',
          region:'England',
        },
        {
          id:'0022',
          date: '2022-12-08',
          name: 'Beth',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£2.0',
          region:'England',
        },
        {
          id:'0023',
          date: '2022-12-10',
          name: 'Breanna',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£2.0',
          region:'England',
        },
        {
          id:'0024',
          date: '2022-12-11',
          name: 'Nikanor',
          item: 'A phone case, pink, for the iPhone12 series, soft case rather than hard case',
          price: '£2.5',
          region:'England',
        },
        {
          id:'0025',
          date: '2022-12-12',
          name: 'Columbine',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£1.0',
          region:'England',
        },
      ],
      buyTableData:[],
      oriSellTableData:[
        {
          id:'0001',
          date: '2022-06-01',
          name: 'Jack',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0002',
          date: '2022-06-11',
          name: 'Aril',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0003',
          date: '2022-06-25',
          name: 'Perry',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0004',
          date: '2022-07-14',
          name: 'Tim',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£12.0',
          region:'England',
        },
        {
          id:'0005',
          date: '2022-07-19',
          name: 'Rock',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£9.0',
          region:'England',
        },
        {
          id:'0006',
          date: '2022-07-22',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0007',
          date: '2022-08-07',
          name: 'Peter',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0008',
          date: '2022-09-13',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£1.2',
          region:'England',
        },
        {
          id:'0009',
          date: '2022-09-19',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£5.5',
          region:'England',
        },
        {
          id:'0010',
          date: '2022-10-06',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0011',
          date: '2022-11-07',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£7.0',
          region:'England',
        },
        {
          id:'0012',
          date: '2022-11-18',
          name: 'Tom',
          item: 'No. 189, Grove St, Los Angeles',
          price: '£4.0',
          region:'England',
        },
        {
          id:'0013',
          date: '2022-12-04',
          name: 'Breanna',
          item: 'A beautiful white bookmark with a wavy pattern',
          price: '£1.0',
          region:'England',
        },
        {
          id:'0014',
          date: '2022-12-06',
          name: 'Vincent',
          item: 'A metal computer stand holds the laptop',
          price: '£1.9',
          region:'England',
        },
      ],
      sellTableData:[],
      radio:'What I buy',
      currentPage:1,
      // zoomMap:1.25,
      mapStyle:{
        width: "",
        height: "",
        marginTop:"",
        marginLeft:"",
        marginRight:"",
        marginBottom:"",
        // margin:"0px 0px 0px 0px !important"
      },
      barStyle:{
        width: "",
        height: "",
        marginTop:"",
        marginLeft:"",
        marginRight:"",
        marginBottom:"",
        // margin:"0px 0px 0px 0px !important"
      },
      screenWidth:'',
      screenHeight:'',
      mapData:[
        {name:"SCOTLAND",value:100,data:[34,55]},
        {name:"ENGLAND",value:120,data:[34,55]},
        {name:"WALES",value:170,data:[14,105]},
        {name:"NORTHERN IRELAND",value:190,data:[24,178]},
      ],
    }
  },
  created() {
    // console.log('1.this.oriBuyTableData',this.oriBuyTableData)
    this.radioChange();
    this.resizeMap();
    this.resizeBar();
  },
  mounted() {
    window.onresize=()=>{
      this.resizeMap();
      this.resizeBar();
    }
  },
  computed:{
    totalDealNo(){
      if(this.radio === 'What I buy'){
        return this.oriBuyTableData.length
      } else if(this.radio === 'What I sell'){
        return this.oriSellTableData.length
      }
    }
  },
  methods:{
    handleCurrentChange(val){
      this.currentPage = val;
      console.log('current page',val)
      // console.log('this.oriBuyTableData',this.oriBuyTableData)
      let tempStart = 0;
      let tempEnd = 0;
      let reBuy = [];
      let reSell = [];
      tempEnd = val * 10;
      tempStart = tempEnd - 10;
      if(this.radio ==='What I buy'){
        this.oriBuyTableData.forEach(item=>{
          reBuy.unshift(item); //向数组首位添加新元素，实现数组倒序
        })
        this.buyTableData = reBuy.slice(tempStart,tempEnd);
      }else if (this.radio ==='What I sell'){
        this.oriSellTableData.forEach(item=>{
          reSell.unshift(item); //向数组首位添加新元素，实现数组倒序
        })
        this.sellTableData = reSell.slice(tempStart,tempEnd);
      }else if (this.radio ==='Order statistics'){
        this.$nextTick(()=>{
          this.getEchartsMap();
          this.getBarBuy();
          this.getBarSell();
        })
      }
    },
    radioChange(){
      this.handleCurrentChange(1);
    },
    getEchartsMap(){
      echarts.registerMap('UKmap', UKmap);
      let myChart = echarts.init(document.getElementById('chart'));
      // function randomValue() {
      //   return Math.round(Math.random()*1000);
      // }
      // 绘制图表
      let option = {
        title: {
          // text: 'Trade distribution'
        },
        tooltip: {
          formatter:function(params,ticket, callback){
            return params.name+'：'+'<br>'+'Buying volume: £'+params.data.data[0]+'<br>'+'Selling volume: £'+params.data.data[1]+'<br>'+'Total volume: £'+params.value
          },//数据格式化
        },
        visualMap: {
          min: 0,
          max: 200,
          left: 'left',
          top: 'bottom',
          text: ['高','低'],//取值范围的文字
          inRange: {
            color: ["#99CBF9", "#59AAF5", "#1492FF"]//取值范围的颜色
          },
          show:false//图注
        },
        series:[
          {
            data:this.mapData,
            type:'map',
            map:'UKmap', //必须写
            itemStyle:{
              // areaColor:"#12235c",
            },
            geoIndex:0,
          }
        ],
        geo:{
          map: 'UKmap',
          roam: false,//不开启缩放和平移
          zoom:1,//视角缩放比例
          label: {
              show: true,
              fontSize:'11',
              color: '#000000' /*'rgba(0,0,0,0.7)'*/
          },
          itemStyle:{
            areaColor:"#99CBF9",
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis:{
            itemStyle: {
              areaColor: '#626aef',//鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 10,
              borderWidth: 0,
              // shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            label:{
              color:"#fff",
            },
          },
          select:{
            itemStyle:{
              areaColor: '#626aef',//鼠标选中区域颜色
            },
            label:{
              color:"#fff",
            },
          },
        },
      };
// 使用刚指定的配置项和数据显示图表。
//       option.series[0].data = this.mapData;
      // myChart.clear();
      myChart.setOption(option);
      myChart.on('click', function (params) {
        // alert(params.name);
        console.log(params)
      });
      window.addEventListener("resize",function (){
        myChart.resize(); //重新渲染
      })
    },
    resizeMap(){
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      // console.log('this.screenWidth',this.screenWidth)
      this.mapStyle.height = 0.88 * this.screenHeight +'px'
      this.mapStyle.width = 0.68*this.screenWidth  +'px'
      this.mapStyle.marginTop =  -(this.screenHeight * 0.05) +'px !important'
      this.mapStyle.marginLeft = -(this.screenWidth * 0.13) +'px !important'
    },
    getBarBuy(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('barBuy'));

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'My Buying'
        },
        tooltip: {},
        legend: {
          data: ['Number of Trades']
        },
        xAxis: {
          data: ['£0~£1', '£1~£5', '£5~£10', '£10~£20', '£20~£50', ' > £50']
        },
        yAxis: {},
        series: [
          {
            name: 'Number of Trades',
            type: 'bar',
            data: [2, 7 , 11, 6, 3, 1]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      //监视window
      window.addEventListener("resize",function (){
        myChart.resize();
      })

    },
    getBarSell(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('barSell'));

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'My Selling'
        },
        tooltip:{},
        // tooltip: {
        //   formatter:function(params,ticket, callback){
        //     return params.name+params.value
        //   },//数据格式化
        // },
        legend: {
          data: ['Number of Trades']
        },
        xAxis: {
          data: ['£0~£1', '£1~£5', '£5~£10', '£10~£20', '£20~£50', ' > £50']
        },
        yAxis: {},
        series: [
          {
            name: 'Number of Trades',
            type: 'bar',
            data: [2, 2 , 5, 2, 3, 1]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function (){
        myChart.resize();//重新渲染
      })
    },
    resizeBar(){
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      console.log('this.screenHeight',this.screenHeight)
      this.barStyle.height = 0.5 * (this.screenHeight-124) +'px'
      this.barStyle.width = 0.5*(this.screenWidth-240)  +'px'
      // this.barStyle.height = 170 +'px'
      // this.barStyle.width = 0.5*(this.screenWidth-50)  +'px'
      // this.mapStyle.marginTop =  -(this.screenHeight * 0.05) +'px !important'
      // this.mapStyle.marginLeft = -(this.screenWidth * 0.13) +'px !important'
    },

  },
  watch:{
    radio(){
      this.radioChange();
    }
  },
}
</script>

<style scoped>
.radio{
  display: flex;
  justify-content: left;
  margin: 10px 20px !important;
  min-width: 320px;
}
.table{
  margin: 0px 20px !important;
  height: calc(100% - 76px) !important;
}
:deep(.el-table){
  height: 100%;
}
.page{
  display: flex;
  justify-content: right;
  padding-right: 20px;
}
.mapBox{
  width: 50%;
  /*min-width: 400px;*/
  height: calc( 100% - 44px);
  overflow: hidden;
}
.barBox{
  width: 50%;
  height: calc( 100% - 44px);
  display: flex;
  flex-flow: column;
}
</style>