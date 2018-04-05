import React from 'react'
import { shallow } from 'enzyme'
import { Register } from './Register'

const delay = millis => new Promise(resolve => setTimeout(resolve, millis))

describe('<Register />', () => {
  it('should reset form', async () => {
    const mockOnFormReset = jest.fn()
    const mockOnFormDataChange = jest.fn()
    const wrapper = shallow(
      <Register
        form={{}}
        onFormDataChange={mockOnFormDataChange}
        onFormReset={mockOnFormReset}
      />
    )
    expect(mockOnFormReset.mock.calls.length).toBe(1)
    expect(mockOnFormDataChange.mock.calls.length).toBe(1)
    await delay(1000)
    expect(mockOnFormDataChange.mock.calls.length).toBe(2)
    expect(mockOnFormDataChange.mock.calls[1][0]).toBe('countdown')
  })
})
