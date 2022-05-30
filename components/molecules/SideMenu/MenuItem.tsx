import Image from 'next/image'
import Link from 'next/link'
import { IconAccount, IconBilling, IconCampaigns, IconHelp, IconHome, IconLists, IconMessages, IconRecycle } from '../../../public'
import styles from './SideMenu.module.css'

export interface MenuItemProps {
    icon: string,
    title: string,
    active?: boolean,
    href?: string
}

const MenuItem = (props: Partial<MenuItemProps>) => {
    const {title, icon, active, href=''} = props
  return (
      <Link href={href}>
        <a className={styles.menuItem} style={{backgroundColor: active ? "#3972F9" : "transparent"}}>
            <div>
                {icon === "home" && <IconHome color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === "lists" && <IconLists color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === "messages" && <IconMessages color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === "campaigns" && <IconCampaigns color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === 'seo' && <div className={styles.dot}><Image src="/icons/icon-dot.svg" alt="seo agencies" width={5} height={5}/></div>}
                {icon === 'advertising' && <div className={styles.dot}><Image src="/icons/icon-dot.svg" alt="advertising" width={5} height={5}/></div>}
                {icon === "recycle" && <IconRecycle color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === "billing" && <IconBilling color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === "account" && <IconAccount color={active ? "#FFFFFF" : "#545658"}/>}
                {icon === "help" && <IconHelp color={active ? "#FFFFFF" : "#545658"}/>}
                <span style={{color: active ? "#FFFFFF" : "#545658"}}>{title}</span>
            </div>
            {icon === "messages" && <span className={styles.messageCount}>6</span> }
            {icon === "campaigns" && <Image src="/icons/icon-chevron-up.svg" alt="down" width={20} height={20}/> }

        </a>
      </Link>
  )
}

export default MenuItem