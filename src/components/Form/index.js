import React from "react";

const Form = ({ name, loading, error, btnAction, changeCharacter}) => (
    <div className="container input-group mb-3">
        <input
            type="text"
            className="form-control border-dark"
            value={name}
            placeholder="digite o nome do personagem"
        />
        <div className="input-group-append">
            <button className="btn btn-dark" type="button" onClick={btnAction}>
                Buscar
            </button>
        </div>

        <p className="errorText">{error}</p>
    </div>
)

export default Form