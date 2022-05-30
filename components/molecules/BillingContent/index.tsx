import Image from 'next/image'
import Link from 'next/link'
// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './BillingContent.module.css'
import SavedCardItem from './SavedCardItem'
import TableRow from './TableRow'

export interface BillingContentProps {
    onClick: () => void
}

const BillingContent = (props: BillingContentProps) => {
    const {onClick} = props
  return (
        <div className={styles.container}>
            <main className={styles.card}>
                <section className={styles.paymentAndBilling}>
                    <div className={styles.title}>
                        <div><Image src="/icons/icon-dollar-sign.svg" alt='manage lists' width={18} height={18} /></div>
                        <h1>Billing Information</h1>
                    </div>
                    <div className={styles.paymentAndBillingCard}>
                        <div>
                            <div className={styles.payment}>
                                <h2>Payment Method</h2>
                                <div className={styles.paymentCard}>
                                    <div>
                                        <Image src="/icons/logo-mastercard.svg" alt='logo mastercard' width={43} height={26}/>
                                        <div>
                                            <p>Mastercard ending in 7322</p>
                                            <p>Expiry : 05-09-2022</p>
                                        </div>
                                    </div>
                                    <Image src="/icons/icon-chevron-down.svg" alt='chevron down' width={20} height={20}/>
                                </div>
                            </div>
                            <div className={styles.billing}>
                                <h2>Billing Information</h2>
                                <div>
                                    <Image src="/icons/icon-home.svg" alt=' logo mastercard' width={18} height={18}/>
                                    <p>4200 Wisconsin Ave NW, <br />Washington Delaware, 20016</p>
                                </div>
                                <div>
                                    <Image src="/icons/icon-globe.svg" alt=' logo mastercard' width={18} height={18}/>
                                    <p>United States</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Last Updated on : 18-03-2022</p>
                            <Link href="/">
                                <a className={styles.upload}>
                                    <Image src="/icons/icon-edit.svg" alt='upload list' width={13} height={13}/>
                                    <span>Edit</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.transaction}>
                    <div className={styles.title}>
                        <div>
                            <div><Image src="/icons/icon-corner-up-right.svg" alt='transaction history' width={18} height={18} /></div>
                            <h1>Transaction History</h1>
                        </div>
                        <Link href="/">
                            <a className={styles.download}>
                                <Image src="/icons/icon-download.svg" alt='download list' width={16} height={16}/>
                                <span>Download All</span>
                            </a>
                        </Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow name="SEO Campaigns" date="08-04-2022" isNegative amount={30000}/>
                            <TableRow name="Ad Campaigns" date="03-04-2022" isNegative amount={25000}/>
                            <TableRow name="Credits Topup" date="17-03-2022" amount={60000}/>
                            <TableRow name="SEO Agencies - List" date="12-03-2022" isNegative amount={10000}/>
                            <TableRow name="Credits Topup" date="24-02-2022" amount={15000}/>
                        </tbody>
                        </table>
                        <div className={styles.pagination}>
                        <p>Page 1 of 3</p>
                        <div>
                            <Link href="/">
                                <a>
                                    <Image src="/icons/icon-chevron-left.svg" alt='upload list' width={26} height={18}/>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                <Image src="/icons/icon-chevron-right.svg" alt='upload list' width={26} height={18}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <aside>
                <section>
                    <Image src="/images/credit-card.png" alt='account overview' width={390} height={228} />
                    <div>
                        <h1>Account Overview</h1>
                        <h2>8,752</h2>
                        <p>Credits</p>
                        <Link href="/">
                            <a className={styles.getMore}>Get More</a>
                        </Link>
                    </div>
                </section>
                <section>
                    <div className={styles.title}>
                        <div>
                            <div><Image src="/icons/icon-credit-card.svg" alt='saved card' width={18} height={18} /></div>
                            <h1>Saved Cards</h1>
                        </div>
                        <div><Image src="/icons/icon-more-vertical.svg" alt='more' width={18} height={18} /></div>
                    </div>
                    <div className={styles.savedCardOverflow}>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper: any) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide><SavedCardItem/></SwiperSlide>
                            <SwiperSlide><SavedCardItem/></SwiperSlide>
                            <SwiperSlide><SavedCardItem/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={styles.cardEnding}>
                        <div>
                            <Image src="/icons/logo-mastercard.svg" alt='logo mastercard' width={33} height={20}/>
                            <div>
                                <p>Mastercard ending in 7322</p>
                                <p>Expiry : 05-09-2022</p>
                            </div>
                        </div>
                        <Image src="/icons/icon-edit-dark.svg" alt='edit' width={13} height={13}/>
                    </div>
                    <div className={styles.cardEnding}>
                        <div>
                            <Image src="/icons/icon-visa.svg" alt='logo visa' width={33} height={20}/>
                            <div>
                                <p>Visa ending in 6534</p>
                                <p>Expiry : 24-12-2022</p>
                            </div>
                        </div>
                        <Image src="/icons/icon-edit-dark.svg" alt='edit' width={13} height={13}/>
                    </div>
                    <div className={styles.btnCta}>
                        <button onClick={onClick}>Add New</button>
                        <button>Remove All</button>
                    </div>
                </section>
            </aside>
        </div>
  )
}

export default BillingContent