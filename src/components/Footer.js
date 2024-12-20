import "../App.css";

function Footer () {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer_content">
                    <h5 className="black_lotus">
                        Тату студия - Black Lotus
                    </h5>

                    <div className="content_left">
                        <p className="left_p">
                        Телефон 
                        Tg/Whapp
                        Адрес
                        Метро
                        </p>
                        <p className="right_p">
                        +7 (812) 566-66-05
                        <br />
                        +7 (921) 951-22-24
                        <br />
                        ул. 2-я Советская, 12
                        <br />
                        Площадь Восстания
                        </p>
                    </div>
                </div>
                <small className="copyright">
                                COPYRIGHT 2024 © ВСЕ ПРАВА ЗАЩИЩЕНЫ
                </small>
            </div>
        </footer>
    )
}

export default Footer;