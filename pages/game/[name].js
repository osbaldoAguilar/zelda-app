import useSwr from 'swr'
import { useRouter } from 'next/router'

const url = 'https://zelda.fanapis.com/api/games'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Game() {
    const router = useRouter()
    // const obj = JSON.parse(router.query.data)
    console.log('obj: ',router);
    let game = []
    let dataList = router.query?.data;
    if(!dataList === false){
        game = JSON.parse(dataList);
    }
    console.log(game);
    const { data, error } = useSwr(
        game.id ? `/api/game/${game.id}` : null, fetcher
    )
    
    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>
    console.log('data in game', game);
    const {name, description} = game
    return <div>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>

}