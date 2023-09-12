# Add vitest

* Run `npm install -D vitest` to install Vitest.

* Update `vite.config.ts` to add Vitest plugin:

```ts
/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
    },
});
```

* Run `npm i -D jsdom @testing-library/react` to install Jsdom and React Testing Library.

* Add `"test": "vitest"` to `package.json`:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

* Add first initial test:

```tsx
import {describe, it} from "vitest";
import {render} from "@testing-library/react";
import App from "./App.tsx";

describe("App component", () => {
    it("should render without crashing", () => {
        render(<App/>);
    });
});
```

* Run `npm test` to run tests.