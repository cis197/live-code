import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  const { username } = router.query

  return <p>Username: {username}</p>
}

export default User