import useSwr from 'swr'
import Link from 'next/link'
// const url = 'https://zelda.fanapis.com/api/games'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/games', fetcher)
  
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  let extracted = data.data.data
  console.log(extracted);
  return (
    <ul>
      {extracted.map((game, key) => (
        <li key={key}>
          <Link href={{pathname:`/game/${game.name}`, query: { data: JSON.stringify(game)}}} >
            <a>{`Title: ${game.name}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
