import Thai from '../images/thai.jpg'
import Samui from '../images/samui.jpeg'
export function ThaiDesc(props) {
    const {setDescription = Function.prototype} = props
    return <div>
        <h3 className="center">Тайланд</h3>
        <p className="flow-text"><img className='img-description' src={Thai} alt='Thai' width="330" height="220" align='left'/>Таила́нд (тайск. ประเทศไทย), Короле́вство Таила́нд (тайск. ราชอาณาจักรไทย [râːtɕʰa ʔaːnaːtɕɑ̀k tʰɑj]), 
        до 1939 и в 1945—1948 годах Сиам — государство в Юго-Восточной Азии, расположенное в юго-западной части полуострова Индокитай и в северной части полуострова Малакка.
        Название (слово «тай» (ไทย) значит «свобода», «ланд» — страна) вполне себя оправдывает: 
        Таиланд — единственная страна Юго-Восточной Азии, сохранившая независимость от европейских государств, в то время как все соседние страны были колониями
         Франции или Великобритании. «Таиланд» (Thailand) —<img className='img-description' src={Samui} alt='Thai' width="330" height="220" align='right'/>  англоязычный вариант названия страны, введённый в обиход в 1939 году, — означает «страна тайцев»
         , тайский вариант звучит как Пратхет Тхай или Мыанг-Тхай. 
         Название страны стало эпонимом для таких названий, как Тайская кошка, Сиамская кошка, Сиамские близнецы, Тайский бокс и Тайский массаж.</p>
<button className="btn grey darken-2 buttons-main" onClick={() => setDescription('main')}>На главную страницу<i className="material-icons right">last_page</i></button>
    </div>
    
}