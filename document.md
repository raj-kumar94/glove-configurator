## Schema

### PERSONAL_EMBROIDERY

```
{
    "name": "name on pinky",
    "type": "text_and_color",
    "enabled": false,
    "text": "",
    "colors": COMMON_COLORS,
    "selected_color": "",
    "active": true,
    "required": false
}
```


```
{
    "name": string,
    "type": enum["list_options" | "text_and_color" | "text_area" | "color"],
    "enabled": boolean,
    "text": string,
    "colors": array[COMMON_COLORS],
    "selected_color": string,
    "active": boolean,
    "required": boolean
}
```

gloveData[PERSONAL_EMBROIDERY].name => name that appears on the screen