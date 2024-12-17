# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```



Note that 
   - Vitest provides us with test suites, test cases, and test runners, while React Testing Library enables us to test our components the way a user interacts with our application.
   


```js
import { render, fireEvent, screen } from "@testing-library/react";

import Accordion from "./Accordion";

describe("Accordion component", () => {
  it("renders with title", () => {
    // Given
    const title = "Fruits";
    const accordionElement = (
      <Accordion title={title}>
        <div></div>
      </Accordion>
    );

    // When
    render(accordionElement);

    // Then
    const accordionTitle = screen.getByText(new RegExp(title, "i"));
    expect(accordionTitle).toBeDefined();
  });
})

```



I use the Given-When-Then pattern to write structured and readable tests. Let's see what happens here in steps:

We store in variables the an <Accordion /> element as well as the title we want to pass into it.

We then render the accordion in the testing environment. We use the render function provided by the @testing-library/react.

We now want to access the element that holds the component's title. To do that we call the screen function which gives us access to querying the virtual document body. We then attach the .getByText() method passing the title we created the accordion with as an argument.

Lastly, we want to make sure that the title is defined, which means that is present in the DOM. The expect is an assertion function that takes the accordionTitle value to be tested as an argument. The toBeDefined is the matcher that checks if the provided value is indeed defined.