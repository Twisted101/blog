<template>
  <div>
    <div class="article">
      <div class="leftPart">
        <div class="time">
          <div class="month">十二月</div>
          <div class="day">23</div>
          <div class="year">2018</div>
        </div>
      </div>
      <div class="rightPart">
        <div class="title">
          linux采用流式的传送方式进行主机间对拷教程
        </div>
        <ul class="details">
          <li class="tag">
            <i class="iconfont icon-biaoqian"></i>
            <span>标签呐</span>
          </li>
          <li class="comment">
            <i class="iconfont icon-comment"></i>
            <span>
              <span>4</span>条评论</span>
          </li>
          <li class="count">
            <i class="iconfont icon-yuedu"></i>
            <span>10</span>
          </li>
        </ul>
        <div class="text">网站搬家，对于一般大文件（尤其是大部分碎文件）进行主机间对拷的时候，都是采用最常用的流程：打包压缩->传输->解压。在诸多次搬家之后，发现压缩吃硬盘IO性能，性能差的压缩速度很慢，传输的scp 吃带宽，尤其是现在各大云厂...</div>
        <button class="readAll">阅读全文</button>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  data() {
    return {
      show:true
    };
  },
  created:function(){
    $.ajax({
      type: "get",
      url: "backend/getArticles.php",
      dataType: "json",
      success: function (response) {
        console.log(response)
      }
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.article {
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 500px;
}
.leftPart,
.rightPart {
  position: absolute;
}
.leftPart {
  top: 0;
  left: 0;
}
.rightPart {
  top: 0;
  right: 0;
  bottom: 0;
  left: 80px;
}
.leftPart .time {
  font-size: 14px;
  padding: 6px 4px 4px 4px;
  text-align: center;
  color: #888888;
  border: 1px solid #cccccc;
}
.leftPart .time .month,
.leftPart .time .day {
  margin-bottom: 2px;
}
.leftPart .time .day {
  font-size: 18px;
}
.leftPart .time .year {
  padding-top: 2px;
  border-top: 1px solid #aaaaaa;
}
.rightPart .title {
  font-size: 18px;
  font-weight: 900;
  color: #52beb3;
}
.rightPart .details {
  padding-left: 10px;
}
.rightPart .details li {
  font-size: 12px;
  display: inline-block;
  margin-right: 20px;
}
.rightPart .details li i {
  display: inherit;
  margin-top: -3px;
  vertical-align: top;
}
.rightPart .text {
  font-size: 16px;
  line-height: 36px;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 20px;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.readAll {
  padding: 4px 8px;
  cursor: pointer;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #52beb3;
}
@media screen and (max-width: 768px) {
  .leftPart {
    display: none;
  }
  .rightPart {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}










</style>
