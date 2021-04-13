<template>
  <div
    class="flex max-h-full h-full relative">
      <span
        v-show="!editMode"
        @click="changeEditMode"
        class="w-full text-base break-words whitespace-pre-wrap font-semibold cursor-default overflow-y-scroll overflow-x-hidden max-h-full h-full">{{currentValue}}</span>
      <ValidationProvider
            rules="required"
            name="列表標題"
            detectInput
            v-slot="{ errors, classes }">
            <div :class="classes">
              <textarea
                v-show="editMode"
                v-model="currentValue"
                class="w-full resize-none p-0 rounded bg-list-gray focus:bg-white focus:text-black focus:font-medium text-black font-semibold border-none text-base break-words whitespace-pre-wrap overflow-y-scroll"
                ref="textarea"
                :style="style"
                @blur="$emit('blurFromTextarea', $event.target.value); changeEditMode($event.target.value)"
              ></textarea>
              <span class="float-left mt-1 text-sm">{{ errors[0] }}</span>
            </div>
      </ValidationProvider>
      <textarea
        class="inset-0 absolute w-full pointer-events-none max-h-0 m-0 p-0 font-semibold border-none text-base break-words whitespace-pre-wrap resize-none"
        v-model="currentValue"
        ref="shadow"
      ></textarea>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'AutoTextarea',
  components: {
    ValidationProvider
  },
  props: {
    value: String
  },
  data () {
    return {
      textAreaHeight: '28px',
      textAreaWidth: '',
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
    style () {
      return {
        'height': this.textAreaHeight,
        'min-width': this.textAreaWidth,
        'min-height': this.textAreaHeight
      }
    }
  },
  methods: {
    resize () {
      this.textAreaHeight = `${this.$refs.shadow.scrollHeight}px`
      this.textAreaWidth = `${this.$refs.shadow.scrollWidth}px`
    },
    changeEditMode (value) {
      if (value === '') {
        this.$refs.textarea.focus()
        return
      }
      this.editMode = !this.editMode
      if (this.editMode === true) {
        this.$nextTick(() => {
          this.$refs.textarea.focus()
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.invalid {
  textarea, span {
    @apply text-red-500;
  }
  span {
    @apply text-sm;
  }
  textarea {
    @apply border-red-300;
  }
}
.valid {
  textarea {
    @apply border-blue-400;
  }
}

.shadow {
  // z-index: -1;
}
</style>
