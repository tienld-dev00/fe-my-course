<template>
    <div @click="$emit('hidden')" class="fixed inset-0 z-50 flex h-screen bg-object-black-60">
        <div
            @click.stop
            class="sm:h-fit h-screen flex w-full sm:w-[600px] md:w-[700px] m-auto sm:rounded-2xl overflow-hidden"
        >
            <div class="flex-1 hidden sm:flex items-end bg-cover bg-no-repeat bg-[url('@/assets/imgs/bg-sign-up.png')]">
                <div class="w-full p-4 h-fit bg-gradient-to-t from-object-black-60 to-transparent">
                    <RouterLink to="#">
                        <div class="inline-flex items-center self-start gap-3">
                            <img
                                class="rounded-full border-2 object-cover border-object-white-90 h-[40px] w-[40px]"
                                src="https://files.catbox.moe/nfwze4.png"
                            />
                            <div class="flex flex-col gap-0">
                                <span class="font-semibold text-md text-object-white-90">Joe Kitanoe</span>
                                <span class="text-xs text-object-white-60">Software Developer</span>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div class="flex flex-col flex-1 gap-2 px-3 py-5 bg-surface-light">
                <button @click="$emit('hidden')" class="hidden p-3 ml-auto sm:inline-block hover:opacity-80">
                    <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.19998 0.806638C9.07543 0.681802 8.90633 0.611647 8.72998 0.611647C8.55364 0.611647 8.38454 0.681802 8.25998 0.806638L4.99998 4.05997L1.73998 0.799971C1.61543 0.675136 1.44633 0.60498 1.26998 0.60498C1.09364 0.60498 0.924535 0.675136 0.79998 0.799971C0.53998 1.05997 0.53998 1.47997 0.79998 1.73997L4.05998 4.99997L0.79998 8.25997C0.53998 8.51997 0.53998 8.93997 0.79998 9.19997C1.05998 9.45997 1.47998 9.45997 1.73998 9.19997L4.99998 5.93997L8.25998 9.19997C8.51998 9.45997 8.93998 9.45997 9.19998 9.19997C9.45998 8.93997 9.45998 8.51997 9.19998 8.25997L5.93998 4.99997L9.19998 1.73997C9.45331 1.48664 9.45331 1.05997 9.19998 0.806638Z"
                            fill="#1B1B1B"
                            fill-opacity="0.9"
                        />
                    </svg>
                </button>
                <NavMobile cart-feature search-feature back-feature :on-back="() => $emit('hidden')" />
                <p class="mb-3 text-object-black-90">
                    Join us and get more benefits. We promise to keep your data safely.
                </p>
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
                <span class="mx-auto font-medium text-object-black-90">or you can</span>

                <form class="flex flex-col gap-3">
                    <div
                        class="flex items-center w-full gap-2 px-4 border-b sm:border-0 sm:rounded-md border-b-object-black-20 sm:bg-object-white-90"
                    >
                        <input
                            id="input-email-register"
                            name="email"
                            class="w-full h-[50px] py-2 leading-tight outline-none bg-transparent text-object-black-60 focus:outline-non"
                            type="email"
                            placeholder="Email Address"
                        />
                        <BaseIcon name="email" />
                    </div>
                    <div
                        class="flex items-center w-full gap-2 px-4 border-b sm:border-0 sm:rounded-md border-b-object-black-20 sm:bg-object-white-90"
                    >
                        <input
                            id="input-password-register"
                            name="password"
                            class="w-full h-[50px] py-2 leading-tight outline-none bg-transparent text-object-black-60 focus:outline-non"
                            type="password"
                            placeholder="Password"
                        />
                        <BaseIcon name="lock" />
                    </div>
                    <button
                        type="submit"
                        class="flex items-center justify-center gap-1 px-4 py-2 font-bold bg-base-danger sm:bg-base-primary hover:bg-opacity-80 text-surface-light rounded-2xl"
                    >
                        <span>Create Account</span>
                    </button>
                </form>
                <div class="flex gap-2 mx-auto mt-auto mb-3 text-sm sm:mt-0 sm:mb-0">
                    <span class="font-light">Already have an Account?</span>
                    <span
                        @click="$emit('showLoginForm')"
                        class="font-semibold cursor-pointer hover:opacity-80 text-base-primary"
                    >
                        Sign In
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavMobile from './organisms/NavMobile.vue'
import BaseIcon from './atoms/BaseIcon.vue'
</script>
