# Changelog

## v1.0

### BREAKING CHANGE

The function name is now `bulma` instead of `bc`

### Why this change

The name `bulma` is more semantic and readable than `bc`, which follows this package's Guiding
prinicples more closely. In addition, this commit adds nearly 100% code coverage, a Travis CI,
Semantic versioning and Standardized Git commit messages with Commitizen.

### Other minor updates to configuration and documentation

- docs(READE.md): Add description for `raw`

- update the path to the made_with_bulma.png logo

- docs(README.md, .travix.yml): Move logo, update Travis build version

- move logo to bottom of README.md for better readability, remove unused .nvm file and add latest node
version in .travis.yml file

- fix(.travis.yml): Remove codecov script

- switch to coveralls, now codecov script is no longer needed

- ci(.travis.yml, package.json): Update Travis build scripts

- change to yarn build script to run both tests and linting and update after success step to use
semantic-release

- ci(.travis.yml): Remove deploy config

- ci(.travis.yml, package.json): Add NPM API key

- now package will be published automatically on passing build with semantic-release

- ci(.travis.yml): Remove deploy: {tags: true} line

If you still prefer to use the `bc` function name for any reason, simply import it like so:

```javascript
import bulma as bc from 'bulma-classnames'
```

## v 0.0.1 Beta

Beta release. Offers same exact functionality as v1.0.0, but with the function name of `bc` instead of `bulma`.