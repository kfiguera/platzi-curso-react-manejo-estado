import React from "react";
import { Loading} from "./Loading";

const SECURITY_CODE = "andrea";

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            error: false,
            loading: false,
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (!!this.state.loading) {
            setTimeout(() => {
                if(this.state.value === SECURITY_CODE) {
                    this.setState({
                        loading: false,
                        error: false,
                    })
                } else {
                    this.setState({
                        loading: false,
                        error: true,
                    })
                }
            }, 3000);
        }

    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {(!this.state.loading && this.state.error) && (
                    <p> El Código incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}
                <input
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({
                            value: event.target.value
                        });
                    }}
                    placeholder="Código de Seguridad"
                />
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