const foo = "foo";
const bar = "bar";
const baz = "baz";

// 命名行内导出
export const app = 'app'
export const apple = 'apple', bar2 = 'bar2'
export function foo3(){}
export class Foo{}

// 命名子句导出
export { foo as myFoo, bar as myBar, baz };

// 默认导出
export default { baz };


export {}

// 会导致错误的不同形式

// 行内默认导出中不能出现变量生命
// export default const foo3 = 'bar';

// 只有标识符可以出现在export子句中
// export {123 as ots}

// 别名只能在export 子句中出现
// export const foo4 = 'foo' as MyFoo3;