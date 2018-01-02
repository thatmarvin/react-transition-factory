import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import SequentialTransitionGroup from '../../src/components/group/SequentialTransitionGroup';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class TransitionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { active: true };
  }

  render() {
    const transitionEl = React.Children.only(this.props.children);

    return (
      <div>
        <PrimaryButton
          onClick={() => this.setState({ active: !this.state.active })}
          style={{ marginBottom: '1rem' }}
        >
          Toggle Animation
        </PrimaryButton>
        <SequentialTransitionGroup>
          {React.cloneElement(transitionEl, { in: this.state.active })}
          {React.cloneElement(transitionEl, { in: this.state.active })}
          {React.cloneElement(transitionEl, { in: this.state.active })}
        </SequentialTransitionGroup>
      </div>
    );
  }
}

export default storyFn => (
  <TransitionGroupContainer>{storyFn()}</TransitionGroupContainer>
);
