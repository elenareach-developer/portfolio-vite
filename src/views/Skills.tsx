import { FingerPrintIcon } from '@heroicons/react/outline'
import React from 'react'
const list = ["React","Redux", "Tailwindcss", "Python", "Express.js", "NodeJS", "MongoDb" ]


const Skills = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <FingerPrintIcon className="mr-4 w-6 h-6" />
        <div>Skills</div>
      </div>

      <div className="leading-relaxed mt-12">

      <div className="grid grid-cols-3">
  <div className="col-span-2">
    <div
      data-te-spy="scroll"
      data-te-target="#scrollspy1"
      data-te-offset="200"
      className="relative h-48 overflow-auto">
      <section id="example-1">
        <h3 className="pb-3 pt-5 text-xl font-semibold">React</h3>
        <p>
        Over 7 years mastering React! 🚀 From dynamic UIs to interactive web apps, I've honed my skills to deliver excellence. Check out my portfolio with a myriad of projects showcasing my React expertise.💻🔥 #ReactPro #WebDev
        </p>
      </section>
      <section id="example-2">
        <h3 className="pb-3 pt-5 text-xl font-semibold">Redux</h3>
        <p>
        7+ years mastering Redux's art! 🔄 From seamless state management to dynamic app flows, I've championed Redux. My collection of projects reflects the journey. 📦🚀 #ReduxMastery #CodingExpertise
        </p>
      </section>
      <section id="example-3">
        <h3 className="pb-3 pt-5 text-xl font-semibold">Tailwindcss</h3>
        <p>
        Fluent in Tailwind CSS for numerous projects! ✨ Crafting sleek designs and efficient workflows is my forte. Let's collaborate to create pixel-perfect interfaces and elevate user experiences together. 🎨💼 #TailwindPro #DesignExcellence
        </p>
        <section id="example-sub-A">
          <h3 className="pb-3 pt-5 text-xl font-semibold">Python</h3>
          <p>
          Python pro powering numerous projects! 🐍 From automation to data science, I've harnessed Python's versatility. Let's join forces to code solutions that solve real-world challenges. Ready to embark on new coding adventures! 🚀💡 #PythonExpert #CodingJourney"
          </p>
         
        </section>
        <section id="example-sub-B">
          <h3 className="pb-3 pt-5 text-xl font-semibold">Express.js</h3>
          <p>
          Expressing ideas through code with expertise! 🚀 Proficient in Express.js for diverse projects, I've mastered backend development. Let's connect to explore the possibilities of efficient APIs and dynamic web apps. 🌐💻 #ExpressMastery #BackendPro
          </p>
        </section>
      </section>
      <section id="example-4">
        <h3 className="pb-3 pt-5 text-xl font-semibold">NodeJS</h3>
        <p>
        Proficient in Node.js for diverse projects! 🚀 Unlocking backend potential and building robust APIs is my passion. Let's team up to create powerful and scalable solutions. Ready to turn ideas into reality! 💻🔗 #NodeJsPro #CollaborateAndBuild
        </p>
      </section>
      <section id="example-4">
        <h3 className="pb-3 pt-5 text-xl font-semibold">MongoDb</h3>
        <p>
        Proficient in Node.js for diverse projects! 🚀 Unlocking backend potential and building robust APIs is my passion. Let's team up to create powerful and scalable solutions. Ready to turn ideas into reality! 💻🔗 #NodeJsPro #CollaborateAndBuild
        </p>
      </section>
    </div>
  </div>

  <div>
    <div id="scrollspy1" className="sticky-top pl-3 text-sm">
      <ul data-te-nav-list-ref>
        <li className="py-1">
          <a
            data-te-nav-link-ref
            data-te-nav-link-active
            className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-1"
            >React JS</a>
        </li>
        <li className="py-1">
          <a
            data-te-nav-link-ref
            className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-2"
            >Tailwind Css</a>
        </li>
        <li className="py-1">
          <a
            data-te-nav-link-ref
            className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-3"
            >Section 3</a>
          <ul data-te-nav-list-ref className="pl-3">
            <li className="py-1">
              <a
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                href="#example-sub-A"
                >Subsection A</a >
            </li>
            <li>
              <a
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                href="#example-sub-B"
                >Subsection B</a>
            </li>
          </ul>
        </li>
        <li className="py-1">
          <a
            data-te-nav-link-ref
            className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-4"
            >Section 4</a>
        </li>
      </ul>
    </div>

  </div>
</div>
      
      </div>

      <div className="leading-relaxed mt-2">My skills grow every day</div>
    </div>
  )
}

export default Skills
