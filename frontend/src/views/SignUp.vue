<template>
  <div class="flex justify-center items-center h-screen bg-blue-900">
    <div class="max-w-md w-full mx-4 bg-white shadow-lg rounded-lg">
      <div class="px-6 py-4">
        <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
        <form @submit.prevent="userSignup">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2"
              >Username</label
            >
            <input
              v-model="username"
              type="text"
              id="username"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-4 flex justify-between">
            <button
              type="submit"
              class="w-1/2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 mr-2"
            >
              Sign Up
            </button>
            <a
              href="#"
              class="w-1/2 text-gray-500 py-2 px-4 rounded-md hover:text-gray-600 ml-2"
              @click="$router.push('signin')"
            >
              Already registered? Back to login
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import * as AuthService from '../services/auth'

const email = ref("")
const password = ref("")
const username = ref("")
const router = useRouter()

const userSignup = async () => {
  try {
    const signUp = await AuthService.userSignup({
      username: username.value,
      email: email.value,
      password: password.value
    })
    alert('Sign up successful!')

    if (!signUp) {
      throw new Error('Error signing up')
    }

    router.replace('/signin')
  } catch (error: any) {
    alert('Sign Up Error ' + error.message)
  }
}
</script>
