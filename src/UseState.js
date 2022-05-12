import React from "react";

function UseState({name}) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log("UseState: useEffect");
        if (!!loading) {
            setTimeout(() => {
                console.log("UseState: setTimeout");
                setLoading(false);
                setError(!error);
                console.log("UseState: setTimeout end");
            }, 3000);
        }
        console.log("UseState: useEffect end");
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {error && (
                <p> El Código incorrecto</p>
            )}
            {loading && (
                <p> Cargando...</p>
            )}
            <input placeholder="Código de Seguridad"/>
            <button
                onClick={() => setLoading(!loading)}
            >Comprobar
            </button>
        </div>
    );
}

export {UseState};
