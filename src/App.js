import React from 'react';
import comments from './commentData';
import Card from './Card';
import ThoughtsContainer from './ThoughtsContainer';
import { BrowserRouter as Router, Routes, createBrowserRouter, createRoutesFromElements , Route, RouterProvider, NavLink , Link , createRoot } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Contacts from './Contacts';
import Error404 from './Error404';
import Root from './Root';
import Myprojects from './Myprojects';
import Project from './Project';
import Jamming from './Jamming';

const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<Root />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Myprojects />} />
        <Route path="/projects/:project" element={<Project />} />
        <Route path="/projects/todo" element={<ThoughtsContainer />} />
        <Route path="/projects/jamming" element={<Jamming />} />
        <Route path="/contacts" element={<Contacts/>}/>
        
  </Route>
));

function App () {
  return (
    <div className="App">
            <RouterProvider router={router} />
        
  </div>
  )
}
  

export default App;