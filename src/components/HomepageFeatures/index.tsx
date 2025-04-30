import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "🛠 Contratos Inteligentes y Entorno de Trabajo",
    Svg: require("@site/static/img/tres.svg").default,
    description: (
      <>
        Aprende a desarrollar contratos inteligentes con Soroban, la herramienta
        que permite crear soluciones Web3 sobre la red Stellar utilizando el
        lenguaje Rust. Te guiamos paso a paso para que configures tu entorno de
        desarrollo de forma sencilla en cualquier sistema operativo (Linux, Mac
        o Windows).
       
      </>
    ),
  },
  {
    title: "🌐 DApps – Aplicaciones Descentralizadas",
    Svg: require("@site/static/img/dos.svg").default,
    description: (
      <>
        Lleva tus contratos inteligentes al siguiente nivel integrándolos en una
        interfaz web amigable y funcional. Aprende a desarrollar DApps completas
        utilizando frameworks modernos de frontend como React o Next.js, junto
        con herramientas clave para la interacción con Soroban y la blockchain
        de Stellar.
      </>
    ),
  },
];

<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="762dd854-4f57-4375-bdb6-3e1e4d46e644"
></script>;
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
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
      <div className={styles.featuresContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
