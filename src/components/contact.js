import React from 'react'

export default function Contact(props) {
  return (
    <div>
        <div className="container">
            <h1 className="my-3">Contact Us</h1>
            <p>{props.title}</p>
            <a href="mailto:itsantriksh@gmail.com">itsantriksh@gmail.com</a>
        </div>
    </div>
  )
}
