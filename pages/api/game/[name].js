
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
  }
