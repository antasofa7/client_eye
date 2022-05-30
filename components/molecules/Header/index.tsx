import Image from 'next/image'
import Link from 'next/link'
import { Input, Spacer } from '../../atoms'
import styles from './Header.module.css'

export interface HeaderProps {
    id?: string
}

const Header = (props: Partial<HeaderProps>) => {
    const {id} = props
  return (
      <header className={styles.container}>
          <div className={styles.logo}>
            <Image src="/images/logo.svg" alt="logo client eye" width={50} height={50}/>
            <h2>Contact Blaster</h2>
          </div>
          {id === "termsAndConditions" ? 
          <nav>
              <div className={styles.link}>
                <Link href="/"><a>Terms and Conditions</a></Link>
                <Link href="/"><a>Privacy Policy</a></Link>
              </div>
              <div className={styles.button}>
                <Link href="/">
                    <a className={styles.language}>
                        <Image src="/icons/icon-globe.svg" alt="language" width={18} height={18}/>
                        <span>English</span>
                        <Image src="/icons/icon-chevron-bottom.svg" alt="" width={10} height={6}/>
                    </a>
                </Link>
                <Link href="/login"><a className={styles.signin}>Sign In</a></Link>
              </div>
          </nav> :
          <nav>
                <Input icon='icon-search.svg' placeholder='Search Campaigns, Lists, Messages' suffixIcon='icon-f.svg'/>
                <Spacer width={100}/>
              <div className={styles.button}>
                <Link href="/">
                    <a className={styles.coin}>
                        <Image src="/icons/icon-coin.svg" alt='coin' width={24} height={24}/>
                        <span>8,752</span>
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.icon}>
                        <Image src="/icons/icon-sun.svg" alt='sun' width={24} height={24} className={styles.icon}/>
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.icon}>
                        <Image src="/icons/icon-notification.svg" alt='notification' width={24} height={24} className={styles.icon}/>
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.icon}>
                        <Image src="/icons/avatar.svg" alt='avatar' width={48} height={48} className={styles.icon}/>
                    </a>
                </Link>
              </div>
          </nav>
          }
      </header>
  )
}

export default Header