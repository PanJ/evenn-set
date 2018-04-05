import axios from 'axios'
import { defineAction } from 'redux-define'

const pendingStates = ['PENDING', 'FULFILLED', 'REJECTED']
const define = defineAction('register').defineAction

const SET_FORM_DATA = define('SET_FORM_DATA').ACTION
const RESET_FORM_DATA = define('RESET_FORM_DATA', pendingStates)

const initialState = {
  formData: {},
  initialized: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.key]: action.value
        }
      }
    case RESET_FORM_DATA.PENDING:
      return {
        ...state,
        loading: true
      }
    case RESET_FORM_DATA.FULFILLED:
      return {
        ...state,
        initialized: true,
        loading: false,
        formData: action.payload.data
      }
    case RESET_FORM_DATA.REJECTED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export const setFormData = (key, value) => ({
  type: SET_FORM_DATA,
  key,
  value
})

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
  payload: axios.post('http://www.mocky.io/v2/5ac48fdc2f00004c00f5fa39')
})
