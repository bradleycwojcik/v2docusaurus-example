# v2docusaurus-example

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Purpose

This repo serves to demonstrate issues encountered when including docs in more than one site sidebar object - as first described [here](https://v2.docusaurus.io/feedback/p/allow-a-doc-to-be-in-multiple-sidebars-without-side-effects).

### Use Case

Sometimes it is useful for a particular document to be used or referenced in multiple 'guides' or 'site sections', whether it be for convenient access or logical progression (think of a doc or set of docs that include base instructions that are required for several different workflows).

We clearly do not want to duplicate the markdown file in order to accomplish this, and for our use-case we don't want to just `[link](doc)` to it either. Instead, we would like to simply reference the doc in multiple sidebar objects in `sidebars.js`.

### Issues

Out of the box, docusaurus does allow you to add a doc to multple sidebars, but there is one major side effect we have noted. If a doc IS included in multiple sidebars, it's scope is bound to the one it was referenced in last. That is, when the doc is selected in any sidebar it appears in on the site, the sidebar will switch to the last one that document belongs to in `sidebars.js`.

Expected functionality would be for the actice sidebar context to not switch upon selecting the doc.

### Repro Steps

Example 1 - separate global category used in multiple sidebars:

1. Install and run locally as guided below.
2. Take note of the structure of the `EXAMPLE ONE` section of `sidebars.js`.
3. Navigate to either 'Docs1' or 'Docs2' in the navbar.
4. Open the 'Global' sidebar header and select the containing document.
5. Notice that the document is displayed appropriately, but now the top sidebar reads 'Sidebar3' instead of 'Sidebar1' or 'Sidebar2'.

Example 2 - doc used in multiple sidebars (not contained in global category):

1. Comment out `EXAMPLE ONE` section in `sidebars.js` and uncomment `EXAMPLE TWO` section.
2. Re-run locally.
3. Navigate to either 'Docs1' or 'Docs2' in the navbar.
4. Select the 'Powered by MDX' doc in the sidebar.
5. Notice that the document is displayed appropriately, but now the top sidebar reads 'Sidebar3' instead of 'Sidebar1' or 'Sidebar2'.

## Installation

```bash
yarn
```

OR

```bash
npm install
```

## Local Development

```bash
yarn start
```

OR

```bash
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.
