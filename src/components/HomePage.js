import "./HomePage.css";


const HomePage = ()=>{


    return (<div class="home-1">
       
        <div class="home-2">
             {/* Search Section */}
             <div className="search-container">
                <span>Also try searching for:</span>
                <button className="search-btn">nike*</button>
                <button className="search-btn">*ike</button>
            </div>

            {/* Table Layout */}
            <div className="table-container">
                <div className="table-head">
                    <span>Mark</span>
                    <span>Details</span>
                    <span>Status</span>
                    <span>Class/Description</span>
                </div>

                <div className="table-content">
                    {/* Logo Section */}
                    <div className="logo-box">
                        <img src="nike-logo.png" alt="Nike Logo" />
                    </div>

                    {/* Details Section */}
                    <div className="info-box">
                        <strong>NIKE</strong>
                        <span>Nike, Inc.</span>
                        <span><b>73302505</b></span>
                        <span>23 Mar 1981</span>
                    </div>

                    {/* Status Section */}
                    <div className="status-box">
                        <span className="active-status">● Live/Registered</span>
                        <span>on 24 Oct 2023</span>
                        <br />
                        <span className="expire-status">🔄 21 Jun 2033</span>
                    </div>

                    {/* Class & Description Section */}
                    <div className="class-box">
                        <span>Retail Footwear and Apparel Store Services</span>
                        <span>⚖ Class 042</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-3"><h5>hi</h5></div>


    </div>);
}


export default HomePage;