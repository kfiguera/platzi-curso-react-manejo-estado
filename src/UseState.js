import React from "react";

const SECURITY_CODE = "andrea";

function UseState({name}) {
    const [state, setState] = React.useState({
        value: "",
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    });

    React.useEffect(() => {

        if (!!state.loading) {
            setState({
                ...state, error: false
            });
            setTimeout(() => {
                if (state.value !== SECURITY_CODE) {
                    setState({
                        ...state,
                        error: true,
                        loading: false
                    });
                } else {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true
                    });
                }

            }, 3000);
        }
    }, [state.loading]);
    if (!state.deleted && !state.confirmed) {
        return (
            <React.Fragment>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {(!state.loading && state.error) && (
                    <p> El Código es incorrecto</p>
                )}
                {state.loading && (
                    <p> Cargando...</p>
                )}
                <input
                    value={state.value}
                    onChange={(event) => {
                        setState({
                            ...state,
                            value: event.target.value
                        });
                    }}
                    placeholder="Código de Seguridad"
                />
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            loading: true
                        })
                    }}
                >Comprobar
                </button>
            </React.Fragment>
        );
    } else if (!!state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <h2>Eliminar {name}</h2>
                <p>¿Seguro que quieres eliminar {name}?</p>
                <button type="button" onClick={() => {
                    setState({
                        ...state,
                        deleted: true
                    });
                }}>Si, eliminar</button>
                <button type="button" onClick={() => {
                    setState({
                        ...state,
                        confirmed: false,
                        value: ''
                    });
                }}>No, cancelar</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>

                <h2>¡{name} eliminado!</h2>
                <button type="button" onClick={() => {
                    setState({
                        ...state,
                        confirmed: false,
                        deleted: false,
                        value: ''
                    });
                }}>Recuperar {name}</button>
            </React.Fragment>
        );
    }

}

export {UseState};
