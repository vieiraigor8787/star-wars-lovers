import React from "react";

const Form = ({ name, loading, error, btnAction, searchCharacter}) => (
    <div className="container">
        <input
            type="text"
            className="searchInput"
            value={name}
            placeholder="digite o nome do personagem"
            onChange={e => searchCharacter(e.target.value)}
        />
        <button className="searchButton" onClick={btnAction}>
            Buscar
        </button>

        <p className="errorText">{error}</p>
    </div>
)

export default Form