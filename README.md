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
