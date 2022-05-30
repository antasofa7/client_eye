import MenuItem from './MenuItem'
import styles from './SideMenu.module.css'

export interface sideMenuProps {
    activeMenu: 'home' | 'lists' |'billing'
}

const SideMenu = ({activeMenu}: sideMenuProps) => {
  return (
    <aside className={styles.container}>
        <div>
            <MenuItem icon='home' title='Home' href='/' active={activeMenu === 'home'}/>
            <MenuItem icon='lists' title='Lists' href='/lists' active={activeMenu === 'lists'}/>
            <MenuItem icon='messages' title='Messages'/>
            <MenuItem icon='campaigns' title='Campaigns'/>
            <MenuItem icon='seo' title='Seo Agencies'/>
            <MenuItem icon='advertising' title='Advertising'/>
            <MenuItem icon='recycle' title='Recycle Bin'/>
        </div>
        <div>
            <MenuItem icon='billing' title='Billing' href='/billing' active={activeMenu === 'billing'}/>
            <MenuItem icon='account' title='Account'/>
            <MenuItem icon='help' title='Help & Support'/>
        </div>
    </aside>
  )
}

export default SideMenu