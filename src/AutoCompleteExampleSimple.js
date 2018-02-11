import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButtonExampleSimple from './RaisedButtonExampleSimple'

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value
      ],
    });
  };

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Your Name"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type comment here"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
        />
         <RaisedButtonExampleSimple />
      </div>
    );
  }
}