<script setup>
import logoImage from '@/assets/images/home/logo.png'
import estoniaFlag from '@/assets/images/home/estoniaFlag.png'
import englishFlag from '@/assets/images/home/englishFlag.png'
import burgerSvg from '@/assets/icons/burger.svg'
import LoginButton from '@/components/LoginButton.vue'
import {  ref} from 'vue'
import { inject } from 'vue'

const state = inject('state')
const menu = ref('menu')

const showMenu = () => {
    if (menu.value.classList.contains('hidden')) {
        menu.value.classList.remove('hidden')
        return
    } 
    menu.value.classList.add('hidden')
}

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <header class="sticky top-0 border-b-4 border-border-brown text-primary-text z-10 shadow-[0_0_4px_6px_rgba(0,0,0,0.3)]">
        <div class="h-full sm:h-[10vh] flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white">
            <div class="flex justify-between items-center m-3">
                <div @click="scrollTo('home')" class="flex items-center">
                    <img :src="logoImage" alt="logoImage" />
                    <h1 class="font-semibold text-3xl m-2 cursor-pointer">TNVisual</h1>
                    <div v-if="state.isAdmin">Admin</div>
                    <LoginButton v-else="state.isAdmin" />
                </div>

                <div class="flex">
                    <div class="relative cursor-pointer sm:absolute sm:hidden">
                        <img
                        class="h-6 w-10 border-2 mb-1 border-border-brown"
                        :src="estoniaFlag"
                        alt="Eesti"
                        />
                        <img
                        class="h-6 w-10 border-2 border-border-brown"
                        :src="englishFlag"
                        alt="Inglise"
                        />
                    </div>
                    <div class="px-4 sm:hidden cursor-pointer">
                        <img class="size-10" @click="showMenu" :src="burgerSvg" alt="burgerSvg" />
                    </div>
                </div>
            </div>

            <div class="routes text-xl sm:text-base hidden flex-col gap-2 sm:flex-row p-4 sm:flex" ref="menu">
                <h4 @click="scrollTo('projects')" class="cursor-pointer m-4">{{ $t('navbar.projects').toUpperCase()}}</h4>
                <h4 @click="scrollTo('collaborate')" class="cursor-pointer m-4">{{$t('navbar.collaborate').toUpperCase()}}</h4>
                <h4 @click="scrollTo('contacts')" class="cursor-pointer m-4">{{$t('navbar.contacts').toUpperCase()}}</h4>
            </div>
        </div>
            <div class="hidden p-2 absolute bottom-00 right-0 sm:flex justify-center gap-3 cursor-pointer">
            <img @click="$i18n.locale = 'est'" class="w-[50px] border-2 border-border-brown" :src="estoniaFlag" alt="Eesti" />
            <img @click="$i18n.locale = 'en'" class="w-[50px] border-2 border-border-brown" :src="englishFlag" alt="Inglise" />
        </div>
    </header>
</template>
