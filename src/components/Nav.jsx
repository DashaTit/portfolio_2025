const Nav = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="navigation">
                        <div className="logo">
                            <a href="./">Dary.</a>
                        </div>
                        <ul className="links">
                            <li><a href="#contacts">Контакты</a></li>
                            <li><a href="#works">Работы</a></li>
                            <a href="https://t.me/arrya_dt" className="btn">Написать мне</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Nav;