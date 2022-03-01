import React from 'react'
import Email from './email'

export default function Emails (props) {
  return (
    <ul>
      { props.filteredEmails.map((email, index) => (
        <Email
          toggleStar={ props.toggleStar }
          toggleRead={ props.toggleRead }
          email={ email }
          key={ index }
          toggleOpen={ props.toggleOpen }
        />
      )) }
    </ul>
  )
}
