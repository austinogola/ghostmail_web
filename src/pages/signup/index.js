import styles from '@/styles/Signup.module.css'
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import { GoogleLogin } from '@react-oauth/google';


export default function Signup(){
    const responseMessage = (CredentialResponse) => {
        console.log(CredentialResponse);
        fetch('http://localhost:5000/oauth',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(CredentialResponse)
        }).then(async res=>{
            let response=await res.json()
            document.cookie='ghostToken'+"="+response.cookie+'; path=/'+
            console.log(response);
        })
        
    };
    const errorMessage = (error) => {
        console.log('error',error);
    };
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
                            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} useOneTap/>
                            <div><button>Sing Up with Email</button></div>
                            

                        </div>
                        <p style={{textAlign:'center'}}>Already have an account? <Link href='/login'>login</Link> </p>
                    </div>
                </div>
            </div>
         </>
    )
}