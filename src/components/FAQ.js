import React, { useState } from 'react';
import "../App.css";

const ExpandableItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-element ${expanded ? 'expanded' : ''}`}>
      <div onClick={handleToggle}>
        <h3 className='expandable_h3'>{title}{expanded ? <span>&#9660;</span> : <span>&#9654;</span>}</h3>
      </div>
      {expanded && <p className='expandable_p'>{content}</p>}
    </div>
  );
};

function FAQ (){
    return (
        <div className="all_faq">
            <div className="container">
                <div className="faq_headline">
                    <h1 className="faq_heading">
                      Часто задаваемые вопросы
                    </h1>
                    <p className="faq_par">
                      На этой странице наша команда постарается ответить на все 
                      самые распространенные вопросы связанные с модификацией тела, 
                      с которыми они сталкиваются каждый день.
                    </p>
                </div>
                <div className="faq_container">
                  <div className="faq_expandable">
                      <ExpandableItem title='Сколько стоит татуировка?' content='Назвать стоимость татуировки сложно, так как количество факторов,
                          влияющих на окончательную стоимость велико. Цена услуг мастера складывается 
                          из нескольких пунктов, таких как размер изображения, область нанесения 
                          рисунка, сложность эскиза, стиль татуировки, количество сеансов для 
                          завершения работы. Окончательную цену можно узнать только после личного общения с мастером.' />
                  </div>
                  <div className="faq_expandable">
                      <ExpandableItem title='Что означает эта татуировка?' content='Значения тату, как и значения 
                      других социальных сигналов, зависят от контекста, в котором раскрываются. Это значит, что одна 
                      и та же татуировка может означать разные вещи в разных социальных группах. В современном обществе 
                      татуировка заключает в себе только тот смысл, которую в нее заложил обладатель.' />
                  </div>
                  <div className="faq_expandable">
                      <ExpandableItem title='Как долго заживает тату?' content='Время заживления татуировки индивидуально 
                      у каждого человека, но в среднем период полного восстановления занимает от 21 дней. При соблюдении 
                      рекомендаций по заживлению и правильным уходом за свежей татуировкой процесс будет проходить 
                      быстрее и приятнее.' />
                  </div>
                  <div className="faq_expandable">
                      <ExpandableItem title='Делать тату – это безопасно?' content='Вероятность столкнуться с рисками 
                      у профессионального мастера сводится к нулю. У нас в студии работают опытные мастера, 
                      используются одноразовые расходные материалы и всё оборудование проходит все этапы 
                      стерилизации. Опасно делать татуировки на дому или в сомнительных тату студиях.' />
                  </div>
                </div>
                <div className="faq_outro">
                  Если у Вас появился вопрос, ответ на который Вы не нашли, то не стесняйтесь, пишите нам 
                  через форму на сайте, онлайн чат на сайте, а так же можно написать нам в telegram или whatsapp.
                </div>
            </div>
        </div>
    )
}

export default FAQ;