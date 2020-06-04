// Progress.d.ts

import DefaultIos from './Progress.ios';
import * as ios from './Progress.ios';
import DefaultAndroid from './Progress.android';
import * as android from './Progress.android';

declare var _testAll: typeof ios;
declare var _testAll: typeof android;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultAndroid;

export * from './Progress.ios';
export default DefaultIos;


