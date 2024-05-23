<template>
    <BaseLoading :loading="isLoading" />
    <div
        v-show="!isLoading"
        class="container absolute top-0 flex flex-col gap-0 pb-3 mx-auto sm:gap-6 bg-surface-light sm:py-6 sm:static"
    >
        <NavMobile filter-feature />
        <div class="px-2 sm:hidden">
            <div class="flex gap-2 overflow-x-auto flex-nowrap">
                <button
                    :class="{
                        'inline-flex relative items-center gap-1 px-4 py-2  sm:border sm:rounded-3xl hover:bg-object-white-90': true,
                        'border-base-primary font-medium border-b': activeTab === item.id,
                        'border-object-black-30': activeTab !== item.id,
                    }"
                    v-for="item in tabs"
                    :key="item.id"
                >
                    <span
                        :class="{
                            'text-object-black-60': activeTab !== item.id,
                            'text-base-primary ': activeTab === item.id,
                            'w-max': true,
                        }"
                    >
                        {{ item.title }}
                    </span>
                </button>
            </div>
        </div>
        <div class="hidden sm:block">
            <CarouselComponent :data-slides="slides" />
        </div>
        <div>
            <div class="justify-between hidden mb-3 sm:flex">
                <div>
                    <h3 class="text-xl font-bold text-object-black-90">My Course</h3>
                    <span class="font-light text-md text-object-black-60">
                        We know the best things for You. Top picks for You.
                    </span>
                </div>
                <div class="flex gap-3">
                    <div
                        class="inline-flex items-center self-center px-3 py-2 font-medium border-2 rounded-md text-object-black-90 border-object-black-30"
                    >
                        <select class="flex pr-3 outline-none">
                            <option value="">All Rated</option>
                        </select>
                    </div>
                    <div
                        class="inline-flex items-center self-center px-3 py-2 font-medium border-2 rounded-md text-object-black-90 border-object-black-30"
                    >
                        <select class="flex pr-3 outline-none">
                            <option value="">Recently added</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="gap-4 p-2 sm:p-0 *:mb-3 overflow-x-auto grid-cols-2 grid xl:grid-cols-4 lg:grid-cols-3">
                <MyCourseCard v-for="item in myCourses" :key="item.id" :courseData="item" />
            </div>
        </div>
        <div class="flex self-center gap-10">
            <button
                class="p-3 border-2 rounded-md hover:bg-gray-50 bg-surface-light text-object-black-30 border-object-black-30"
            >
                <BaseIcon name="arrow-left-black-12" />
            </button>
            <div
                class="sm:flex hidden gap-3 *:px-4 *:border-2 *: *:rounded-xl hover:*:bg-gray-50 *:bg-surface-light *:text-object-black-30 *:border-object-black-30"
            >
                <button class="!border-base-primary !text-base-primary">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>98</button>
            </div>
            <span class="inline-flex items-center sm:hidden">Page 1 of 98</span>
            <button
                class="p-3 border-2 rounded-md hover:bg-gray-50 bg-surface-light text-object-black-30 border-object-black-30"
            >
                <BaseIcon name="arrow-right-black-12" />
            </button>
        </div>
        <div
            class="relative hidden sm:flex flex-col md:flex-row justify-between p-12 rounded-3xl text-surface-light bg-[#2273D1] overflow-hidden"
        >
            <img src="@/assets/imgs/pattern.png" class="absolute top-0 bottom-0 right-0 z-0 object-cover h-full" />
            <div class="z-10 flex flex-col gap-3 py-3">
                <span class="hidden text-3xl font-bold lg:inline text-surface-light"
                    >Join and get amazing discount</span
                >
                <span class="hidden text-lg font-light lg:inline text-object-white-60"
                    >With our responsive themes and mobile and desktop apps
                </span>
                <span class="text-3xl font-bold lg:hidden text-surface-light"
                    >Get Amazing Discount and Course Update
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
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

import CarouselComponent from '@/components/CarouselComponent.vue'
import MyCourseCard from '@/components/MyCourseCard.vue'
import getData from '@/common/fake-api'
import type { MyCourse, Slide } from '@/types'
import BaseLoading from '@/components/atoms/BaseLoading.vue'
import NavMobile from '@/components/organisms/NavMobile.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

const isLoading = ref<boolean>(false)
const activeTab = ref(1)
const slides = ref<Slide[]>([])
const myCourses = ref<MyCourse[]>([])

const tabs = [
    {
        id: 1,
        title: 'All',
    },
    {
        id: 2,
        title: 'Courses',
    },
    {
        id: 3,
        title: 'Wishlist',
    },
    {
        id: 4,
        title: 'Completed',
    },
]

onMounted(async () => {
    isLoading.value = true

    const [slidesData, myCoursesData] = await Promise.all([getData('slides'), getData('myCourses')])

    slides.value = slidesData
    myCourses.value = myCoursesData

    isLoading.value = false
})
</script>
