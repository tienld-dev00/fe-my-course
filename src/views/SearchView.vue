<template>
    <div class="absolute top-0 w-screen sm:pt-6 bg-surface-light sm:static">
        <NavMobile search-feature />
        <div class="hidden pb-3 border-b md:flex border-b-object-black-10">
            <form class="container flex justify-between mx-auto">
                <div class="flex gap-3">
                    <div
                        class="inline-flex items-center px-3 pb-1 font-medium border-2 rounded-md text-object-black-90 border-object-black-10"
                    >
                        <select name="programming_language" class="flex pr-3 outline-none">
                            <option value="">Programming</option>
                            <option value="php">PHP</option>
                            <option value="java">Java</option>
                            <option value="js">javascript</option>
                        </select>
                    </div>
                    <div
                        class="inline-flex items-center px-3 pb-1 font-medium border-2 rounded-md text-object-black-90 border-object-black-10"
                    >
                        <select name="duration" class="flex pr-3 outline-none">
                            <option value="">All Duration</option>
                        </select>
                    </div>
                    <div
                        class="inline-flex items-center px-3 pb-1 font-medium border-2 rounded-md text-object-black-90 border-object-black-10"
                    >
                        <select name="level" class="flex pr-3 outline-none">
                            <option value="">All Level</option>
                        </select>
                    </div>
                    <div
                        class="inline-flex items-center px-3 pb-1 font-medium border-2 rounded-md text-object-black-90 border-object-black-10"
                    >
                        <select name="language" class="flex pr-3 outline-none">
                            <option value="">Language</option>
                        </select>
                    </div>
                </div>
                <button
                    class="inline-flex items-center gap-1 px-8 py-2 font-bold bg-base-primary hover:bg-opacity-90 text-surface-light rounded-2xl"
                >
                    <span>Apply Filter</span>
                </button>
            </form>
        </div>
        <div class="container flex flex-col gap-6 pl-2 mx-auto sm:py-6 sm:px-0">
            <div class="items-center justify-between hidden md:flex">
                <span v-show="!isLoading">Showing 2,312 results of {{ $route.params.query }}</span>
                <div
                    class="inline-flex items-center px-3 py-1 ml-auto font-medium border-2 rounded-md text-object-black-90 border-object-black-30"
                >
                    <select class="flex pr-3 outline-none">
                        <option value="">Top Rated</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <div class="mb-3">
                    <h3 class="text-xl font-bold text-object-black-90">
                        <span class="hidden sm:inline">Top Result</span>
                        <span class="sm:hidden">Popular Search</span>
                    </h3>
                    <span class="font-light text-md text-object-black-60">
                        We know the best things for You. Top picks for You.
                    </span>
                </div>

                <div class="flex gap-4 overflow-x-auto sm:grid-cols-2 sm:grid xl:grid-cols-4 lg:grid-cols-3">
                    <CourseCard v-for="item in coursesSearch" :key="item.id" :courseData="item" />
                </div>

                <BaseLoading :loading="isLoading" />
            </div>
            <div class="flex flex-col gap-3 sm:hidden">
                <div class="mb-3">
                    <h3 class="text-xl font-bold text-object-black-90">Popular Instructor</h3>
                    <span class="font-light text-md text-object-black-60">
                        We know the best things for You. Top picks for You.
                    </span>
                </div>
                <div class="flex gap-4 overflow-x-auto flex-nowrap xl:grid-cols-4 lg:grid lg:grid-cols-3">
                    <InstructorCard v-for="item in instructors" :key="item.id" :instructor="item" />
                </div>
            </div>
            <button
                v-show="!isLoading"
                @click="handleShowMoreCourse"
                class="items-center self-center hidden gap-1 px-8 py-2 font-bold sm:inline-flex bg-base-primary hover:bg-opacity-90 text-surface-light rounded-2xl"
            >
                <span>Show More</span>
            </button>
            <div
                class="relative hidden sm:flex flex-col md:flex-row justify-between p-12 rounded-3xl text-surface-light bg-[#2273D1] overflow-hidden"
            >
                <img src="@/assets/imgs/pattern.png" class="absolute top-0 bottom-0 right-0 z-0 object-cover h-full" />
                <div class="z-10 flex flex-col gap-3 py-3">
                    <span class="hidden text-3xl font-bold lg:inline text-surface-light">
                        Join and get amazing discount
                    </span>
                    <span class="hidden text-lg font-light lg:inline text-object-white-60">
                        With our responsive themes and mobile and desktop apps
                    </span>
                    <span class="text-3xl font-bold lg:hidden text-surface-light">
                        Get Amazing Discount and Course Update
                    </span>
                </div>
                <div class="z-10 flex gap-3">
                    <div
                        class="h-[42px] w-full md:w-[300px] bg-object-white-30 self-center flex gap-2 items-center px-4 rounded-lg"
                    >
                        <input
                            class="w-full py-2 leading-tight bg-transparent outline-none text-object-white-60 placeholder-object-white-60 focus:outline-non"
                            type="search"
                            placeholder="Search for course"
                        />
                        <BaseIcon name="search-white" />
                    </div>
                    <button
                        class="inline-flex h-[42px] items-center self-center gap-1 px-4 py-2 font-bold rounded-lg bg-base-primary hover:bg-opacity-90 text-surface-light"
                    >
                        <span>Subscribe</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import CourseCard from '@/components/CourseCard.vue'
import InstructorCard from '@/components/InstructorCard.vue'
import getData from '@/common/fake-api'
import BaseLoading from '@/components/atoms/BaseLoading.vue'
import NavMobile from '@/components/organisms/NavMobile.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import { type Instructor, type Course } from '@/types'

const coursesSearch = ref<Course[]>([])
const instructors = ref<Instructor[]>([])
const isLoading = ref<boolean>(false)
const route = useRoute()

const handleShowMoreCourse = async () => {
    isLoading.value = true
    coursesSearch.value.push(...(await getData('coursesSearch')))
    isLoading.value = false
}

onMounted(async () => {
    isLoading.value = true
    const [coursesSearchData, instructorsData] = await Promise.all([getData('coursesSearch'), getData('instructors')])

    isLoading.value = false
    coursesSearch.value = coursesSearchData
    instructors.value = instructorsData
})

watch(
    () => route.params.query,
    async (query) => {
        console.log(query)
        isLoading.value = true
        coursesSearch.value = []
        coursesSearch.value = await getData('coursesSearch')
        isLoading.value = false
    },
)
</script>
