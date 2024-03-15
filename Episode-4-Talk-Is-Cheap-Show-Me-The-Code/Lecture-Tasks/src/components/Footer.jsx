const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; &nbsp;{new Date().getFullYear()}&nbsp;&nbsp;InstaFood😋</p>
      <p>{new Date().toDateString()}</p>
    </footer>
  );
};

export default Footer;
