import { Header, ListsContent, SideMenu } from '../components'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
            <SideMenu activeMenu='home'/>
            <ListsContent/>
        </div>
    </div>
  )
}

export default Home