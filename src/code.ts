import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
  const subscription = observable.subscribe(
    (x:any) => addItem(x),
  );
}, 2000);

// Add an item to the DOM list
const addItem = (val:any) => {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
};
