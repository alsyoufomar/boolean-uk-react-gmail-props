import React from 'react'
import flaticonWelcomeImage from '../assets/images/flaticon-welcome-image.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import downloadButton from '../assets/icons/download-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import backArrow from '../assets/icons/back-arrow.png'
import '../styles/main.css'
import '../styles/nav.css'


export default function Main (props) {
  const date = Date()
  console.log(props.filteredEmails.length)
  return (
    <main className="email-view">
      <nav className="email-toolbar">
        <ul>
          <li onClick={ () => props.toggleOpen(null) } ><button>Go Back</button></li>
          <li>
            <img className="icon" src={ backArrow } alt="reply button" />
          </li>
          <li>
            <img className="icon" src={ downloadButton } alt="archive button" />
          </li>
          <li>
            <img className="icon" src={ rubbishButton } alt="delete button" />
          </li>
        </ul>
        <div className="space"></div>
        <div>
          <p>{ props.email.id } of { props.filteredEmails.length }</p>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </nav>
      <article className="email-content">
        <div className="title">
          <h1>Welcome { props.email.sender }</h1>
        </div>
        <header className="email-content--header">
          <div className="avatar"></div>
          <div className="email-info">
            <div className="sender-info">
              <h2>{ props.email.sender }</h2>
              <em>&lt;no-reply@{ props.email.sender.toLowerCase() }.com&gt;</em>
            </div>
            <div className="user-info">
              <p>
                to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
              </p>
            </div>
          </div>
          <div className="date-info">
            <p>{ date.slice(0, 21) }</p>
          </div>
          <div className="email-action-icons">
            <ul>
              <li>
                <img className="icon" src={ backArrow } alt="reply button" />
              </li>
              <li>
                <img
                  className="icon"
                  src={ rateStarButton }
                  alt="star button"
                />
              </li>
              <li>
                <img
                  className="icon"
                  src={ rubbishButton }
                  alt="delete button"
                />
              </li>
            </ul>
          </div>
        </header>
        <section className="email-body">
          <div className="content">
            <img src={ flaticonWelcomeImage } alt="Flaticon welcome message" />
          </div>
        </section>
        <section className="email-actions">
          <button>Reply</button>
          <button>Forward</button>
        </section>
      </article>
    </main>
  )
}