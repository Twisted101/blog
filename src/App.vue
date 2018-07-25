<template>
  <div id="app">
    <pageHead/>
    <transition name='slide-down'>
      <router-view class="router-view">
      </router-view>
    </transition>
    <!-- <pageFoot/> -->
  </div>
</template>

<script>
import pageHead from "@/components/PageHead";
import pageFoot from "@/components/PageFoot";
export default {
  name: "App",
  components: {
    pageHead,
    pageFoot
  }
};
</script>

<style>
body {
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "PingFang SC", "Hiragino Sans GB",
    "STHeiti Light", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  color: #656d78;
  background-color: #f3f6f7;
}
/*webkit内核滚动条样式*/

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: #fff;
}

/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(170, 170, 170, 1);
}

::-webkit-scrollbar-thumb:hover {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(170, 170, 170, 1);
}
@media screen and (min-width: 1400px) {
  #app {
    position: relative;
    width: 80%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  #app {
    position: relative;
    width: 1200px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1200px) and (min-width: 768px) {
  #app {
    position: relative;
    width: 80%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  #app {
    position: relative;
    width: 90%;
    min-width: 300px;
    margin: 0 auto;
  }
}
.router-view {
  transition: all 0.8s;
}
.slide-down-enter {
  opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
}
.slide-down-leave {
  opacity: 0;
}
</style>
