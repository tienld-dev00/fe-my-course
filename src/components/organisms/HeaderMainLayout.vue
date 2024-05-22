<template>
    <div class="container relative flex justify-between gap-4 px-3 mx-auto sm:px-0 h-14">
        <div class="flex items-center gap-2 py-2 mx-1">
            <button type="button" class="sm:hidden" @click="isShowSidebarMobile = true">
                <BaseIcon name="menu" />
            </button>
            <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
                <BaseIcon name="logo" />
                <span class="font-extrabold text-surface-dark">MyCourse.io</span>
            </RouterLink>
        </div>

        <DropdownComponent :items-data="browserItems">
            <div
                class="items-center self-center hidden gap-2 sm:inline-flex lg:hidden hover:opacity-80 text-surface-dark"
            >
                <span>Browser</span>
                <BaseIcon name="arrow-down" />
            </div>
        </DropdownComponent>

        <div class="flex items-center justify-end gap-4 py-2 grow">
            <div class="bg-object-white-90 hidden w-full lg:w-[300px] gap-2 items-center px-4 rounded-lg sm:flex">
                <input
                    class="w-full py-2 leading-tight outline-none bg-object-white-90 text-object-black-60 focus:outline-non"
                    @input="handleOnchangeSearch"
                    v-model="searchText"
                    type="text"
                    placeholder="Search for course"
                />
                <BaseIcon v-if="!searchText" name="search" />
                <BaseIcon v-else name="close" @click="searchText = ''" />
            </div>

            <a href="#" class="hidden hover:opacity-80 text-surface-dark lg:inline-block">Become Instructor</a>

            <RouterLink to="">
                <BaseIcon name="cart" />
            </RouterLink>

            <RouterLink to="">
                <BaseIcon name="bell" v-if="store.state.auth.is_authenticated" />
            </RouterLink>

            <DropdownComponent v-if="store.state.auth.is_authenticated" :items-data="avatarItems">
                <img
                    class="h-[40px] min-w-[40px] border-2 rounded-full object-cover block"
                    :src="store.state.auth.user.avatar ?? avatarDefault"
                />
            </DropdownComponent>

            <div v-else class="items-center hidden gap-2 sm:flex">
                <button
                    @click="$emit('showLoginForm')"
                    class="inline-flex items-center gap-1 px-4 py-2 font-bold bg-white border min-w-max hover:bg-gray-100 text-object-black-90 rounded-2xl border-object-black-90"
                >
                    <span>Login</span>
                </button>
                <button
                    @click="$emit('showSignUpForm')"
                    class="inline-flex items-center gap-1 px-4 py-2 font-bold min-w-max bg-base-primary hover:bg-opacity-90 text-surface-light rounded-2xl"
                >
                    <span>Sign Up</span>
                </button>
            </div>
        </div>
        <div
            v-show="isShowSidebarMobile"
            class="fixed inset-0 z-40 flex flex-col py-6 overscroll-contain bg-surface-light sm:hidden"
        >
            <button @click="isShowSidebarMobile = false" class="p-4 ml-auto">
                <BaseIcon name="close" />
            </button>
            <ul class="flex *:w-full hover:*:bg-gray-100 *:p-4 flex-col">
                <li>Become Instructor</li>
                <li
                    v-show="!store.state.auth.is_authenticated"
                    @click="
                        () => {
                            $emit('showLoginForm')
                            isShowSidebarMobile = false
                        }
                    "
                >
                    Login
                </li>
                <li
                    v-show="!store.state.auth.is_authenticated"
                    @click="
                        () => {
                            $emit('showSignUpForm')
                            isShowSidebarMobile = false
                        }
                    "
                >
                    SignUp
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

import DropdownComponent from '@/components/DropdownComponent.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import type { DropdownItem } from '@/types'
import avatarDefault from '@/assets/imgs/default-avatar.png'

const store = useStore()

const browserItems: DropdownItem[] = [
    { id: 1, title: 'option 1' },
    { id: 2, title: 'option 2' },
    { id: 3, title: 'option 3' },
]

const avatarItems: DropdownItem[] = [
    { id: 1, title: 'My Account', path: { name: 'my-account' } },
    { id: 2, title: 'My Course', path: { name: 'my-course' } },
    { id: 3, title: 'Log Out', onClick: () => store.dispatch('auth/logout') },
]

const router = useRouter()
const route = useRoute()
const isShowSidebarMobile = ref(false)
const searchText = ref(route.params.query)
let timeoutId: any = null

const handleOnchangeSearch = (event: any) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        if (event.target.value.length === 0) {
            router.back()
            return
        }

        router.push({ name: 'search', params: { query: searchText.value }, replace: route.name === 'search' })
    }, 500)
}
</script>
