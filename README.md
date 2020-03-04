Semantic Release preset
=======================

[![npm (scoped)](https://img.shields.io/npm/v/@kocal/semantic-release-preset.svg)](https://www.npmjs.com/package/@kocal/semantic-release-preset)
![Node CI](https://github.com/Kocal/semantic-release-preset/workflows/Node%20CI/badge.svg)

## Features

 - Analyze commits by using `angular` preset, commits `build(deps)` are seen as patch 
 - Generate a changelog by using `angular` preset, it will add an entry for every commit types (feat, fix, perf, revert, docs, refactor, build)
 - Publish the release on GitHub, with a tag and a changelog
 - Publish the release on NPM, with a tag

## Installation

```bash
$ yarn add -D semantic-release @kocal/semantic-release-preset
```

## Usage

In Semantic Release configuration file:

```json
{
  "extends": "@kocal/semantic-release-preset"
}
```
