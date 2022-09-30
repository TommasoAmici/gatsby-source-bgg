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
