import React from "react";

const SECURITY_CODE = "andrea";

function UseReducer({name}) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    React.useEffect(() => {

        if (!!state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    dispatch({type: 'CONFIRM'});
                } else {
                    dispatch({type: 'ERROR'});
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
                        dispatch({type: 'WRITE', payload: event.target.value});
                        //onWrite(event.target.value)
                    }}
                    placeholder="Código de Seguridad"
                />
                <button
                    onClick={() => {
                        dispatch({type: 'CHECK'});
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
                    dispatch({type: 'DELETE'});
                }}>Si, eliminar
                </button>
                <button type="button" onClick={() => {
                    dispatch({type: 'RESET'});
                }}>No, cancelar
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h2>¡{name} eliminado!</h2>
                <button type="button" onClick={() => {
                    dispatch({type: 'RESET'});
                }}>Recuperar {name}</button>
            </React.Fragment>
        );
    }

}

const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};
const reducerObject = (state, payload = false) => ({
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false
    },
    'WRITE': {
        ...state,
        value: payload
    },
    'CHECK': {
        ...state,
        loading: true
    },
    'DELETE': {
        ...state,
        deleted: true
    },
    'RESET': {
        ...state,
        confirmed: false,
        deleted: false,
        value: ''
    },
});
const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state;
    }
}

export {UseReducer};