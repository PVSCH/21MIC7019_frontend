import React from "react";


const HomePage = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Add API call or filtering logic here
  };

  return (
    <div className="home-1">
      <SearchBar onSearch={handleSearch} />
      {/* Other homepage content */}
    </div>
  );
};

export default HomePage;
