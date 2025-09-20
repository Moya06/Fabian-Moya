import React from 'react';
import Services from './service'; // Asegúrate de que la ruta es correcta
import Testimonials from './testimonials'; // Asegúrate de que la ruta es correcta
import Clients from './clients'; // Asegúrate de que la ruta es correcta

const About = () => {
  return (
        <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      
      <section className="about-text">
        <p>
         I'm a Web Developer with a strong command of multiple programming languages and frameworks. I possess a proven ability to quickly learn and adapt to new technologies, which allows me to thrive in dynamic development environments.
         My collaborative nature and strong work ethic enable me to integrate effectively into any team, actively contributing to shared goals.
        </p>
        <p>
         I thrive on constant challenges where I can apply my technical skills in an environment that fosters continuous growth. I'm passionate about staying up-to-date with the latest trends and technologies, always committed to adding significant value to everything I undertake, and I strive to give my best in every task.
        </p>
      </section>
      
      <Services />
      <Testimonials />
      <Clients />
    </article>
  )
}

export default About;