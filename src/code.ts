import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/share';

// Add an item to the DOM list
const addItem = (val:any) => {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
};

// Create our Observable 
const observable = Observable.create((observer:any) => {
  observer.next('Hello');
  observer.next('World');
  setInterval(() => {
    observer.next('Test');
  }, 1500);
}).share();
 
// Subscribe to our Observable
const observer = observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Observable has completed emitting to Observer 1'),
);

setTimeout(() => {
  const observable2 = observable.subscribe(
    (x:any) => addItem(`Subscriber 2: ${x}`),
  );
}, 1000);
