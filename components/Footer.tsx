const Footer = () => {
  return (
    <footer className="border-t-2 text-white p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Joke Generator. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
