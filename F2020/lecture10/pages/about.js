import React, { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const [name, setName] = useState('')
  useEffect(async () => {
    const { data } = await axios.get('/api/data')
    setName(data.name)
  }, [])

  return (
    <div>
      this is about page, my name is {name}
    </div>
  )
}

export default About
