<template>
    <RouterLink :to="{ name: 'detail' }" class="flex flex-col gap-1 overflow-hidden sm:inline-flex">
        <div class="relative flex flex-col h-[130px] sm:h-[180px]">
            <img
                class="object-cover object-left-bottom w-full h-full rounded-md sm:rounded-3xl"
                :src="courseData.thumbnail"
            />
            <div class="absolute flex flex-col top-2 bottom-2 left-2 right-2">
                <button type="button" class="px-3 py-2 mb-auto ml-auto rounded-full bg-object-white-30">
                    <BaseIcon name="dots" />
                </button>
                <RouterLink to="" class="mt-auto mb-2 ml-auto mr-2">
                    <BaseIcon name="person-outline" />
                </RouterLink>
            </div>
            <div class="absolute left-0 right-0 h-1 overflow-hidden top-full bg-object-black-10 rounded-3xl">
                <div class="h-full bg-base-primary" :style="{ width: processPercent }"></div>
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
            <span
                v-if="courseData.completed_video_count === courseData.video_count"
                class="font-normal text-base-primary"
                >Completed!</span
            >
            <span v-else-if="courseData.completed_video_count" class="font-normal text-object-black-60">{{
                `${courseData.completed_video_count}/${courseData.video_count} Videos
                Completed`
            }}</span>
            <span v-else class="font-normal text-object-black-60">Not Yet Started</span>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { MyCourse } from '@/types'
import BaseIcon from './atoms/BaseIcon.vue'

const { courseData } = defineProps<{ courseData: MyCourse }>()

const processPercent = (courseData.completed_video_count / courseData.video_count) * 100 + '%'
</script>
