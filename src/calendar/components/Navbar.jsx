import  "./Navbar.css"
export const NavBar = () => {
  return (
    <div className="nav">
        <div className="nav-header">
            <div className="nav-title">
            SaturnCRM
            </div>
        </div>
        <div className="nav-btn">
            <label>
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div className="nav-links">
            <a href="#" >Github</a>
            <a href="#" >Stackoverflow</a>
            <a href="#" >LinkedIn</a>
            <a href="#" >Codepen</a>
            <a href="#" target="_blank">JsFiddle</a>
        </div>
    </div>
  );
};
