// const heading = React.createElement(
//     "h1" ,  // type 
//     // Props
//     {id: "heading"} ,
//     "Hello World in React !"  // Children
// );

// console.log(heading , typeof(heading));  // heading is a react element which is actually a javascript object.

// It is important to note that heading is not the actual html tag/element, rather it is a javascript object.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// The render function is responsible for creating the actual heading tag from the react-element/javascript object returned
// by the React.createElement() function and injecting it inside the root.
// root.render(heading);


// ---------------------------------------------------------------------------------------------------------------------------


// How to create the following html element using React without JSX ?

{/* <div id = "parent">
    <div id = "child">
        <h1 id = "heading" > What the fuck is this !!! </h1>
        <h2 id = "subHeading"> I'm just a little bitch !!! </h2>
    </div>
</div> */}

// Ans:

const parent = React.createElement(
    "div" , 

    { id: "parent" } , 

    React.createElement(
        "div" , 

        { id: "child" } , 

        [
            React.createElement(
            "h1" , 
            { id: "heading" } , 
            "What the fuck is this !!!"
            ) , 

            React.createElement(
                "h2" , 
                { id: "subHeading" } , 
                "I'm just a little bitch !!!"
            )
            
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);