<template>
  <!--标签控制组件-->
  <div id="tabControl">
    <!--获取标签控制的每一个名称-->
    <div v-for="(item,index) in tabControlItems" @click="clickIndex(index)">
      <!--确保当前的名称位置与data里的isActiveIndex一样才可以变换位置样式-->
      <span :class="{isActive:index===isActiveIndex}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
//标签控制组件
export default {
  name: "TabControl",
  data() {
    return {
      //记录当前的标签名称在哪个下标上
      isActiveIndex: 0
    }
  },
  props: {
    //标签控制上的标签名称
    tabControlItems: {
      type: Array,
      require: true
    }
  },
  methods: {
    //被出发时根据传来的下标设置到本身的data里
    clickIndex(index) {
      this.isActiveIndex = index;
    }
  }
}
</script>

<style scoped>
#tabControl {
  height: 40px;
  display: flex;
  text-align: center;
  margin-top:5px;
  background: #fff;

}

#tabControl > div {
  flex: 1;
  font: normal 600 14px/40px "微软雅黑";
}

#tabControl span {
  padding: 0 10px 3px;
}

.isActive {
  color: #f69;
  border-bottom: 2px solid #f69;
}
</style>
