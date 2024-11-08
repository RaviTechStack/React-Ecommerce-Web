import React from 'react'
import { useParams } from 'react-router-dom'
const About = () => {
    const {data} = useParams()
  return (
    <div>
      About Me
      {data? data: "err"}
    </div>
  )
}

export default About
