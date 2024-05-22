<template>
    <div class="bg-surface-light">
        <header>
            <HeaderMainLayout @showLoginForm="handleShowLoginForm" @showSignUpForm="handleShowSignUpForm" />
        </header>
        <main class="min-h-screen">
            <RouterView />
        </main>
        <footer class="bg-black">
            <FooterMainLayout />
        </footer>
        <ModalLoginForm v-if="showLoginForm" @hidden="showLoginForm = false" @showSignUpForm="handleShowSignUpForm" />
        <ModalSignUpForm v-if="showSignUpForm" @hidden="showSignUpForm = false" @showLoginForm="handleShowLoginForm" />
    </div>
</template>

<script setup lang="ts">
import HeaderMainLayout from '@/components/organisms/HeaderMainLayout.vue'
import FooterMainLayout from '@/components/organisms/FooterMainLayout.vue'
import ModalLoginForm from '@/components/ModalLoginForm.vue'
import ModalSignUpForm from '@/components/ModalSignUpForm.vue'
import { ref } from 'vue'

const showLoginForm = ref(false)
const showSignUpForm = ref(false)

const handleShowLoginForm = () => {
    showSignUpForm.value = false
    showLoginForm.value = true
}
const handleShowSignUpForm = () => {
    showLoginForm.value = false
    showSignUpForm.value = true
}
</script>
