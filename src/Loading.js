import React from "react";

class Loading extends React.Component {

    componentDidMount() {
        console.log("Loading did mount");
    }
    componentWillUnmount() {
        console.log("Loading will unmount");
    }

    render() {
        return (
            <p> Cargando...</p>
        );
    }
}

export {Loading};