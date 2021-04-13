import { extend, setInteractionMode, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

setInteractionMode('lazy')

configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid'
  }
})

// No message specified.
extend('email', {
  ...email,
  message: 'email格式有誤'
})

// Override the default message.
extend('required', {
  ...required,
  message: '請填寫{_field_}'
})

extend('min', {
  validate (value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: '{_field_}必須至少有 {length} 字元'
})

extend('max', {
  validate (value, { length }) {
    return value.length <= length
  },
  params: ['length'],
  message: '{_field_}無法超過 {length} 字元'
})
