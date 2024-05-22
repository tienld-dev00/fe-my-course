<template>
    <div
        class="absolute min-h-screen sm:h-fit p-3 sm:p-0 sm:pb-10 overflow-hidden top-0 bg-surface-light sm:static container flex flex-col mb-20 [&>*]:self-center gap-3 mx-auto sm:w-fit sm:my-3"
    >
        <NavMobile search-feature cart-feature />
        <h1 class="hidden text-2xl font-bold sm:inline">My Account</h1>
        <ul
            class="flex overflow-x-auto gap-6 text-lg text-object-black-90 font-base [&>li]:min-w-fit w-full [&>li]:border-b-4 hover:[&>li]:border-b-object-black-30 hover:[&>li]:opacity-80 [&>li]:border-b-transparent [&>li]:cursor-pointer"
        >
            <li class="!border-b-base-primary text-base-primary sm:text-inherit">Profile</li>
            <li>Personalization</li>
            <li>Payment Methods</li>
            <li>Notifications</li>
            <li>Privacy</li>
        </ul>

        <form class="flex flex-col w-full gap-4">
            <div class="relative self-center">
                <img
                    ref="avatar"
                    class="h-[75px] w-[75px] object-cover rounded-full border-2 border-object-black-30"
                    :src="store.state.auth.user?.avatar ?? AvatarDefault"
                />
                <label
                    for="input-avatar"
                    class="absolute p-2 rounded-full hover:opacity-80 -right-2 -bottom-2 bg-object-black-90"
                >
                    <BaseIcon name="camera" />
                </label>
                <input id="input-avatar" name="avatar" class="hidden" @input="previewAvatar" type="file" />
            </div>
            <div class="flex flex-col">
                <div class="relative w-full h-11">
                    <input
                        name="first_name"
                        type="text"
                        id="input-first-name"
                        placeholder=""
                        value="Jonathan"
                        class="peer h-full w-full border-b-2 border-b-object-black-10 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label
                        for="input-first-name"
                        class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-md peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        First name
                    </label>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="relative w-full h-11">
                    <input
                        name="last_name"
                        type="text"
                        id="input-last-name"
                        placeholder=""
                        value="Doe"
                        class="peer h-full w-full border-b-2 border-b-object-black-10 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label
                        for="input-last-name"
                        class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-md peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Last name
                    </label>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="relative w-full h-11">
                    <input
                        name="headline"
                        type="text"
                        id="input-headline"
                        placeholder=""
                        class="peer h-full w-full border-b-2 border-b-object-black-10 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label
                        for="input-headline"
                        class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-md peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Headline
                    </label>
                </div>
            </div>
            <div class="flex flex-col border-b-2 border-b-object-black-10">
                <label for="input-language" class="text-sm text-object-black-60">Language</label>
                <select id="input-language" name="language" class="pb-2 text-lg outline-none" type="text" value="en">
                    <option value="en">English</option>
                    <option value="vi">Vietnamese</option>
                </select>
            </div>
            <div class="flex flex-col">
                <div class="relative w-full h-11">
                    <input
                        name="link"
                        type="text"
                        id="input-link"
                        value="www.kitani.io"
                        placeholder=""
                        class="peer h-full w-full border-b-2 border-b-object-black-10 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label
                        for="input-link"
                        class="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-md peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                    >
                        Link
                    </label>
                </div>
            </div>
            <button
                class="inline-flex items-center justify-center gap-1 px-10 py-2 font-bold sm:self-center bg-base-danger sm:bg-base-primary hover:bg-opacity-90 text-surface-light rounded-2xl"
            >
                <span>Save <span class="sm:hidden">changes</span></span>
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import NavMobile from '@/components/organisms/NavMobile.vue'
import AvatarDefault from '@/assets/imgs/default-avatar.png'
import { useStore } from 'vuex'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

const avatar = ref()
const store = useStore()

const previewAvatar = (event: Event) => {
    const input = event.target as HTMLInputElement

    if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = function (e) {
            avatar.value.src = e?.target?.result
        }
        reader.readAsDataURL(input.files[0])
    }
}
</script>
