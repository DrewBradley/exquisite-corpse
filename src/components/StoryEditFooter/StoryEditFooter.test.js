import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import StoryEditFooter from './StoryEditFooter'
import '@testing-library/jest-dom'

describe('StoryEditFooter', () => {
  // it('should render a timer and at least one button', () => {
  //   render(
  //     <Router>
  //       <StoryEditFooter />
  //     </Router>
  //   )

  //   const timer = screen.getByText(/59/i)
  //   const submitButton = screen.getByRole('button', {name: /Pass it on/i})
    
  //   expect(timer).toBeInTheDocument()
  //   expect(submitButton).toBeInTheDocument()
  // })

  // it('should render two buttons if the story is publishable', () => {
  //   render(
  //     <Router>
  //       <StoryEditFooter isPublishable={true} />
  //     </Router>
  //   )

  //   const buttons = screen.getAllByRole('button')
    
  //   expect(buttons.length).toBe(2)
  // })
})