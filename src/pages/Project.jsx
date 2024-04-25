import React from 'react'
import Navbar from '../components/Navbar';
const Project = () => {
    return (
        <>
            <Navbar />
            <section class="bg-slate-100 p-8 h-screen" id="projects"><br /><br /> <br />
                <h2 class="text-2xl font-bold text-black mb-4 border-b-2 hover:text-black cursor-pointer text-center">My Projects</h2>
                <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="bg-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center hover:bg-amber-200">
                        <h3 class="text-xl font-bold text-black mb-2"><a href="https://rest-countries-zeta.vercel.app/" > Rest API Country</a></h3>
                        <p class="text-sm text-black mb-4">This project contains all information details on different countries.</p>
                    </div>
                    <div class="bg-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center hover:bg-amber-200">

                        <h3 class="text-xl font-bold text-black mb-2"><a href="https://bella01313.github.io/Age-calculator/">Age calculator</a> </h3>
                        <p class="text-sm text-black mb-4">this project able user can calculate his or her age</p>

                    </div>
                    <div class="bg-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center hover:bg-amber-200">
                        <h3 class="text-xl font-bold text-black mb-2"><a href="https://bella01313.github.io/Rock-Paper-Scissors/">Rock-Paper-Scissors</a></h3>
                        <p class="text-sm text-black mb-4">this project help user to change different type of play </p>

                    </div>
                    <div class="bg-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center hover:bg-amber-200">
                        <h3 class="text-xl font-bold text-black mb-2"><a href="https://bella01313.github.io/Random-Emoji/">Random Emoji</a></h3>
                        <p class="text-sm text-black mb-4">this project help user to change different emojis </p>

                    </div>
                    <div class="bg-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center hover:bg-amber-200">
                        <h3 class="text-xl font-bold text-black mb-2"><a href="https://bella01313.github.io/Food-website/">Food Website</a></h3>
                        <p class="text-sm text-black mb-4">this project help user to change different type of play </p>

                    </div>
                    <div class="bg-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center hover:bg-amber-200">
                        <h3 class="text-xl font-bold text-black mb-2"><a href="https://todo-app-rose-nine.vercel.app/">Todo App</a></h3>
                        <p class="text-sm text-black mb-4">this project help user to change different type of play </p>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Project;