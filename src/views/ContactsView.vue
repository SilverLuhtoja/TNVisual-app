<script setup>
import { reactive, ref } from 'vue'
import { validateEmail } from '@/utils/email_validator'
import linkedin from '@/assets/images/contact/linkedin.png'
import facebook from '@/assets/images/contact/facebook.png'
import instagram from '@/assets/images/contact/instagram.png'

const errorMessage = ref(null)
const emailContent = reactive({
    email: '',
    content: ''
})

const sendEmail = () => {
    errorMessage.value = null

    // let regex = '/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}'
    if (emailContent.email.trim() == '') {
        errorMessage.value = 'Please specify email.'
        return
    }

    if (!validateEmail(emailContent.email)) {
        errorMessage.value = "Provided email doesn't seem to be valid"
        return
    }

    if (emailContent.content.trim() == '') {
        errorMessage.value = 'Please add content for email.'
        return
    }

    if (emailContent.content.trim().length < 25) {
        errorMessage.value = 'Please tell more about your project.'
        return
    }

    console.log('WILL SEND')

    emailContent.email = ''
    emailContent.content = ''

    alert('Thanks for the email. We will talk soon enough!')
}
</script>
<template>
    <main class="relative !h-fit bg-contact-bg custom-section-bg-image flex justify-center">
        <div class="gap-10 p-10 flex flex-col items-center md:flex-row md:gap-20 md:m-20">
            <section class="w-[500px] flex-col text-white">
                <h1 class="mb-10 border-border-brown border-b-2 md:w-fit">About Company & Me</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                    <br /><br />
                    mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
                    <p>Phone number: +372 5656 1234</p>
                    <p>Email: tnvisaul@gmail.com</p>
                </div>
            </section>
            <section>
                <h1 class="text-white m-auto text-center mb-10 max-w-[16rem]">
                    Lets start our partnership
                </h1>

                <div class="w-[500px] bg-slate-200/50 p-10 flex flex-col gap-10">
                    <div>
                        <label
                            for="client_email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Email to contact*</label
                        >
                        <input
                            type="text"
                            name="client_email"
                            id="client_email"
                            v-model="emailContent.email"
                            placeholder="whoToContact@gmail.com"
                            class="project-modal-input"
                        />
                    </div>
                    <div>
                        <label
                            for="client_project_desc"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Specifications of project*</label
                        >
                        <textarea
                            rows="8"
                            name="client_project_desc"
                            id="client_project_desc"
                            v-model="emailContent.content"
                            placeholder="Hi, Please describe what type of project would you like to have. The more detailed you can write the better. 
     * Example what would be measurments
     * Provide links to about ideas
     * Expected timeframe
                            "
                            class="project-modal-input"
                        ></textarea>
                    </div>

                    <div class="flex-col">
                        <div v-if="errorMessage" class="my-2 p-1 text-red-600 bg-black/50 rounded">
                            {{ errorMessage }}
                        </div>
                        <button @click="sendEmail" class="action-btn !px-6 !py-1 !my-0">
                            To Ship
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
