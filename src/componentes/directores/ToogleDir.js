import React from 'react'

export default function ToogleDir({ changeState, estado }) {
    return (
        <div className="form-check form-switch">
            <input onClick={changeState}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked" checked={estado} />
            <label class="form-check-label"
                for="flexSwitchCheckChecked">
                Activo/Inactivo
            </label>
        </div>
    )
}
