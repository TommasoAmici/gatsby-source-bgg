# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- `&amp;#10;` in descriptions are now replaced with newlines

### Fixed

- An error would occur if only one item was in a collection

## [1.0.5] - 2020-05-24

### Changed

- Removed `gatsby-source-filesystem` as a direct dependency, it is now a peer dependency

## [1.0.2] - 2020-05-24

### Fixed

- postinstall script to set up husky git hooks would run and fail when installing from npm registry

## [1.0.0] - 2020-05-24

### Added

- Can import any user board games collection with detailed information for every game
