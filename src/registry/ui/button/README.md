# Button Component

A customizable button built with **Tamagui** for React Native and Expo. Supports multiple variants, sizes, loading states, and icons.

[Official Tamagui Button Docs](https://tamagui.dev/ui/button)

## Features

- Supports **variants** for different styles
- Supports **sizes** (`sm`, `default`, `lg`)
- **Loading state** with spinner
- **Icons** before or after text
- Fully **customizable** via Tamagui theme tokens

## Install

```bash
curl -o ./src/components/ui/button.tsx \
  https://raw.githubusercontent.com/jrtilak/expo-tamagui-design-system/master/src/registry/ui/button/src/button.tsx

```

## Usage

```tsx
import { Button } from "@/components/ui/button";
import { Home } from "@tamagui/lucide-icons";

// Basic
<Button>Click me</Button>

// With variant and size
<Button variant="destructive" size="lg">Delete</Button>

// Loading state
<Button isLoading>Loading</Button>

// With icon
<Button icon={<Home />}>Home</Button>

// With icon after text
<Button iconAfter={<Home />}>Go to Home</Button>
```
