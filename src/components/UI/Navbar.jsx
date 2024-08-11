import { useLocation } from "react-router-dom";

export default function Nav({ links }) {
    const location = useLocation();
  
    return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => {

            // We check if the link is the active link by comparing the current route
            const isActive = location.pathname === link.props.to;
            // Clone the original link and add the 'active' class if it is active.
            return (
                <li
                  key={link.key}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  {link}
                </li>
              );
            })}

          </ul>
        </div>
      </div>
    </nav>
  );
}
