const h1 = React.createElement("h1" , { id: "h1" } , "Hello World !");

// Note that h1 created using React.createElement() above is not the actual html element <h1></h1>.
// As a matter of fact, it is just a javascript object as shown below.
console.log(h1);

console.log('\n');

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

// The render() function takes the javascript object "h1" created using React.createElement() and converts it into an actual
// h1 ( <h1></h1> ) html-element and adds it to the browser's DOM.
root.render(h1);