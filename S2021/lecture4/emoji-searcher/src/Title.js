import React, { Component } from 'react'
import s from 'styled-components'

const StyledH1 = s.h1`
  color: orange;
`

// class Title extends Component {
//   render() {
//     return (
//       <StyledH1> Emoji Searcher </StyledH1> 
//     )
//   }
// }

const Title = () => ( <StyledH1> Emoji Searcher </StyledH1> )

export default Title