import Link from "next/link"
import styles from './Link.module.css'

export interface TextLinkProps {
  title: string,
  subTitle: string,
  href: string
}

const TextLink = (props: TextLinkProps) => {
  const {title, subTitle, href} = props
  return (
    <div className={styles.container}>
      <Link href={href}>
          <a className={styles.text}>{subTitle} <span>{title}</span></a>
      </Link>
    </div>
  )
}

export default TextLink