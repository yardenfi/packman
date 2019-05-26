[![CircleCI](https://circleci.com/gh/Meir017/node-tgz-downloader/tree/master.svg?style=svg)](https://circleci.com/gh/Meir017/node-tgz-downloader/tree/master)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

# node-tgz-downloader
Downloads all of the tarballs based on one of the following:

- local `package-lock.json` file
- url to a `package-lock.json`
- name of package
- local `package.json` file
- url to a `package.json`
- search keyword

## install

```bash
npm install node-tgz-downloader -g
```

## usage

### From Code:

```js
const downloader = require('node-tgz-downloader');

downloader.downloadFromPackageLock('path/to/package-lock');
```

### From Command Line:

#### package-lock.json

from local file:

```bash
packman npm download package-lock path/to/package-lock.json
```

from url:

```bash
packman npm download package-lock https://raw.githubusercontent.com/Meir017/node-tgz-downloader/master/package-lock.json
```

#### package name

```base
packman npm download package @angular/cli --devDependencies --peerDependencies
```

#### package.json

from local file:

```bash
packman npm download package-json path/to/package.json
```

from url:

```bash
packman npm download package-json https://raw.githubusercontent.com/Meir017/node-tgz-downloader/master/package.json
```

#### search keyword

downloads the packages returned from an npm search query (https://registry.npmjs.org/-/v1/search?)

```base
packman npm download search tgz
```

[npm-image]: https://img.shields.io/npm/v/node-tgz-downloader.svg
[npm-url]: https://npmjs.org/package/node-tgz-downloader
[downloads-image]: https://img.shields.io/npm/dm/node-tgz-downloader.svg
[downloads-url]: https://npmjs.org/package/node-tgz-downloader