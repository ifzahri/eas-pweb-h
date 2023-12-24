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
        <h2 class="text-2xl font-bold mb-4">Welcome, {{ currentUser.username }}</h2>
        <button class="text-white text-sm px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600" @click="$router.push('/chats')">Mulai Chat</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import * as AuthService from '../services/auth'
import router from '@/router'

const currentUser = ref('')

onMounted(() => {
  getUser()
})

const getUser = async () => {
  const user = await AuthService.getUser()
  console.log(user)

  currentUser.value = user
}

const logout = async () => {
  await AuthService.logout()
  window.location.reload()
  router.push('/signin')
}

const redirectToSignIn = () => {
  router.push('/signin')
}

const redirectToChats = () => {
  router.push('/chats')
}
</script>
