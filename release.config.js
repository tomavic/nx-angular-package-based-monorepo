module.exports = {
  branches: [
    { name: 'main' },
    { name: 'feat/sematic-release-plus' },
    { name: 'pre/rc', channel: 'pre/rc', prerelease: 'rc' },
    { name: 'beta', channel: 'beta', prerelease: true },
    { name: 'next', channel: 'next' },
  ],
  plugins: [
    /**
     * 1. COMMIT ANALYZER
     */
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        releaseRules: [
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'ci', release: 'patch' },
          { type: 'chore', release: 'patch' },
        ],
      },
    ],
    /**
     * 2. Release notes-generator
     */
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
    /**
     * 3. Github
     */
    [
      '@semantic-release/github',
      {
        assets: ['dist/assets/**'],
      },
    ],
  ],
};
