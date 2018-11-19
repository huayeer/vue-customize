<template>
  <div class=all>
    <tab ref="tab" active-color='#000' v-model="index" :box-width="boxWidth" :customBarWidth="customBarWidth" :barOffsetLeft="barOffsetLeft">
      <tab-item ref="tabItem" :selected="demo === item"  v-for="(item, index) in list" @click="demo = item" :key="index" @getCustomBarParams="handleGetCustomBarParams">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" :height="swiperHeight" :show-dots="false" @on-index-change="getSwiperHeight">
      <swiper-item v-for="(item, index) in list" :key="index">
        <div>{{item}} Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店Container酒店酒店酒店酒店</div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import Tab from './tab'
import TabItem from './tab-item'
import { Swiper, SwiperItem } from 'vux'
const list = () => ['智能123123', '美123食', '电123影', '酒店', '外卖', '电影', '电影', '电影', '电影']

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
      list: list(),
      demo: '智能精选',
      boxWidth: 0,
      index: 0,
      customBarWidth: '',
      barOffsetLeft: '',
      swiperHeight: ''

    }
  },
  mounted: function () {
    this.boxWidth = this.$refs.tab.$el.getBoundingClientRect().width
    this.swiperHeight = this.getSwiperHeight() + 'px'
  },
  methods: {
    handleGetCustomBarParams (barWidth, barOffsetLeft) {
      this.customBarWidth = barWidth + 'px'
      this.barOffsetLeft = barOffsetLeft + 'px'
    },
    getSwiperHeight (currentIndex) {
      currentIndex = currentIndex ? currentIndex : 0 //eslint-disable-line
      return document.getElementsByClassName('vux-swiper-item')[currentIndex].offsetHeight
    }
  }
}
</script>
<style>
  .all{
    padding:0 20px;
  }
  .vux-swiper-item {
    height:auto !important;
  }
</style>
