<template>
  <div>
      <ul class="box">
        <li v-for="(item,index) in list " v-if="item.title !=null">
          <div class="pic">
            <img :src="item.image" :title="item.title" >
          </div>
          <div class="dtl">
            <h1>{{item.title}}</h1>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "viewListComponent",
        data(){
          return {
            list:[]
          };
        },
        created() {
          axios.get("/xm/api/tab/1?start=0").then((data)=>{
            this.list = data.data.data.items.list;
            console.log(this.list);
          });
        },
        computed:{

        },
        methods:{
          getTypeDtl: function (type) {
            if (type == 1) {
              return "天猫";
            } else if (type == 2) {
              return "淘宝";
            }
          }
        }
    }
</script>

<style scoped>
  img{
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
  li{
    width: 18%;
    margin: 30px  0.66%;
  }
  .box{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto  ;
  }
  .pic{
    height: 80%;
  }
  .dtl{
    height: 20%;
  }
</style>
