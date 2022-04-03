
export default function Gamelist(props) {
  console.log('data: ',props);
  // let {data} = response
  // console.log(data);
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

