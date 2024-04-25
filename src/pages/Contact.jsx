import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <section class="h-screen">
                <div class=" bg-red-100 text-black h-full flex flex-col justify-center items-center" id="contact">
                    <h3 class="text-2xl font-bold text-black mb-4 border-b-2 hover:text-black cursor-pointer">Contact</h3>
                    <p>Lets get in touch and talk about your next project.</p>
                    <form action="https://formspree.io/f/mdoqzdlp" method="POST" class="mt-4">
                        <label class="block">Full name:
                            <input type="text" name="name" class="block border border-gray-300 px-4 py-2 mt-2 rounded-md" />
                        </label>
                        <label class="block">
                            Your email:
                            <input type="email" name="email" class="block border border-gray-300 px-4 py-2 mt-2 rounded-md" />
                        </label>
                        <label class="block">
                            Your message:
                            <textarea name="message" class="block border border-gray-300 px-4 py-2 mt-2 rounded-md"></textarea>
                        </label>
                        <button type="submit" class="bg-red-200 text-white px-4 py-2 mt-2 rounded-md">Send</button>
                    </form>
                </div>

            </section>

        </>
    )
}

export default Contact