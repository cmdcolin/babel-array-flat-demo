# babel array flat demo

This demonstrates usage of Array.prototype.flat and compiling with babel 7, babel polyfill, and core-js

The @babel/polyfill and core-js@3 are added as main dependencies

The babel preset env uses useBuiltIns: usage to import dependencies where needed instead of manually importing @babel/polyfill in the codebase

The core-js@3 is needed in order to get stage 3 proposals, which at the time of writing, Array.prototype.flat currently is. When it moves to stage 4 finalizing then we will not need core-js

To see status https://tc39.github.io/proposal-flatMap/

```
Stage 3 Draft / January 4, 2019
Array.prototype.flatMap & Array.prototype.flat
```


## Important note

If you are developing a library, using @babel/polyfill or useBuiltIns: usage with corejs pollutes the global scope. If you read the documentation very closely, you CANNOT use Array.prototype.flat, or Array.prototype.includes, or other great helper methods. The general method for getting some extra babel ability without polluting global scope is to use @babel/plugin-transform-runtime but this cannot be done for "instance methods"

Parse this section from the babel docs closely to see what I mean

>For library/tool authors this [sic including @babel/polyfill] may be too much. If you don't need the instance methods like Array.prototype.includes you can do without polluting the global scope altogether by using the transform runtime plugin instead of @babel/polyfill.
    
The subtext is that you shouldn't use use "instance methods" like Array.prototype.includes (this already has good browser support so not a big deal) or Array.prototype.flat (this has poor browser support particularly ie11) in a library and expect babel to save you from incompatible clients, the incompatible client could polyfill it but your library should not
