<template>
    <div class="flex flex-col w-full gap-2">
        <div class="relative overflow-hidden sm:rounded-3xl">
            <div v-show="index === currentIndex" v-for="(item, index) in props.dataSlides" :key="item.id">
                <img :src="item.background_image" class="w-full object-cover h-[200px] sm:h-[400px]" />
                <div
                    class="absolute top-0 z-10 flex items-center justify-center w-full h-full sm:items-start sm:flex-col grow text-surface-light"
                >
                    <div class="flex flex-col gap-3 pl-3 sm:gap-6 sm:pl-14 bg-pink sm:mt-auto">
                        <div class="flex flex-col gap-3 w-[200px] sm:w-[450px]">
                            <h1 class="text-2xl font-bold sm:text-5xl">{{ item.slogan }}</h1>
                            <span class="text-object-white-90">{{ item.sub_slogan }}</span>
                        </div>
                        <button class="h-[42px] px-4 py-2 self-start rounded-lg hover:bg-opacity-80 bg-surface-light">
                            <span class="font-bold text-base-primary">Explore</span>
                        </button>
                    </div>
                    <div class="flex p-5 mt-auto ml-auto bg-gradient-to-tl from-object-black-30 to-transparent">
                        <RouterLink to="#" class="flex items-center gap-3">
                            <img
                                :src="item.instructor.avatar"
                                class="w-[64px] hidden sm:block h-[64px] rounded-full border-4"
                            />
                            <div class="flex flex-col items-start">
                                <h3 class="text-base font-medium sm:text-xl">{{ item.instructor.name }}</h3>
                                <span class="text-sm font-light sm:text-base">{{ item.instructor.expertise }}</span>
                            </div>
                        </RouterLink>
                        <div class="flex-col items-end justify-center hidden ml-4 font-light sm:flex">
                            <span>{{ item.headline1 }}</span>
                            <span>{{ item.headline2 }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                @click="nextSlide"
                class="absolute top-0 bottom-0 right-0 z-10 self-center hidden px-3 py-8 sm:block bg-object-white-20 hover:opacity-80"
            >
                <BaseIcon name="arrow-right" />
            </button>
            <button
                @click="prevSlide"
                class="absolute top-0 bottom-0 left-0 z-10 self-center hidden px-3 py-8 sm:block bg-object-white-20 hover:opacity-80"
            >
                <BaseIcon name="arrow-left" />
            </button>
        </div>

        <div class="items-center hidden gap-3 mx-auto mt-3 sm:flex">
            <button
                v-for="(item, index) in props.dataSlides"
                :key="index"
                @click="currentSlide(index + 1)"
                :class="{
                    'h-[8px] w-[8px] bg-object-black-30': true,
                    '!bg-base-primary !h-[10px] !w-[10px]': index === currentIndex,
                }"
            ></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { Slide } from '@/types'
import BaseIcon from './atoms/BaseIcon.vue'

const props = defineProps<{ dataSlides: Slide[] }>()
const currentIndex = ref(0)

const nextSlide = function () {
    if (currentIndex.value < props.dataSlides.length - 1) {
        currentIndex.value++
    } else {
        currentIndex.value = 0
    }
}

const prevSlide = function () {
    if (currentIndex.value > 0) {
        currentIndex.value--
    } else {
        currentIndex.value = props.dataSlides.length - 1
    }
}

const currentSlide = function (n: number) {
    currentIndex.value = n - 1
}

setInterval(() => {
    nextSlide()
}, 5000)
</script>
