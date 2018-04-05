import reducer from './redux'

describe('register reducer', () => {
  it('should initialize state', () => {
    expect(reducer(undefined, {})).toEqual({
      formData: {},
      initialized: false,
      loading: false
    })
  })
})
