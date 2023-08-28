import { FingerPrintIcon } from '@heroicons/react/outline'
import React from 'react'

const Features = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <FingerPrintIcon className="mr-4 w-6 h-6" />
        <div>Features</div>
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
        <h3 className="pb-3 pt-5 text-xl font-semibold">Section 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-2">
        <h3 className="pb-3 pt-5 text-xl font-semibold">Section 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-3">
        <h3 className="pb-3 pt-5 text-xl font-semibold">Section 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <section id="example-sub-A">
          <h3 className="pb-3 pt-5 text-xl font-semibold">Subsection A</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
        </section>
        <section id="example-sub-B">
          <h3 className="pb-3 pt-5 text-xl font-semibold">Subsection B</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Labore earum natus vel minima quod error maxime, molestias ut.
            Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati
            et reiciendis quaerat accusamus numquam.
          </p>
        </section>
      </section>
      <section id="example-4">
        <h3 className="pb-3 pt-5 text-xl font-semibold">Section 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          earum natus vel minima quod error maxime, molestias ut. Fuga
          dignissimos nisi nemo necessitatibus quisquam obcaecati et
          reiciendis quaerat accusamus numquam.
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
            >Section 1</a>
        </li>
        <li className="py-1">
          <a
            data-te-nav-link-ref
            className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
            href="#example-2"
            >Section 2</a>
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
                >Subsection B</a
              >
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

      <div className="leading-relaxed mt-2">Everybody loves a bit of crypto now and then.</div>
    </div>
  )
}

export default Features
