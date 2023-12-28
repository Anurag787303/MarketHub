import React, { Fragment } from 'react'
import './TextField.css'

const TextField = ({ label }) => {
    return (
        <div className='label-container'>
            <label className='label-text'>
                {label}
            </label>
            <input type='text' placeholder={label} className='text-field-input' />
        </div>
    )
}

export default TextField