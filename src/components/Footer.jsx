import React from "react";
function Footer() {
  const today = new Date();
  return (
    <footer className="h-18 bg-[#60a5fa]">
      <p> Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
