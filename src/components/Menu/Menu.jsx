import './menu.scss'

function Menu({menuOpen,setMenuOpen}) {
  function handleClick(){
    setMenuOpen(false)
  }
  return (
    <div>
      <div className={"menu " +( menuOpen && "active" )}>
        <ul>
            <li onClick={handleClick}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={handleClick}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={handleClick}>
                <a href="#works">Works</a>
            </li>
            <li onClick={handleClick}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={handleClick}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
