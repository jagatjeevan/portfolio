// @flow

import React from "react";

const skills = [
  "Semantic HTML",
  "HTML5",
  "CSS3",
  "Sass",
  "Core JavaScript",
  "Es6",
  "Progressive web app",
  "React",
  "React Native",
  "Webpack",
];

const Resume = () => (
  <article className="resume-container">
    <a href="./resume.pdf" target="_blank" className="download-icon">
      <i className="fas fa-download" />
    </a>
    <header className="section">
      <h1>Jagat Jeevan Sahoo</h1>
      <address>
        <i className="fas fa-location-arrow" />
        Flat No: C-234, Sls Signature, Panathur, Kadubesanahalli, Bangalore,
        KARNATAKA, India Pin: 560103
      </address>
      <div>
        <i className="fas fa-envelope-open" />
        <a href="mailto:jagatjeevans@gmail.com">jagatjeevans@gmail.com</a>
      </div>
      <span>
        <i className="fas fa-code-branch" />
        <a href="https://github.com/jagatjeevan">
          https://github.com/jagatjeevan
        </a>
      </span>
      <div>
        <i className="fas fa-phone" />
        <a href="tel:+919740970977">(+91) 974-097-0977</a>,
        <a href="tel:+919686602154">(+91) 968-660-2154</a>
      </div>
    </header>
    <section>
      <h2>
        <i className="fas fa-sticky-note" />
        Proffessional Summary
      </h2>
      <p>
        I am a UI developer with over 7 years of experience in the industry. I
        am passionate about learning new trends in the market. In my 7yrs of
        experience, my work majorly consists of analysis, evaluation and
        executing the design in projects using sound engineering principles and
        adhering to business standards, practices and project requirements.
        Convert and demonstrate new user experience from legacy UI code.
      </p>
    </section>
    <section>
      <h2>
        <i className="fas fa-wrench" />
        Technical Skills
      </h2>
      <p>Below are the tech stacks I have hands-on experience</p>
      <ul className="technical-skills">
        <li>&micro;-frontend</li>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>
        <i className="fas fa-briefcase" />
        Employment history
      </h2>
      <div className="sub-section">
        <h4>Sr. UI Developer, ThoughtWorks. Bangalore, KARNATAKA</h4>
        <time dateTime="08-2013">Aug. 2013</time>
        to Present
        <p>With in-house and client bound projects</p>
        <ul>
          <li>
            Proposed the pros &amp; cons for various &micro;-frontend
            Architecture implementation in Angular 8 and implemented in the
            project.
          </li>
          <li>
            Designed a setup for the data-driven React application for a
            data-heavy project which allowed the clients to customise and add
            various fields without developer interference.
          </li>
          <li>
            Created a 2-level, unique &amp; flexible variable override system
            via Sass for skinning the atomic UI elements. This allowed easy
            skinning for Trainline and their client’s websites for quick .
          </li>
          <li>
            Architected similiar system of 2-level variable override system for
            a friend&apos;s resume
            <a
              href="https://jagatjeevan.github.io/Su-Che.github.io/index.html"
              target="_blank"
            >
              here
            </a>
          </li>
          <li>
            Developed responsive emails templates using XSLT for new customer
            registration, booking confirmation emails etc.
          </li>
          <li>
            Architected a common platform to share UI component styles among 3
            teams, using React and Angular frameworks.
          </li>
          <li>
            Architected and developed the front-end for the Cisco eReader
            <a
              href="https://play.google.com/store/apps/details?id=com.cisco.dkit"
              target="_blank"
            >
              Android
            </a>
            and
            <a
              href="https://itunes.apple.com/us/app/cisco-ereader/id722452404"
              target="_blank"
            >
              iOS
            </a>
            apps.
          </li>
          <li>
            Was one of the speaker for
            <a href="https://unfoldui.com/" target="_blank">
              Unfold UI
            </a>
            conference for
            <a
              href="https://slides.com/kanhajeevan/css-grid-layout#/"
              target="_blank"
            >
              Css grid
            </a>
          </li>
          <li>
            Was one of the speaker for the workshop for &quot;Progressive web
            app&quot;. We covered the
            <a
              href="https://slides.com/kanhajeevan/progressive-web-apps#/"
              target="_blank"
            >
              following topics
            </a>
            <ul>
              <li>Promises</li>
              <li>ServiceWorker</li>
              <li>Cacheing patterns</li>
              <li>Push Notification</li>
              <li>Manifesting websites</li>
            </ul>
          </li>
          <li>
            Developed a custom survey and sample distribution
            <a href="https://github.com/jagatjeevan/googleForm" target="_blank">
              form
            </a>
            using Google App Script for our client, BJ&apos;s Wholesale. Was
            appreciated for coming up with a quick, efficient and cost-effective
            solution.
          </li>
          <li>
            <a
              href="https://github.com/jagatjeevan/grommet/commits?author=jagatjeevan"
              target="_blank"
            >
              Contributed
            </a>
            to
            <a href="https://github.com/grommet/grommet" target="_blank">
              Grommet
            </a>
            an open-source React UI framework.
          </li>
        </ul>
        <p>
          Few projects done during this time are:
          <a href="https://www.virgintrains.co.uk/" target="_blank">
            https://www.virgintrains.co.uk/
          </a>
          ,
          <a href="https://www.eastmidlandstrains.co.uk/" target="_blank">
            https://www.eastmidlandstrains.co.uk/
          </a>
          ,
          <a href="http://www.scotrail.co.uk/" target="_blank">
            http://www.scotrail.co.uk/
          </a>
        </p>
      </div>
      <div className="sub-section">
        <h4>
          UI Developer, Toboc International Pvt. Ltd.. Bangalore, KARNATAKA
        </h4>
        <time dateTime="07-2012">Jul. 2012</time>
        to
        <time dateTime="08-2013">Aug. 2013</time>
        <ul>
          <li>
            <a href="http://www.toboc.com/" target="_blank">
              Toboc
            </a>
            <p>
              My responsibility was maintenance of a B2B site. This is a B2B
              portal where buyers and sellers around the world participate for
              trading. Few of my work include:
            </p>
            <ul>
              <li>
                Menu where you can go diagonally (out of a menu item straight
                into its sub menu) without closing the menu.
              </li>
              <li>Integration of the callback menu.</li>
              <li>Sprite gallery.</li>
            </ul>
          </li>
          <li>
            <span className="anchor">Toboc Deals</span>
            <p>
              This is a sister website for the above website. This is a website
              for people in Bangalore for deals to travel addicts and nature
              explorer. My role included interacting with owners, understanding
              the patterns and consulting them for better profits.
            </p>
          </li>
        </ul>
      </div>
      <div className="sub-section">
        <h4>UI Developer, Freelancer. Bhubaneswar, Odisha</h4>
        <time dateTime="01-2010">Jan. 2010</time>–
        <time dateTime="07-2012">Jul. 2012</time>
        <p>
          Created Mockups and Static pages with minimal jQuery used for
          interactions.
        </p>
        <ul>
          <li>
            <a href="https://www.padlocks.co.uk/" target="_blank">
              Padlocks
            </a>
            <p>
              A wordpress website for a variety locks to purchases online. My
              work was to create a static html with interactions using jQuery,
              helping developers if required for changes and integrations of the
              plugins. Made sure the client’s specifications were met with
              browser compatibility
            </p>
          </li>
          <li>
            <a href="http://www.home4trip.com/" target="_blank">
              Home4trip
            </a>
            <p>
              Home for wanderers in Isreal. A rich user experience using jQuery,
              Built Gallery, Calendar(Custom made) using jQuery. Helped the
              developers integration and browser compatibility done in cakePHP
            </p>
          </li>
        </ul>
        <br />
        <p>
          During my Freelancing, majority of the work was around creating htmls
          from static psds. My work would brief in:
        </p>
        <ul>
          <li>
            Slight modifications in PSDs and extracting resources (slicing)
          </li>
          <li>Creating sprites out of the images / icons.</li>
          <li>Browser compatibility.</li>
          <li>Using jQuery for interactions.</li>
          <li>Creating plugins if required.</li>
        </ul>
      </div>
    </section>
    <section>
      <h2>
        <i className="fas fa-graduation-cap" />
        Education
      </h2>
      <div className="education-details">
        <div>Bachelors in Technology, Electronics &amp; Telocommunication</div>
        <div>Ajay Binay Institute of Technology, Cuttack, Odisha</div>
        <div>Dec. 2008</div>

        <div>Intermidiate (10 + 2) in Science</div>
        <div>Christ College, Cuttack, Odissa</div>
        <div>Dec. 2004</div>

        <div>Matriculation (10)</div>
        <div>S. C. B. Medical Public School, Cuttack, Odisha</div>
        <div>Dec. 2002</div>
      </div>
    </section>
  </article>
);

export default Resume;
