import * as React from 'react';

interface HomeProps {
  name: string;
  age: number;
}
interface HomeState {
}

export class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        Hello {this.props.name}, you are {this.props.age}, right?
      </div>
    );
  }
}
