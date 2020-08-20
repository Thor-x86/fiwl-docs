import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={"Welcome!"}
      description="FIWL (Flexible Interactive Web Layout) extends XML standard, mainly purposed for arranging web app layout as efficient as possible."
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.heroLogo}
            alt="FIWL Logo"
            src={useBaseUrl("img/logo.svg")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/intro/what_is_fiwl")}
            >
              Let's peek Pre-Alpha!
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </Layout>
  );
}

export default Home;
