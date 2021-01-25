import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

const themeDemo = {
  colors: {
    primary: 'blue',
    secondary: 'gray'
  }
}

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={themeDemo}>
        {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }