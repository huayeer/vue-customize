<template>
  <div class=all>
    <tab ref="tab" active-color='#000' v-model="index" :box-width="boxWidth">
      <tab-item  :selected="demo === item" v-for="(item, index) in list" @click="demo = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in list" :key="index">
        <div>{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['智能精选', '美食', '电影', '酒店', '外卖', '电影', '酒店', '外卖', '电影', '酒店', '外卖']

export default {
  name: 'TabNew',
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list213123: list(),
      demo: '精选',
      boxWidth: 0,
      index: 0
    }
  },
  mounted: function () {
    this.boxWidth = this.$refs.tab.$el.getBoundingClientRect().width
  }
}
</script>
<style>
  .all{
    padding:0 20px;
  }
</style>
