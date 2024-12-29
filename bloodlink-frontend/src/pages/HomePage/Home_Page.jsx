import { Link } from "react-router-dom";
import "./Home_Page.css";
import myImage from '../../assets/img.jpg';


function HomePage() {
  return (
<>
    {/*Header*/}  
    <header className="header">
    <div className="logo">
      <h1>BloodLink</h1>
    </div>
    <nav>
      <Link to="/Login">
        <button className="btn">Log In</button>
      </Link>
      <Link to="/SignUp">
        <button className="btn btn-signup">Sign Up</button>
      </Link>
    </nav>
  </header>


      {/* Hero Section */}
      <div className="hero">
        <img
          src={myImage}
          alt="Placeholder"
          className="hero-image"
        />
      </div>

      {/* About Us Section */}
      <section className="section about">
        <h2>About Us</h2>
        <p>
        At BloodLink, we are dedicated to transforming the way blood donation is conducted by connecting willing blood donors with those in urgent need. Our platform serves as a bridge between individuals who are ready to donate and hospitals or clinics that require life-saving blood. We believe that a single donation can make a profound impact, and we aim to make the donation process as simple and accessible as possible for everyone. Our mission is to build a community where donors are easily connected to those in need, ensuring that blood is always available in times of crisis. With an easy-to-use interface, we provide donors with the tools to register, find local donation events, and track their donation history, while offering recipients a reliable source to get the blood they need quickly. At BloodLink, we are committed to saving lives and making a difference, one donation at a time, and we envision a future where no one ever has to worry about the availability of blood when it's needed most.
        </p>
      </section>

      {/* Blood Donation Guide Section */}
      <section className="section guide">
        <h2>Blood Donation Guide</h2>
        <p>
        Donating blood is a simple yet powerful way to save lives, and understanding the process can help ensure your donation is as effective as possible. Before donating, it's important to prepare by staying hydrated, eating a healthy meal, and avoiding alcohol or caffeine. Donors should also be in generally good health, weigh at least 110 pounds, and be between the ages of 18 and 65. It’s essential to meet these eligibility criteria to ensure the safety of both the donor and the recipient. Once you donate, your blood is separated into components like red blood cells, platelets, and plasma, each serving a unique purpose in treating patients with various medical conditions, including trauma, cancer, and blood disorders. After donating, rest and hydrate to aid in your recovery. Your donation can save up to three lives, making it one of the most selfless acts you can do. Thank you for considering becoming a donor and contributing to saving lives in your community.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 BloodLink. All Rights Reserved.</p>
          <div>
            <Link to="/Login">
              <button className="btn">Log In</button>
            </Link>
            <Link to="/SignUp">
              <button className="btn btn-signup">Sign Up</button>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
