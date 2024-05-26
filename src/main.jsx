import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.js'
import './index.css'

import Home from './components/Home/Home.jsx'
// import ChannelPage  from "./components/ChannelPage/ChannelPage";

import { MrBeast, Movieclips,Zeetv,Netdmuzik,Abscbnent,Colorstv , Tseries,Minutecrafts,Wwe,Blackpink,Goldmines,Sonysab, Caseyneistat, Ididathing , Doctormike, Isaiahphoto, Chrisbumstead ,SetIndia, TotalSubs, TotalViews, Zeemusiccompany ,  Pewdiepie } from './index.js'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<Layout />}>
    <Route path='' element= {<Home />}></Route>
    {/* <Route path='/channelpage' element={<ChannelPage />}></Route> */}
    <Route path='/mrbeast' element={<MrBeast />}></Route>
    <Route path='/doctormike' element={<Doctormike />}></Route>
    <Route path='/caseyneistat' element={<Caseyneistat />}></Route>
    <Route path='/zeetv' element={<Zeetv />}></Route>
    <Route path='/colorstv' element={<Colorstv />}></Route>
    <Route path='/movieclips' element={<Movieclips />}></Route>
    <Route path='/abscbnent' element={<Abscbnent />}></Route>
    <Route path='/netdmuzik' element={<Netdmuzik />}></Route>
    <Route path='/pewdiepie' element={<Pewdiepie />}></Route>
    <Route path='/minutecrafts' element={<Minutecrafts />}></Route>
    <Route path='/wwe' element={<Wwe />}></Route>
    <Route path='/blackpink' element={<Blackpink />}></Route>
    <Route path='/sonysab' element={<Sonysab />}></Route>
    <Route path='/goldmines' element={<Goldmines />}></Route>
    <Route path='/zeemusiccompany' element={<Zeemusiccompany />}></Route>
    <Route path='/chrisbumstead' element={<Chrisbumstead />}></Route>
    <Route path='/isaiahphoto' element={<Isaiahphoto />}></Route>
    <Route path='/ididathing' element={<Ididathing />}></Route>
    <Route path='/t-series' element = {<Tseries />}></Route> 
    <Route path='/setindia' element = {<SetIndia />}></Route> 
    <Route path='/totalsubs' element= {<TotalSubs />}></Route>
    {/* <Route path='/mostsubs' element= {<MostSubs />}></Route> */}
    <Route path='/totalviews' element= {<TotalViews />}></Route>
    
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
