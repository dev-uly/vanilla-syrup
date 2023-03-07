# vanilla-syrup 😋

Add a responsive flavor to your [vanilla-extract](https://vanilla-extract.style/) the easy way. This is a responsive wrapper for the [style](https://vanilla-extract.style/documentation/api/style/) API.

🧪 Experimental
🚧 WIP

---

## Requirements

Make sure that you have already [setup vanilla-extract](https://vanilla-extract.style/documentation/getting-started) in your project.

---

## Installation

```
npm i vanilla-syrup
```

---

## Setup

Create a **_vanilla-syrup.config.ts_** in the root folder of your project.

**vanilla-syrup.config.ts**:

```
import { createSyrup } from "vanilla-syrup";

export const { style } = createSyrup({
  breakpoints: {
    xs: "30rem",
    sm: "48rem",
    md: "62rem",
    lg: "80rem",
    xl: "96rem",
  },
  mobileFirst: true,
  mediaType: "all",
});

```

---

## Usage

**src/components/Button/button.css.ts**:

```
import { style } from "../../../vanilla-syrup.config";

export const button = style({
  base: {
    backgroundColor: "red",
  },
  xs: {
    backgroundColor: "orange",
  },
  sm: {
    backgroundColor: "yellow",
  },
  md: {
    backgroundColor: "green",
  },
  lg: {
    backgroundColor: "blue",
  },
  xl: {
    backgroundColor: "violet",
  },
});
```

Note: The `base` parameter is required.

**src/components/Button/Button.tsx**:

```
import { button } from "./button.css";

export const Button = ({
  children,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button className={button} {...props}>
      {children}
    </button>
  );
};

```

---

## S/O to these awesome libraries

- [vanilla-extract](https://vanilla-extract.style/)
- [Stitches](https://stitches.dev/)

---

## License

MIT © Ulyses Edcel C. Adrales
