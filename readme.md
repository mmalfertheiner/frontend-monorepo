Frontend monorepo
=================

## Motivation

This repository is an example on how to create a mono repository, with a shared design system library based on React and TailwindCSS.

In order to support fast development in the early stage of a new product, the design system is not published to npm, but only linked with yarn workspaces. To further support a fast development experience, the UI package is also watched during development of one of the frontends. The current example shows how it could work with 2 independent NextJS apps. As they are independent from each other it would be possible to have also a Gatsby based or CRA client app in the repo.

## How to run it?

```
yarn install
yarn dev:front-office
```


## Structure

```
packages
    |__ back-office
    |__ front-office
    |__ ui
```

### Back-office & Front-office

Back-office and front-office are two sample applications based on NextJS. They both make use of the shared components from the UI package.

They have a dependency on TailwindCSS and can influence the theme applied to the application. Using TailwindCSS also in the UI library it is easy to change colors, margins, font-sizes, ... per project, but still reuse the components.

The PurgeCSS configuration will make sure that unnecessary styles created by Tailwind will be removed in production.

### UI package
