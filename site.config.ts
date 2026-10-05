export const siteConfig = {
  name: 'AIΦ',
  fullName: "King's Artificial Intelligence and Philosophy Society",
  tagline: "Thinking about the machines we'll live with.",
  description:
    'AIΦ is a student-led forum at King\'s College London at the intersection of artificial intelligence and philosophy. We question how we should think about this technology, what it means for our values, and how we ought to use it.',

  membershipUrl: 'https://www.kclsu.org/groups/activities/join/group/29593/',

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
    interestUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdX36A7gnQWqGGozze4i8FThTRTbdeKw9T3sF_N0LDR1qPUXg/viewform',
  },

  journal: {
    name: 'Unprompted',
    mark: '[UP]',
    currentVolume: 1,
    currentDate: '10.26',
    // TODO: Replace with real submissions URL
    submissionsUrl: 'TODO:https://forms.google.com/...',
  },

  kclsuLine: 'An official student society of King\'s College London Students\' Union.',
} as const
