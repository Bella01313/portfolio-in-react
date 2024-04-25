import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-slate-400 p-4 mt-auto flex flex-col items-center sm:px-4">
    <p class="text-xs font-bold text-gray-600 mb-4 sm:text-base">Copyright &copy; 2024 My Portfolio</p>
    <div class="container mx-auto flex flex-col items-center px-4">
        <div class="mt-4 flex">
            <a href="https://twitter.com/_bella__13_"target="_blank"  class="mx-4 text-4xl font-bold text-gray-100 hover:text-black">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/ingabire-muhizi-bella-23b7b2289/" target="_blank" class="mx-4 text-4xl font-bold text-gray-100 hover:text-black">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Bella01313?tab=repositories"target="_blank" class="mx-4 text-4xl font-bold text-gray-100 hover:text-black">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
  
  </footer>
  )
}

export default Footer