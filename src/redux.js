import axios from 'axios'

const initialState = {
  formData: {},
  initialized: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.key]: action.value
        }
      }
    case 'RESET_FORM_DATA_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'RESET_FORM_DATA_FULFILLED':
      return {
        ...state,
        initialized: true,
        loading: false,
        formData: action.payload.data
      }
    case 'RESET_FORM_DATA_REJECTED':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export const setFormData = (key, value) => ({
  type: 'SET_FORM_DATA',
  key,
  value
})

export const resetFormData = () => ({
  type: 'RESET_FORM_DATA',
  payload: axios.post('http://www.mocky.io/v2/5ac48fdc2f00004c00f5fa39')
})
