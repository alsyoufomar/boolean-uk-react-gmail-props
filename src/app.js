import { useState } from 'react'
import initialEmails from './data/emails'
import Emails from './components/emails'
import './styles/app.css'
import Body from './components/body'

function App () {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [display, setDisplay] = useState({
    opened: false, email: null
  })
  const [searchInput, setSearch] = useState('')

  function searchByTitle (text) {
    // console.log(text)
    setSearch(x => text)
  }
  console.log(searchInput)

  function toggleOpen (email) {
    setDisplay(x => {
      const object = { opened: !x.opened, email }
      console.log(object)
      return object
    })
  }
  let search = emails

  function get () {
    return search.filter(c => c.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
  }
  console.log(get())
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const getReadEmails = emails => emails.filter(email => !email.read)
  const getStarredEmails = emails => emails.filter(email => email.starred)

  const toggleStar = (email) => {
    setEmails(x => x.map(c => c === email ? { ...email, starred: !email.starred } : c))
  }

  const toggleRead = (email) => {
    setEmails(x => x.map(c => c === email ? { ...email, read: !email.read } : c))
  }



  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (searchInput !== '') {
    filteredEmails = get()
  }

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)


  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input onChange={ (e) => searchByTitle(e.target.value) } className="search-bar" placeholder="Search mail" />
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={ `item ${currentTab === 'inbox' ? 'active' : ''}` }
            onClick={ () => setCurrentTab('inbox') }
          >
            <span className="label">Inbox</span>
            <span className="count">{ unreadEmails.length }</span>
          </li>
          <li
            className={ `item ${currentTab === 'starred' ? 'active' : ''}` }
            onClick={ () => setCurrentTab('starred') }
          >
            <span className="label">Starred</span>
            <span className="count">{ starredEmails.length }</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={ hideRead }
              onChange={ e => setHideRead(e.target.checked) }
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        { !display.opened &&
          <Emails
            filteredEmails={ filteredEmails }
            toggleStar={ toggleStar }
            toggleRead={ toggleRead }
            toggleOpen={ toggleOpen }
          />
        }
        { display.opened &&
          <Body
            toggleOpen={ toggleOpen }
            email={ display.email }
            filteredEmails={ filteredEmails }
          />
        }
      </main>
    </div>
  )
}

export default App
