// Aim: To create the following nested HTML-structure using React:

{/* <div id="root">
    <div id="innerDiv">
        <h1> My name is Oliver Queen ! </h1>
        <h2> I am the fastest man alive ! </h2>
    </div>
</div> */}

const h1 = React.createElement("h1" , { id: "h1" } , "My name is Oliver Queen !");

const h2 = React.createElement("h2" , { id: "h2" } , "I am the fastest man alive !");

const innerDiv = React.createElement("div" , { id: "innerDiv" } , [h1 , h2] );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(innerDiv);