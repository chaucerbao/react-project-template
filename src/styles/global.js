// Dependencies
import {injectGlobal} from 'styled-components'

// Styles
export default injectGlobal`
  body {
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
  }

  p {
    &:first-of-type {
      margin-top: 0;
    }
  }
`
