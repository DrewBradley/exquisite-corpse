import React from "react";
import { Link } from "react-router-dom";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import ApiHelper from '../../ApiHelper/ApiHelper'
import "../StoryEditFooter/StoryEditFooter.scss";
import PropTypes from 'prop-types'

const StoryEditFooter = ({ disableStoryInput, textInputs, story, author, addStory, updateStoryData }) => {
  const bodyBuilder = isFinished => {
    const body = {
      contributions: textInputs.story,
      contributors: author.id
    }
    if (!story.id) {
      body.title = textInputs.title
      body.prompt = story.prompt ? story.prompt.id : null
    }
    if (isFinished) body.is_complete = true
    return body
  }

  const postStory = (event, isFinished) => {
    const body = bodyBuilder(isFinished)
    ApiHelper.postStory(body, story.id).then((publishedStory) => {
      story.id ? updateStoryData(publishedStory[0]) : addStory(publishedStory[0])
    })
  }

  return (
    <section id="story-edit-footer">
      <TimerDisplay disableStoryInput={disableStoryInput} />
      <Link to="/">
        <button 
          type="button" 
          id="post-button" 
          onClick={postStory}
        >
          {!story.id ? "Start Story" : "Continue Story"}
        </button>
      </Link>
      {story.id && (
        <Link to="/">
          <button
            type="button" 
            id="publish-button"
            onClick={(event) => {
              postStory(event, true)
            }}
          >
            Finish Story
          </button>
        </Link>
      )}
    </section>
  )
}

StoryEditFooter.propTypes = {
  disableStoryInput: PropTypes.func,
  textInputs: PropTypes.object,
  story: PropTypes.object,
  author: PropTypes.object,
  addStory: PropTypes.func,
  updateStoryData: PropTypes.func,
}

export default StoryEditFooter

