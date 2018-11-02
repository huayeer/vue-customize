<template>
  <div class=all>
    <tab :line-width=2 active-color='#000' v-model="index">
      <tab-item  :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div>{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖', '电影', '酒店', '外卖', '电影', '酒店', '外卖']

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list2: list(),
      demo2: '精选',
      
      index: 0,
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
	.vux-tab .vux-tab-item{
	  background:none;
	  color:#000 !important
	}
</style>
<style>
.myClass .scrollable .vux-tab-ink-bar {
  bottom: 28px
}
</style>
