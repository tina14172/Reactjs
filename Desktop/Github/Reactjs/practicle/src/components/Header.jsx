const mystyle = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f2937",
    padding: "15px 40px",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};

function Header() {
  return (
    <section style={mystyle.header}>
      <div style={mystyle.logo}>Car World</div>

      <ul style={mystyle.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Services</li>
      </ul>
    </section>
  );
}

export default Header;