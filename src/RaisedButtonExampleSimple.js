import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Submit" primary={true} style={style} />
  </div>
);

export default RaisedButtonExampleSimple;