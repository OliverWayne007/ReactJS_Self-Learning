import React from "react";

import ReactDOM from "react-dom/client";

// Aim: To create the following nested HTML structure using React:

{/* <div id="root">

    <div id="innerDiv">
        
        <div id="parent-1">
            <h1 id="h11"> My name is Oliver Queen !</h1>
            <h2 id="h21"> I am the fastest man alive !</h2>
        </div>

        <div id="parent-2">
            <h1 id="h12"> I am the Tribal Chief !</h1>
            <h2 id="h22"> I am the greatest of all time !</h2>
        </div>

    </div>

</div> */}


// ----------------------------------------------------------------------------------------------------------------------------------

// The following is the React code to create the above nested HTML structure

const h11 = React.createElement("h1" , { id: "h11" } , "My name is Oliver Queen !");

const h21 = React.createElement("h2" , { id: "h21" } , "I am the fastest man alive !");

const h12 = React.createElement("h1" , { id: "h12" } , "I am the Tribal Chief !");

const h22 = React.createElement("h2" , { id: "h22" } , "I am the greatest of all time !");

const parent1 = React.createElement("div" , { id: "parent-1" } , [h11 , h21] );

const parent2 = React.createElement("div" , { id: "parent-2" } , [h12 , h22] );

const innerDiv = React.createElement("div" , { id: "innerDiv" } , [parent1 , parent2] );

console.log(innerDiv);

console.log('\n');

// const root = ReactDOM.createRoot( document.getElementById("root") );

// root.render(innerDiv);

// --------------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------------

// Following is the JSX code for creating the HTML structure mentioned above

// Note that title is not a React component as it is not a javascript function. It is just a Javascript variable
// that stores a Javascript object that React.createElement() provides.

// Basically, the JSX element:

// const title = <h1 id="title"> This is a React component ! </h1>

//  is converted into core React element by Babel as follows:

// const title = React.createElement("h1" , { id: "title" } , "This is a React component !");

// This React.createElement() further returns the following Javascript object:

// const title = 
// {
    //     "type": "h1",
    //     "key": null,
    //     "props": {
    //         "id": "title",
    //         "children": " This is a React component ! "
    //     },
    //     "_owner": null,
    //     "_store": {}
// }

// ReactDOM takes this object and creates the corresponding DOM nodes in the browser.
        
        
const title = <h1 id="title"> This is a React component ! </h1>

// Question: What is a component in React ?
// Ans: A javascript function that returns some JSX element or in other words some React element is called a component.

// TitleContainer is an example of a Functional-Component.
const TitleContainer = () => { 
    return ( 
    <div id="titleContainer"> {title} </div>
) };

// Note that component is not a functional component for the reasons mentioned above. It is just a Javascript variable 
// containing a Javascript object.
const component = (

    <div id="innerDiv">

        <TitleContainer />

        <div id="parent-1">
            <h1 id="h11"> My name is Oliver Queen !</h1>
            <h2 id="h21"> I am the fastest man alive !</h2>
        </div>

        <div id="parent-2">
            <h1 id="h12"> I am the Tribal Chief !</h1>
            <h2 id="h22"> I am the greatest of all time !</h2>
        </div>

    </div>

);

console.log(component);

const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(component);