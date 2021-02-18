import React, { Component } from 'react'
import s from 'styled-components'

const StyledH1 = s.h1`
  color: orange;
`

export const Title = () => <StyledH1> Emoji Searcher </StyledH1>

export const SearchInput = ({ onChange }) => <input onChange={onChange} />

const filterEmoji = (emojis, filter) => {
  const filteredEmojis = []

  emojis.map(emoji => {
    const { title, keywords } = emoji

    if (title.includes(filter) || keywords.includes(filter)) {
      filteredEmojis.push(emoji)
    }
  })

  return filteredEmojis
}

export const SearchResults = ({ emojis, textInput }) => (
  <>
    <h1> Search Results </h1>
    {filterEmoji(emojis, textInput)
      .slice(0, 10)
      .map(emoji => (
        <div>
          {' '}
          {emoji.title} {emoji.symbol}{' '}
        </div>
      ))}
  </>
)
