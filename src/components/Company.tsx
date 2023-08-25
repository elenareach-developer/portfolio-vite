import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { CompanyProps } from '../config/projects'




const Company = (props:CompanyProps ) =>{
  return (
    <>
      <a
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded shadow transition transform hover:shadow-md hover:-translate-y-1 relative overflow-hidden"
    >
      <SwitchTransition>
              <CSSTransition
                timeout={200}
                classNames="fade"
                unmountOnExit
              >
                    <figure className="bg-slate-500 rounded-xl p-8 dark:bg-slate-800">
                      <img className=" mx-auto" src={props.img} alt="" width="150" height="150" />
                      <div className="pt-6 space-y-4">
                        <blockquote>
                          <p className="text-lg font-medi">
                          {props.description}
                          </p>
                        </blockquote>
                        <figcaption>
                          <div>
                            {props.title}
                          </div>
                        </figcaption>
                      </div>
                    </figure>
              </CSSTransition>
        </SwitchTransition>
        </a>
    </>
  )
}


export default Company
