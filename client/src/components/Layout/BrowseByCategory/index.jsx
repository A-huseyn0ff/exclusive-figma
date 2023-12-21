import React from 'react'
import "./BrowseByCategory.scss"
import { SlScreenSmartphone } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { BiJoystick } from "react-icons/bi";
import { PiOfficeChairLight } from "react-icons/pi";
const BrowseByCategory = () => {
  return (
    <section className='BrowseByCategory'>
        <div className='BrowseByCategory_container'>
        <div className='BrowseByCategory_title'>
        <div className='BrowseByCategory_title_left'>
           <div className='BrowseByCategory_Categories'>
           <span></span>
            <p>Categories</p>
           </div>
           <div className='BrowseByCategory_Categories_title'>
                <h2>Browse By Category</h2>
               
            </div>
            </div> 
            <div className='BrowseByCategory_title_right'>
            
            </div> 
        </div>
        <div className='BrowseByCategory_row'>
<div className='col'>
<SlScreenSmartphone  className='icon'/>
<p>Phones</p>
</div>
<div className='col'>
<RiComputerLine  className='icon'/>
<p>Computers</p>
</div>
<div className='col'>
<BsSmartwatch  className='icon'/>
<p>Smartwatches</p>
</div>
<div className='col'>
<IoCameraOutline  className='icon'/>
<p>Cameras</p>
</div>
<div className='col'>
<IoHeadsetOutline  className='icon'/>
<p>HeadPhones</p>
</div>
<div className='col'>
<BiJoystick  className='icon'/>
<p>Gaming</p>
</div>
<div className='col'>
<PiOfficeChairLight  className='icon'/>
<p>Chairs</p>
</div>
        </div>
        </div>
    </section>
  )
}

export default BrowseByCategory