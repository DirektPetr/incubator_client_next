import { Card, Recaptcha, Textarea } from '@robur_/ui-kit'
import Link from 'next/link'

export default function Components() {
  return (
    <div className={'flex flex-col gap-8 m-4'}>
      <h1>Components</h1>
      <Card>
        <h1>My Test Hi!!!</h1>
      </Card>
      <Textarea />
      <Recaptcha />
      <div className={'flex flex-col text-lg text-yellow-400'}>
        <Link href={'/'}>Back</Link>
      </div>
    </div>
  )
}
