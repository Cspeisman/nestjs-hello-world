import * as React from 'react';
import {cleanup, render, wait} from "react-testing-library";
import {GreetingRepositoryFake} from "./greeting/GreetingRepositoryFake";
import {App} from "./App";

afterEach(cleanup);
it('renders without crashing', async () => {
  const component = render(<App repository={new GreetingRepositoryFake()}/>);
  await wait(() => component.getByText('Hello World!'))
});
