import Link from 'next/link'
import styles from './ContentItem.module.css'

export interface ContentItemProps {
    number: string,
    title: string
}

const ContentItem = (props: ContentItemProps) => {
    const {number, title} = props
  return (

    <Link href="">
        <a className={styles.container}>
            <div className={styles.number}>{number}</div>
            <p>{title}</p>
        </a>
    </Link>
  )
}

export default ContentItem