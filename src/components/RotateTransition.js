// @flow

import transitionFactory from '../factory/transitionFactory';
import { opacity, rotate } from '../presets';

const RotateTransition = transitionFactory([rotate, opacity]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;
