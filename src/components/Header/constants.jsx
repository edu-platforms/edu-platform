import { Link } from 'react-router-dom'
import { account, crown, heart, help, feedback, logout } from '@/assets'
import { ROUTES } from '@/libs/constants/routes'

export const getPathName = (pathname) => {
  const pathnameList = pathname.split('/')

  return pathnameList.length ? `/${pathnameList[1]}` : ''
}
export const items = [
  {
    key: '1',
    label: <Link to={ROUTES.settings}>Account settings</Link>,
    icon: <img src={account} alt="Menu Icon" />,
  },
  {
    key: '2',
    label: <Link to={ROUTES.subscriptions}>Subscriptions</Link>,
    icon: <img src={crown} alt="Menu Icon" />,
  },
  {
    key: '3',
    label: <Link to={ROUTES.favorites}>Favorites</Link>,
    icon: <img src={heart} alt="Menu Icon" />,
  },
  {
    key: '4',
    label: <Link to={ROUTES.help}>Help</Link>,
    icon: <img src={help} alt="Menu Icon" />,
  },
  {
    key: '5',
    label: <Link to={ROUTES.feedback}>Feedback</Link>,
    icon: <img src={feedback} alt="Menu Icon" />,
  },
  {
    key: '6',
    label: <Link to={ROUTES.signIn}>Logout</Link>,
    icon: <img src={logout} alt="Menu Icon" />,
  },
]
