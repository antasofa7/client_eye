import Image from 'next/image'
import Link from 'next/link'
import styles from './Button.module.css'

export interface ButtonProps {
    title: string,
    icon?: string,
    href: string
    backgroundColor?: boolean,
    width?: number,
}

const Button = (props: Partial<ButtonProps>) => {
    const {title, icon, backgroundColor, width, href=''} = props
  return (
    <Link href={href}>
        <a className={styles.container} style={{backgroundColor: backgroundColor ? '#3972F9' : '#FFFFFF', width: width, border: backgroundColor ? 'none' : '2px solid var(--borderColor)'}}>
            {icon && <Image src={icon} alt='google-signin' width={22} height={22} />}
            <span className={styles.title} style={{color: backgroundColor ? '#FFFFFF' : '#23262F'}}>{title}</span>
        </a>
    </Link>
  )
}

export default Button