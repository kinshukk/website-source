const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/kinshukk/kinshukk.github.io',
  },
  () => {
    console.log('Deployed to Github Pages!')
  }
)

