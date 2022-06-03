import React, { Component } from 'react';
import { render } from 'react-dom';
import CodeMirror from 'react-codemirror';
import Hello from './Hello';
import './style.css';
import 'codemirror/lib/codemirror.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'CodeMirror',
      code: '// Code'
    };
  }

  updateCode(newCode) {
		this.setState({
			code: newCode,
		});
	}

  render() {
    let options = {
			lineNumbers: true,
		};
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
