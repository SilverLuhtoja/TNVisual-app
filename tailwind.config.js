/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'border-brown': '#ab825d',
                'primary-text': '#2c3e50',
                'primary-bg-color': '#EEE'
            },
            backgroundImage: {
                'home-bg':
                    "linear-gradient(#0000004b, #0000004b), url('@/assets/images/home/homeView.png')",
                'collaboration-bg':
                    "linear-gradient(#0000004b, #0000004b), url('@/assets/images/collaboration/collaborationView.png')",
                'project-bg':
                    "linear-gradient(rgba(27,57,50,0.65), rgba(27,57,50,0.65)), url('@/assets/images/project/projectView.png')",
                'contact-bg':
                    "linear-gradient(#0000009b, #0000009b), url('@/assets/images/contact/contactView.png')"
            }
        },
        fontFamily: {},
        container: {
            padding: '2rem'
            // center: true
        }
        // screens: {
        //     sm: '640px',
        //     lg: '1024px',
        // }
    },
    plugins: []
}
