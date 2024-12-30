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

const h11 = React.createElement("h1" , { id: "h11" } , "My name is Oliver Queen !");

const h21 = React.createElement("h2" , { id: "h21" } , "I am the fastest man alive !");

const h12 = React.createElement("h1" , { id: "h12" } , "I am the Tribal Chief !");

const h22 = React.createElement("h2" , { id: "h22" } , "I am the greatest of all time !");

const parent1 = React.createElement("div" , { id: "parent-1" } , [h11 , h21] );

const parent2 = React.createElement("div" , { id: "parent-2" } , [h12 , h22] );

const innerDiv = React.createElement("div" , { id: "innerDiv" } , [parent1 , parent2] );

const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(innerDiv);