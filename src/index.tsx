import React from 'react';
import ReactDOM from 'react-dom';
import MobileDetect from 'mobile-detect';
import { withRegistry } from '@bem-react/di';

import { IStore } from './typings';
import { Page, IPageProps } from './view/components/Page/Page';
import { desktop } from './view/components/Page/Page.registry/desktop';
import { touch } from './view/components/Page/Page.registry/touch';

import * as serviceWorker from './view/components/ServiceWorker/ServiceWorker';

const platformsMap = {
  desktop: desktop,
  touch: touch,
};

const md = new MobileDetect( window.navigator.userAgent );
const platform = md.mobile() ? 'touch' : 'desktop';

const store: IStore = {
  hello: 'world',
};

console.log('platformsMap[platform]', platformsMap);
console.log('platform', platform);

const App = withRegistry( platformsMap[ platform ] )( Page );

console.log('App', App);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
