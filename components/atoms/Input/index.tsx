import Image from 'next/image'
import styles from './Input.module.css'

export interface InputProps {
    icon: string,
    type: string,
    placeholder: string,
    suffixIcon: string,
}

const Input = (props: Partial<InputProps>) => {
    const {icon, type, placeholder, suffixIcon} = props
    
  return (
    <div className={styles.container}>
        <Image src={`/icons/${icon}`} alt={icon} width={24} height={24} />
        <input type={type} name="email" id="email" placeholder={placeholder} />
        {suffixIcon === 'icon-eye.svg' && 
            <div className={styles.isVisible} >
                <Image src={`/icons/${suffixIcon}`} alt='isVisible password' width={18} height={18}/>
            </div>
        }
        {suffixIcon === 'icon-check-circle.svg' && 
            <Image src={`/icons/${suffixIcon}`} alt='circle check' width={24} height={24}/>
        }
        {suffixIcon === 'verification' && 
            <div className={styles.verification}>
                <p>02:54</p>
            </div>
        }
        {suffixIcon === 'icon-f.svg' && 
            <Image src={`/icons/${suffixIcon}`} alt='search' width={40} height={26}/>
        }

        {suffixIcon === 'logo-mastercard.svg' && 
            <Image src={`/icons/${suffixIcon}`} alt='search' width={40} height={26}/>
        }

        {suffixIcon === 'icon-chevron-down.svg' && 
            <Image src={`/icons/${suffixIcon}`} alt='search' width={40} height={26}/>
        }
    </div>
  )
}

export default Input