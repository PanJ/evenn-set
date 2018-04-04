const initialState = {
  formData: {
    name: '',
    email: '',
    ticketType: '',
    food: false,
    agreeTerms: false,
    countdown: ''
  }
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
    default:
      return state
  }
}

export const setFormData = (key, value) => ({
  type: 'SET_FORM_DATA',
  key,
  value
})
