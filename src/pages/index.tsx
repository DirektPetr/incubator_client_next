import Link from 'next/link'

import '@robur_/ui-kit/style.css'

export default function Home() {
  return (
    <main>
      <div className={'container'}>
        <h2>Navigation</h2>
        <div className={'flex flex-col text-lg text-yellow-400'}>
          <Link href={'/sign-in'}>Sign in</Link>
          <Link href={'/sign-up'}>Sign up</Link>
          <Link href={'/profile'}>Profile</Link>

          <Link href={'/components'}>Components</Link>
        </div>
      </div>
    </main>
  )
}
