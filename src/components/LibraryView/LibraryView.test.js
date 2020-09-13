import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import LibraryView from "./LibraryView";
import testData from "../../assets/testData/testData";
import ApiHelper from '../../ApiHelper/ApiHelper'
jest.mock('../../ApiHelper/ApiHelper.js')

describe('LibraryView component', () => {

  beforeEach(() => {
    ApiHelper.getData.mockResolvedValueOnce(testData.stories)
    render(<LibraryView />)
  })
  
  it('should fetch stories on render', () => {
    expect(ApiHelper.getData).toHaveBeenCalledTimes(1)
  })
  
  it('should render a book button for every COMPLETED story', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })
  
  it('should display a story when a button is clicked', () => {
    const button = screen.getByText('Birdhouse in Your Soul')
    ApiHelper.getData.mockResolvedValueOnce(['Khalid Williams'])
    fireEvent.click(button)
    const title = screen.getByRole('heading', { 
      name: 'Birdhouse in Your Soul'
    })
    expect(title).toBeInTheDocument()
  })
  
  it(`should display a different story 
  when a different button is clicked`, () => {
    const button1 = screen.getByText('Birdhouse in Your Soul')
    const button2 = screen.getByText('Greyson has a good morning')
    
    ApiHelper.getData.mockResolvedValueOnce(['Khalid Williams'])
    fireEvent.click(button1)
    
    ApiHelper.getData.mockResolvedValueOnce(['Greyson Elkins'])
    fireEvent.click(button2)

    expect(screen.queryByRole('heading', {
      name: 'Birdhouse in Your Soul'
    })).not.toBeInTheDocument()

    expect(screen.getByRole('heading', {
      name: 'Greyson has a good morning'
    })).toBeInTheDocument()
  })
})