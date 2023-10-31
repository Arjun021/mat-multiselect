# ng2-mat-multiselect

Angular material select box with multiple selection and search support.

## Features
 - Plugin **Accepts your original array** means no modification in your array is required.
 - **Multiple options selection** and display the options as `mat-chips`.
 - **Searching** in select box list with **custom keys**.
 - Support **Custom key** as a display label in the list.
 - Supports material theme pallet colors.
 - Set form field appearance as `fill` or `outline`.
 - Set **custom** input field **label**.
 - AoT compilation and lazy loading compatible.
 - Fewer dirty checks and higher performance.
 
## Quickstart
 1. Install Angular material
	```bash
	ng add @angular/material
	```
2. Install the library 
      ```base
      npm install ng2-mat-multiselect --save
      ```

3. Import in your module file
	 ```base
	 import { Ng2MatMultiselectModule } from  'ng2-mat-multiselect';
    imports: [
    ...
    Ng2MatMultiselectModule
    ],
	  ```

## Options

| Option | Type | Default | Description  
|:--:|:--:|:--:|:--:|
|item  |Array  | [ ] | The list of data for selectbox list
|displaykey|string|-| The value of the given displaykey will displayed in the select list
|searchkeys| Array of strings | [ ] | Search keys on which search should occur
| color| string | Primary | Mat theme palette color
| appearance| string| Outline| Mat form field appearance, `Outline` or `Fill`
| inputTitle | string | - | Label of selectbox
| @Output() selectedItems | EventEmitter | - | On select/unselect any checkbox, returns selected options

## Example

In **app.component.ts** file
```
dataToPass  : {sn:  string, tn:  string}[] = [
{sn:  'apple', tn:  'Apple'},
{sn:  'lemon', tn:  'Lemon'},
{sn:  'lime', tn:  'Lime'},
{sn:  'orange', tn:  'Orange'},
{sn:  'strawberry', tn:  'Strawberry'},
]
displayKey  :  string  =  'tn';
searchKeys  :  string[] = ['sn', 'tn'];
color  :  ThemePalette  =  'primary';
inputTitle  :  string  =  'Fruits';
appearance  :  string  =  'outline'; 
```

In **app.component.html** file

```
<ng2-mat-multiselect
[item]="dataToPass"
[appearance]="appearance"
[inputTitle]="title"
[displayKey]="displayKey"
[searchKey]="searchKeys"
[color]="color"
(selectedItems) = "onSelectitems($event)">
</ng2-mat-multiselect>
```

**Output:** 

![enter image description here](https://d14fuwcgrk1mx2.cloudfront.net/example.png)
