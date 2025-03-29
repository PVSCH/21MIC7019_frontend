import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Top Section: Logo, Search Bar, Apply Button */}
      <div className="top-section">
        <div className="navbar-logo">
          <img 
            src="https://www.trademarkia.com/assets/images/logo_trademarkia.png" 
            alt="Trademarkia Logo" 
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="input-container">
            <div className="search-icon">
              <img 
                src="https://icons.veryicon.com/png/o/miscellaneous/monochrome-icon-1/search-521.png" 
                alt="Search" 
              />
            </div>
            {/* <input className="search-input" type="text" placeholder="Search for trademarks..." /> */}
            <div className="camera-icon">
              <img 
                src="https://png.pngtree.com/element_our/png/20181227/camera-glyph-black-icon-png_291736.jpg" 
                alt="Camera" 
              />
            </div>
          </div>
          <button className="search-button">Search</button>
        </div>

        {/* Right-Aligned Apply Button */}
        <button className="trademark-button">Apply for Trademark</button>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div className="nav-links">
        <a href="#" className="active"> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyjbsqtcSEdjf3otLXSfMUT0kDOI1_FJU1g&s"/>
             Trademarks</a>
        <a href="#">
          <img src="https://www.shutterstock.com/image-vector/people-person-icon-modern-flat-600nw-1691909635.jpg"/>
          Owners </a>
        <a href="#">
          <img src="https://www.shutterstock.com/image-vector/plant-icon-silhouette-two-branches-260nw-2343066399.jpg"/>
          Logos</a>
        <a href="#">
          <img src="https://logowik.com/content/uploads/images/283_world.jpg"/>
          Internet Brand Search</a>
        <a href="#">
          <img src="https://static.vecteezy.com/system/resources/previews/012/617/076/non_2x/copyright-simple-flat-symbol-icon-illustration-free-vector.jpg"/>
          Copyrights</a>
      </div>
    </div>
    
  );
};

export default Navbar;
