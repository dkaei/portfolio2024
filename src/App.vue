<script setup>
import Button from './components/Button.vue'
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'About', href: '#aboutSection' },
  { name: 'Works', href: '#worksSection' },
  { name: 'Skills', href: '#aboutSection' },
  { name: 'Contact', href: '#contactSection' },
]

const mobileMenuOpen = ref(false)

const isActive1 = ref(false)
const isActive2 = ref(false)
const isActive3 = ref(false)
const isActive4 = ref(false)

const picked = ref('Learn')

const video = ref(null)
const playVideo = () => {
  if (video.value) video.value.play()
}
const pauseVideo = () => {
  if (video.value) video.value.pause()
}

</script>

<template>
  <div class="bg-white">

    <!-- Start of Top Navbar-->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <p class="font-bold text-xl/6 text-theme-darkblue/80 hover:text-theme-darkblue">WB</p>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 heading-text">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base/6 font-semibold underline-effect">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a target="_blank" href="https://drive.google.com/file/d/1SBT4wsplLRpM9yXCPzkeYBJsQnpJp4TS/view" class="text-base/6 font-semibold heading-text"> <span class="underline-effect">View resume</span><span aria-hidden="true"> &rarr;</span></a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="font-bold text-xl/6 text-theme-darkblue">WB</span>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="https://drive.google.com/file/d/1SBT4wsplLRpM9yXCPzkeYBJsQnpJp4TS/view" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">View resume<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <!-- End of Top Navbar-->

    <!-- Start of Hero Section-->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6930c3] to-[#80ffdb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>

      <!-- Main Content Section -->
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto">

        <!-- Text Section -->
        <div class="px-4 xl:ml-10 max-w-2xl py-10 sm:py-12 lg:py-56">
          <div class="text-center xl:text-left">
            <h1 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-up animate-once animate-ease-in-out animate-delay-500">
              Hello! I'm Winnie Boon,
            </h1>
            <h1 class="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl animate-fade-up animate-once animate-ease-in-out animate-delay-1000">
              an aspiring Web Developer.
            </h1>
            <div class="mt-10 xl:mt-20 flex items-center justify-center gap-x-6">
              <Button title="Check out my works" textClass="animate-bounce text-rose-600 active:text-rose-500" bgClass="bg-rose-600" link="#aboutSection"/>
            </div>
          </div>
        </div>

          <!-- Image Section -->
          <div class="flex items-center justify-center px-4 pt-10 xl:mr-10 max-w-md lg:max-w-lg">
            <img
            src="./assets/heroVector.png"
            alt="Hero Illustration"
            class="w-1/2 sm:w-2/3 lg:w-4/5 xl:w-5/6 h-auto"
            />
          </div>
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ffdb] to-[#6930c3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
    <!-- End of Hero Section-->

    <!-- Start of About Section -->
    <div class="sm:mt-16 py-20 sm:py-24 animate-fade-up animate-once animate-ease-out">
      <div id="aboutSection" class="py-4"></div>
      <div class="border border-solid border-theme-midblue/30 rounded-3xl bg-gradient-to-r from-theme-white/80 to-theme-lightblue/30 py-4 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p class="mx-auto mt-4 max-w-lg text-balance text-center text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl" 
           >About me</p>
        <div class="mt-8 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div class="relative lg:row-span-2">
            <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] hover:shadow-xl"
              @mouseover="isActive1 = true" @mouseleave="isActive1 = false">
              <div class="pb-3 pt-8 sm:pb-0 sm:pt-10">
                <p class="px-8 sm:px-10 mt-2 text-lg font-medium tracking-tight max-lg:text-center"
                   :class="isActive1 ? 'transition toggle-gradient' : 'text-gray-950'">What I Am</p>
                <p class="px-8 sm:px-10 mt-2 lg:max-w-lg lg:max-w-lg text-sm/6 text-gray-800 max-sm:text-center">
                  Hi there! My name is Winnie Boon, and I'm currently pursuing BSc (Hons) in Computer Science at SIM - University of London.
                </p>
                <p class="px-8 sm:px-10 mt-2 lg:max-w-lg text-sm/6 text-gray-800 max-sm:text-center">
                  <img
                    src="./assets/walkVector.jpeg"
                    alt="Student walking Illustration"
                    class="w-1/4 lg:w-1/2 h-auto transition duration-700"
                    :class="isActive1 ? 'brightness-105 translate-x-10' : ''"
                  />
                  As I progress through my academic journey, I'm keen to apply my skills in <span class="font-semibold" :class="isActive1 ? 'transition toggle-gradient' : ''">Web Development</span>, <span class="font-semibold" :class="isActive1 ? 'transition toggle-gradient' : ''">Software Design</span>, and Object-Oriented Programming to real-world projects.
                </p>
                <br>
                <p class="px-8 sm:px-10 mt-2 lg:max-w-lg text-sm/6 text-gray-800 max-sm:text-center">
                  I’m passionate about building <span class="font-semibold" :class="isActive1 ? 'transition toggle-gradient' : ''">clean, efficient, and user-friendly applications</span> and am always exploring new technologies to enhance my skill set.
                </p>
                <img
                    src="./assets/treeVector.png"
                    alt="A line of trees Illustration"
                    class="-mb-4 h-32 w-full sm:h-36 sm:mb-0 xl:h-auto lg:-mt-4 object-fit transition duration-700"
                    :class="isActive1 ? 'brightness-105 scale-105' : ''"
                />
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
          </div>
          <div class="relative max-lg:row-start-1">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] shadow hover:shadow-xl"
              @mouseover="isActive2 = true" @mouseleave="isActive2 = false">
              <div class="px-8 pt-8 sm:px-10 sm:pt-10 pb-56 sm:pb-96 lg:pb-0">
                <p class="mt-2 text-lg font-medium tracking-tight max-lg:text-center"
                   :class="isActive2 ? 'transition toggle-gradient' : 'text-gray-950'">What I Built</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Check out my latest project!</p>
                <a class="mt-3 flex w-full items-center max-lg:justify-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700" href="#worksSection">
                  View projects
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
              <div class="absolute bottom-0 left-24 right-0 top-40 overflow-hidden rounded-tl-2xl bg-gray-900 shadow-2xl border-t-4 border-l-4 border-theme-lightblue transition duration-300"
                   :class="isActive2 ? '' : 'sm:translate-y-10 sm:translate-x-10'">
                <img class="size-full object-cover object-left transition" :class="isActive2 ? 'brightness-125' : 'brightness-110'" src="./assets/latestWorkGif.gif" alt="Gif of latest work" />
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
          </div>
          <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div class="absolute inset-px rounded-lg bg-white" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] shadow hover:shadow-xl"
              @mouseover="isActive3 = true" @mouseleave="isActive3 = false">
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                <p class="mt-2 text-lg font-medium tracking-tight max-lg:text-center"
                   :class="isActive3 ? 'transition toggle-gradient' : 'text-gray-950'">What I Do <span class="text-gray-500 text-base">(in my free time)</span></p>
              </div>
              <!-- Start of Radio -->
              <div class="flex gap-x-6 justify-center py-6 lg:py-4 lg:-mb-2 xl:-mb-4 xl:pb-0">
                <div class="flex">
                  <input type="radio" name="hs-radio-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 hover:cursor-pointer" id="learn" value="Learn" v-model="picked">
                  <label for="learn" class="text-sm text-gray-600 ms-2 hover:cursor-pointer" :class="picked=='Learn' ? 'text-gray-900' : ''">Learning</label>
                </div>

                <div class="flex">
                  <input type="radio" name="hs-radio-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 hover:cursor-pointer" id="read" value="Read" v-model="picked">
                  <label for="read" class="text-sm text-gray-600 ms-2 hover:cursor-pointer" :class="picked=='Read' ? 'text-gray-900' : ''">Reading</label>
                </div>

                <div class="flex">
                  <input type="radio" name="hs-radio-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 hover:cursor-pointer" id="game" value="Game" v-model="picked">
                  <label for="game" class="text-sm text-gray-600 ms-2 hover:cursor-pointer" :class="picked=='Game' ? 'text-gray-900' : ''">Gaming</label>
                </div>
              </div>
              <div class="flex flex-col border shadow-inner rounded-xl mx-8 mb-8 lg:my-auto"
                   :class="isActive3 ? 'bg-indigo-300/10' : 'bg-indigo-300/5'">
                <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                  <h3 class="text-base font-medium" :class="isActive3 ? 'transition toggle-gradient' : 'text-gray-800'">
                    I like to {{ picked }}
                  </h3>
                  <p class="text-sm mt-2 text-gray-600" :class="picked=='Learn' ? 'inline-flex' : 'hidden'">
                    Beyond school, I consistently explore new technologies to progress as a holistic developer.
                    <br><br>Currently learning: Vue.js, Python, Java
                  </p>
                  <p class="text-sm mt-2 text-gray-600" :class="picked=='Read' ? 'inline-flex' : 'hidden'">
                    I enjoy reading non-fiction books, especially on economics and philosophy.
                    <br><br>Currently reading: Nudge by Richard H. Thaler & Cass R. Sunstein
                  </p>
                  <p class="text-sm mt-2 text-gray-600" :class="picked=='Game' ? 'inline-flex' : 'hidden'">
                    PC games provide a fun way for me to relax and unwind while exercising strategic thinking and creativity.
                    <br><br>Currently playing: Valorant
                  </p>
                </div>
              </div>
              <!-- End of Radio -->
            </div>

            <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div class="relative lg:row-span-2">
            <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] shadow hover:shadow-xl"
              @mouseover="isActive4 = true" @mouseleave="isActive4 = false">
              <div class="relative min-h-[30rem] w-full grow">
                <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p class="mt-2 text-lg font-medium tracking-tight max-lg:text-center"
                    :class="isActive4 ? 'transition toggle-gradient' : 'text-gray-950'">What I Know</p>
                  <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Here's a snapshot of my current technical skills:</p>
                  <div class="mt-2 xl:mt-10 py-3 flex items-center font-semibold text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-600 before:me-6 after:flex-1 after:border-t after:border-gray-600 after:ms-6">
                    <span class="font-semibold" :class="isActive4 ? 'transition toggle-gradient' : ''">Programming Languages</span></div>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-darkblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">JavaScript</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-darkblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Python</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-darkblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">C</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-darkblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">C++</span>
                  <div class="mt-2 xl:mt-10 py-3 flex items-center font-semibold text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-600 before:me-6 after:flex-1 after:border-t after:border-gray-600 after:ms-6">
                    <span class="font-semibold" :class="isActive4 ? 'transition toggle-gradient' : ''">Frameworks & Libraries</span></div>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Bootstrap</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Tailwind CSS</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Angular</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Vue.js</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Node.js</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Express.js</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">P5.js</span>
                  <div class="mt-2 xl:mt-10 py-3 flex items-center font-semibold text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-600 before:me-6 after:flex-1 after:border-t after:border-gray-600 after:ms-6">
                    <span class="font-semibold" :class="isActive4 ? 'transition toggle-gradient' : ''">Other Technologies</span></div>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue/80 text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">HTML</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue/80 text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">CSS</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue/80 text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">MS Office</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue/80 text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Sony Vegas</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue/80 text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Davinci Resolve</span>
                  <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-theme-midblue/80 text-white m-1 hover:m-0 hover:cursor-pointer hover:text-base">Adobe CC</span>
                </div>
              </div>  
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
          </div>
        </div>
      </div>
    </div>
    <!-- End of About Section -->

    <!-- Start of Works Section -->
    <div id="worksSection" class="py-4 w-3/4 mx-auto border-t-2 border-gray-200"></div>
    <div class="relative isolate px-6 pt-4 lg:px-8">
      <div class="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6930c3] to-[#80ffdb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>

      <p class="mx-auto mt-4 mb-8 max-w-lg text-balance text-center text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">My works</p>
      <!-- Start of Project Blocks -->
      <!--project 1:portfolio2034-->
      <div class="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 border-2 border-gray-300/50 rounded-2xl bg-white/60 max-sm:text-center">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div class="flex flex-col justify-center">
            <div class="max-w-xl mb-6">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                My Imagined Portfolio<br class="hidden md:block" />
                in 10 years
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                Responsive website filled with inspired sustainable technology innovations.
              </p>
            </div>
            <div class="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 max-sm:mx-auto">
                  <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 class="mb-2 font-semibold leading-5">
                  Highlights
                </h6>
                <ul class="text-sm text-gray-900">
                  <li>All elements built from scratch using HTML, CSS and JS</li>
                  <li>Intuitive animations created using p5.js</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 max-sm:mx-auto">
                  <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>

                <div class="text-sm text-gray-900">
                  <Button title="App" textClass="text-rose-600 active:text-rose-500 mr-4 mb-4" bgClass="bg-rose-600" target="_blank" link="https://portfolio2034.vercel.app/" />
                  <Button title="Github" textClass="text-indigo-600 active:text-indigo-500" bgClass="bg-indigo-600" target="_blank" link="https://github.com/dkaei/projects/tree/main/portfolio2034" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img class="object-cover w-full h-72 rounded-2xl shadow-2xl border-4 border-stone-300 hover:drop-shadow-2xl hover:border-cyan-200 transition duration-500 hover:scale-110 lg:hover:translate-x-10 lg:hover:-translate-y-10 sm:h-96" src="./assets/proj1.png" alt="" />
          </div>
        </div>
      </div>
      <!--project 2:airwaterdatavis-->
      <div class="mt-8 px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 border-2 border-gray-300/50 rounded-2xl bg-white/60 max-sm:text-center">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div class="flex flex-col justify-center">
            <div>
              <video ref="video" id="dataVid" @mouseenter="playVideo" @mouseleave="pauseVideo" width="320" height="240" muted loop class="object-cover w-full h-72 rounded-2xl shadow-2xl border-4 border-stone-300 hover:drop-shadow-2xl hover:border-cyan-200 transition duration-500 hover:scale-110 lg:hover:-translate-x-10 lg:hover:-translate-y-10 sm:h-96">
                <source src="./assets/dataVisVid.mp4" type="video/mp4">
              Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Data Visualiser App<br class="hidden md:block" />
              with real-world data
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Easy-to-understand interactive visualisations of real-world air and water quality data by country.
            </p>
            <br>
            <div class="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 max-sm:mx-auto">
                  <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 class="mb-2 font-semibold leading-5">
                  Highlights
                </h6>
                <ul class="text-sm text-gray-900">
                  <li>All elements built from scratch using HTML, CSS and JS with p5.js</li>
                  <li>Use of advanced JS for Particle Generation and Search Bar</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 max-sm:mx-auto">
                  <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <div class="text-sm text-gray-900">
                  <Button title="App" textClass="text-rose-600 active:text-rose-500 mr-4 mb-4" bgClass="bg-rose-600" target="_blank" link="https://airwaterdatavis.vercel.app/" />
                  <Button title="Github" textClass="text-indigo-600 active:text-indigo-500" bgClass="bg-indigo-600" target="_blank" link="https://github.com/dkaei/projects/tree/main/dataVisualiser" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--project 3:opp-market-clone-->
      <div class="mt-8 px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 border-2 border-gray-300/50 rounded-2xl bg-white/60 max-sm:text-center">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div class="flex flex-col justify-center">
            <div class="max-w-xl mb-6">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Job Opportunity Market<br class="hidden md:block" />
                (visual clone)
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                Homepage view-only clone of an online premium design with some interactive functions.
              </p>
            </div>
            <div class="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 max-sm:mx-auto">
                  <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 class="mb-2 font-semibold leading-5">
                  Highlights
                </h6>
                <ul class="text-sm text-gray-900">
                  <li>Built own components on Typescript-based Angular</li>
                  <li>Expedited process using Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 max-sm:mx-auto">
                  <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>

                <div class="text-sm text-gray-900">
                  <Button title="App" textClass="text-rose-600 active:text-rose-500 mr-4 mb-4" bgClass="bg-rose-600" target="_blank" link="https://opp-market-clone.vercel.app/" />
                  <Button title="Github" textClass="text-indigo-600 active:text-indigo-500" bgClass="bg-indigo-600" target="_blank" link="https://github.com/dkaei/opp-market" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img class="object-cover w-full h-72 rounded-2xl shadow-2xl border-4 border-stone-300 hover:drop-shadow-2xl hover:border-cyan-200 transition duration-500 hover:scale-110 lg:hover:translate-x-10 lg:hover:-translate-y-10 sm:h-96" src="./assets/proj3.png" alt="" />
          </div>
        </div>
      </div>
      <!-- End of Project Blocks -->
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ffdb] to-[#6930c3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
    <!-- End of Works Section -->

    <!-- Start of Contact Section -->
    <div id="contactSection" class="mt-24 py-4 w-3/4 mx-auto border-t-2 border-gray-200"></div>
    <div class="my-8 border border-solid border-theme-darkblue/50 rounded-3xl bg-gradient-to-r from-theme-white/70 to-theme-lightblue/70 py-4 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p class="mx-auto mt-4 sm:mb-14 max-w-lg text-balance text-center text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">Contact Me</p>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!--column 1-->  
          <div class="sm:px-4 lg:mx-16 py-8 text-center">
            <div class="flex items-center justify-center">
              <img
              src="./assets/laptopVector.png"
              alt="Laptop Illustration"
              class="w-1/2 sm:w-2/3 lg:w-4/5 xl:w-5/6 h-auto drop-shadow-xl"
              />
            </div>
            <h6 class="mb-4 font-medium text-3xl toggle-gradient">
                  Want to get in touch?
            </h6>
            <ul class="text-sm text-gray-800">
              <li>Feel free to contact me at <a href="mailto:wboonkx@gmail.com" class="underline decoration-gray-500">wboonkx@gmail.com</a>,</li>
              <li>or use the contact form to get in touch.</li>
            </ul>
          </div>
          <!--column 2-->  
          <div class="mb-4 sm:px-4 lg:mx-16 py-8 bg-white/50 border-2 border-gray-400 rounded-3xl shadow-lg">
            <p class="mb-5 text-lg text-gray-900 font-medium text-center lg:text-xl">
              Contact form
            </p>
            <form class="max-w-sm mx-auto px-4 sm:px-2">
              <div class="mb-5">
                <label for="name-input" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name-input" class="block w-full p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div class="mb-5">
                <label for="email-input" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="text" id="email-input" class="block w-full p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div class="mb-5">
                <label for="message-input" class="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea id="message-input" rows="4" class="block p-2.5 w-full min-h-24 max-h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message here..."></textarea>
              </div>
              <div class="mt-8 -mb-4 text-center">
                <Button href="mailto:wboonkx@gmail.com" type="submit" title="Submit" textClass="text-gray-600 active:text-gray-500 mr-4 mb-4" bgClass="bg-gray-600" link="" />
              </div>
            </form>
          </div>
      </div>
    </div>
    <!-- End of Contact Section -->
    <footer>
      <a href="#" class="block pt-8 -mb-14 xl:-mb-24 mx-auto text-black animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-out flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
          </svg>
      </a>
      <div class="text-center py-6 px-4 container mx-auto text-gray-500 text-sm mt-12">
        <div class="md:flex justify-between items-center">
          <div class="mb-4 md:mb-0">Built using Vue.js and Tailwind by Winnie Boon. © 2024 WB. All rights reserved.</div>
          <div class="flex justify-center">
            <div class="w-8 text-gray-500">
              <!-- Email Icon -->
              <a href="mailto:wboonkx@gmail.com" class="hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path fill="#FFF" d="M12 13.172L5 8.5V15h14V8.5l-7 4.672zM4.636 7l7.364 4.932L19.364 7H4.636z" />
                </svg>
              </a>
            </div>
            <div class="w-8 ml-2 text-gray-500">
              <!-- Discord Icon -->
              <a href="https://discord.com/invite/YyFuhXPSGW" class="hover:text-gray-700" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path fill="#FFF" d="M17.767 8.66a15.536 15.536 0 0 0-3.895-1.452c-.19.333-.4.77-.548 1.13a14.665 14.665 0 0 0-2.65 0 8.61 8.61 0 0 0-.55-1.13 15.51 15.51 0 0 0-3.893 1.451c-1.03 1.84-1.313 3.63-1.17 5.39a15.473 15.473 0 0 0 3.933 1.972c.28-.383.53-.787.745-1.207a11.61 11.61 0 0 0 1.916.136c.65 0 1.287-.045 1.916-.136.217.42.464.824.745 1.207a15.477 15.477 0 0 0 3.933-1.972c.17-2.083-.238-3.942-1.17-5.39zM9.375 12.34c-.59 0-1.068-.545-1.068-1.214 0-.67.478-1.216 1.068-1.216.59 0 1.068.545 1.068 1.216 0 .67-.478 1.214-1.068 1.214zm5.25 0c-.59 0-1.068-.545-1.068-1.214 0-.67.478-1.216 1.068-1.216.59 0 1.068.545 1.068 1.216 0 .67-.478 1.214-1.068 1.214z" />
                </svg>
              </a>
            </div>
            <div class="w-8 ml-2 text-gray-500">
              <!-- GitHub Icon -->
              <a href="https://github.com/dkaei" class="hover:text-gray-700" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.579v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.775.42-1.305.762-1.605-2.665-.306-5.466-1.333-5.466-5.93 0-1.31.469-2.381 1.236-3.222-.124-.303-.535-1.527.117-3.176 0 0 1.008-.323 3.3 1.233a11.42 11.42 0 0 1 3-.404 11.42 11.42 0 0 1 3 .404c2.291-1.556 3.298-1.233 3.298-1.233.653 1.649.242 2.873.118 3.176.768.841 1.235 1.911 1.235 3.222 0 4.607-2.804 5.621-5.475 5.92.43.371.823 1.103.823 2.222v3.293c0 .321.192.694.8.576C20.565 21.798 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
