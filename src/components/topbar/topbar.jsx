import './topbar.scss'
//we use material ui because we will be able to change the color of icons
import {Person,Mail} from '@material-ui/icons';

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className='topbar active'>
      <div className="wrapper">
        <div className="left">
       <a href="#intro" className='logo'>genius.</a>
        <div className="itemContainer">
        <Person className='icon'/>
        <span>+91 1234567892</span>
        </div>
        <div className="itemContainer" >
        <Mail className="icon"/>
        <span>nagaveniGowda@gmail.com</span>
        </div>
        </div>
        <div className="right">
          <div className="humburger">
   
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          
           

          </div>

       
          
        </div>
      </div>
      
    </div>
  )
}

export default Topbar
