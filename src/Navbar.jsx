import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
    const classes = clsx({
        "nav-item": true,
        "text--md": true,
    });

    return (<header>
        <div className="header">
            {/* IMAGE */}
            <nav className="nav-list">
                <li className={classes}>
                    <NavLink
                        className={({isActive}) => (isActive ? "active" : "")}
                        to="/">
                            Home
                    </NavLink>
                </li>
                <li className={classes}>
                    <NavLink
                        className={({isActive}) => (isActive ? "active" : "")}
                        to="/pets">
                            Pets
                    </NavLink>
                </li>
                <li className={classes}>
                    <NavLink
                        className={({isActive}) => (isActive ? "active" : "")}
                        to="/pet-owners">
                            Pet owners
                    </NavLink>
                </li>
            </nav>
        </div>
    </header>);
}