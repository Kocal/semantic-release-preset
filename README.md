Semantic Release preset
=======================

[![npm (scoped)](https://img.shields.io/npm/v/@yproximite/semantic-release-preset.svg)](https://www.npmjs.com/package/@yproximite/semantic-release-preset)
[![Build Status](https://travis-ci.com/Yproximite/semantic-release-preset.svg?token=pNBs2oaRpfxdyhqWf28h&branch=master)](https://travis-ci.com/Yproximite/semantic-release-preset)

## Features

 - Analyze commits by using `angular` preset, commits `build(deps)` are seen as patch 
 - Generate a changelog by using `angular` preset, it will add an entry for every commit types (feat, fix, perf, revert, docs, style, refactor, test, build, ci)
 - Publish the release on GitHub, with a tag and a changelog
 - Publish the release on NPM, with a tag

## Installation

```bash
$ yarn add -D @yproximite/semantic-release-preset 
```

**Note:** semantic-release should be installed too.

## Usage

In Semantic Release configuration file:

```json
{
  "extends": "@yproximite/semantic-release-preset"
}
```
