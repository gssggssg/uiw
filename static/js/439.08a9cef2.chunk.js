(window.webpackJsonpuiw=window.webpackJsonpuiw||[]).push([[439],{1053:function(t,n,e){"use strict";e.r(n),n.default='\u5728 KKT \u4e2d\u4f7f\u7528\n===\n\n[`kkt@5x`](https://github.com/kktjs/kkt-next) \u65b0\u7684\u7248\u672c\uff0c\u662f\u57fa\u4e8e [create-react-app@3x](https://github.com/facebook/create-react-app) \u8f7b\u5ea6\u7ef4\u62a4\u57fa\u4e8e `TypeScript` \u91cd\u5199\u7684\u7248\u672c\uff0c\u6b64\u5de5\u5177\u53ef\u4ee5\u5728\u4e0d `eject` \u4e5f\u4e0d\u521b\u5efa\u989d\u5916 react-scripts \u7684\u60c5\u51b5\u4e0b\u4fee\u6539 [create-react-app@3x](https://github.com/facebook/create-react-app) \u5185\u7f6e\u7684 webpack \u914d\u7f6e\uff0c\u7136\u540e\u4f60\u5c06\u62e5\u6709 [create-react-app](https://github.com/facebook/create-react-app) \u7684\u4e00\u5207\u7279\u6027\uff0c\u4e14\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u9700\u8981\u53bb\u914d\u7f6e `webpack` \u7684 `plugins`, `loaders` \u7b49\uff0c\u672a\u6765\u5c06\u5728 `kkt` \u4e2d\u96c6\u6210 [@kktjs/kkt-ssr](https://github.com/kktjs/kkt-ssr) \u670d\u52a1\u7aef\u6e32\u67d3\u3002\n\n\u8981\u5f00\u59cb\u4f7f\u7528 [uiw](https://github.com/uiwjs/uiw) \u548c [kkt](https://github.com/kktjs/kkt-next)\uff0c\u8bf7\u6309\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c\uff1a\n\n1. \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Node LTS\u3002 [\u8bf7\u53c2\u9605\u6b64\u5904\u83b7\u53d6\u8bf4\u660e](https://docs.npmjs.com/getting-started/installing-node)\n2. \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u65b0\u7684 `kkt` \u9879\u76ee\uff1a\n\n\u4f60\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u521d\u59cb\u5316\u4e00\u4e2a\u5de5\u7a0b\uff0c\u76f4\u63a5\u5f00\u59cb\u5f00\u53d1\n\n```bash\nnpx create-kkt my-app -e uiw\n# or npm\nnpm create kkt my-app -e uiw\n# or yarn\nyarn create kkt my-app -e uiw\n```\n\n\u6ce8\u610f [**npx**](https://github.com/npm/npm/releases/tag/v5.2.0) \u547d\u4ee4\u53ea\u5728 npm 5.2+ \u6216\u66f4\u9ad8\u7248\u672c\u4e2d\u652f\u6301\u3002\n\n\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 [kkt](https://github.com/kktjs/kkt-next) \u5de5\u5177\u901a\u8fc7\u4e0b\u9762\u6b65\u9aa4\uff0c\u4e00\u6b65\u4e00\u6b65\u7684\u521b\u5efa\u4e00\u4e2a [kkt](https://github.com/kktjs/kkt-next) \u5de5\u7a0b\n\n```bash\nnpx create-kkt my-app\n```\n\n\u6b64\u65f6\uff0c\u60a8\u5c06\u80fd\u591f\u5728\u672c\u5730\u542f\u52a8\u9ed8\u8ba4 `kkt` \u5e94\u7528\u7a0b\u5e8f\uff1a\n\n```bash\ncd my-app\nnpm start\n```\n\n\u6709\u5173 `KKT` \u7684\u66f4\u591a\u4fe1\u606f\uff0c[\u8bf7\u53c2\u9605\u81ea\u8ff0\u6587\u4ef6](https://github.com/kktjs/kkt-next)\u3002\n\n3. \u5b89\u88c5 [uiw](https://github.com/uiwjs/uiw) \u5305\uff1a\n\n```bash\nnpm i uiw\n```\n\n4. \u6253\u5f00 `src/App.js` \u5e76\u5c06\u5185\u5bb9\u66ff\u6362\u4e3a\uff1a\n\n```jsx\nimport React, { Component } from \'react\';\nimport { Button } from \'uiw\';\n\nexport default class App extends Component {\n  render() {\n    return <Button size="small" type="primary">Click Me</Button>;\n  }\n}\n```\n\n### \u4ece create-react-app \u8fc1\u79fb\u5230 kkt \u4e2d\n\n```diff\n{\n  "name": "my-app",\n  "version": "0.1.0",\n  "private": true,\n+  "devDependencies": {\n+    "kkt": "5.0.4"\n+  },\n-  "dependencies": {\n-    "@testing-library/jest-dom": "^4.2.4",\n-    "@testing-library/react": "^9.3.2",\n-    "@testing-library/user-event": "^7.1.2",\n-    "react": "^16.12.0",\n-    "react-dom": "^16.12.0",\n-    "react-scripts": "3.3.0"\n-  },\n+  "dependencies": {\n+    "react": "^16.12.0",\n+    "react-dom": "^16.12.0",\n+    "uiw": "^3.10.4"\n+  },\n  "scripts": {\n-    "start": "react-scripts start",\n+    "start": "kkt start",\n-    "build": "react-scripts build",\n+    "build": "kkt build",\n-    "test": "react-scripts test",\n+    "test": "kkt test --env=jsdom",\n+    "test:coverage": "kkt test --env=jsdom --coverage"\n-    "eject": "react-scripts eject"\n  },\n-  "eslintConfig": {\n-    "extends": "react-app"\n-  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n}\n```'}}]);