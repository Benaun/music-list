import { Header } from '@/common/components'
import { Routing } from '@/common/routing'
import styles from './App.module.css'

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
