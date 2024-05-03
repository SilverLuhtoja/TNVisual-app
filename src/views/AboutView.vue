<script setup lang="ts">
import linkedin from '@/assets/images/contact/linkedin.png'
import facebook from '@/assets/images/contact/facebook.png'
import instagram from '@/assets/images/contact/instagram.png'


// const breakElement = document.createElement('<br/>')
</script>

<template>
    <main class="relative bg-home-bg custom-section-bg-image overflow-hidden">
        <div class="gap-10 p-10 flex flex-col items-center md:flex-row md:gap-20 md:m-20">
            <section class="w-[500px] flex-col text-white">
                <h1 class="mb-10 border-border-brown border-b-2 md:w-fit">{{ $t('about.title')}}</h1>
                 <p style="white-space: pre-line" >{{ $t('about.text')}}</p>
                <div class="mt-10 flex gap-10">
                    <a href="https://www.facebook.com/search/top?q=tnvisual">
                        <img class="md:w-fit" :src="facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/tnvisual/">
                        <img class="md:w-fit" :src="linkedin" />
                    </a>
                    <a href="#contacts">
                        <img class="md:w-fit" :src="instagram" />
                        <div> !! needs link !!</div>
                    </a>
                </div>

                <div class="mt-4 italic p-4 bg-black/50 md:w-fit border-border-brown border-l-4">
                    <p>{{$t('about.phoneDescription')}}: +372 5656 1234</p>
                    <p>Email: tnvisaul@gmail.com</p>
                </div>
            </section>
        </div>
    </main>
</template>