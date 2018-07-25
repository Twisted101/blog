<template>
  <div class="header">
    <h3 class="title">题目</h3>
    <div class="hamburger" @click="toogleNav">
      <i class="iconfont icon-hanbaobao1"></i>
    </div>
    <ul class="nav">
      <li v-for="li in liArr" :key="li.code">
        <a @click="switchPage(li.code)" :class="{selected:li.isSelected}">{{li.name}}</a>
      </li>
    </ul>
    <div class="clear"></div>
    <div class="verifymodal">
      <p>你的名字</p>
      <div class="group">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHead",
  data() {
    return {
      liArr: [
        {
          name: "首页",
          code: "index",
          isSelected: true
        },
        {
          name: "归档",
          code: "pigeonhole",
          isSelected: false
        },
        {
          name: "漓清",
          code: "liqing",
          isSelected: false
        }
      ]
    };
  },
  methods: {
    toogleNav() {
      $(".nav").slideToggle();
    },
    switchPage(code) {
      if (code == "liqing") {
        //弹出模态框

        return;
      }
      for (var value of this.liArr) {
        value.isSelected = false;
        if (code == value.code) {
          value.isSelected = true;
        }
      }
      this.$router.push({ name: code });
    }
  }
};
</script>

<style scoped>
.header {
  line-height: 0;
  position: relative;
  padding: 50px 20px 100px 20px;
}
.hamburger {
  display: none;
}
h3.title {
  float: left;
  margin: 0;
}
ul.nav {
  display: initial;
  float: right;
  margin: 0;
}
ul.nav li {
  display: inline-block;
}
ul.nav li::after {
  margin-right: 13px;
  margin-left: 14px;
  content: "·";
}
ul.nav li:nth-last-child(1):after {
  content: "";
}
ul.nav li a {
  cursor: pointer;
  color: inherit;

  text-decoration-line: none;
}
ul.nav a.selected {
  font-weight: 900;
  color: #52beb3;
}
.clear {
  clear: both;
}

.verifymodal {
  display: none;
}

@media screen and (min-width: 768px) {
  ul.nav {
    display: initial !important;
  }
}
@media screen and (max-width: 768px) {
  /* 响应式头部 */
  .hamburger {
    font-size: 20px;
    position: absolute;
    top: 50px;
    right: 10px;
    display: block;
  }
  .hamburger i {
    font-size: 20px;
    cursor: pointer;
  }
  ul.nav {
    line-height: 2;
    display: none;
    float: initial;
    margin-top: 30px;
  }
  ul.nav li {
    display: block;
    width: 100%;
    text-align: center;
  }
  ul.nav li::after {
    content: "";
  }
}
</style>
