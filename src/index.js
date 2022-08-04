import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './containers/Login';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingPage from './containers/LoadingPage';
import Register from './containers/Register';
import Detail from './containers/Detail';
import Search from './containers/Search';
import ArticleCategory from './containers/ArticleCategory';
import InspirasiDapur from './containers/InspirasiDapur';
import ArticleDetail from './containers/ArticleDetail';
import MakananGayaHidup from './containers/MakananGayaHidup';
import TipsMasak from './containers/TipsMasak';
import SearchList from './containers/SearchList';
import NotFound from './containers/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <ThemeProvider theme={theme}> */}
      <Routes>
      <Route path="/" element={
            <App />
        }>
      </Route>
      <Route path="/login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute> } />
      <Route path="/register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute> } />
      <Route path="/detail/:key" element={
          <Detail />} />
      <Route path="/loading" element={ 
            <LoadingPage/>
        } />
      <Route path="/search/:value" element={<SearchList />} />
      <Route path="/article-category" element={<ArticleCategory />} />
      <Route path="/article-category/inspirasi-dapur" element={<InspirasiDapur />} />
      <Route path="/article-category/makanan-gaya-hidup" element={<MakananGayaHidup />} />
      <Route path="/article-category/tips-masak" element={<TipsMasak />} />
      <Route path="/article-category/:tag/:key" element={<ArticleDetail />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </ThemeProvider> */}
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
