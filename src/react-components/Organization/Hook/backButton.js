import React from 'react';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
export function BackButton() {
    let history = useHistory();
    return (
  
        <Button
        variant="contained"
        color="default"
        style={{fontSize: 12, height: 30}}
        onClick={() => history.goBack()}
    >
        back
        </Button>
  
    );
  }