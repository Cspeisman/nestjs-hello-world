import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./App";
import {GreetingRepositoryWeb} from "./greeting/GreetingRepositoryWeb";

ReactDOM.render(
  <App repository={new GreetingRepositoryWeb()}/>,
  document.getElementById('root') as HTMLElement
);
