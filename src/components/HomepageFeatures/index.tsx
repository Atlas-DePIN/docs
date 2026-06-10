import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type DocSection = {
  title: string;
  icon: string;
  description: ReactNode;
  linkTo: string;
};

const docSections: DocSection[] = [
  {
    title: 'Protocol Architecture',
    icon: 'network',
    description: (
      <>
        Design and architecture of the Atlas Protocol blockchain — consensus,
        network topology, storage layer, and cryptographic proofs.
      </>
    ),
    linkTo: '/docs/protocol/architecture',
  },
  {
    title: 'TypeScript SDK',
    icon: 'code',
    description: (
      <>
        Build with atlas.js: wallet management, transaction signing,
        storage queries, and event-driven integration patterns.
      </>
    ),
    linkTo: '/docs/atlas-js/intro',
  },
  {
    title: 'API Reference',
    icon: 'book',
    description: (
      <>
        Complete type documentation for all classes, interfaces,
        enumerations, and methods in the atlas.js SDK.
      </>
    ),
    linkTo: '/docs/api',
  },
  {
    title: 'Storage Providers',
    icon: 'server',
    description: (
      <>
        Run a storage node on the Atlas network — provider onboarding,
        drive management, replication, and serving storage requests.
      </>
    ),
    linkTo: '/docs/atlas-js/storage-handler',
  },
  {
    title: 'Network & RPC',
    icon: 'globe',
    description: (
      <>
        Atlas Protocol RPC endpoints, chain queries, network statistics,
        and how to interact directly with the blockchain.
      </>
    ),
    linkTo: '/docs/atlas-js/atlas-client',
  },
  {
    title: 'Getting Started',
    icon: 'compass',
    description: (
      <>
        Quickstart guides for developers, node operators, and anyone
        building on the Atlas Protocol ecosystem.
      </>
    ),
    linkTo: '/docs/atlas-js/getting-started',
  },
];

function Section({title, icon, description, linkTo}: DocSection) {
  return (
    <div className={clsx('col col--4', styles.sectionCol)}>
      <Link to={linkTo} className={styles.sectionCard}>
        <div className={styles.sectionIcon}>
          <SectionIcon name={icon} />
        </div>
        <Heading as="h3" className={styles.sectionTitle}>{title}</Heading>
        <p className={styles.sectionDesc}>{description}</p>
      </Link>
    </div>
  );
}

function SectionIcon({name}: {name: string}) {
  switch (name) {
    case 'network':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'code':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'book':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      );
    case 'server':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 'globe':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'compass':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Docs</p>
          <Heading as="h2">Everything Atlas Protocol</Heading>
          <p className={styles.sectionSubtitle}>
            Explore the full documentation for the Atlas Protocol ecosystem.
          </p>
        </div>
        <div className="row">
          {docSections.map((props, idx) => (
            <Section key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
