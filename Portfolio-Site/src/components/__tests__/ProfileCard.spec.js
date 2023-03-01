import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProfileCard from '../ProfileCard.vue'

describe('ProfileCard', () => {
  it('renders properly', () => {
    const title = 'Josh'
    const position = 'Software Developer'
    const tools = 'Vue.js'
    const description = "Smart and Cunning"
    const location = "Everywhere and Nowhere"
    const wrapper = mount(ProfileCard, { props: { title: title, position: position, tools: tools, description: description, location: location } })
    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(position)
    expect(wrapper.text()).toContain(tools)
    expect(wrapper.text()).toContain(description)
    expect(wrapper.text()).toContain(location)
    expect(wrapper.props().title).toBe(title)
    expect(wrapper.props().position).toBe(position)
    expect(wrapper.props().tools).toBe(tools)
    expect(wrapper.props().description).toBe(description)
    expect(wrapper.props().location).toBe(location)
  })
})
