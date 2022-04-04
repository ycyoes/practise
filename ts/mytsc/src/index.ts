
function greeter(name: string) {
    return "Hello, " + name;
}

let user = "Murphy";
console.log(greeter(user))


function display(id: number, name1: string) {
    console.log("Id = " + id + ", Name = " + name1);
}

display(1, "Murphy");

let arr: number[] = [];
let arr1: Array<number> = [];

interface MyFind {
    (source: string, subString: string): boolean;
}

let mySearch: MyFind;   //接口应用于函数
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    if(result == -1) {
        return false;
    } else {
        return true;
    }
}

let res = mySearch("test", "1s");
console.log("interface: ", res);

// TypeScript接口也可以应用于属性。接口可以具有强制执行属性，但也可以具有可选属性。
interface Clothing {
    label: string;
    size: number;
    color?: string;
}

function printLabel(labelled: Clothing) {   //接口应用于属性
    console.log(labelled.label + "  " + labelled.size)
}

let myObj = {size: 10, label: "衣服"};
printLabel(myObj);

// Exclude映射类型将某个类型中属于另一个类型的类型移除
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;

/**
 * 严格相等
 * 如果两个被比较的值具有不同的类型，那么这两个值是不严格相等的。
 * 如果两个值的类型相同，值也相同，并且都不是number类型时，两个值严格相等。
 * 如果两个值都是number类型，那么当两个值都不是NaN，并且值相同，或是两个值分别为+0和-0时，两个值被认为是严格相等的。
 */

let obj = new String("0");
let str = "0";

console.log(obj === str);
console.log(typeof obj)
console.log(typeof str)

let array = [1, 2, 3, 4];
let [num1, , , num2] = array;
console.log(num1);
console.log(num2);

let [, , num3, num4] = array;
console.log(num3);
console.log(num4);

let [no1, no2, ...others] = array;
console.log(no1);
console.log(no2);
console.log(others);


















