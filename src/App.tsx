// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Navigation from './constants/Navigation';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import English from './utils/translations/en.json'
import { IntlProvider } from 'react-intl';

const App = () => {

  const local = navigator.language;

  return (
    <IntlProvider locale={local} messages={English}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="edit" element={<Edit />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </IntlProvider>
  );
};

export default App;