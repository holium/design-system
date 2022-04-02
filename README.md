# Holium Design System

A design system built with [styled-components](https://styled-components.com/) and [styled-system](https://styled-system.com/) for all Holium products.

## Getting Started

```zsh
# Install dependencies
yarn

# Run storybook
yarn storybook
```

## Building

```zsh
yarn build
```

## Use yarn link to use design-system in apps.

In the design system repo folder, run the following command: `yarn link`

Then in an app repo, such as `ballot/ui`, run `yarn link "@holium/design-system"`.

### Publishing to Chromatic

When you push to `main`, the design system will build as a Github workflow and update the Chromatic link

- [@holium/design-system Storybook](https://www.chromatic.com/library?appId=6247412e158b48003a2ee65b)

### Future work

- https://github.com/mrmartineau/design-system-utils

## Links

- https://github.com/styled-components/awesome-styled-components
