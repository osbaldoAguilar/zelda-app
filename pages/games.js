import React from 'react'

function Games({response}) {
    console.log('see: ', response);
    let {data} = response
  return (
    <div>
        <ul className='grid grid-cols-2 gap-2'>
            {data.map((index, key) => {
                return <li key={key} className='p-6 bg-white rounded-xl shadow-lg flex items-center space-x-2'>{index.name}</li>
            })}
        </ul>
    </div>
  )
}

export default Games

export async function getServerSideProps() {
    const res = await fetch(`https://zelda.fanapis.com/api/games`)
    const response = await res.json()
  
    return {props: {response}}
  }