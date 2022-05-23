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

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true
        });
    }
    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        });
    }
    const onWrite = (eventValue) => {
        setState({
            ...state,
            value: eventValue
        });
    }
    const onCheck = () => {
        setState({
            ...state,
            loading: true
        });
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        });
    }
    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: ''
        });
    }

    React.useEffect(() => {

        if (!!state.loading) {
            setState({
                ...state, error: false
            });
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
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
                        onWrite(event.target.value)
                    }}
                    placeholder="Código de Seguridad"
                />
                <button
                    onClick={() => {
                        onCheck()
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
                    onDelete()
                }}>Si, eliminar
                </button>
                <button type="button" onClick={() => {
                    onReset()
                }}>No, cancelar
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h2>¡{name} eliminado!</h2>
                <button type="button" onClick={() => {
                    onReset();
                }}>Recuperar {name}</button>
            </React.Fragment>
        );
    }

}

export {UseState};
