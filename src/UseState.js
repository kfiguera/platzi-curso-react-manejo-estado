import React from "react";
const SECURITY_CODE = "andrea";
function UseState({name}) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        if (!!loading) {
            setError(false);
            setTimeout(() => {
                if (value !== SECURITY_CODE) {
                    setError(true);
                }
                setLoading(false);
            }, 3000);
        }
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {error && (
                <p> El Código es incorrecto</p>
            )}
            {loading && (
                <p> Cargando...</p>
            )}
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                placeholder="Código de Seguridad"
            />
            <button
                onClick={() => setLoading(!loading)}
            >Comprobar
            </button>
        </div>
    );
}

export {UseState};
