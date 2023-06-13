import type { NextPage } from 'next';
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import HomePage from './home';
import FlowPage from './flow';

const Home: NextPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/project" element={<FlowPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home