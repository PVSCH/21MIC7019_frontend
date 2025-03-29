import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="container">
      <div id="logo">
        <img 
          src="https://www.trademarkia.com/assets/images/logo_trademarkia.png" 
          alt="Trademarkia Logo" 
        />
      </div>
      <div id="search-bar">
        <div id="search-icon">
          <img 
            src="https://icons.veryicon.com/png/o/miscellaneous/monochrome-icon-1/search-521.png" 
            alt="Search Icon" 
          />
        </div>
        <input type="text" placeholder="Search for trademarks..." />
        <button>Search</button>
        <button>Apply for Trademark</button>
      </div>
    </div>
  );
};

export default Navbar;