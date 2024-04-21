import "../App.css";

function IconsList() {
    const icon = [];
  
    for (let i = 1; i < 6; i++) {
        icon.push(
            <img src={"../assets/star.svg"} className="icon_img" alt={'icon_img item' + i}
                style={{
                    width:25,
                    height:25,
                }}
            />)
    }
  
    return icon;
  }

function Reviews (){
    return (
        <div className="all_reviews">
            <div className="container">
                <div className="clients_intro">
                    <h1 className="clients_review">
                        Отзывы клиентов
                    </h1>
                    <p className="clients_connect">
                        Обратная связь от наших клиентов, которой мы дорожим.
                    </p>
                </div>
                <div className="review_panels">
                    <div className="review_panel">
                            <p className="q_mark">
                                “
                            </p>
                        <blockquote>
                            <div className="top_review">
                                <h1 className="review_name">
                                    Мельникова Анна
                                </h1>
                                <div className="icons">
                                    <IconsList />
                                </div>
                            </div>
                            <p className='quote'>
                                Это была моя первая татуировка. Мастер Сейлор Мун работала максимально грамотно, 
                                приветсвенно и общительно, все было стирильно, был рассказан каждый шаг действий, 
                                по моим ощущениям процесс был не больным. Так же мне подробно рассказали про уход за 
                                татуировкой и я получила памятку по уходу.
                            </p>
                            <footer className="quote_footer">
                                2024-02-10
                            </footer>
                        </blockquote>
                    </div>
                    <div className="review_panel">
                            <p className="q_mark">
                                “
                            </p>
                        <blockquote>
                            <div className="top_review">
                                <h1 className="review_name">
                                    Мартынова Екатерина
                                </h1>
                                <div className="icons">
                                    <IconsList />
                                </div>
                            </div>
                            <p className='quote'>
                                Студия очень приятная, красивая и атмосферная! 
                                Я довольно работой мастера Петра Котова, абсолютно 
                                не стрессово и все очень подробно расскажут по всем вашим вопросам ✨♥️
                            </p>
                            <footer className="quote_footer">
                                2024-02-15
                            </footer>
                        </blockquote>
                    </div>
                    <div className="review_panel">
                            <p className="q_mark">
                                “
                            </p>
                        <blockquote>
                            <div className="top_review">
                                <h1 className="review_name">
                                    Haneoni
                                </h1>
                                <div className="icons">
                                    <IconsList />
                                </div>
                            </div>
                            <p className='quote'>
                                Здравствуйте, благодарю мастеров Шрека Шмекова за консультацию и 
                                Сейлор Мун за татуировку. Качественная, аккуратная работа и лёгкая рука. 
                                Персонал приятный, атмосфера уютная! Спасибо и ребятам на ресепшене! 
                                У вас очень комфортно, обязательно приду к Вам ещё за красотой)
                            </p>
                            <footer className="quote_footer">
                                2024-02-10
                            </footer>
                        </blockquote>
                    </div>
                    <div className="review_panel">
                            <p className="q_mark">
                                “
                            </p>
                        <blockquote>
                            <div className="top_review">
                                <h1 className="review_name">
                                    ecipov
                                </h1>
                                <div className="icons">
                                    <IconsList />
                                </div>
                            </div>
                            <p className='quote'>
                                Жанна Жабова - Богиня 🙇🏻‍♀️ Придала новую жизнь старой цветашке так,
                                что старая версия (с выпавшим пигментом, шрамированная) буквально ожила
                                и заиграла новыми красками, насмотреться на нее не могу. Рука у Жанны легкая
                                и, несмотря на сеанс около 6,5 часов и локацию татухи на ребрах, все
                                было почти не больно, по большей части щекотно. Атмосфера в салоне 
                                огненная, все максимально дружелюбные и находиться внутри очень комфортно.
                            </p>
                            <footer className="quote_footer">
                                2024-02-08
                            </footer>
                        </blockquote>
                    </div>
                    <div className="review_panel">
                            <p className="q_mark">
                                “
                            </p>
                        <blockquote>
                            <div className="top_review">
                                <h1 className="review_name">
                                    Елизавета К.
                                </h1>
                                <div className="icons">
                                    <IconsList />
                                </div>
                            </div>
                            <p className='quote'>
                                Отличный салон, дружелюбная атмосфера. Мастер тату Марио - 
                                крутой специалист своего дела и очень душевный человек 😊 
                                Я давно искала «своего» мастера, наконец-то это произошло😊 
                                Без раздумий записалась на еще один сеанс, будем апгрейдить 
                                ошибки молодости
                            </p>
                            <footer className="quote_footer">
                                2024-02-07
                            </footer>
                        </blockquote>
                    </div>
                    <div className="review_panel">
                            <p className="q_mark">
                                “
                            </p>
                        <blockquote>
                            <div className="top_review">
                                <h1 className="review_name">
                                    Василиса Титова
                                </h1>
                                <div className="icons">
                                    <IconsList />
                                </div>
                            </div>
                            <p className='quote'>
                                Очень рада,что выбрала данный салон для своей 
                                первой татуировки☺️Спокойная и приятная атмосфера,вежливые 
                                сотрудники. Большая благодарность Риваю Титанову за работу🙏🏽
                            </p>
                            <footer className="quote_footer">
                                2024-02-02
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;