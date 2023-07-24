const HeaderNavSub = ({ navSub }) => {
    return (
        <li><a className="dropdown-item " href="{navSub.link}">{navSub.name}</a></li>
    );
}

export default HeaderNavSub;