import Head from 'next/head';
import { FirstFlow } from '../components/first-page';

export default function Home() {
  return (
    <div className='text-white'>
      <Head>
        <title>Tiny Colony Press Kit</title>
        <meta name='description' content='Studio Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <FirstFlow />
      </main>
    </div>
  );
}