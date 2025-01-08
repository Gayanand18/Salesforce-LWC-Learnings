// Normal Export

// export const PI = 3.14159265359;
// export function add(a, b) {
//   console.log(a + b);
// }

// export together
// const PI = 3.14159265359;
// function add(a, b) {
//   console.log(a + b);
// }
// export { PI, add };


// export with alias
const PI_DATA = 3.14159265359;
function addData(a, b) {
  console.log(a + b);
}
export { PI_DATA as PI, addData as add };

// export default
// export default function minus(a, b) {
//   console.log(a - b);
// }

export function minus(a, b) {
  console.log(a - b);
} 