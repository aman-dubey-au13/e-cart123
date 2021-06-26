import React from 'react'
import { BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom'
import Userslist from "./Userslist"
import Orderslist from './Orderslist'
import Addproduct from './Addproduct'
import Productslist from './Productslist'
export default function Adminscreen() {
    return (
        <Router>
           <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-10'>
                    <ul className='admin p-2'>
                        <li><Link to='/admin/userslist' style={{ color: 'black' }}>Userslist</Link></li>
                        <li><Link to='/admin/productslist' style={{ color: 'black' }}>Products list</Link></li>
                        <li><Link to='/admin/addnewproduct' style={{ color: 'black' }}>Add new product</Link></li>
                        <li><Link to='/admin/orderslist' style={{ color: 'black' }}>Orderslist</Link></li>
                    </ul>
                    
                        <Switch>
                            <Route exact path='/admin/userslist'><Userslist/></Route>
                            <Route exact path='/admin/orderslist' component={Orderslist} />
                            <Route  exact path='/admin/addnewproduct' component={Addproduct} />
                            <Route exact path='/admin/productslist' component={Productslist} />
                        </Switch>
                    

                </div>
            </div>
        </div>
        </Router>
        
    )
}