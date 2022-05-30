import Image from 'next/image'
import styles from './BillingContent.module.css'

const SavedCardItem = () => {
  return (
    <div className={styles.item}>
        <Image src="/images/saved-card.png" alt='card saved' width={332} height={210}/>
        <div>
            <div>
                <p>Echo</p>
                <Image src="/icons/icon-lightcoin.svg" alt='lightcoin' width={22} height={22}/>
            </div>
            <div>
                <p>4342  0873  4311  7322</p>
                <Image src="/icons/icon-wifi.svg" alt='wifi' width={24} height={24}/>
            </div>
            <p>Name</p>
            <div>
                <p>Alice Smith</p>
                <p>Exp 09/22</p>
            </div>
        </div>
    </div>
  )
}

export default SavedCardItem