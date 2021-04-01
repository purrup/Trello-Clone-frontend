<template>
  <div
    class="flex">
    <span
      v-show="!editMode"
      @click="changeEditMode"
      class="w-full text-base break-words whitespace-pre-wrap font-semibold cursor-default">{{currentValue}}</span>
    <textarea
      v-show="editMode"
      v-model="currentValue"
      class="w-full resize-none rounded-md bg-list-gray focus:bg-white focus:text-black focus:font-medium text-black font-semibold border-none text-base break-words whitespace-pre-wrap overflow-hidden"
      ref="input"
      :style="minHeight"
      @blur="$emit('blurFromTextarea', $event.target.value); changeEditMode()"
    ></textarea>
    <textarea
      class="absolute max-h-0 pointer-events-none opacity-0 m-0 font-semibold border-none text-base break-words whitespace-pre-wrap"
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
      textAreaHeight: '0',
      editMode: false
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
        this.resize()
      }
    },
    minHeight () {
      return {
        'min-height': this.textAreaHeight
      }
    }
  },
  methods: {
    resize () {
      this.textAreaHeight = `${this.$refs.shadow.scrollHeight}px`
    },
    changeEditMode () {
      this.editMode = !this.editMode
      if (this.editMode === true) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
