import Head from 'next/head';
import { SecondFlow } from '../components/second-page';

export default function Main() {
  return (
    <div className='text-white'>
      <Head>
        <title>Tiny Colony Press Kit</title>
        <meta name='description' content='Studio Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <SecondFlow />
      </main>
    </div>
  );
}