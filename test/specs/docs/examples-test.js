import { createElement } from 'react'

import { sandbox } from '../../utils'
import { exampleContext } from '../../../docs/app/utils'

describe.only('examples', () => {
  /* eslint-disable no-console */
  beforeEach(() => {
    sandbox.spy(console, 'error')
  })
  afterEach(() => {
    console.error.restore()
  })
  exampleContext.keys().forEach(path => {
    if (!path.includes('TableWarningShorthand')) {
      return
    }
    it(`renders without errors: ${path}`, () => {
      mount(createElement(exampleContext(path).default))

      console.error
        .should.not.have.been.called(`Console error: ${console.error.args}`)
    })
  })
  /* eslint-enable no-console */
})
