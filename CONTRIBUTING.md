# Development

## Install all the dependencies

```sh
pnpm install
```

When running this command, a pre-commit git hook will be locally installed with
[husky](https://github.com/typicode/husky) and it will run
[lint-staged](https://github.com/okonet/lint-staged) before every commit.

See `"lint-staged"` in [package.json](./package.json) for more information.

## Build the project

```sh
pnpm build
```

## Link the package to test locally

```sh
pnpm link
```

## Other commands

```sh
# run the entire test suite
pnpm test
# format the source code
pnpm format
```
