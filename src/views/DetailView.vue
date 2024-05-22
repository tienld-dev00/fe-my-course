<template>
    <BaseLoading :loading="isLoadingPage" />
    <div v-show="!isLoadingPage" class="container absolute top-0 flex flex-col gap-6 mx-auto mb-6 sm:static sm:my-6">
        <div class="flex-col hidden gap-2 sm:flex">
            <span class="text-object-black-90">
                <RouterLink to="">{{ courseDetail.category }}</RouterLink> /
                <RouterLink to="">{{ courseDetail.subcategory }}</RouterLink>
            </span>
            <span class="text-2xl font-bold">{{ courseDetail.title }}</span>
            <div class="flex gap-2">
                <RouterLink to="#">
                    <span class="text-base-danger hover:opacity-80">{{ courseDetail.instructor_name }}</span>
                </RouterLink>
                <div class="flex items-center gap-1">
                    <BaseIcon name="star-solid-18" />
                    <span class="mr-1 font-semibold">{{ courseDetail.rating }}</span>
                    <span>({{ nFormatter(courseDetail.rating_count || 0, 3) }} ratings)</span>
                </div>
            </div>
        </div>
        <div>
            <div class="relative h-max lg:w-2/3 float-start">
                <img class="sm:rounded-3xl" :src="courseDetail.thumbnail" />
                <div class="absolute top-0 bottom-0 left-0 right-0 flex justify-center">
                    <button type="button" class="self-center hover:opacity-80">
                        <BaseIcon name="play" />
                    </button>
                </div>
                <div class="absolute top-0 left-0 sm:hidden">
                    <button @click="$router.back()" class="p-5 hover:opacity-80">
                        <BaseIcon name="arrow-back-24" />
                    </button>
                </div>
            </div>
            <div class="flex-col hidden w-1/3 gap-5 py-4 pl-4 sm:flex float-end">
                <div class="flex flex-col gap-5 p-5 shadow-md">
                    <div class="hidden lg:block">
                        <div class="flex items-end gap-3">
                            <span v-if="courseDetail.sale_off" class="text-2xl font-bold"> US ${{ salePrice }} </span>
                            <span v-if="courseDetail.sale_off" class="text-lg font-light line-through">
                                ${{ courseDetail.price }}
                            </span>
                        </div>
                        <span
                            v-if="courseDetail.sale_off"
                            class="self-start px-2 py-1 text-xs font-bold bg-alert-warning rounded-3xl text-surface-light"
                        >
                            {{ courseDetail.sale_off }}% off
                        </span>
                    </div>
                    <button
                        class="items-center justify-center hidden gap-1 px-4 py-3 font-bold lg:inline-flex bg-base-primary hover:bg-opacity-90 text-surface-light rounded-2xl"
                    >
                        <span>Buy</span>
                    </button>
                    <button
                        class="items-center justify-center hidden gap-1 px-4 py-3 font-bold bg-white border lg:inline-flex hover:bg-gray-100 text-object-black-60 rounded-2xl border-object-black-60"
                    >
                        <BaseIcon name="favorite-outline" />
                        <span>Wishlist</span>
                    </button>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3">
                            <BaseIcon name="list-alt" />
                            <span class="text-xs md:text-sm lg:text-md">{{ courseDetail.section_count }} Section</span>
                        </div>

                        <div class="flex items-center gap-3">
                            <BaseIcon name="reader-mode" />
                            <span class="text-xs md:text-sm lg:text-md">{{ courseDetail.lecture_count }} Lectures</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <BaseIcon name="tv" />
                            <span class="text-xs md:text-sm lg:text-md">{{ courseDetail.duration }} total lenghts</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <BaseIcon name="volume-up" />
                            <span class="text-xs md:text-sm lg:text-md">{{ courseDetail.language }}</span>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-[url('@/assets/imgs/pattern2.png')] text-object-white-90 px-4 py-8 sm:min-h-[350px] lg:min-h-[500px] rounded-3xl bg-right-bottom bg-cover w-full flex flex-col gap-3"
                >
                    <span
                        class="self-start px-2 py-1 mr-1 text-xs font-bold rounded-md bg-base-primary text-surface-light"
                    >
                        WEBINAR
                    </span>
                    <span class="text-sm font-light lg:text-lg">Ana Kursova</span>
                    <span class="text-lg font-bold lg:text-3xl">
                        Masterclass in Design Thinking, Innovation & Creativity
                    </span>
                    <button
                        class="inline-flex items-center self-start gap-1 px-4 py-2 font-bold bg-transparent border rounded-md hover:opacity-80 text-base-secondary border-base-secondary"
                    >
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
            <div class="flex flex-col w-full gap-4 px-3 py-4 sm:w-2/3 float-start">
                <div class="flex flex-col sm:hidden">
                    <span class="text-2xl font-bold">{{ courseDetail.title }}</span>
                    <RouterLink to="#">
                        <span class="text-base-danger hover:opacity-80">{{ courseDetail.instructor_name }}</span>
                    </RouterLink>
                </div>
                <div class="flex justify-between sm:hidden">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-end gap-3">
                            <span class="text-2xl font-bold">US ${{ salePrice }}</span>
                            <span class="text-lg font-light line-through">${{ courseDetail.price }}</span>
                        </div>
                        <span
                            class="self-start px-2 py-1 text-xs font-bold bg-alert-warning rounded-3xl text-surface-light"
                        >
                            {{ courseDetail.sale_off }}% off
                        </span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <div class="flex items-center self-end">
                            <BaseIcon name="star-solid-18" />
                            <span class="font-semibold">{{ courseDetail.rating }}</span>
                        </div>
                        <span>({{ nFormatter(courseDetail.rating_count || 0, 3) }} ratings)</span>
                    </div>
                </div>
                <ul class="flex gap-5 text-lg [&>li]:border-b-2">
                    <li
                        v-for="(item, index) in tabs"
                        @click="currentTab = item"
                        :key="index"
                        :class="{
                            'border-b-2  border-transparent cursor-pointer hover:border-object-black-30': true,
                            '!border-base-danger': currentTab === item,
                        }"
                    >
                        {{ item }}
                    </li>
                </ul>
                <div v-show="currentTab === 'Description'">
                    <h3 class="mb-2 text-lg font-bold text-object-black-90">About Course</h3>
                    <p class="text-justify text-object-black-60">{{ courseDetail.description }}</p>
                </div>
                <div v-show="currentTab === 'Review'">
                    <h3 class="mb-2 text-lg font-bold text-object-black-90">Review</h3>
                    <div class="flex flex-col gap-3">
                        <div v-for="(item, index) in courseDetail.reviews" :key="index" class="flex gap-3">
                            <img :src="item.avatar" class="h-[50px] min-w-[50px] rounded-full border" />
                            <div class="flex flex-col">
                                <RouterLink to="#">
                                    <h3 class="font-medium hover:opacity-80 text-base-primary text-md">
                                        {{ item.username }}
                                    </h3>
                                </RouterLink>
                                <span class="text-sm text-object-black-60">{{ item.created_at }}</span>
                                <p class="text-justify text-object-black-90">{{ item.comment }}</p>
                            </div>
                        </div>
                        <BaseLoading :loading="isLoadingReview" />
                        <button
                            v-show="!isLoadingReview"
                            @click="handleShowMoreReviews"
                            class="inline-flex items-center self-center gap-1 px-4 py-2 font-bold bg-white border-2 rounded-md hover:bg-gray-100 text-object-black-90 border-object-black-90"
                        >
                            <span>Load more review</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="relative hidden sm:flex flex-col md:flex-row justify-between p-12 rounded-3xl text-surface-light bg-[#2273D1] overflow-hidden"
        >
            <img src="@/assets/imgs/pattern.png" class="absolute top-0 bottom-0 right-0 z-0 object-cover h-full" />
            <div class="z-10 flex flex-col gap-3 py-3">
                <span class="text-3xl font-bold text-surface-light"> Join and get amazing discount </span>
                <span class="text-lg font-light text-object-white-60">
                    With our responsive themes and mobile and desktop apps
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
        <div
            class="sticky bottom-0 z-50 flex items-center justify-between p-6 shadow-lg sm:sticky sm:bottom-4 bg-surface-light lg:hidden rounded-3xl"
        >
            <div class="hidden sm:block">
                <div class="flex items-end gap-3">
                    <span class="text-2xl font-bold">US $22.40</span>
                    <span class="text-lg font-light line-through">$30.13</span>
                </div>
                <span class="self-start px-2 py-1 text-xs font-bold bg-alert-warning rounded-3xl text-surface-light">
                    20% off
                </span>
            </div>
            <div class="flex items-center justify-between gap-4 grow sm:grow-0">
                <button
                    class="inline-flex items-center justify-center flex-1 gap-1 px-4 py-3 font-bold bg-base-primary hover:bg-opacity-90 text-surface-light rounded-2xl"
                >
                    <span>Buy</span>
                </button>
                <button
                    class="inline-flex items-center justify-center flex-1 gap-1 px-4 py-3 font-bold bg-white border hover:bg-gray-100 text-object-black-60 rounded-2xl border-object-black-60"
                >
                    <BaseIcon name="favorite-outline" />
                    <span>Wishlist</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

import getData from '@/common/fake-api'
import type { CourseDetail } from '@/types'
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import BaseLoading from '@/components/atoms/BaseLoading.vue'
import { nFormatter } from '@/utils/helper'

const isLoadingReview = ref<boolean>(false)
const isLoadingPage = ref<boolean>(false)
const currentTab = ref<string>('Description')
const courseDetail = reactive<CourseDetail>({
    id: 0,
    title: '',
    thumbnail: '',
    instructor_name: '',
    description: '',
    price: 0,
    sale_off: 0,
    reviews: [],
    section_count: 0,
    lecture_count: 0,
    duration: '',
    language: '',
    rating: 0,
    rating_count: 0,
    category: '',
    subcategory: '',
})

const tabs = ['Description', 'Course', 'Review']

const handleShowMoreReviews = async () => {
    isLoadingReview.value = true
    courseDetail.reviews.push(...(await getData('courseReviews')))
    isLoadingReview.value = false
}

const salePrice = computed(() => {
    if (courseDetail.sale_off && courseDetail.price) {
        return (courseDetail.price * (100 - courseDetail.sale_off)) / 100
    }
    return courseDetail.price
})

onMounted(async () => {
    window.scrollTo(0, 0)

    if (!courseDetail.id) {
        isLoadingPage.value = true
        Object.assign(courseDetail, await getData('courseDetail'))
        isLoadingPage.value = false
    }
})
</script>
