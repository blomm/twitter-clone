class Main extends React.Component{
    render(){
        return(
            <h1>Hello React2 from the component</h1>
        );
    }
}

let documentReady =()=>{
    ReactDOM.render(
        <Main/>,
        document.getElementById('react')
    );
};

$(documentReady);