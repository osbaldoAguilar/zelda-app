import useSwr from 'swr'
import { useRouter } from 'next/router'
import SvgComponent from '../../components/Svg'
import axios from 'axios'

const url = 'https://zelda.fanapis.com/api/characters'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Character() {
    const router = useRouter()
    // const obj = JSON.parse(router.query.data)
    console.log('obj: ', router);
    let character = []
    let dataList = router.query?.data;
    if (!dataList === false) {
        character = JSON.parse(dataList);
    }
    console.log(character);
    const { data, error } = useSwr(
        character.id ? `/api/character/${character.id}` : null, fetcher
    )

    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>
    // console.log('data in character', axios.get(character.appearances));
    const { name, description, gender, race, appearances } = character
    return <div className='relative h-screen bg-cream rounded'>
        <div className='px-6 py-4 rounded'>
            <h1 className='text-4xl text-center text-bold p-4'>{name}</h1>
            <div className='bg-green-dark rounded-l'>
                <div className='flex flex-row justify-between py-4 px-2 border-cream border-y-8' >
                    <SvgComponent name='Gender:' />
                    {/* <h3>Developer: </h3> */}
                    <p className='text-cream text-2xl text-center p-4'>{gender}</p>
                </div>
                <div className="bg-green-dark rounded-l">
                    <div className='flex flex-row justify-between py-4 px-2 border-cream border-y-8'>
                        <SvgComponent name='Race:' />
                        <p className="text-cream text-2xl text-center p-4">{race}</p>
                    </div>
                </div>
                {/* <div className="bg-green-dark rounded-l">
                    <div className='flex flex-row justify-between py-4 px-2 border-cream border-y-8'>
                        <SvgComponent name='Appearances:' />
                        <p className="text-cream text-l text-center p-4">{appearances}</p>
                    </div>
                </div> */}
                <div className="bg-green-dark rounded-l">
                    <div className='flex flex-col justify-between py-4 px-2 border-cream border-y-8'>
                        <SvgComponent name='Descritpion:' />
                        <p className="text-cream text-xl text-center p-4">{description}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

}