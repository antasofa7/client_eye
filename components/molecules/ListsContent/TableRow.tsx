import Image from 'next/image'
import Link from 'next/link'
import styles from './ListsContent.module.css'

export interface TableRowProps {
    number: number,
    name: string,
    date: string,
    size: number,
}
const TableRow = (props: TableRowProps) => {
    const {number, name, date, size} = props
  return (
    <tr>
        <td><input type="checkbox" /></td>
        <td>{number}</td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{`${size}GB`}</td>
        <td className={styles.actions}>
        <Link href="/">
            <a className={styles.icon}>
                <Image src="/icons/icon-trash-2.svg" alt='trash' width={28} height={20}/>
            </a>
        </Link>
        <Link href="/">
            <a className={styles.icon}>
                <Image src="/icons/icon-download.svg" alt='upload list' width={28} height={20}/>
            </a>
        </Link>
        <Link href="/">
            <a className={styles.icon}>
                <Image src="/icons/icon-more-vertical.svg" alt='more' width={28} height={20}/>
            </a>
        </Link>
        </td>
    </tr>
  )
}

export default TableRow