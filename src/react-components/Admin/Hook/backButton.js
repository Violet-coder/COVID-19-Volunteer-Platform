import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';

export function BackButton() {
    let history = useHistory();

    return (
        
          <button type='button' className='btn btn-info back-btn' onClick={() => history.goBack()}>Back</button>

    );
};



