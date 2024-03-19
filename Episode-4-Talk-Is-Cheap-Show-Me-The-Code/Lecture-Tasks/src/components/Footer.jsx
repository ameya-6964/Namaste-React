const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; &nbsp;{new Date().getFullYear()}&nbsp;&nbsp;InstaFood😋
      </p>
      <p className="footer__date">{new Date().toDateString()}</p>
    </footer>
  );
};

export default Footer;
