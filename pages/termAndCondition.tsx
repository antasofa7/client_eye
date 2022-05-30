import Link from 'next/link'
import { ContentItem, Header, Spacer } from '../components'
import styles from '../styles/TermAndCondition.module.css'

const TermAndCondition = () => {
  return (
      <div className={styles.container}>
        <Header id="termsAndConditions"/>
        <main>
            <section>
                <div>
                    <h2>Contact Blaster</h2>
                    <h1>Terms and Conditions</h1>
                    <h4>Last Updated on : 05/03/2021</h4>
                    <p>These terms of service (&quot;Terms&quot;) apply to your access and use of Contact Blaster. Please read this Terms and Conditions agreement carefully before accessing or using Contact Blaster. Because it is such an important contract between us and our users, we have tried to make it as clear as possible</p>
                </div>
                <article>
                    <h3>1. Accepting these terms</h3>
                    <p>If you access or use the Service, it means you agree to be bound by all of the terms below. So, before you use the Service, please read all of the terms. If you don&lsquo;t agree to all of the terms below, please do not use the Service. Also, if a term does not make sense to you, please let us know by e-mailing <Link href=""><a>info@contactblaster.com</a></Link>.</p>
                    <Spacer height={42}/>
                    <h3>2. Changes to these Terms</h3>
                    <p>We reserve the right to modify these Terms at any time. For instance, we may need to change these Terms if we come out with a new feature or for some other reason.</p>
                    <Spacer height={19}/>
                    <p>Whenever we make changes to these Terms, the changes are effective Immediately after we post such revised Terms (indicated by revising the date at the top of these Terms) or upon your acceptance if we provide a mechanism for your immediate acceptance of the revised Terms (such as a click-through confirmation or acceptance button). It is your responsibility to check <Link href=""><a>www.contactblaster.com</a></Link> for changes to these Terms. Use of the Contact Blaster may be subject to additional terms and conditions presented by Contact Blaster.</p>
                </article>
            </section>
            <aside>
                <h3>Contents</h3>
                <ContentItem number='1' title='Introduction'/>
                <ContentItem number='2' title='Accepting these terms'/>
                <ContentItem number='3' title='Change to these terms'/>
                <ContentItem number='4' title='Creating Accounts'/>
                <ContentItem number='5' title='Third Part Services'/>
                <ContentItem number='6' title='Governing Law'/>
                <ContentItem number='7' title='Jurisdiction'/>
                <ContentItem number='8' title='Termination'/>
                <ContentItem number='9' title='Questions & Contact Information'/>
            </aside>
        </main>
      </div>
  )
}

export default TermAndCondition