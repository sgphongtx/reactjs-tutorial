# Tutorial ReactJS + React Hooks + Redux + Redux Saga

## Cài đặt dependencies cần thiết

```
mkdir reactjs-tutorial
cd reactjs-tutorial
npm init -y
npm install --save react react-dom
```

## Tạo thư mục public và tạo file gốc của project

```
mkdir public
cd public
touch index.html
```

## Thêm vào đó những dòng code đầu tiên index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using webpack 4 and babel 7"
    />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->

    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Tutorial ReactJS + React Hooks + Redux + Redux Saga</title>
    <script
      src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
      async
      defer
    ></script>
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
      rel="stylesheet"
    />
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

## Tạo thư mục src và tạo file index.js và App.js

index.js

```
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

```

App.js

```
import React from "react";

const App = () => {
  return <div>My App</div>;
};

export default App;

```

## Cài đặt và config Webpack

### 1. Cài đặt webpack

```
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

### 2. Tạo file thiết lập và cấu hình webpack.config.js

```
touch webpack.config.js
```

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

```

### 3. Cài đặt babel

```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader --save-dev
```

### 4. Tạo file .babelrc trong thư mục gốc và Config babel

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 5. Biên dịch file sử dụng Webpack. Thêm script start vào file package.json

```
{
  ...
    script: {
      "start": "webpack-dev-server --mode development --open --hot"
      "build": "webpack --mode production"
    }
...
}
```

### 6. Cài đặt và cấu hình prettier

```
npm install --save-dev --save-exact prettier
```

Tạo file .prettierrc.json

```
{
    "trailingComma": "none",
    "tabWidth": 4,
    "singleQuote": true,
    "printWidth": 120
}
```
