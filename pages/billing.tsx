import { useState } from 'react'
import { BillingContent, Header, SideMenu } from '../components'
import AddCardModal from '../components/molecules/BillingContent/AddCardModal'
import styles from '../styles/List.module.css'

const Billing = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  return (
    <div className={styles.page}>
        <Header/>
        <div className={styles.wrapper}>
            <SideMenu activeMenu='billing'/>
            <BillingContent onClick={() => setIsShowModal(true)} />
        </div>
        {isShowModal ? <AddCardModal onClick={() => setIsShowModal(false)}/> : null}
    </div>
  )
}

export default Billing