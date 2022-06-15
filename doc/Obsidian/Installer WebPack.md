```bash
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

**webpack.config.js**

```js
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

## devServer

```js
...
module.exports = {
	...
	devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true // 
    }
};
```

package.json

```json
{
	...
    "scripts": {
	    ...
        "start": "npx webpack serve",
        "build": "npx webpack"
    }
}
```