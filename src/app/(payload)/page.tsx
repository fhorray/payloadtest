import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const Home = async () => {
  const payload = await getPayloadHMR({ config })

  const users = await payload.find({
    collection: 'users',
  })

  console.log(users)

  return (
    <div>
      <h1>This is the home!</h1>
      <div>
        <p>ID: {users.docs[0].role}</p>
      </div>
    </div>
  )
}

export default Home
