import Image from 'next/image'
import Link from 'next/link'
import styles from './ListsContent.module.css'
import TableRow from './TableRow'

const ListsContent = () => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <div className={styles.title}>
          <div>
            <div><Image src="/icons/icon-file-text.svg" alt='manage lists' width={30} height={21} /></div>
            <h1>Manage Lists</h1>
          </div>
          <Link href="/">
              <a className={styles.upload}>
                  <Image src="/icons/icon-upload.svg" alt='upload list' width={28} height={20}/>
                  <span>Upload List</span>
              </a>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TableRow number={1} name="SEO Agencies" date="28-04-2022" size={4.0}/>
            <TableRow number={2} name="Advertisement Agencies" date="20-04-2022" size={2.3}/>
            <TableRow number={3} name="Marketing Agencies" date="14-04-2022" size={1.8}/>
            <TableRow number={4} name="Financial Agencies" date="08-04-2022" size={6.0}/>
            <TableRow number={5} name="Business Organizations" date="03-04-2022" size={95}/>
            <TableRow number={6} name="Employment Agencies" date="27-03-2022" size={2.0}/>
            <TableRow number={7} name="International Organizations" date="22-03-2022" size={3.7}/>
            <TableRow number={8} name="Branding Agencies" date="20-03-2022" size={5.1}/>
            <TableRow number={9} name="Copywriting Agencies" date="16-03-2022" size={7.6}/>
            <TableRow number={10} name="Digital Marketing Agencies" date="14-03-2022" size={8.1}/>
            <TableRow number={11} name="Web Designing Agencies" date="03-04-2022" size={3.4}/>
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
    </div>
  )
}

export default ListsContent