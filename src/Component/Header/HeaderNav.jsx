import HeaderNavSub from "./HeaderNavSub";

const HeaderNav = ({ nav }) => {
    return (
        <>
            {nav.dropdown.length ?

                (
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle text-dark-emphasis text-capitalize"
                            href="/#" role="button" data-bs-toggle="dropdown"
                            style={{ fontSize: "14px", fontWeight: "bold" }}
                        >{nav.name}</a>

                        <ul className="dropdown-menu">
                            {nav.dropdown.map((elem) => {
                                return (
                                    <HeaderNavSub navSub={elem} key={elem.id} />
                                )
                            })}
                        </ul>

                    </li>
                )

                :

                (<li className="nav-item " >

                    <a
                        className="nav-link text-dark-emphasis text-capitalize"
                        href={nav.link}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                        {nav.name}
                    </a>

                </li>
                )}
        </>
    );
};

export default HeaderNav;