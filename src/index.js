/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants enfants éventuels

// Styles et assets
import './styles.sass';

const Field = (props) => {
    var hey = props.onChange;
    return <div className="formulaire">
    <input className="hey" />
    <p></p>
    </div>
}

export default Field;
