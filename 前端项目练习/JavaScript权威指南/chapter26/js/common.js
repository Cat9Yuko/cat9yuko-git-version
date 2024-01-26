import { myBar, myFoo, baz } from "./moduleA.js";
import * as Foo from "./moduleA.js";

// 默认导入
// 等效
import { default as foo } from "./moduleA.js";
import foo2 from "./moduleA.js";

// 如果模块同时导出了命名导出和默认导出，则可以在 import 语句中同时取得它们。可以依次列出
// 特定导出的标识符来取得，也可以使用*来取得：
import foo3, { bar2 } from "./moduleA.js";
import { default as bar } from "./moduleA.js";
import foo4, * as Foo2 from "./moduleA.js";

console.log(myBar);
console.log(myFoo);
console.log(baz);
console.log(Foo);
console.log(Foo.app);
console.log(foo);
console.log(foo.apple);
console.log(foo.baz);
console.log(foo2);
console.log(foo2.bar);
console.log(foo3);
console.log(bar2);
console.log(bar);
console.log(foo4);
console.log(Foo2);
// baz = 3;
// 工作者模块
// 第二个参数默认为{ type: 'classic' }
const scriptWorker = new Worker("./js/scriptWorker.js");
const moduleWorker = new Worker("./js/moduleA.js", { type: "module" });

console.log(scriptWorker);
console.log(moduleWorker);
