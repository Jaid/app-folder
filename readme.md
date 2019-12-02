# app-folder


Returns a directory based on specified app name and ensures its existence.

## Installation
<a href='https://npmjs.com/package/app-folder'><img alt='npm logo' src='https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png' height=16/></a>
```bash
npm install --save app-folder@^
```
<a href='https://yarnpkg.com/package/app-folder'><img alt='Yarn logo' src='https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png' height=24/></a>
```bash
yarn add app-folder@^
```


## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/app-folder@1.0.1");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof app-folder.default
```

## Documentation
Returns a directory based on specified app name and ensures its existence

**Kind**: Exported function  
**Returns**: <code>string</code> - Full path of app folder  

| Param | Type | Description |
| --- | --- | --- |
| ...name | <code>string</code> | Name of the name folder where multiple strings can be given for nested folders |

**Example**  
```javascript
import appFolder from "app-folder"
const folder = appFolder("My Company", "My App")
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
