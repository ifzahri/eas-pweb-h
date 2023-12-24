<template>
    <div class="flex justify-center items-center h-screen bg-blue-900">
      <div class="max-w-md w-full mx-4 bg-white shadow-lg rounded-lg">
        <div class="px-6 py-4">
          <h2 class="text-2xl font-bold mb-4">Login</h2>
          <form @submit.prevent="userSignin">
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
                Login
              </button>
              <a
              href="#"
              class="w-1/2 text-gray-500 py-2 px-4 rounded-md hover:text-gray-600 ml-2"
              @click="$router.push('signup')"
            >
              Haven't registered? Sign up
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

const email = ref('')
const password = ref('')
const router = useRouter()

const userSignin = async () => {
  try {
    const signIn = await AuthService.userLogin({
      email: email.value,
      password: password.value
    })
    alert('Sign in successful!')

    if (!signIn) {
      throw new Error('Error signing in')
    }

    router.replace('/')
  } catch (error: any) {
    alert('Sign In Error ' + error.message)
  }
}
</script>
