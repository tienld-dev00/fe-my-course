<template>
    <RouterLink to="#" class="relative inline-block min-w-[300px] overflow-hidden h-[400px] rounded-3xl drop-shadow-xl">
        <img :src="instructor.avatar" />
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-hidden">
            <div
                class="z-10 flex flex-col items-center justify-start gap-2 mt-auto bg-gradient-to-t from-object-black-90 to-transparent h-1/2"
            >
                <div class="flex flex-col p-3 mt-auto text-center text-surface-light">
                    <span class="text-xl font-bold text-center">{{ instructor.name }}</span>
                    <span>{{ instructor.expertise }}</span>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Instructor } from '@/types'

const { instructor } = defineProps<{ instructor: Instructor }>()
</script>
