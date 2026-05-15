[Back to README](/README.md)
# 1.0.0

## Initial Version
This is the base line for the framework. Code examples are shown below to familiarize.

## NOTICE
You MUST add the following into the files that use Vector.JS:
```javascript
import { app } from "../src/index.js";
import "../src/api/archy.js"
```

## Examples

```javascript
import { app } from "../src/index.js";
import "../src/api/archy.js"

archy.round(num)
archy.floor(num)
archy.trunc(num)

app.getDomID(id);
app.getDomsID(id);
app.getDomClass(className);
app.getDomsClass(className);
app.getDomsTag(tagNames);

app.setClassList({
    id: "id",
    classList: "name"
});

app.rmvClassList({
    id: "id",
    classList: "name"
});

app.openWindow({
    url: "https://example.com",
    args: "width=800, height=800" //Not needed if you're just opening a tab
});

//Broken for right now

app.createDom({
    id: "id"
    class: "name"
});



```