// @flow

import transitionFactory from '../factory/transitionFactory';
import { opacity } from '../presets';

const FadeTransition = transitionFactory([opacity]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;
