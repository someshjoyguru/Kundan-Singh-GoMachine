function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Go</span>Machine
              </li>
              <li>
              We offer a seamless platform connecting you with machine suppliers, facilitating quotes, scheduling, billing, logistics, documentation, and quality management
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; +91 123-456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                rameshdasconstructionpvtltd@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; rameshdasconstructionpvtltd@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/somesh-ghosh"
                >
                  Design by Somesh Ghosh
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Machines</a>
              </li>
              <li>
                <a href="#home">About Us</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Testimonials</a>
              </li>
              <li>
                <a href="#home">Contact Us</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe our Email address for latest offers & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
