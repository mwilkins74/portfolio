import React from "react";
import "./Portfolio.css";
import yourBookshelf from '../../assets/your_bookshelf.png'

const data = [
  {
    id: 1,
    image: yourBookshelf,
    title: 'Your Bookshelf',
    github: "https://github.com/mwilkins74/your_bookshelf",
    demo: "https://github.com/mwilkins74/your_bookshelf"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-buttons">
                  <a
                    href={github}
                    className="btn"
                    >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Github
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
