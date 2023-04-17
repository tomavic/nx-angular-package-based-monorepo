module.exports = {
  '**/*.{ts,js,json,md,html,css,scss}': [
    'npx nx affected -t lint --uncommitted --fix true',
    'npx nx format:write --uncommitted',
  ],
};
