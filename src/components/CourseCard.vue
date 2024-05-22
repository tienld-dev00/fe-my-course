<template>
    <RouterLink :to="{ name: 'detail' }" class="inline-flex min-w-[300px] flex-col gap-1 overflow-hidden">
        <div class="relative flex flex-col md:h-[200px] h-[180px] lg:h-[180px]">
            <img class="w-full h-full rounded-3xl" :src="courseData.thumbnail" />
            <div class="absolute flex top-2 bottom-2 left-2 right-2">
                <div>
                    <span class="px-2 py-1 mr-1 text-xs font-bold bg-base-primary rounded-3xl text-surface-light">
                        Best Seller
                    </span>
                    <span class="px-2 py-1 text-xs font-bold bg-alert-warning rounded-3xl text-surface-light">
                        {{ courseData.sale_off }}% off
                    </span>
                </div>
                <RouterLink to="" class="mt-auto ml-auto">
                    <BaseIcon name="person-outline" />
                </RouterLink>
            </div>
        </div>
        <div>
            <span class="text-lg font-bold text-surface-dark line-clamp-2">{{ courseData.title }}</span>
            <RouterLink to="#" class="flex items-center gap-2 hover:opacity-80">
                <BaseIcon name="person-outline" />
                <span class="text-base-primary">
                    {{ courseData.instructor_name }}
                </span>
            </RouterLink>
            <p class="font-normal line-clamp-3 text-object-black-60">
                {{ courseData.description }}
            </p>
            <div class="flex items-center gap-2">
                <div class="flex items-center">
                    <BaseIcon name="star-solid-16" />
                    <BaseIcon name="star-solid-16" />
                    <BaseIcon name="star-solid-16" />
                    <BaseIcon name="star-solid-16" />
                    <BaseIcon name="half-star-solid-16" />
                    <span class="text-object-black-60">({{ nFormatter(courseData.rating_count as number, 0) }})</span>
                </div>
            </div>
            <div class="flex items-center gap-1">
                <span class="text-xl font-bold text-object-black-90">${{ courseData.price }}</span>
                <span v-if="courseData.sale_off" class="font-semibold line-through text-object-black-60">
                    ${{ salePrice }}
                </span>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Course } from '@/types'
import BaseIcon from './atoms/BaseIcon.vue'
import { nFormatter } from '@/utils/helper'

const { courseData } = defineProps<{ courseData: Course }>()

let salePrice = 0

if (courseData.sale_off && courseData.price) {
    salePrice = (courseData.price * (100 - courseData.sale_off)) / 100
}
</script>
