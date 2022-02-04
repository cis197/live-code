import React from 'react'
import PostPreview from './components/post-preview'

import * as style from './styles/layout.module.scss'

const App = () => (
  <main className={style.container}>
    {/* <main className="container mx-auto mt-6 flex"> */}
    <PostPreview
      title="My Sick Article"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repudiandae error, dolor saepe modi, animi dolore a fugit amet quaerat reprehenderit maiores.
      Quam fuga nesciunt perspiciatis ullam enim dolores eos placeat!"
    />
  </main>
)

export default App
