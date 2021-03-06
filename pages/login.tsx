import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {Button, Input, Spacer, TextLink} from '../components';
import styles from '../styles/Login.module.css'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Client Eye</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.sectionLeft}>
          <div className={styles.wrapper}>
            <p className={styles.hiText}>Hi there,</p>
            <div className={styles.welcome}>
              <h1>Welcome back</h1>
              <Image src="/icons/welcome.png" alt='welcome' width={50} height={50}/>
            </div>
            <div className={styles.btnSocial}>
              <Button href='/' title="Google" icon="/icons/google.svg" />
              <Spacer width={26}/>
              <Button href='/' title="Apple ID" icon="/icons/apple.svg" />
            </div>
            <p className={styles.continueText}>Or Continue with email address</p>
            <Input type='email' placeholder='eg: johndoe@gmail.com' icon="icon-mail.svg"/>
            <Spacer height={25}/>
            <Input type='password' placeholder='Enter your password' icon="icon-lock.svg" suffixIcon='icon-eye.svg'/>
            <div className={styles.rememberAndForgot}>
              <div>
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div>
                <Link href="/forgotPassword">
                  <a>
                    <Image src="/icons/icon-link.svg" alt='forgot password' width={18} height={18} />
                    <p>Forgot password?</p>
                  </a>
                </Link>
              </div>
            </div>
            <Button href='/' title="Sign in to your account" backgroundColor/>
            <TextLink href="/signup" subTitle="Don???t have an account?" title="Sign up for free"/>
          </div>
        </section>
        <section className={styles.sectionRight}>
          <Image src="/images/img-background2.png" alt='background' width={855} height={1014} layout='responsive' objectFit='contain' className={styles.backgroundImage} />
          <div>
            <Image src="/images/logo-white.svg" alt="logo client eye" width={120} height={120} />
            <p>ClientEye</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login
