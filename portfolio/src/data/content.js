// All site copy lives here. Edit text in one place; components only render it.

export const EMAIL = 'emil.ivanov207@gmail.com'
export const NAME = 'Emil Ivanov'
export const TIME_ZONE = 'America/Toronto'

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/emil26ivanov' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/emil-ivanov-8879b7414' },
  { label: 'Instagram', href: 'https://www.instagram.com/boo_gah_ti/' },
]

const PROJECTS = [
  //{ id: 'project-1', name: '[Project name]', year: '[Year]', href: '#' },
]

const en = {
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  menu: { open: 'Menu', close: 'Close' },
  hero: {
    headline: ['I build', 'websites for', 'people with ideas.'],
    intro:
      "I'm Emil, a developer based in Montréal. I design and code clean, fast websites for small businesses, freelancers and anyone starting something new.",
    primaryCta: 'Start a project',
    secondaryCta: 'See work',
    meta: {
      basedIn: 'Based in',
      location: 'Montréal, QC',
      localTime: 'Local time',
      currently: 'Currently',
      status: 'Taking on freelance work',
    },
  },
  work: {
    title: 'Selected work',
    hint: 'Hover a project to preview',
    empty: {
      title: 'Projects coming soon.',
      text: "I'm working on them right now. Come back later to see them.",
      cta: 'Or start one with me',
    },
    projectTypes: [
      '[Type — e.g. Website]',
      '[Type — e.g. Web app]',
      '[Type — e.g. Landing page]',
      '[Type — e.g. Redesign]',
    ],
  },
  services: {
    label: 'What I do',
    items: [
      {
        title: 'Websites',
        description:
          'A full site for your business, designed and coded from scratch. Fast, mobile-first and easy to update.',
      },
      {
        title: 'Redesigns',
        description:
          'Your site works but looks dated. I rebuild it so it matches how good your business actually is.',
      },
      {
        title: 'Landing pages',
        description:
          'One focused page for a launch, an event or a product. Built to get people to click the button.',
      },
    ],
  },
  about: {
    label: 'About',
    photoAlt: 'Portrait of Emil',
    statement:
      'Right now I build websites. Next comes branding, marketing and, one day, a studio of my own.',
    facts: [
      { label: 'Based in', value: 'Montréal, QC' },
      { label: 'Approach', value: 'No templates. Every site is one of a kind.' },
      { label: 'Every project', value: 'Design, code, launch & support' },
    ],
  },
  contact: {
    label: 'Contact',
    headline: 'Got a project?',
  },
  footer: {
    credit: 'Designed and built by me',
    backToTop: 'Back to top',
    backToTopShort: 'Top',
  },
}

const fr = {
  nav: [
    { label: 'Projets', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  menu: { open: 'Menu', close: 'Fermer' },
  hero: {
    headline: ['Je crée des', 'sites pour ceux', 'qui ont des idées.'],
    intro:
      'Je suis Emil, développeur à Montréal. Je conçois et code des sites clairs et rapides pour les petites entreprises, les travailleurs autonomes et ceux qui lancent un projet.',
    primaryCta: 'Démarrer un projet',
    secondaryCta: 'Voir les projets',
    meta: {
      basedIn: 'Basé à',
      location: 'Montréal, QC',
      localTime: 'Heure locale',
      currently: 'Actuellement',
      status: 'Disponible pour des contrats',
    },
  },
  work: {
    title: 'Projets choisis',
    hint: 'Survolez un projet pour l’aperçu',
    empty: {
      title: 'Projets à venir.',
      text: 'J’y travaille en ce moment. Revenez bientôt pour les découvrir.',
      cta: 'Ou lancez-en un avec moi',
    },
    projectTypes: [
      '[Type — ex. Site web]',
      '[Type — ex. Application web]',
      '[Type — ex. Page d’atterrissage]',
      '[Type — ex. Refonte]',
    ],
  },
  services: {
    label: 'Ce que je fais',
    items: [
      {
        title: 'Sites web',
        description:
          'Un site complet pour votre entreprise, conçu et codé sur mesure. Rapide, pensé mobile d’abord et facile à mettre à jour.',
      },
      {
        title: 'Refontes',
        description:
          'Votre site fonctionne, mais il a vieilli. Je le reconstruis pour qu’il soit à la hauteur de votre entreprise.',
      },
      {
        title: 'Pages d’atterrissage',
        description:
          'Une seule page ciblée pour un lancement, un événement ou un produit. Conçue pour qu’on clique sur le bouton.',
      },
    ],
  },
  about: {
    label: 'À propos',
    photoAlt: 'Portrait d’Emil',
    statement:
      'Pour l’instant, je crée des sites web. Ensuite viendront l’image de marque, le marketing et, un jour, mon propre studio.',
    facts: [
      { label: 'Basé à', value: 'Montréal, QC' },
      { label: 'Approche', value: 'Aucun gabarit. Chaque site est unique.' },
      { label: 'Chaque projet', value: 'Design, code, lancement et soutien' },
    ],
  },
  contact: {
    label: 'Contact',
    headline: 'Un projet en tête?',
  },
  footer: {
    credit: 'Conçu et codé par moi',
    backToTop: 'Retour en haut',
    backToTopShort: 'Haut',
  },
}

export const CONTENT = { en, fr }
export const LANGUAGES = ['en', 'fr']

export function getProjects(lang) {
  return PROJECTS.map((project, index) => ({
    ...project,
    type: CONTENT[lang].work.projectTypes[index],
  }))
}
