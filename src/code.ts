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
    observer.complete();
    observer.next('!');
  },
);
 
// Subscribe to our Observable
observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed'),
  (nothing:any) => addItem(nothing),
);