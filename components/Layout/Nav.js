// import useSwr from 'swr'
import Link from 'next/link'
// const url = 'https://zelda.fanapis.com/api/games'
// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Nav() {
  // const { data, error } = useSwr('/api/games', fetcher)
  
  // if (error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>
  // let extracted = data.data.data
  // console.log(extracted);
  return (
    <ul className='flex justify-around py-4 text-golden-yellow'>
      <Link href='/games'>Games</Link>
      <Link href='/characters'>Characters</Link>
      <Link href='/monsters'>Monsters</Link>
    </ul>
    // <ul className='grid grid-cols-2 gap-2 mx-2'>
    //   {extracted.map((game, key) => (
    //     <li key={key}>
    //       <Link href={{pathname:`/game/${game.name}`, query: { data: JSON.stringify(game)}}} >
    //         <a className='p-6 bg-green-dark rounded-xl shadow-xl flex text-center content-center space-x-2 f'>{game.name}</a>
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  )
}
// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link';
// import Gamelist from '../components/Gamelist';
// import styles from '../styles/Home.module.css'

// export default function Home() {
  
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <div className='grid grid-cols-2'>
//           <Link href='/base/games'>games</Link>
//           <Link href='/base/characters'>characters</Link>
//           <Link href='/base/monsters'>monsters</Link>
//         </div>
//       </main>

//       <footer className={styles.footer}>
    
//       </footer>
//     </div>
//   )
// }
