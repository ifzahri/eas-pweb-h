export const userLogin = async ({ email, password }: { email: string; password: string }) => {
  const resp = await fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (!resp.ok) {
    const errorMsg = (await resp.json())?.errors[0].message
    throw new Error(errorMsg)
  }
  const signedUpUser = await resp.json()
  console.log(signedUpUser)
  return signedUpUser
}

export const userSignup = async ({
  username,
  email,
  password
}: {
  username: string
  email: string
  password: string
}) => {
  const resp = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      username
    })
  })

  if (!resp.ok) {
    const errorMsg = (await resp.json())?.errors[0].message
    throw new Error(errorMsg)
  }

  const signedInUser = await resp.json()
  console.log(signedInUser)
  return signedInUser
}

export const getUser = async () => {
  try {
    const resp = await fetch('http://localhost:3000/api/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }
    const { user } = await resp.json()
    const currentUser = user
    console.log(currentUser)
    return currentUser
  } catch (error: any) {
    alert('Sign In Error ' + error.message)
  }
}

export const logout = async () => {
  try {
    const resp = await fetch('http://localhost:3000/api/users/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }
  } catch (error: any) {
    alert('Log Out Error ' + error.message)
  }
}

export const fetchUsers = async () => {
  try {
    const resp = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }
    const users = await resp.json()
    console.log(users.docs)
    return users.docs
  } catch (error: any) {
    alert('Fetch Users Error ' + error.message)
  }
}

export const findUsers = async (usersID: string) => {
  try {
    const resp = await fetch(`http://localhost:3000/api/users/${usersID}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }
    const findUsers = await resp.json()
    console.log(findUsers)
    return findUsers
  } catch (error: any) {
    alert('Find Users Error ' + error.message)
  }
}

export const fetchChats = async (userId: string) => {
  try {
    const resp = await fetch(`http://localhost:3000/api/chats?userId=${userId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }

    const chats = await resp.json()
    console.log(chats)
    return chats
  } catch (error: any) {
    alert('Fetch Chats Error ' + error.message)
  }
}

export const createChat = async (
  sender: string,
  receiver: string,
  chats: string,
  email: string
) => {
  try {
    const resp = await fetch('http://localhost:3000/api/chats', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender,
        receiver,
        chats,
        email
      })
    })

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }

    const newChat = await resp.json()
    console.log(newChat)
    return newChat
  } catch (error: any) {
    alert('Create Chat Error ' + error.message)
  }
}
