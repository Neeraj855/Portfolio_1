import "./WebMenu.css";

const WebMenu = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projets">
          <i class="fi fi-rr-edit-alt option-icon"></i>Projets
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-briefcase option-icon"></i>Works
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default WebMenu;
