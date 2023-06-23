import '@/styles/globals.css'
import Script from "next/script";
import Head from "next/head";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script src="https://accounts.google.com/gsi/client" async defer/>
    <GoogleOAuthProvider clientId="127610733883-dtfkdou1n323hklsm7gaiv5cv6nnscd4.apps.googleusercontent.com" redirect_uri='http://localhost:5000/oauth' response_type='code'>
    <Component {...pageProps} />
    </GoogleOAuthProvider>
  </>
  )
}
