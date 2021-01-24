<template>
  <div class="player">
    <div class="main">
          <el-input placeholder="请输入视频链接" v-model="videoSrc">
      <template #append>
        <el-button @click="useClick">播放</el-button>
      </template>
    </el-input>
    </div>
    <vam-video
      :properties="videoOption.properties"
      :videoStyle="videoOption.videoStyle"
      :controlsConfig="videoOption.controlsConfig"
    ></vam-video>
  </div>
</template>

<script>
import VamVideo from "vue-vam-video";
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
export default {
  name: "Player",
  components: {
    VamVideo,
  },
  setup(){
    let videoSrc = ref("");
    const videoOption = reactive({properties: {
        poster: require("../assets/logo.png"),
        src:"",
        preload: "auto",
      },
      controlsConfig: {
        fullScreenTit: "全屏",
        EscfullScreenTit: "退出全屏",
        speedTit: "倍速",
        yinliangTit: "音量",
        jingyinTit: "静音",
        playTit: "播放",
        pauseTit: "暂停",
        fullScreen: true,
        pageFullScreen: true,
        speed: true,
        listen: true,
      },})
      
    function useClick() {
      let onff = true;
      if(videoSrc.value.length!==0&&onff){
         videoOption.properties.src = videoSrc;
         onff = false;
      }else{
         ElMessage.warning({
            message: '请填入视频链接',
            type: 'warning'
          });
      }
    }
    return{
      useClick,
      videoOption,
      videoSrc
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 900px;
  margin: 20px auto;
}
</style>
