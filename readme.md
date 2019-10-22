Frontend monorepo
=================

### Motivation

This repository is an example on how to create a mono repository, with a shared design system library based on React and TailwindCSS.

In order to support fast development in the early stage of a new product, the design system is not published to npm, but only linked with yarn workspaces. To further support a fast development experience, the UI package is also watched during development of one of the frontends. The current example shows how it could work with 2 independent NextJS apps. As they are independent from each other it would be possible to have also a Gatsby based or CRA client app in the repo.
