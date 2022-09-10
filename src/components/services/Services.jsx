import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer </h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Html, CSS & Bootstrap</h3>
          </div>
          <ul className="service__list">

            <li><BiCheck className='service__list-icon' /> 
            <p>HTML is the language for describing the structure of Web pages.</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p>CSS (Cascading Style Sheets) is used to style and layout web pages.</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p> BootStarp to enable a designer and developes to build completely responsive websites quickly</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p>Responsible for implementing visual elements that users see and interact with in a web application.</p>
            </li>
            
            
          </ul>
        </article>
        {/*End of UI dvelopment */}

        <article className="service">
          <div className="service__head">
            <h3>Java Script & React JS</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon' /> 
            <p>Javascript is used to create dynamic and interactive web content like applications and browsers</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p>React js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p>
            </li>
            
          </ul>
        </article>

        {/*End of Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Back End</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon' /> 
            <p>Java to construct applications in laptops, data centres, game consoles, scientific supercomputers, cell phones, and other devices</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p>Node.js can create, open, read, write, delete, and close files on the server</p>
            </li>
            <li><BiCheck className='service__list-icon' /> 
            <p>Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".</p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services