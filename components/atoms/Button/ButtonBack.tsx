import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Button.module.css'

const ButtonBack = () => {
    const router = useRouter()
  return (
    <button onClick={() => router.back()} className={styles.btnBack}>
        <Image src="/icons/icon-back.svg" alt='back' width={24} height={24}/>
        <p>Go Back</p>
    </button>
  )
}

export default ButtonBack