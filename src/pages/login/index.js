import styles from '@/styles/Signup.module.css'
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import { useGoogleOneTapLogin } from '@react-oauth/google';


export default function Login(){
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.left}> Soe here</div>
                <div className={styles.right}>
                    <div className={styles.sign}>
                        <div className={styles.text}>
                            <h1>Sign Up for GhostMail</h1>
                            <p>Create an account and utilize AI to formulate your emails</p>
                        </div>
                        <div className={styles.buttons}>
                            <div><button>Sing Up with Google</button></div>
                            <div><button>Sing Up with Email</button></div>

                        </div>
                        <p style={{textAlign:'center'}}>Don't have an account? <Link href='/signup'>sign up</Link> </p>
                    </div>
                </div>
            </div>
         </>
    )
}