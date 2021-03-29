<template>
  <div class="textarea">
    <textarea
    v-model="currentValue"
    class="h-0 py-0.5 px-2.5 resize-none overflow-hidden bg-secondary-100 focus:bg-white focus:text-black focus:font-medium text-white border-none font-bold text-2xl rounded-md"
    ref="input"
    :style="inputStyle"
    ></textarea>
    <textarea class="max-h-0 pointer-events-none opacity-0 m-0"
    v-model="currentValue"
    ref="shadow"
    tabindex="0"></textarea>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'AutoTextarea',
  props: {
    value: String
  },
  data () {
    return {
      inputHeight: '0',
      inputWidth: '0'
    }
  },
  mounted () {
    this.resize()
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    inputStyle () {
      return {
        'min-height': this.inputHeight
        // 'min-width': this.inputWidth
        // 'width': this.inputWidth
      }
    }
  },
  watch: {
    currentValue () {
      this.resize()
    }
  },
  methods: {
    resize () {
      this.inputHeight = `${this.$refs.shadow.scrollHeight}px`
      // this.inputWidth = `${this.$refs.input.scrollWidth}px`
      // console.log(this.$refs.input.clientWidth)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
