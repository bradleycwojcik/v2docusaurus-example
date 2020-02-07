/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


// EXAMPLE ONE

const globalDocs = [
  'mdx',
]

const sidebar1 = {
  Sidebar1: [
    'doc1',
  ],
  Global: globalDocs,
}

const sidebar2 = {
  Sidebar2: [
    'doc2',
  ],
  Global: globalDocs,
}

const sidebar3 = {
  Sidebar3: [
    'doc3',
  ],
  Global: globalDocs,
}

module.exports = {
  sb1: sidebar1,
  sb2: sidebar2,
  sb3: sidebar3,
};


// EXAMPLE TWO

// const sidebar1 = {
//   Sidebar1: [
//     'doc1',
//     'mdx',
//   ],
// }

// const sidebar2 = {
//   Sidebar2: [
//     'doc2',
//     'mdx',
//   ],
// }

// const sidebar3 = {
//   Sidebar3: [
//     'doc3',
//     'mdx',
//   ],
// }

// module.exports = {
//   sb1: sidebar1,
//   sb2: sidebar2,
//   sb3: sidebar3,
// };
