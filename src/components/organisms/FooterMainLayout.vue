<template>
    <div class="container hidden mx-auto text-white sm:block">
        <div class="flex flex-wrap gap-5 py-10">
            <div class="pr-10">
                <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
                    <BaseIcon name="logo" />
                    <span class="font-extrabold text-surface-light">MyCourse.io</span>
                </RouterLink>
            </div>
            <div class="flex flex-col gap-2 grow">
                <a href="#" class="hover:text-slate-300">Web Programming</a>
                <a href="#" class="hover:text-slate-300">Mobile Programming</a>
                <a href="#" class="hover:text-slate-300">Java Beginner</a>
                <a href="#" class="hover:text-slate-300">PHP Beginner</a>
            </div>
            <div class="flex flex-col gap-2 grow">
                <a href="#" class="hover:text-slate-300">Adobe Illustrator</a>
                <a href="#" class="hover:text-slate-300">Adobe Photoshop</a>
                <a href="#" class="hover:text-slate-300">Design Logo</a>
            </div>
            <div class="flex flex-col gap-2 grow">
                <a href="#" class="hover:text-slate-300">Writing Course</a>
                <a href="#" class="hover:text-slate-300">Photography</a>
                <a href="#" class="hover:text-slate-300">Video Making</a>
            </div>
        </div>
        <div class="border border-slate-400" />
        <div class="flex py-5 text-slate-400">
            <span class="grow"> Copyright © MyCourse.io 2024. All Rights Reserved </span>
            <div class="flex gap-4">
                <a href="#">
                    <BaseIcon name="twitter" />
                </a>
                <a href="#">
                    <BaseIcon name="instagram" />
                </a>
                <a href="#">
                    <BaseIcon name="facebook-outline" />
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue'
</script>
