import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import "./styles.css";

function RadioButton({ selectedvalue, handleChange }) {
  const CustomRadio = withStyles({
    root: {
      color: "#FFD3CA",
      "&$checked": {
        color: "#EB8F7A",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return(

      <div className="radioOption">

        <div>
        <CustomRadio 
        checked={selectedvalue === 'all'}
        onChange={e => handleChange (e.target)}
        value='all'

        />
        <span>todos</span>
      </div>

      <div>
        <CustomRadio
        checked={selectedvalue === 'true'}
        onChange={e => handleChange (e.target)}
        value='true'

        />
        <span>Prioridades</span>
      </div>

      <div>
        <CustomRadio 
        checked={selectedvalue === 'false'}
        onChange={e => handleChange (e.target)}
        value='false'
        />
        <span>Normal</span>
      </div>

      </div>


  )
}

export default RadioButton;
