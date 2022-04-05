import useSwr from 'swr'
import Link from 'next/link'
// const url = 'https://zelda.fanapis.com/api/games'
const fetcher = (url) => fetch(url).then((res) => res.json())
function Monsters({response}) {
      const { data, error } = useSwr('/api/monsters', fetcher)
  
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  let extracted = data.data.data
  console.log('extracted: ',extracted);
  return (
    <ul className='grid grid-cols-2 gap-2 mx-2'>
      {extracted.map((monster, key) => (
        <li key={key}>
          <Link href={{pathname:`/monster/${monster.name}`, query: { data: JSON.stringify(monster)}}} >
            <a className='p-6 bg-green-dark rounded-xl shadow-xl flex text-center content-center space-x-2 f'>{monster.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Monsters

// export async function getServerSideProps() {
//     const res = await fetch(`https://zelda.fanapis.com/api/games`)
//     const response = await res.json()
  
//     return {props: {response}}
//   }