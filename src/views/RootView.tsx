import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyle from '../theme/GlobalStyle';
import SearchView from './SearchView';
import ResultsView from './ResultsView';

const RootView: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" exact component={SearchView} />
      <Route path="/results" component={ResultsView} />
    </BrowserRouter>
  );
};

export default RootView;
