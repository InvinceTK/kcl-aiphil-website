export const siteConfig = {
  name: 'AIΦ',
  fullName: "King's Artificial Intelligence and Philosophy Society",
  tagline: "Thinking about the machines we'll live with.",
  description:
    'AIΦ is a student-led forum at King\'s College London contributing to the fields at the intersection of AI and Philosophy.',

  // TODO: Replace with real membership URL
  membershipUrl: 'TODO:https://kclsu.org/organisations/aiphi',

  socials: {
    // TODO: Replace with real handles
    instagram: 'TODO:https://instagram.com/kcl.aiphi',
    linkedin:  'TODO:https://linkedin.com/company/kcl-aiphi',
    email:     'TODO:aiphi@kcl.ac.uk',
  },

  stats: {
    award:      'KCL Initiative of the Year 2026',
    attendance: '100+',
    programmes: 'Journal & Fellowship',
  },

  fellowship: {
    // 'development' | 'open'
    status: 'development' as 'development' | 'open',
    // TODO: Replace with real interest form URL
    interestUrl: 'TODO:https://forms.google.com/...',
  },

  journal: {
    name: 'Unprompted',
    mark: '[UP]',
    currentVolume: 1,
    currentDate: '11.26',
    // TODO: Replace with real submissions URL
    submissionsUrl: 'TODO:https://forms.google.com/...',
  },

  kclsuLine: 'An official student society of King\'s College London Students\' Union.',
} as const
