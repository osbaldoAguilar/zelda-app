// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    // const games = async () => {
    const url = 'https://zelda.fanapis.com/api/monsters'
    await axios.get(url).then(({data}) => {res.status(200).json({data})}).catch(({err}) => {res.status(400).json({err})})
        // console.log(response);
        // return games
    // }

    // Get data from your database
    // res.status(200).json(games)
}
