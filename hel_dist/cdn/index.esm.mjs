import { exposeLib } from 'hel-lib-proxy';

const LIB_NAME = 'comps-vue3-popular';

const dtlib = exposeLib(LIB_NAME);
const TierRanking = dtlib.TierRanking;

export { TierRanking, dtlib as default, dtlib };
