import "./styles.css";
let data = [10, 20, 30, 45, 78];
let position = 3;
for (let i = position; i < data.length; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log("data==", data);
let data1 = [10, 20, 30, 45, 78];
data1.splice(position, 1);
console.log("data1==", data1);
