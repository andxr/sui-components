/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import {createRef} from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/dropdownList', () => {
  const Component = MoleculeDropdownList
  const setup = setupEnvironment(Component)
  const defaultProps = {
    children: (
      <>
        {Array(5)
          .fill()
          .map((value, index) => (
            <MoleculeDropdownOption value={index.toString()} key={index}>
              {index}
            </MoleculeDropdownOption>
          ))}
      </>
    )
  }

  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should NOT render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should NOT extend classNames', () => {
    // Given
    const props = {
      className: 'extended-classNames'
    }
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  it('should forward a given ref to the `ul` element', () => {
    // Given
    const props = {}
    const ref = createRef()

    // When
    const component = <Component {...props} ref={ref} />
    const div = document.createElement('div')
    ReactDOM.render(component, div)

    // Then
    expect(ref.current).to.not.equal(undefined)
    expect(ref.current.nodeName).to.equal('UL')
  })

  describe('props', () => {
    describe('visible', () => {
      it('should render the children if visible is not defined', async () => {
        // Given
        const props = {}

        // When
        const {container, getByText} = setup({
          ...defaultProps,
          ...props
        })

        // Then
        const element = getByText('1')
        expect(container).to.be.not.undefined
        expect(element).to.be.not.undefined
      })

      it('should render the children if it is visible', async () => {
        // Given
        const props = {
          visible: true
        }

        // When
        const {container, getByText} = setup({
          ...defaultProps,
          ...props
        })

        // Then
        const element = getByText('1')
        expect(container).to.be.not.undefined
        expect(element).to.be.not.undefined
      })

      it('should render the children if it is not visible', async () => {
        // Given
        const props = {
          visible: false
        }

        // When
        const {container} = setup({
          ...defaultProps,
          ...props
        })

        // Then
        expect(container).to.be.not.undefined
        expect(container.children.length).to.be.equal(1)
      })

      it('should render the children if it is not visible but alwaysRender is enabled', async () => {
        // Given
        const props = {
          alwaysRender: true,
          visible: false
        }

        // When
        const {container} = setup({
          ...defaultProps,
          ...props
        })

        // Then
        expect(container).to.be.not.undefined
        expect(container.children.length).to.be.equal(1)
      })

      it('should NOT render the children if it is not visible and alwaysRender is disabled', async () => {
        // Given
        const props = {
          alwaysRender: false,
          visible: false
        }

        // When
        const {container} = setup({
          ...defaultProps,
          ...props
        })

        // Then
        expect(container).to.be.not.undefined
        expect(container.children.length).to.be.equal(0)
      })
    })
  })
})
