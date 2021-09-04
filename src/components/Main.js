import React from 'react'
import {Solution} from './Solution'
import {Aboutus} from './Aboutus'
import {Team }from './Team';
import Client from './Client'
import Gains from './Gains'
import HowItWorks from './HowItWorks';


const Main = () => {
    return (
        <main id="main">
         
         <Solution />
         <Aboutus />
         <Gains />
         <HowItWorks />
         <Team />
         <Client />
        </main>
    )
}
export default Main;

