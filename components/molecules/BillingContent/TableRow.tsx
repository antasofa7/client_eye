import Image from 'next/image'
import Link from 'next/link'
import styles from './BillingContent.module.css'

export interface TableRowProps {
    name: string,
    date: string,
    amount: number,
    isNegative?: boolean
}
const TableRow = (props: Partial<TableRowProps>) => {
    const {name, date, amount, isNegative} = props
    const updown = isNegative ? '-' : '+'
  return (
    <tr>
        <td><input type="checkbox" /></td>
        <td>{name}</td>
        <td>{date}</td>
        <td>
            <div>
                <Image src="/icons/logo-mastercard.svg" alt='logo mastercard' width={25} height={15}/>
                <p>Mastercard - 7322</p>
            </div>
        </td>
        <td style={{color: isNegative ? '#FF363C' : '#00B976'}}>{`${updown}${amount}`}</td>
        <td>
            <Link href="/">
                <a>
                    <Image src="/icons/icon-download.svg" alt='download all' width={16} height={16}/>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <Image src="/icons/icon-more-vertical.svg" alt='more' width={16} height={16}/>
                </a>
            </Link>
        </td>
    </tr>
  )
}

export default TableRow