// @flow

import transitionFactory from '../factory/transitionFactory';
import { scale } from '../presets';

const ScaleTransition = transitionFactory([scale.all]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;
