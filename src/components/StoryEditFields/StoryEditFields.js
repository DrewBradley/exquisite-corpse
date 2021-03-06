import React, { Fragment } from 'react'
import '../StoryEditFields/StoryEditFields.scss';
import PropTypes from 'prop-types'

const StoryEditFields = ({ updateText, disabled, story }) => {
  return (
    <Fragment>
      {story.prompt && 
        <h1 id="prompt">PROMPT: {story.prompt.prompt}</h1>
      }
      {story.lastWords && 
        <h1 id="lastWords">LAST WORDS: {story.lastWords}</h1>
      }
      {!story.title && 
        <input
          id="title"
          type="text"
          className="title-input-box"
          onChange={updateText}
          placeholder="Enter your title here"
        />
      }
      <textarea
        id="story"
        className="story-input-box"
        onChange={updateText}
        maxLength="400"
        placeholder="Type your story here"
        disabled={disabled ? "disabled" : false}
      />
    </Fragment>
  )
}

StoryEditFields.propTypes = {
  updateText: PropTypes.func,
  disabled: PropTypes.bool,
  story: PropTypes.object
}

export default StoryEditFields