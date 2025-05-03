import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <img 
            src="/img/astro.png" 
            alt="Astronauta Stellar" 
            className={styles.astroLogo}
          />
          <img 
            src="/img/stellarenespanol3.png" 
            alt="Stellar en español" 
            className={styles.logoHeader}
          />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Cómo empezar ? 💫
          </Link>
        </div>
      </div>
    </header>
  );
}

<script defer src="https://cloud.umami.is/script.js" data-website-id="762dd854-4f57-4375-bdb6-3e1e4d46e644"></script>
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Stellar en Español ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
