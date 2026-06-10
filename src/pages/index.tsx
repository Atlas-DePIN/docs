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
    <header className={styles.heroBanner}>
      <div className={styles.heroBg} />
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Documentation</p>
          <Heading as="h1" className={styles.heroTitle}>
            Atlas Protocol
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Comprehensive documentation for the Atlas Protocol ecosystem —
            protocol architecture, the atlas.js TypeScript SDK, storage
            providers, network queries, and API reference.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimary)}
              to="/docs/atlas-js/intro">
              Get Started
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondary)}
              to="/docs/protocol/architecture">
              Protocol Docs
            </Link>
            <Link
              className={styles.ctaExternal}
              href="https://atlasprotocol.cloud"
              target="_blank"
              rel="noopener">
              atlasprotocol.cloud ↗
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
              <span className={styles.codeDot} style={{background: '#ff5f56'}} />
              <span className={styles.codeDot} style={{background: '#ffbd2e'}} />
              <span className={styles.codeDot} style={{background: '#27c93f'}} />
              <span className={styles.codeBlockTitle}>atlas-client.ts</span>
            </div>
            <pre className={styles.codeBlockBody}>
              <code>{`import { AtlasClient, WalletType } from 'atlas.js';

const client = await AtlasClient.new({
  chainId: 'atlas-1',
  rpcEndpoint: 'https://rpc.atlasprotocol.cloud',
});

await client.connectWallet(WalletType.KEPLR);

const stats = await client.query.storageStats();
console.log(stats);`}</code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for the Atlas Protocol ecosystem — protocol architecture, atlas.js SDK, storage providers, network queries, and API reference.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
