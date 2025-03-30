import "./HomePage.css";

const HomePage = () => {
  return (
    <div class="home-1">
      <div class="home-2">
        <div class="tbl-1">
          <div class="tbl-1-1">Also try searching for:</div>
          <div class="tbl-1-2">
            <button>nike*</button>
          </div>
          <div class="tbl-1-3">
            <button>*ike</button>
          </div>
        </div>
        <div class="tbl-2">
          <div class="tbl-2-1">Mark</div>
          <div class="tbl-2-2">Details</div>
          <div class="tbl-2-3">Status</div>
          <div class="tbl-2-4">Class/Description</div>
        </div>
        <div class="tbl-3">
          <div class="tbl-3-1">
            <div class="tbl-3-1-1">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTma5dtDVMb2B6TtUfZNa1-HyfPWJ803wotPg&s" 
                alt="Trademark Image" 
                style={{ width: "130px", height: "100px" }} /* Set image size */
              />
            </div>
          </div>
          <div class="tbl-3-2">
            <div class="tbl-3-2-1">
              <div class="tbl-3-2-1-1">
                <div class="info-1">
                  Nike
                </div>
                <div class="info-2">Nike, Inc.</div>
              </div>
              <div class="tbl-3-2-1-2">
                <div class="info-3">
                  <span class="green-dot"></span> 
                  <span class="green-text">Live/Registered</span>
                </div>
                <div class="info-4">on 24th oct 2023</div>
                </div>   
              <div class="tbl-3-2-1-3">Retail footwear and service</div>
            </div>
            <div class="tbl-3-2-2">
              <div class="tbl-3-2-2-1">
                <div class="info-5">78905678</div>
                <div class="info-6">23 Mar 1981</div>
              </div>
              <div class="tbl-3-2-2-2">
                <img 
                  src="https://w7.pngwing.com/pngs/498/480/png-transparent-arrow-circle-circular-text-symbol-smile-thumbnail.png" 
                  alt="Arrow Icon" 
                  style={{ width: "20px", height: "20px", marginRight: "8px" }} /* Set image size and spacing */
                />
                21st jun 2023
              </div>
              <div class="tbl-3-2-2-2">Class 042</div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="home-3">
        <h5>hihi</h5>
      </div>
    </div>
  );
}

export default HomePage;