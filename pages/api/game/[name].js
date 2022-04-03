export default function userHandler(req, res) {
    console.log('res', res);
    const {
      query: { name },
      method,
    } = req
    
    switch (method) {
      case 'GET':
        res.status(200).json({name, name: name})
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
    // switch (method) {
    //   case 'GET':
    //     // Get data from your database
    //     res.status(200).json()
    //     console.log('GET: ', res);
    //     break
    //   case 'PUT':
    //     // Update or create data in your database
    //     res.status(200).json({ id, name: name || `User ${id}` })
    //     console.log('PUT: ', res);
    //     break
    //   default:
    //     res.setHeader('Allow', ['GET', 'PUT'])
    //     res.status(405).end(`Method ${method} Not Allowed`)
    // }
  }
  