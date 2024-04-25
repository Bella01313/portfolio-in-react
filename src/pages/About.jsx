import React from 'react'
import Navbar from '../components/Navbar'
const About = () => {
    return (
        <>
            <Navbar />
            <section class="h-screen">
                <div class=" bg-red-100 h-full flex flex-col justify-center items-center" id="about">
                    <h2 class="text-2xl font-bold text-black mb-4 border-b-2 hover:text-black cursor-pointer">About me</h2>
                    <p class="s text-black text-center">
                        As a Frontend developer, my role is to create visually appealing and
                        user-friendly website designs, collaborate with clients and other
                        professionals, and stay updated with design trends and
                        technologies to deliver effective and engaging web experiences.
                        I have a passion for solving complex problems and creating intuitive and user-friendly interfaces
                    </p>
                    <h3 class="text-2xl font-bold text-black mb-4 border-b-2 hover:text-black cursor-pointer">Skills</h3>
                    <div class="flex flex-wrap md:justify-between">
                        <div class="w-1/3 p-4">
                            <div class="bg-orange-300 rounded-full p-4 flex items-center justify-center mb-4">
                                <i class="fas fa-code text-4xl text-white"></i>
                            </div>
                            <h4 class="text-xl font-bold text-black mb-2">HTML</h4>
                            <p class="text-gray-600">I have a strong foundation in HTML and can build well-structured and semantically correct websites.</p>
                        </div>
                        <div class="w-1/3 p-4">
                            <div class="bg-sky-300 rounded-full p-4 flex items-center justify-center mb-4">
                                <i class="fab fa-css3 text-4xl text-white"></i>
                            </div>
                            <h4 class="text-xl font-bold text-black mb-2">CSS</h4>
                            <p class="text-gray-600">I have a strong understanding of CSS and can create visually appealing and responsive layouts.</p>
                        </div>
                        <div class="w-1/3 p-4">
                            <div class="bg-amber-200 rounded-full p-4 flex items-center justify-center mb-4">
                                <i class="fab fa-js text-4xl text-white"></i>
                            </div>
                            <h4 class="text-xl font-bold text-black mb-2">JavaScript</h4>
                            <p class="text-gray-600">I have a strong understanding of JavaScript and have experience building web applications using various libraries and frameworks such as React and Angular</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About