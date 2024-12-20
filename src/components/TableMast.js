import "../App.css";
import mas1 from "../assets/img-1.jpg";
import mas2 from"../assets/img-2.jpg";
import mas3 from"../assets/img-3.jpg";
import mas4 from"../assets/img-4.jpg";
import mas5 from"../assets/img-5.jpg";
import mas6 from"../assets/img-6.jpg";
import mas7 from"../assets/img-7.jpg";
import mas8 from"../assets/img-8.jpg";


function TableMast () {
    

    return (
        <div className="masters_about">
            <div className="container">
                <h1 className="masters_heading">
                    Мастера студии
                </h1>
                <p className="subheading_masters">
                    Опытные мастера. Креативное мышление.
                </p>
                    <div className="table_panels">
                        <div className="table_panel">
                            <img src={mas1} alt="table_images1" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                Канье Петров
                                </h3>
                                Стаж более 7 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas2} alt="table_images2" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Фар Куад
                                </h3>
                                Стаж более 3 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas3} alt="table_images3" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Марио Марьев
                                </h3>
                                Стаж более 20 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas4} alt="table_images4" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Петр Котов
                                </h3>
                                Стаж более 2 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas5} alt="table_images5" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Жанна Жабова
                                </h3>
                                Стаж более 4 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas6} alt="table_images6" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Шрек Шмеков
                                </h3>
                                Стаж более 22 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas7} alt="table_images7" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Ривай Титанов
                                </h3>
                                Стаж более 10 лет
                            </p>
                        </div>
                        <div className="table_panel">
                            <img src={mas8} alt="table_images8" className="table_images" />
                            <p className="table_names">
                                <h3 className="name_name">
                                    Сейлор Мун
                                </h3>
                                Стаж более 5 лет
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default TableMast;