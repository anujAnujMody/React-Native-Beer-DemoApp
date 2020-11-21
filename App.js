import {Provider} from 'mobx-react';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import HomeStore from './src/stores/HomeStore';


const App = () => {
  return (
    <Provider homeStore={new HomeStore()}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
