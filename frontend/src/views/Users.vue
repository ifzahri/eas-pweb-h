<template>
  <div>
    <nav class="bg-blue-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-white text-lg font-semibold">My App</span>
            </div>
          </div>
          <div class="flex items-center">
            <button v-if="currentUser" @click="logout" class="text-white text-sm px-4 py-2 rounded-md bg-red-500 hover:bg-red-600">
              Logout
            </button>
            <button v-else @click="redirectToSignIn" class="text-white text-sm px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="bg-white">
      <div class="flex justify-center items-center h-screen flex-col">
        <h2 class="text-2xl font-bold mb-4">User List</h2>
        <div class="card">
          <div class="card-body">
            <div v-for="user in userList" :key="user.id" class="user-row">
              <p>Name: {{ user.username }}</p>
              <button v-if="currentUser" @click="findUsers(user.id)" class="text-white text-sm px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
              Start Chat
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as AuthService from '../services/auth'
import router from '@/router'

const userList = ref([])
const currentUser = ref('')

onMounted(() => {
  fetchUsers()
  getUser()
})

const getUser = async () => {
  const user = await AuthService.getUser()
  currentUser.value = user
}

const fetchUsers = async () => {
  try {
    const response = await AuthService.fetchUsers()
    userList.value = response
  } catch (error) {
    console.error(error)
  }
}

const findUsers = async (usersID: string) => {
  try {
    const resp = await fetch(`http://localhost:3000/api/users/${usersID}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message
      throw new Error(errorMsg)
    }
    const findUsers = (await resp.json())
    console.log(findUsers)
    router.push(`/users/${findUsers.id}`)
  } catch (error: any) {
    alert('Find Users Error ' + error.message)
  }
}

</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-row {
  margin-bottom: 16px;
}
</style>
