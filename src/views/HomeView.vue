<template>
    <BaseLoading :loading="isLoading" />
    <div v-show="!isLoading" class="container relative flex flex-col gap-8 mx-auto sm:gap-16 sm:my-16 flex-nowrap">
        <section class="flex flex-col gap-1 sm:gap-6 sm:flex-col-reverse">
            <div class="flex gap-2 overflow-x-auto flex-nowrap">
                <button
                    :class="{
                        'inline-flex relative items-center gap-1 px-4 py-2  sm:border sm:rounded-3xl hover:bg-object-white-90': true,
                        'border-base-primary font-medium border-b': activeCategory === item.id,
                        'border-object-black-30': activeCategory !== item.id,
                    }"
                    v-for="item in courseCategories"
                    :key="item.id"
                >
                    <span
                        :class="{
                            'text-object-black-60': activeCategory !== item.id,
                            'text-base-primary ': activeCategory === item.id,
                            'w-max': true,
                        }"
                    >
                        {{ item.title }}
                    </span>
                </button>
            </div>
            <CarouselComponent :data-slides="slides" />
        </section>

        <div class="flex flex-col gap-8 pl-3 sm:pl-0">
            <section class="flex flex-col gap-3 flex-nowrap">
                <div class="mb-3">
                    <h3 class="text-xl font-bold text-object-black-90">More from Kitani Studio</h3>
                    <span class="font-light text-md text-object-black-60">
                        We know the best things for You. Top picks for You.
                    </span>
                </div>
                <div class="flex gap-4 overflow-x-auto sm:grid-cols-2 sm:grid xl:grid-cols-4 lg:grid-cols-3">
                    <CourseCard v-for="item in coursesStudio" :key="item.id" :courseData="item" />
                </div>
            </section>

            <section class="flex flex-col gap-3">
                <div class="mb-3">
                    <h3 class="text-xl font-bold text-object-black-90">Trending Course</h3>
                    <span class="font-light text-md text-object-black-60">
                        We know the best things for You. Top picks for You.
                    </span>
                </div>
                <div class="flex gap-4 overflow-x-auto sm:grid-cols-2 sm:grid xl:grid-cols-4 lg:grid-cols-3">
                    <CourseCard v-for="item in coursesTrending" :key="item.id" :courseData="item" />
                </div>
            </section>

            <section class="flex flex-col gap-3">
                <div class="mb-3">
                    <h3 class="text-xl font-bold text-object-black-90">Popular Instructor</h3>
                    <span class="font-light text-md text-object-black-60">
                        We know the best things for You. Top picks for You.
                    </span>
                </div>
                <div
                    class="flex gap-4 overflow-x-auto flex-nowrap xl:grid-cols-4 sm:grid-cols-2 sm:grid lg:grid-cols-3"
                >
                    <InstructorCard v-for="item in instructors" :key="item.id" :instructor="item" />
                </div>
            </section>

            <section
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
            </section>

            <section class="sm:hidden flex gap-1 mb-3 h-[300px] bg-base-primary overflow-hidden rounded-3xl">
                <div class="flex flex-col justify-around flex-1 py-3 pl-5 text-surface-light">
                    <div>
                        <h4 class="font-bold">WEBINAR</h4>
                        <span class="font-light">August 16, 2020</span>
                    </div>
                    <div>
                        <h2 class="text-2xl font-extrabold">Film Maker Skillset for Beginner.</h2>
                        <span>Kitani Sarasvati</span>
                    </div>
                    <button
                        class="inline-flex items-center self-start gap-1 px-4 py-2 font-bold bg-transparent border-2 hover:bg-opacity-90 text-surface-light border-surface-light rounded-xl"
                    >
                        <span>Get it now</span>
                    </button>
                </div>
                <img
                    class="flex-1 object-cover object-top w-full h-full"
                    src="https://s3-alpha-sig.figma.com/img/d2dc/fcf2/02980a93a70e32c9933d02c02902a5fc?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QC4KrnpkXxLHgz-ecM7f14Jx5PJCAlL6e9I8x7LYRvZqtS36NupOZYHc3iOtrQ3Cx-NV5x7IIQZN8u8WWBxJaNr3MvjtwFTjD9pt-vUibg3BzpLJtegGRzHtM9ZzI351RMs26viz8bsonamVpABzbl08PZM3kkhi1LHhQzhXL90zSd2iVVG7LGrEVOF9j5wFQ3X9FZugpa6~OL99BeuD0KpBMi8ZOmUBm2VmMEbZmV1jI4tcvsMfQvFsqRekeIdf4NOwQL2koTAPxtRvt1WaziXyjGSptyrtAPo7KuwXzekm6RzIP9XQpysphoTn~DlIzM~2D56kAePPJibpAaZw5g__"
                />
            </section>
        </div>

        <div
            class="sticky sm:hidden mx-3 z-20 flex h-[50px] items-center shadow-2xl gap-2 px-4 rounded-2xl bottom-3 bg-surface-light"
        >
            <input
                class="w-full py-2 leading-tight bg-transparent outline-none text-object-black-60 focus:outline-non"
                type="search"
                v-model="searchText"
                placeholder="What do you want to learn today"
            />
            <BaseIcon
                name="search"
                @click="searchText && $router.push({ name: 'search', params: { query: searchText } })"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import CarouselComponent from '@/components/CarouselComponent.vue'
import CourseCard from '@/components/CourseCard.vue'
import InstructorCard from '@/components/InstructorCard.vue'
import getData from '@/common/fake-api'
import BaseLoading from '@/components/atoms/BaseLoading.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import type { Instructor, Course, Slide, Category } from '@/types'

const coursesStudio = ref<Course[]>([])
const coursesTrending = ref<Course[]>([])
const instructors = ref<Instructor[]>([])
const courseCategories = ref<Category[]>([])
const slides = ref<Slide[]>([])
const activeCategory = ref(1)
const isLoading = ref(false)
const searchText = ref<string>('')

onMounted(async () => {
    isLoading.value = true

    const [coursesStudioData, instructorsData, coursesTrendingData, slidesData, courseCategoriesData] =
        await Promise.all([
            getData('coursesStudio'),
            getData('instructors'),
            getData('coursesTrending'),
            getData('slides'),
            getData('courseCategories'),
        ])

    coursesStudio.value = coursesStudioData
    instructors.value = instructorsData
    coursesTrending.value = coursesTrendingData
    slides.value = slidesData
    courseCategories.value = courseCategoriesData

    isLoading.value = false
})
</script>
