import React from 'react'
import { Footer } from './Footer'

export const About = () => {
  let aboutstyle = {
      minHeight: "67.2vh",
      margin: "50px auto"
  }
    return (
      <>
        <div className="aboutContainer" style={aboutstyle}>
            This Todo list is designed by Akshay Khare. 
            <p>Using this webapp, users can track their day to day activities by adding the todo in the list and user can delete it once done with that todo.</p>
        </div>
      </>
    )
}
