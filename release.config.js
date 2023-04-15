module.exports = {
  plugins: [
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        preset: 'conventionalcommits',
        header: 'Books Tracker CHANGELOG',
        presetConfig: {
          types: [
            {
              type: 'breaking',
              section: '❗ Breaking ❗',
              hidden: false,
            },
            { type: 'feat', section: '✨ Feature', hidden: false },
            { type: 'fix', section: '🐛 Bugfix', hidden: false },
            { type: 'docs', section: '📝  Documentation', hidden: false },
            {
              type: 'chore',
              section: '🔨  Misc.',
              hidden: false,
            },
            {
              type: 'ci',
              section: '📦️ Build and CI',
              hidden: false,
            },
            {
              type: 'refactor',
              section: '⚡️ Code Performance',
              hidden: false,
            },
            {
              type: 'test',
              section: '🧪 Code Test',
              hidden: false,
            },
            {
              type: 'style',
              section: '💄 Design',
              hidden: false,
            },
            { type: 'hotfix', section: '🔥 Hotfix 🔥', hidden: false },
          ],
        },
      },
    ],
  ],
};
