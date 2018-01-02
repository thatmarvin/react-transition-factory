// @flow

import React, { Children } from 'react';
import type { ChildrenArray } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

type Props = {
  sequential: boolean,
  children: ChildrenArray<typeof Transition>,
};

type State = {
  activeChildrenArray: boolean[],
};

class SequentialTransitionGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    const { children } = props;
    super(props);
    this.state = {
      activeChildrenArray: Array(children.length)
        .fill(true, 0, 1)
        .fill(false, 1),
    };
  }

  renderChildren = () => {
    const { children, sequential } = this.props;
    const { activeChildrenArray } = this.state;

    return Children.map(children, (transitionElement, index) => {
      const { onEntered, onExited } = transitionElement.props;

      return React.cloneElement(transitionElement, {
        in: activeChildrenArray[index],
        onEntered: () => {
          if (typeof onEntered === 'function') onEntered();
          this.setState({
            activeChildrenArray: [
              ...activeChildrenArray.slice(0, index),
              true,
              ...activeChildrenArray.slice(index),
            ],
          });
        },
        onExited: () => {
          if (typeof onExited === 'function') onExited();
          this.setState({
            activeChildrenArray: [
              ...activeChildrenArray.slice(0, index),
              false,
              ...activeChildrenArray.slice(index),
            ],
          });
        },
      });
    });
  };

  render() {
    const { children, sequential, ...rest } = this.props;

    return <React.Fragment>{this.renderChildren()}</React.Fragment>;
  }
}

export default SequentialTransitionGroup;
