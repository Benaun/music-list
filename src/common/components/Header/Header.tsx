import { NavLink } from 'react-router'

import styles from './Header.module.css'
import { Path } from '@/common/routing'

const navItems = [
  { to: Path.Main, label: 'Main' },
  { to: Path.Playlists, label: 'Playlists' },
  { to: Path.Tracks, label: 'Tracks' },
  { to: Path.Profile, label: 'Profile' }
]

export const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `link ${isActive ? styles.activeLink : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
