import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const Home = async () => {
  const payload = await getPayloadHMR({ config })

  // GET USERS COLLECTIONS
  const users = await payload.find({
    collection: 'users',
  })

  return (
    <div>
      <h1 className="text-white">This is the home!</h1>
      <div>
        <p>ID:</p>
      </div>
    </div>
  )
}

export default Home
