import React from 'react'

const HelloWorld = props => {
  const { name, postfix } = props
  const thing = name || 'World'

  return (
    <div>
      <p>
        Hello {thing}
        {postfix}
      </p>
    </div>
  )
}

export default HelloWorld
