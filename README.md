This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Check it out live on https://beginner.recipes.

Some recipes:
- Country loaf (Portuguese): https://beginner.recipes/recipe/1bYA5NIfIFGe9cu6SDX9hucmnpip7AnyVkBdzmJwK_FM/1
- Fried egg (Portuguese): https://beginner.recipes/recipe/1bYA5NIfIFGe9cu6SDX9hucmnpip7AnyVkBdzmJwK_FM/2

The recipes are backed by a Google Spreadsheet. The examples above use [this spreadsheet](https://docs.google.com/spreadsheets/d/1bYA5NIfIFGe9cu6SDX9hucmnpip7AnyVkBdzmJwK_FM/edit?usp=sharing).

You can create your own recipe spreadsheet based on the one above and make the app show its recipes by crafting your URL using the following pattern:

```
https://beginner.recipes/recipe/:spreadsheetId/:sheetId
```

In the examples above, `:spreadsheetId` is `1bYA5NIfIFGe9cu6SDX9hucmnpip7AnyVkBdzmJwK_FM`
and `:sheetId` is `1` and `2`, respectively.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

Storybook is a great tool for developing React components.

Run Storybook and start fiddling with the code.

```bash
yarn storybook
```
