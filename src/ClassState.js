import React from "react";
import { Loading} from "./Loading";

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false,
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("componentDidUpdate: setTimeout");
                this.setState({
                    loading: false,
                    error: !this.state.error,
                });
                console.log("componentDidUpdate: setTimeout end");
            }, 3000);
        }
        console.log("componentDidUpdate end");
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {this.state.error && (
                    <p> El Código incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}
                <input placeholder="Código de Seguridad"/>
                <button
                    //onClick={() => this.setState(prevState => ({ error: !prevState.error}))}
                    onClick={() => this.setState({ loading: !this.state.loading})}
                >Comprobar
                </button>
            </div>
        );
    }
}

export {ClassState};