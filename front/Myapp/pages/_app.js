import '../styles/globals.css'
import '../styles/nav.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (<>
  <nav className='menu'>
    <ul>
      <Link href='/'><li>Home</li></Link>
      <Link href='/about'><li>About</li></Link>
      <Link href='/whitelist'><li>Whitelist</li></Link>
    </ul>
  </nav>
  <Component {...pageProps} />
  </>)
}

export default MyApp
