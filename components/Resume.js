// import Header from "./Header";
import styles from "../styles/Home.module.scss";

const skills = [
  "NextJs",
  "React",
  "React Native",
  "CSS3",
  "Semantic HTML",
  "Es6",
  "Progressive web app",
  "HTML5",
  "Sass",
  "Core JavaScript",
  "Webpack",
];

const Resume = () => (
  <article className={styles.resumeContainer}>
    {/* <Header /> */}
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className={styles.downloadIconContainer}
    >
      <i className={`fas fa-download ${styles.downloadIcon}`} />
    </a>
    <header className={styles.section}>
      <h1>Jagat Jeevan Sahoo</h1>
      <div>
        <i className="fas fa-envelope-open" />
        <a href="mailto:jagatjeevans@gmail.com">jagatjeevans@gmail.com</a>
      </div>
      <span>
        <i className="fas fa-code-branch" />
        <a href="https://github.com/jagatjeevan" rel="noreferrer noopener">
          https://github.com/jagatjeevan
        </a>
      </span>
      <div>
        <i className="fas fa-phone" />
        <a href="tel:+919686602154">(+91) 968-660-2154</a>
        <span className={styles.telVariant}>Prim,</span>
        <a href="tel:+919740970977">(+91) 974-097-0977</a>
        <span className={styles.telVariant}>Alt</span>
      </div>
      <div>
        <i className="fas fa-globe" />
        <a
          href="https://jagatjeevan.vercel.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://jagatjeevan.vercel.app
        </a>
      </div>
      <address>
        <i className="fas fa-location-arrow" />
        Bangalore, India. Pin: 560103
      </address>
    </header>
    <section className={styles.portfolioSection}>
      <h2>
        <i className="fas fa-wrench" />
        Technical Skills
      </h2>
      <ul className={styles.technicalSkills}>
        <li>&micro;-frontend</li>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
    <section className={styles.portfolioSection}>
      <h2>
        <i className="fas fa-briefcase" />
        Employment history
      </h2>
      <div className={styles.subSection}>
        <h4>
          UI Developer Lead Consultant, ThoughtWorks. Bangalore, KARNATAKA
        </h4>
        <time dateTime="08-2013">Aug. 2013 </time> to Present
        <ul>
          <li>
            Proposed the pros &amp; cons for various &micro;-frontend
            Architecture implementations in Angular 8 and implemented in the
            project. Few of the patterns demonstrated which was proposed are{" "}
            <a href="https://github.com/mfe-patterns">here</a>
          </li>
          <li>
            Designed a setup for the data-driven React application for a
            data-heavy project which allowed the clients to customise and add
            various fields without developer interference.
          </li>
          <li>
            Created a 2-level flexible variable override system using Sass &amp;
            atomic design principles for creating over 10 skins for various
            train-operating company websites in the U.K.
            <ul>
              <li>
                Architected a similar system for a colleague&rsquo;s website.{" "}
                <a
                  href="https://jagatjeevan.github.io/Su-Che.github.io/index.html"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  here
                </a>
              </li>
            </ul>
          </li>
          <li>
            Developed responsive email templates using XSLT for new customer
            registration, booking confirmation emails etc.
          </li>
          <li>
            Designed a common platform to share UI component styles among 3
            teams, using React and Angular frameworks.
          </li>
          <li>
            Architected and developed the front-end for the Cisco eReader{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.cisco.dkit"
              target="_blank"
              rel="noreferrer noopener"
            >
              Android
            </a>{" "}
            and{" "}
            <a
              href="https://itunes.apple.com/us/app/cisco-ereader/id722452404"
              target="_blank"
              rel="noreferrer noopener"
            >
              iOS
            </a>{" "}
            apps.
          </li>
          <li>
            Was one of the speakers for{" "}
            <a
              href="https://unfoldui.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Unfold UI
            </a>{" "}
            conference for{" "}
            <a
              href="https://slides.com/kanhajeevan/css-grid-layout#/"
              target="_blank"
              rel="noreferrer noopener"
            >
              CSS grid
            </a>
          </li>
          <li>
            Was one of the speaker for the workshop for &quot;Progressive web
            app&quot;. We covered the{" "}
            <a
              href="https://slides.com/kanhajeevan/progressive-web-apps#/"
              target="_blank"
              rel="noreferrer noopener"
            >
              following topics
            </a>
            <ul>
              <li>Promises</li>
              <li>ServiceWorker</li>
              <li>Caching patterns</li>
              <li>Push Notification</li>
              <li>Manifesting websites</li>
            </ul>
          </li>
          <li>
            Developed a custom survey and sample distribution{" "}
            <a
              href="https://github.com/jagatjeevan/googleForm"
              target="_blank"
              rel="noreferrer noopener"
            >
              form
            </a>{" "}
            using Google App Script for our client, BJ&apos;s Wholesale. Was
            appreciated for coming up with a quick, efficient and cost-effective
            solution.
          </li>
          <li>
            <a
              href="https://github.com/jagatjeevan/grommet/commits?author=jagatjeevan"
              target="_blank"
              rel="noreferrer noopener"
            >
              Contributed
            </a>{" "}
            to{" "}
            <a
              href="https://github.com/grommet/grommet"
              target="_blank"
              rel="noreferrer noopener"
            >
              Grommet
            </a>
            , an open-source React UI framework.
          </li>
        </ul>
        <p>
          Few projects done during this time are:{" "}
          <a
            href="https://www.virgintrains.co.uk/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.virgintrains.co.uk/
          </a>
          ,{" "}
          <a
            href="https://www.eastmidlandstrains.co.uk/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.eastmidlandstrains.co.uk/
          </a>
          ,{" "}
          <a
            href="http://www.scotrail.co.uk/"
            target="_blank"
            rel="noreferrer noopener"
          >
            http://www.scotrail.co.uk/
          </a>
        </p>
      </div>
      <div className={styles.subSection}>
        <h4>
          UI Developer, Toboc International Pvt. Ltd. Bangalore, KARNATAKA
        </h4>
        <time dateTime="07-2012">Jul. 2012</time>
        to
        <time dateTime="08-2013">Aug. 2013</time>
        <ul>
          <li>
            <a
              href="http://www.toboc.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Toboc
            </a>
            <p>
              My responsibility was the maintenance of a B2B site. This is a B2B
              portal where buyers and sellers around the world participate in
              trading. Few of my work include:
            </p>
            <ul>
              <li>
                Menu where you can go diagonally (out of a menu item straight
                into its sub-menu) without closing the menu.
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
              explorers. My role included interacting with owners, understanding
              the patterns and consulting them for better profits.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.subSection}>
        <h4>UI Developer, Freelancer.</h4>
        <time dateTime="01-2010">Jan. 2010</time>–
        <time dateTime="07-2012">Jul. 2012</time>
        <p>
          During my Freelancing, the majority of the work was around creating
          HTML from static PSDs. My work would brief in:
        </p>
        <ul>
          <li>
            Slight modifications in PSDs and extracting resources (slicing)
          </li>
          <li>Creating sprites out of the images/icons.</li>
          <li>Browser compatibility.</li>
          <li>Using jQuery for interactions.</li>
          <li>Creating plugins if required.</li>
        </ul>
      </div>
    </section>
    <section className={styles.portfolioSection}>
      <h2>
        <i className="fas fa-graduation-cap" />
        Education
      </h2>
      <div className={styles.educationDetails}>
        <div>Bachelors in Technology, Electronics &amp; Telecommunication</div>
        <div>Ajay Binay Institute of Technology, Cuttack, Odisha</div>
        <div>Dec. 2008</div>

        <div>Intermediate (10 + 2) in Science</div>
        <div>Christ College, Cuttack, Odisha</div>
        <div>Dec. 2004</div>

        <div>Matriculation (10)</div>
        <div>S. C. B. Medical Public School, Cuttack, Odisha</div>
        <div>Dec. 2002</div>
      </div>
    </section>
  </article>
);

export default Resume;
