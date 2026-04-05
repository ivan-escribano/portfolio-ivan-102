const personData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ivan Escribano',
  url: 'https://ivanescribano.com',
  jobTitle: 'AI & Software Engineer',
  description:
    'AI & Software Engineer specializing in integrating AI models into real products, with experience in full-stack development and AI-powered applications.',
  sameAs: [
    'https://www.linkedin.com/in/ivan-escribano-dev/',
    'https://github.com/ivan-escribano',
    'https://x.com/IvanEscribano98',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Large Language Models',
    'Full-stack Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
  ],
};

export const PersonJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
  />
);
