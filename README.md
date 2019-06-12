# Java Collection for Node.js

为了方便在工作中将`JAVA`系统迁移为`Nodejs`而编写的库

[![node][NPM_URL]][NPM_HREF]
[![Travis][TRAVIS_URL]][TRAVIS_HREF]
[![Coveralls][COVERALLS_URL]][COVERALLS_HREF]
[![Known Vulnerabilities][SNYK_URL]][SNYK_HREF]
[![David][DAVID_URL]][DAVID_HREF]
[![Author][AUTHOR_URL]][AUTHOR_HREF]
[![MIT-License][LICENSE_URL]][LICENSE_HREF]
[![996ICU-License][LICENSE_996_URL]][LICENSE_996_HREF]

[NPM_URL]: https://img.shields.io/node/v/java-collection.svg?style=flat-square&maxAge=600
[NPM_HREF]: https://www.npmjs.com/package/java-collection
[TRAVIS_URL]: https://img.shields.io/travis/Arylo/java-collection/master.svg?style=flat-square&logo=travis&maxAge=600
[TRAVIS_HREF]: https://travis-ci.org/Arylo/java-collection
[COVERALLS_URL]: https://img.shields.io/coveralls/github/Arylo/java-collection/master.svg?style=flat-square&maxAge=600
[COVERALLS_HREF]: https://coveralls.io/github/Arylo/java-collection
[SNYK_URL]: https://snyk.io/test/github/Arylo/java-collection/badge.svg?style=flat-square&maxAge=600
[SNYK_HREF]: https://snyk.io/test/github/Arylo/java-collection
[DAVID_URL]: https://img.shields.io/david/Arylo/java-collection.svg?style=flat-square&maxAge=600
[DAVID_HREF]: https://github.com/Arylo/java-collection
[AUTHOR_URL]: https://img.shields.io/badge/Author-AryloYeung-blue.svg?style=flat-square&maxAge=7200
[AUTHOR_HREF]: https://github.com/arylo
[LICENSE_URL]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&maxAge=7200
[LICENSE_HREF]: https://opensource.org/licenses/MIT
[LICENSE_996_URL]: https://img.shields.io/badge/license-NPL%20(The%20996%20Prohibited%20License)-blue.svg?style=flat-square&maxAge=7200
[LICENSE_996_HREF]: https://github.com/996icu/996.ICU

## Installation

```bash
npm install --save java-collection
```

## Supported

```
|
|- java.lang.Cloneable
|- java.io.Serializable
|- java.util.RandomAccess
|- java.util.Iterator<E>
|- java.util.function.Consumer<E>
|- java.lang.Iterable<E>
|    |- java.util.Collection<E>
|    |    |- java.util.List<E>
|- java.util.AbstractCollection<E>
     |- java.util.AbstractList<E>
          |- java.util.ArrayList<E>
          |- java.util.Vector<E>
```
