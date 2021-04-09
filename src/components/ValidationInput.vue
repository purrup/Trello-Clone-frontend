<template>
  <ValidationObserver ref="input"
  slim
  v-slot="{ valid }">
    <ValidationProvider tag="div"
      :rules="rules"
      :name="name"
      :vid="vid"
      v-slot="{ errors, classes }">
      <!-- bind with the class in style -->
      <div :class="classes">
      <!--  -->
        <t-input
            :type="type"
            :autocomplete="autocomplete"
            :class="className"
            :placeholder="placeholder"
            v-model="innerValue"/>
        <span class="float-left mt-1 text-sm">{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: {
    rules: {
      type: [String, Object],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    vid: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: String
    },
    className: {
      type: Array
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      innerValue: ''
    }
  },
  watch: {
    innerValue (value) {
      this.$emit('input', value)
    }
  }
}

</script>

<style lang="scss" scoped>
// set classes in v-slot
// below class(valid and invalid) will be sent into 'classes'
// class name can be changed in validation.js
.invalid {
  input, span {
    @apply text-red-500;
  }
  span {
    @apply text-sm;
  }
  input {
    @apply border-red-300;
  }
}
.valid {
  input {
    @apply border-blue-400;
  }
}
</style>
