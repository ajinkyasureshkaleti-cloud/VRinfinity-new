import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ padding: "20px", background: "#222", color: "#fff" }}>
      <div className="row">
        <div className="col-md-8 copyright mt-2">
          Copyright © 2022. All Rights Reserved, to Digipace Consulting (OPC)
          Private Limited
        </div>
        <div className="col-md-4 privacyTandC mt-2">
          <div className="privacy">Policies</div>
          <div className="TandC">Terms & Condition</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
