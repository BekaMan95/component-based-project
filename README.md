# Creative Dashboard App

---

## shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

---

# Group Members
| **Name**           | **ID** |
|-------------------|----------|
| Nehemiah Aklil    | UGR/22581/13 |
| Roza mekete       | UGR/23406/13 |
| Gezahegn Gulilat  | UGR/22707/13 |
| Ameha Seyoum      | UGR/22559/13 |
| Bereket Sahle     | UGR/22992/13 |

---