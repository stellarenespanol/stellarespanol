import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Entorno de trabajo',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aprende a configurar tu entorno de trabajo en cualquier sistema operativo
      </>
    ),
  },
  {
    title: 'Conotratos inteligentes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aprende a usar Soroban, el lenguaje para programar contratos inteligentes en 
          <code>Stellar</code> 
      </>
    ),
  },
  {
    title: 'Dapps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Crea aplicaciones web 3 con soroban  y Front end 
      </>
    ),
  },
];

<script defer src="https://cloud.umami.is/script.js" data-website-id="762dd854-4f57-4375-bdb6-3e1e4d46e644"></script>
function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
