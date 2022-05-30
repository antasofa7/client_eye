import Image from 'next/image'
import { Input, Spacer } from '../../atoms'
import styles from './BillingContent.module.css'

export interface AddCardModalProps {
    onClick: () => void
}

const AddCardModal = (props: AddCardModalProps) => {
    const {onClick} = props
  return (
    <div className={styles.modal}>
        <div className={styles.card}>
            <div>
                <div>
                    <div><Image src="/icons/icon-credit-card.svg" alt='close modal button' width={18} height={18}/></div>
                    <h1>Add a new card</h1>
                </div>
                <button onClick={onClick}><Image src="/icons/icon-x.svg" alt='close modal button' width={20} height={20}/></button>
            </div>
            <div>
                <Input type='text' placeholder='Name on the card' icon="icon-user-dark.svg"/>
                <Spacer height={15}/>
                <Input type='text' placeholder='Card number' icon="icon-credit-card-dark.svg" suffixIcon='logo-mastercard.svg'/>
                <Spacer height={15}/>
                <div className={styles.wrapperInput}>
                    <Input type='text' placeholder='Expiry Date' icon="icon-calendar.svg"/>
                    <Input type='text' placeholder='CVV' icon="icon-lock.svg" />  
                </div>
            </div>
            <div>
                <h2>Billing Information</h2>
                <Input type='text' placeholder='Street Address 1' icon="icon-home-dark.svg"/>
                <Spacer height={15}/>
                <Input type='text' placeholder='Street Address 2' icon="icon-home-dark.svg"/>
                <Spacer height={15}/>
                <div className={styles.wrapperInput}>
                    <Input type='text' placeholder='City' icon="icon-viewpoint.svg"/>
                    <Input type='text' placeholder='State' icon="icon-map.svg" />  
                </div>
                <Spacer height={15}/>
                <div className={styles.wrapperInput}>
                    <Input type='text' placeholder='Zip Code' icon="icon-mail-dark.svg"/>
                    <Input type='text' placeholder='Country' icon="icon-globe-dark.svg" suffixIcon='icon-chevron-down.svg' />  
                </div>
            </div>
            <div className={styles.btnCta}>
                <button><Image src="/icons/icon-save.svg" alt='save' width={18} height={18}/><p>Save</p></button>
                <button onClick={onClick}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddCardModal