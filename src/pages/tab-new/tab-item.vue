<template>
    <div
            class="vux-tab-item"
            :class="[currentSelected ? activeClass : '', {
      'vux-tab-selected': currentSelected,
      'vux-tab-disabled': disabled
    }]"
            :style="style"
            @click="onItemClick"
    >
        <slot></slot>
        <span
                :style="{
        background: badgeBackground,
        color: badgeColor
      }"
                class="vux-tab-item-badge"
                v-if="typeof badgeLabel !== 'undefined' && badgeLabel !== ''">
    {{ badgeLabel }}</span>
    </div>
</template>

<script>
import { childMixin } from '../../../node_modules/vux/src/mixins/multi-items'
export default {
  name: 'tab-item',
  mixins: [childMixin],
  data () {
    return {
      barLeft: 0
    }
  },
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style () {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      }
    },
    barWidth () {
      return this.$el.getBoundingClientRect().width
    }
  },
  watch: {
    currentSelected () {
      if (this.currentSelected) {
        this.barLeft = this.$el.barLeft
        this.$emit('getCustomBarParams', this.barWidth, this.offsetLeft)
      }
    }
  },
  mounted () {
    if (this.currentSelected) {
      this.$emit('getCustomBarParams', this.barWidth, this.offsetLeft)
    }
  }
}
</script>
