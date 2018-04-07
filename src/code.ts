import { Observable } from "rxjs/Observable";

// Add an item to the DOM list
const addItem = (val:any) => {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
};

// Create our Observable 
const observable = Observable.create(
  (observer:any) => {
    observer.next('Hello');
    observer.next('World');
    setInterval(() => {
      observer.next('Test');
    }, 1500);
  },
);
 
// Subscribe to our Observable
const observer = observable.subscribe(
  (x:any) => addItem(`Observer 1 received a message: ${x}`),
  (error:any) => addItem(`Observer 1 received an error ${error}`),
  () => addItem('Observable has completed emitting to Observer 1'),
);

// Second Observer subscribing to Observable
const observer2 = observable.subscribe(
  (x:any) => addItem(`Observer 2 received a message: ${x}`),
  (error:any) => addItem(`Observer 2 received an error ${error}`),
  () => addItem('Observable has completed emitting to Observer 2'),
);

// Add our second Observer to first one
observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 10000);
