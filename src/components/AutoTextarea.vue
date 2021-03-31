<template>
  <div class="flex">
    <textarea
      v-model="currentValue"
      class="h-8 py-0.5 px-2.5 resize-none rounded-md bg-list-gray focus:bg-white focus:text-black focus:font-medium text-black font-semibold border-none text-base break-words overflow-hidden"
      ref="input"
      :style="inputStyle"
      @blur="$emit('blurFromTextarea', $event.target.value)"
    ></textarea>
    <textarea
      class="py-0.5 px-2.5 resize-none rounded-md absolute max-h-0 pointer-events-none opacity-0 m-0 font-semibold text-base break-words"
      v-model="currentValue"
      ref="shadow"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'AutoTextarea',
  props: {
    value: String
  },
  data () {
    return {
      inputHeight: '0'
    }
  },
  updated () {
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
    },
    print () {
      console.log('blurrrrrrrr')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
