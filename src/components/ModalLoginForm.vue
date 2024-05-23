<template>
    <div @click="$emit('hidden')" class="fixed inset-0 z-50 flex bg-object-black-60">
        <div
            @click.stop
            class="sm:h-fit h-screen flex w-full sm:w-[600px] md:w-[700px] m-auto sm:rounded-2xl overflow-hidden"
        >
            <div class="flex-1 hidden sm:flex items-end bg-cover bg-no-repeat bg-[url('@/assets/imgs/bg-login.png')]">
                <div class="w-full p-4 h-fit bg-gradient-to-t from-object-black-60 to-transparent">
                    <RouterLink to="#">
                        <div class="inline-flex items-center self-start gap-3">
                            <img
                                class="rounded-full border-2 object-cover border-object-white-90 h-[40px] w-[40px]"
                                src="https://files.catbox.moe/0prlj9.png"
                            />
                            <div class="flex flex-col gap-0">
                                <span class="font-semibold text-md text-object-white-90">Jane Kitani</span>
                                <span class="text-xs text-object-white-60">Graphic Designer</span>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div class="flex flex-col flex-1 gap-2 px-3 py-5 bg-surface-light">
                <button @click="$emit('hidden')" class="hidden p-3 ml-auto sm:inline-block hover:opacity-80">
                    <BaseIcon name="close" />
                </button>
                <NavMobile cart-feature search-feature :on-back="() => $emit('hidden')" />
                <p class="text-object-black-90">Join us and get more benefits. We promise to keep your data safely.</p>
                <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
                    <div
                        class="flex items-center w-full gap-2 px-4 border-b sm:border-0 sm:rounded-md border-b-object-black-20 sm:bg-object-white-90"
                    >
                        <input
                            id="input-email-login"
                            name="email"
                            class="w-full h-[50px] py-2 leading-tight outline-none bg-transparent text-object-black-60 focus:outline-non"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <BaseIcon name="email" />
                    </div>
                    <div
                        class="flex items-center w-full gap-2 px-4 border-b sm:border-0 sm:rounded-md border-b-object-black-20 sm:bg-object-white-90"
                    >
                        <input
                            id="input-password-login"
                            name="password"
                            class="w-full h-[50px] py-2 leading-tight outline-none bg-transparent text-object-black-60 focus:outline-non"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <BaseIcon name="lock" />
                    </div>
                    <button
                        type="submit"
                        class="flex items-center justify-center gap-1 px-4 py-2 font-bold bg-base-danger sm:bg-base-primary hover:bg-opacity-80 text-surface-light rounded-2xl"
                    >
                        <span>Login</span>
                    </button>
                </form>
                <span class="mx-auto font-medium text-object-black-90">or you can</span>
                <button
                    class="flex items-center justify-center gap-1 px-4 py-2 font-bold bg-[#4267B2] hover:bg-opacity-80 text-surface-light rounded-2xl"
                >
                    <BaseIcon name="facebook" />
                    <span>Continue with Facebook</span>
                </button>
                <button
                    class="flex items-center justify-center gap-1 px-4 py-2 font-bold bg-surface-dark hover:bg-opacity-80 text-surface-light rounded-2xl"
                >
                    <BaseIcon name="apple" />
                    <span>Continue with Apple</span>
                </button>
                <button
                    class="flex items-center justify-center gap-1 px-4 py-2 font-bold border border-object-black-30 bg-surface-light hover:bg-opacity-80 text-surface-light rounded-2xl"
                >
                    <BaseIcon name="google" />
                    <span class="text-object-black-60">Continue with Google</span>
                </button>
                <div class="flex gap-2 mx-auto mt-auto mb-3 text-sm sm:mt-0 sm:mb-0">
                    <span class="font-light">Need an Account?</span>
                    <span
                        @click="$emit('showSignUpForm')"
                        class="font-semibold cursor-pointer hover:opacity-80 text-base-primary"
                    >
                        Sign Up
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import BaseIcon from './atoms/BaseIcon.vue'
import NavMobile from './organisms/NavMobile.vue'

const emits = defineEmits(['hidden', 'showSignUpForm'])

const store = useStore()

const handleSubmit = async (event: any) => {
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())
    await store.dispatch('auth/login', formValues)
    emits('hidden')
}
</script>
