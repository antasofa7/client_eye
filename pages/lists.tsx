import { Header, ListsContent, SideMenu } from '../components'
import styles from '../styles/List.module.css'

const Lists = () => {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
            <SideMenu activeMenu='lists'/>
            <ListsContent/>
        </div>
    </div>
  )
}

export default Lists