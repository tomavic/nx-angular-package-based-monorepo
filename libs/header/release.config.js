const appName = 'header';
const appPath = `libs/${appName}`;
const artifactName = appName;
module.exports = {
  name: appName,
  tagFormat: artifactName + '-v${version}',
  pkgRoot: `dist/${appPath}`,
  commitPaths: ['force-release.md', `${appPath}/*`], // should come from dep-graph and angular.json
  assets: [`${appPath}/README.md`, `${appPath}/CHANGELOG.md`],
  plugins: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${appPath}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message:
          `chore(release): 🚀 ${artifactName}` +
          '-v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
