import { useRouter } from "next/router";

const Base = () => {
    const router = useRouter()
    console.log('router: ',router.asPath)

    // return router
}

export default Base

export async function getServerSideProps(params) {
    console.log(params);
    // const router = useRouter()
    // console.log('router: ',router.asPath)
    const res = await fetch(`https://zelda.fanapis.com/api/characters`)
    const response = await res.json()
    console.log(response);
  
    return {props: {response}}
  }