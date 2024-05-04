## [3.0.2](https://github.com/TommasoAmici/gatsby-source-bgg/compare/v3.0.1...v3.0.2) (2024-05-04)


### Bug Fixes

* **deps:** update dependency node-fetch to v2.7.0 ([f004bc7](https://github.com/TommasoAmici/gatsby-source-bgg/commit/f004bc7729672377e966bfa8ba2e12ca31f6fa5b))

## [3.0.1](https://github.com/TommasoAmici/gatsby-source-bgg/compare/v3.0.0...v3.0.1) (2022-12-14)


### Bug Fixes

* **deps:** update gatsby monorepo ([4c2a7e9](https://github.com/TommasoAmici/gatsby-source-bgg/commit/4c2a7e9c395acc7d135157fb98b9639f396cbd29))

## [3.0.0](https://github.com/TommasoAmici/gatsby-source-bgg/compare/v2.0.2...v3.0.0) (2022-11-13)


### ⚠ BREAKING CHANGES

* node 18 is required for gatsby v5

### Bug Fixes

* node 18 is required for gatsby v5 ([6462cd9](https://github.com/TommasoAmici/gatsby-source-bgg/commit/6462cd9953d6506efa296396fc8ce417062ca8a2))

## [2.0.2](https://github.com/TommasoAmici/gatsby-source-bgg/compare/v2.0.1...v2.0.2) (2022-10-01)


### Bug Fixes

* mark package as compatible with Gatsby v3 ([#234](https://github.com/TommasoAmici/gatsby-source-bgg/issues/234)) ([4bbc49e](https://github.com/TommasoAmici/gatsby-source-bgg/commit/4bbc49e75715bb3f047382de845ced09c8c9590b))

## [2.0.1](https://github.com/TommasoAmici/gatsby-source-bgg/compare/v2.0.0...v2.0.1) (2022-09-30)


### Bug Fixes

* expanded list of ignored files in .npmignore ([8275e71](https://github.com/TommasoAmici/gatsby-source-bgg/commit/8275e71a49bd91084fe3afe5d999bd5a24063ac9))

## [2.0.0](https://github.com/TommasoAmici/gatsby-source-bgg/compare/v1.1.1...v2.0.0) (2022-09-30)


### ⚠ BREAKING CHANGES

* updated plugin for gatsby 4

### Features

* updated plugin for gatsby 4 ([fc02a55](https://github.com/TommasoAmici/gatsby-source-bgg/commit/fc02a5547ad2735f29028772a80b678202d0d508))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2021-10-24

### Fixed

- removed `gatsby` from direct dependencies

## [1.1.0] - 2021-10-24

### Added

- added support for Gatsby v4
- report number of nodes created and time taken when building

## [1.0.9] - 2021-06-28

### Fixed

- API may return a single object and not an array for suggested number of players poll ([#15](https://github.com/TommasoAmici/gatsby-source-bgg/issues/15))

## [1.0.8] - 2021-05-29

### Fixed

- Subsequent builds would fail unless the cache was cleaned every time between them ([#3](https://github.com/TommasoAmici/gatsby-source-bgg/issues/3))

## [1.0.7] - 2021-05-28

### Changed

- node IDs are now generated from games IDs instead of their name

## [1.0.6] - 2021-05-25

### Changed

- `&amp;#10;` in descriptions are now replaced with newlines

### Fixed

- An error would occur if only one item was in a collection

## [1.0.5] - 2021-05-24

### Changed

- Removed `gatsby-source-filesystem` as a direct dependency, it is now a peer dependency

## [1.0.2] - 2021-05-24

### Fixed

- postinstall script to set up husky git hooks would run and fail when installing from npm registry

## [1.0.0] - 2021-05-24

### Added

- Can import any user board games collection with detailed information for every game
