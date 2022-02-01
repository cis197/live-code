import React from 'react'
import PostPreview from './components/post-preview'

import './styles/globals.scss'
import styles from './styles/main.module.scss'

const App = () => (
  <main className={styles.container}>
    <PostPreview
      title="My Sick Article"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error, dolor saepe modi, animi dolore a fugit amet quaerat reprehenderit maiores. Quam fuga nesciunt perspiciatis ullam enim dolores eos placeat!"
    />
  </main>
)

export default App
