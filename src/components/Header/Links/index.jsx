import { Link } from 'react-router-dom'
import { calendar, notifications, question } from '@/assets'

export const HeaderLinks = ({ path }) => (
  <>
    <Link to={`/${path}/chat`}>
      <img src={question} alt="Question" />
    </Link>

    <Link to={`/${path}/calendar`}>
      <img src={calendar} alt="Calendar" />
    </Link>

    <Link to={`/${path}/notifications`}>
      <img src={notifications} alt="Notifications" />
    </Link>
  </>
)
