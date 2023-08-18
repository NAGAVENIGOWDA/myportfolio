import './topbar.scss'
//we use material ui because we will be able to change the color of icons
import {Person,Mail} from '@material-ui/icons';

function Topbar({menuOpen,setMenuOpen}) {
  function handleClick (){
    setMenuOpen((prevMenuOpen)=>{
      return !prevMenuOpen;
    })

  }
  return (
    <div className={"topbar " +( menuOpen && "active" )}>
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
          <div className="humburger" onClick={handleClick}>
   
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
