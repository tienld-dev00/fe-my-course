<template>
    <div class="flex relative cursor-pointer items-center [&>div]:hover:block">
        <div>
            <slot />
        </div>
        <div v-if="itemsData" class="absolute right-0 z-50 hidden overflow-hidden shadow-2xl rounded-xl top-full">
            <ul class="flex flex-col w-fit">
                <li
                    v-for="(item, index) in itemsData"
                    @click="item.onClick"
                    :key="index"
                    class="w-[300px] hover:bg-gray-100 bg-surface-light"
                >
                    <RouterLink class="block w-full px-6 py-2" :to="item.path ?? ''">
                        {{ item.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DropdownItem } from '@/types'

const { itemsData } = defineProps<{ itemsData: DropdownItem[] }>()
</script>
