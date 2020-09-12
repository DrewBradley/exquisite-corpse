import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StoryEditView from './StoryEditView'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('StoryEditView', () => {
  it('should display a prompt', () => {
    render(
      <Router>
        <StoryEditView />
      </Router> 
    )

    const promptPlaceholder = screen.getByText('Prompt placeholder')

    expect(promptPlaceholder).toBeInTheDocument();
  })

  it('should display an input field for the title and story', () => {
    render(
      <Router>
        <StoryEditView />
      </Router>
    )

    const titleInput = screen.getByPlaceholderText('Enter your title here')
    const storyInput = screen.getByPlaceholderText('Type your story here')
    const submitButton = screen.getByRole('button', {name: 'Submit'})

    expect(titleInput).toBeInTheDocument()
    expect(storyInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})