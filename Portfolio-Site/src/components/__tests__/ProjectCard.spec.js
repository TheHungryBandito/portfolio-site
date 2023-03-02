import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'

describe('ProjectCard', () => {
  it('renders properly', () => {
    const projectName = 'Big Arms'
    const role = 'Software Developer'
    const projectDescription = 'Big program with arms'
    const projectThumbnailURL = "./testing"
    const achievements = "Unlocked"
    const url = "Test url"
    const wrapper = mount(ProjectCard, { props: 
      { 
        projectName: projectName, 
        role: role, 
        projectDescription: projectDescription, 
        projectThumbnailURL: projectThumbnailURL, 
        achievements: achievements,
        url: url,
      } 
    })
    expect(wrapper.text()).toContain(projectName)
    expect(wrapper.text()).toContain(role)
    expect(wrapper.text()).toContain(projectDescription)
    // expect(wrapper.text()).toContain(projectThumbnailURL)
    // expect(wrapper.text()).toContain(achievements)
    // expect(wrapper.text()).toContain(url)
    expect(wrapper.props().projectName).toBe(projectName)
    expect(wrapper.props().role).toBe(role)
    expect(wrapper.props().projectDescription).toBe(projectDescription)
    expect(wrapper.props().projectThumbnailURL).toBe(projectThumbnailURL)
    expect(wrapper.props().achievements).toBe(achievements)
    expect(wrapper.props().url).toBe(url)
  })
})
