import FerrariImage from '../images/ferrari.jpg'
import Colliseum from '../images/colliseum.jpg'
export function ItalyDesc(props) {
    const {setDescription} = props
    return <div>
        <h3 className="center">Феррари тур по Италии</h3>
        <p className="flow-text"><img className='img-description' src={FerrariImage} alt='Ferrari' width="330" height="220" align='left'/>Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.

Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).<img className='img-description' src={Colliseum} alt='Ferrari' width="330" height="220" align='right'/>

Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.

Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.

На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.</p>
<button className="btn waves-effect light-blue darken-1 buttons-main" onClick={() => setDescription('main')}>На главную страницу</button>
    </div>
    
}