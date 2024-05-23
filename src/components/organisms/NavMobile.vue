<template>
    <div
        v-if="props.searchFeature && showSearchInput"
        class="sticky top-0 z-50 flex items-center w-full gap-2 px-4 py-2 border-b rounded-lg bg-surface-light sm:hidden border-b-object-black-20 bg-object-white-90"
    >
        <input
            class="w-full h-[45px] py-2 leading-tight outline-none bg-transparent text-object-black-60 focus:outline-non"
            type="text"
            v-model="searchText"
            placeholder="Search for course"
        />
        <BaseIcon name="close" @click="showSearchInput = false" />
        <BaseIcon
            name="search"
            @click="searchText && $router.push({ name: 'search', params: { query: searchText } })"
        />
    </div>
    <div
        v-else
        class="sticky top-0 z-50 flex items-center w-full gap-2 px-2 py-2 border-b bg-surface-light sm:hidden border-b-object-black-20"
    >
        <button v-show="props.backFeature" type="button" @click="props.onBack" class="p-2 sm:hidden">
            <BaseIcon name="arrow-back" />
        </button>

        <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
            <BaseIcon name="logo" />
            <span class="font-extrabold text-surface-dark">MyCourse.io</span>
        </RouterLink>

        <div class="ml-auto">
            <button v-show="props.cartFeature" type="button" class="p-3">
                <BaseIcon name="cart" />
            </button>
            <button
                @click="showSearchInput = true"
                v-show="props.searchFeature && !showSearchInput"
                type="button"
                class="p-3"
            >
                <BaseIcon name="search" />
            </button>

            <button v-show="props.filterFeature" type="button" class="p-3">
                <BaseIcon name="filter" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

const props = withDefaults(
    defineProps<{
        searchFeature?: boolean
        cartFeature?: boolean
        filterFeature?: boolean
        backFeature?: boolean
        onBack?: () => any
    }>(),
    {
        backFeature: true,
        onBack: () => {
            window.history.back()
        },
    },
)

const searchText = ref<string>('')

const showSearchInput = ref(false)
</script>
