import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt= " " />
            
             </div>

          <h3>Portfolio</h3>
          <div className="portfoli_item_cta">
          <a href="https://github.com/manojpalyam0815/Palyam_Manojkumar" className='btn'>Github</a>
          <a href="https://moonlit-eclair-1bddb0.netlify.app" className='btn btn-primary' target="_blank"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt= " " />
            
             </div>

          <h3> Ludo</h3>
          <div className="portfoli_item_cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt= " " />
            
             </div>

          <h3> Queen</h3>
          <div className="portfoli_item_cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt= " " />
            
             </div>

          <h3> Soldier</h3>
          <div className="portfoli_item_cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt= " " />
            
             </div>

          <h3> Army</h3>
          <div className="portfoli_item_cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank"> Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt= " " />
            
             </div>

          <h3>Elephant</h3>
          <div className="portfoli_item_cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank"> Live Demo</a>
          </div>
        </article>

      </div>
      </section>
  )
}

export default Portfolio