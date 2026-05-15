[Back to README](/README.md)
# 1.0.0

## Initial Version
This is the base line for the framework. Code examples are shown below to familiarize.

## NOTICE
You MUST add the following into the files that user Vector.JS:
```javascript
import { vector } from "../src/index.js";
import "../src/api/vector.js"
```

## Examples

```javascript
import { vector } from "../src/index.js";
import "../src/api/vector.js"

vector.round(num)
vector.floor(num)
vector.decimal(num) //preforms the same as Math.trunc()

vector.getDomID(id);
vector.getDomsID(id);
vector.getDomClass(className);
vector.getDomsClass(className);
vector.getDomsTag(tagNames);

vector.setClassList({
    id: "id",
    classList: "name"
});

vector.rmvClassList({
    id: "id",
    classList: "name"
});

vector.openWindow({
    url: "https://example.com",
    args: "width=800, height=800" //Not needed if you're just opening a tab
});

//Broken for right now

vector.createDom({
    id: "id"
    class: "name"
});



```