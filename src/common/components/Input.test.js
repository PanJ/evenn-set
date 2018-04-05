import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

const emailElement = (
  <Input label="Email" type="email" placeholder="Email input" />
)

describe('<Input />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Input />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('matches snapshot', () => {
    const component = renderer.create(emailElement)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should correctly render label', () => {
    const wrapper = shallow(emailElement)
    expect(wrapper.find('label').text()).toEqual('Email')
  })
  it('should call onChange', () => {
    const mockOnChange = jest.fn()
    const wrapper = shallow(
      <Input
        label="Email"
        type="email"
        value=""
        onChange={mockOnChange}
        placeholder="Email input"
      />
    )
    wrapper.find('input').simulate('change', { target: { value: 'a' } })
    expect(mockOnChange.mock.calls.length).toEqual(1)
    expect(mockOnChange.mock.calls[0][0]).toEqual('a')
  })
})
