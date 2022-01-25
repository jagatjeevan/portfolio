import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const CoverLetter = () => {
    return (
      <article className={styles.resumeContainer}>
        <Header />
        <article>
          <section className={styles.portfolioSection}>
            <h2>
              <i className="fas fa-sticky-note" />
              Cover Letter
            </h2>
            <p className="mr-top">
              I am a UI developer with over 9 years of experience in the
              industry. I am passionate about learning new trends in the market.
              My work majorly consists of analysis, evaluation and executing the
              design in projects using sound engineering principles and adhering
              to business standards, practices and project requirements. Convert
              and demonstrate new user experience from legacy UI code.
            </p>
          </section>
        </article>
      </article>
    );
}

export default CoverLetter;