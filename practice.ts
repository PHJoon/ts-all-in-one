const a: number = 5;
const b: string = '5';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;
const f: any = true; // 모든 타입 다 가능  any 쓰면 자바스크립트 쓰는 것과 다름 없음

// function add(x: number, y: number): number { 
//     return (x + y);
// }

// type Add = (x: number, y: number) => number;
// const add: (x: number, y: number) => number = (x, y) => x + y;
// const add: Add = (x, y) => x + y;

interface Add {
    (x: number, y: number): number;
}
// const add: Add = (x, y) => x + y;

const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const arr: string[] = ['123', '456'];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];
// <> <- 제네릭

// 튜플, 길이가 고정됨
const arr4: [number, number, string] = [123, 456, 'abc'];

// 값을 고정하는 경우
const h: true = true;
const i: 5 = 5;

// function add(x: number, y: number): number;
// function add(x, y) {
//     return x + y;
// }

let aa = 123;
aa = 'hello' as unknown as number;

// never 타입
try {
    const array = [];
    // array.push('hello');
} catch(error) {}

// ! <- null 이나 undefined 가 아님을 보증하는 방식
// ! 비추천, if 안전
const head = document.querySelector('#head')!;
if (head) {
    head.innerHTML = 'hello world';
    console.log(head);
}


type World = 'world' | 'hell';
const x: World = 'world';

type Greeting = `hello ${World}`;
const y: Greeting = 'hello hell';


function rest(a, ...args: string[]) {
    console.log(a, args); // [1, 2, 3]
}
rest('1', '2', '3');

const tuple: [string, number] = ['1', 1];
// 이거는 막아줌
tuple[2] = 'hello';
// 이거는 못 막아줌
tuple.push('hello');


// enum 변수들을 하나의 그룹으로 묶을 때 사용
const enum EDirection {
    Up = '123',
    Down = 'hello',
    Left = 4,
    Right = 6,
}

// as const -> 속성들 값을 상수로 쓰겠다 readonly까지 붙음
const ODirection = {
    Up: '123',
    Down: 'hello',
    Left: 4,
    Right: 6,
} as const;

const up = EDirection.Up;
const le = EDirection.Left;

const obj1 = { a: '123', b: 'hello', c: 'world'} as const;
// typeof: 값을 타입으로
// key만 뽑아 쓰고 싶다 keyof
type Key = keyof typeof obj1;
// value만 뽑아 쓰고 싶다
type Value = typeof obj1[keyof typeof obj1];

function walk(dir: EDirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);