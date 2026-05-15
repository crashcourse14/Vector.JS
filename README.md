![Status](https://img.shields.io/badge/status-good-brightgreen)
![NPM](https://img.shields.io/badge/VERSION-1.0.0-blue)
![License](https://img.shields.io/badge/LICENSE-MIT-green)

# Vector.JS
Vector.JS creates a better understanding for JavaScript. This is semi-like typescript but easier to follow, understand, and read.

## Example

```javascript
import { vector } from "../src/index.js";
import "../src/api/vector.js"

vector.getDomID("test").innerText = "Hello World!";
````

## Developer Notice
To test out a feature via http server, run:
```bash 
./BuildDOM.sh
```

To commit make sure you edit this in ReleaseBuild.sh, then run it:
```bash
LATEST_BUILD_VER="1.0.0"
```


