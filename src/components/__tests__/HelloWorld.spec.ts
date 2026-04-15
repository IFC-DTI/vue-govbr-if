import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PaginaInicial from '@/views/PaginaInicial.vue'

describe('PaginaInicial', () => {
  it('renders properly', () => {
    const wrapper = mount(PaginaInicial, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
