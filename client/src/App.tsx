import * as React from 'react';
import {Greeting} from "../../src/greeting/greeting.entity";
import {GreetingRepository} from "../../src/greeting/GreetingRepository";

interface Props {
  repository: GreetingRepository;
}

interface State {
  greeting: Greeting | null;
}

export class App extends React.Component<Props, State> {
  public state: State = {greeting: null};

  async componentDidMount() {
    const greetings: Greeting[] = await this.props.repository.findAll();
    this.setState({greeting: greetings[0]});
  }

  public render() {
    return (
      <div className="App">
        {this.state.greeting &&
          <div data-testid="greeting">{this.state.greeting.phrase}</div>
        }
      </div>
    );
  }
}

