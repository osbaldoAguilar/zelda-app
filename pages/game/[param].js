import useSwr from 'swr'
import { useRouter } from 'next/router'
import SvgComponent from '../../components/Svg'

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
    const {name, description, developer, publisher, released_date} = game
    return <div className='relative bg-cream'>
        <div className='px-6 py-4 rounded'>
            <h1 className='text-4xl text-center text-bold p-4'>{name}</h1>
            <div className='bg-green-dark rounded-l'>
            <div className='flex flex-row justify-between py-4 px-2 border-cream border-y-8' >
              <SvgComponent name='Developer:'/>
              {/* <h3>Developer: </h3> */}
              <p className='text-cream text-2xl text-center p-4'>{developer}</p>
            </div>
            <div className="bg-green-dark rounded-l">
            <div className='flex flex-row justify-between py-4 px-2 border-cream border-y-8'>
              <SvgComponent name='Publisher:'/>
              <p className="text-cream text-2xl text-center p-4">{publisher}</p>
            </div>
            </div>
            <div className="bg-green-dark rounded-l">
                <div className='flex flex-row justify-between py-4 px-2 border-cream border-y-8'>
                <SvgComponent name='Released:'/>
                <p className="text-cream text-2xl text-center p-4">{released_date}</p>
                </div>
            </div>
            <div className="bg-green-dark rounded-l">
                <div className='flex flex-col justify-between py-4 px-2 border-cream border-y-8'>
                    <SvgComponent name='Descritpion:'/>
                    <p className="text-cream text-2xl text-center p-4">{description}</p>

            </div>
            </div>
          </div>
        </div>
    </div>

}