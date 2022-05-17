import React from "react";

const SECURITY_CODE = "andrea";

function UseState({name}) {
    const [state, setState] = React.useState({
        value: "",
        error: false,
        loading: false
    });

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        if (!!state.loading) {
            setState({
                ...state, error: false
            });
            setTimeout(() => {
                if (state.value !== SECURITY_CODE) {
                    setState({
                        ...state, error: true, loading: false
                    });
                }else{
                    setState({
                        ...state, error: false, loading: false
                    });
                }

            }, 3000);
        }
    }, [state]);

    return (
        <div>
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
        </div>
    );
}

export {UseState};
