
import React from "react"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhyUs from "./components/WhyUs";
import Service from "./components/Service";
import Shop from './components/Shop';
import Blogs from "./components/Blogs";
import BookService from "./components/BookService";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
function App(){
	return<div>
<Navbar />
     

	  <BrowserRouter>
<Routes >
                   {/*we can also use this method for routing*/}
{/* <Route path='/' Component={Home}/>
<Route path='/about' Component={About}/>
<Route path='/contact' Component={Contact}/> */}

<Route path='/' element={<Hero></Hero>} />
<Route path='/about' element={<About></About>} />
<Route path='/whyus' element={<WhyUs></WhyUs>} />
<Route path='/contact' element={<Contact></Contact>} />
<Route path='/service' element={<Service></Service>} />
<Route path='/shop' element={<Shop></Shop>} />
<Route path='/blogs' element={<Blogs></Blogs>} />
<Route path='/bookservice' element={<BookService></BookService>}/>

{/* <Route path='/bookservice' element={<Contact></Contact>}/>
<Route path='/register' element={<Input></Input>}/>
<Route path='/getData' element={<GetdataSpring></GetdataSpring>}/>
<Route path='/updatedata/:id' element={<UpdatData></UpdatData>}></Route> */}
{/* <Route path='/deleteuser/:id' element={<DeleteUser></DeleteUser>}></Route> */}
</Routes>

</BrowserRouter>


		</div>
}
export default App;