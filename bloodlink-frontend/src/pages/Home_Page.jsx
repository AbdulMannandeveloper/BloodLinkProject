import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* Header Section */}
      <header>
        <Link to="/Login">
          <button>Log In</button>
        </Link>
        <Link to="/SignUp">
          <button>Sign Up</button>
        </Link>
      </header>

      {/* Image Section */}
      <div>
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="Placeholder"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* About Us Section */}
      <section>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet.
        </p>
      </section>

      {/* Blood Donation Guide Section */}
      <section>
        <h2>Blood Donation Guide</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet.
        </p>
      </section>

      {/* Footer Section with Log In and Sign Up Buttons */}
      <footer>
        <Link to="/LogIn">
          <button>Log In</button>
        </Link>
        <Link to="/SignUp">
          <button>Sign Up</button>
        </Link>
      </footer>
    </>
  );
}

export default HomePage;
