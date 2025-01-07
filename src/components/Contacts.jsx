const Contacts = () => {
    return (
        <>
            <div id="contacts" className="contacts">
                <h2  className="title">
                    Контакты
                </h2>

                <div className="contacts__item">
                    <span>
                        GitHub
                    </span>
                    <a href="https://github.com/DashaTit">
                        <p >Перейти</p>
                        <img src="/public/arrow.svg" alt="" />
                    </a>
                </div>

                <div className="contacts__item">
                    <span>
                        Telegram
                    </span>
                    <a href="https://t.me/arrya_dt">
                        <p >Перейти</p>
                        <img src="/public/arrow.svg" alt="" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contacts;
