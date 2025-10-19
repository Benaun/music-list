import styles from './App.module.css'
import { Header } from '@/common/components'
import { Routing } from '@/common/routing'

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Routing />
      </div>
    </>
  )
}
