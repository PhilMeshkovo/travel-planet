import FlamingoDomin from '../images/flamingoDomin.jpg'
import Beach from '../images/dominicanaBeach.jpg'
export function DominicDesc(props) {
    const {setDescription} = props


    return <div>
        <h3 className="center">Рай в Доминикане</h3>
        <p className="flow-text"><img className='img-description' src={FlamingoDomin} alt='Dominicana' width="330" height="220" align='left'/>Доминика́нская Респу́блика (исп. República Dominicana [reˈpuβlika ðominiˈkana]),
         в турбизнесе также известна как Доминика́на[5] — государство в восточной части острова Гаити (Карибское море)
          и на прибрежных островах. Западную часть острова (36% территории) занимает государство Республика Гаити.
           Остров входит в состав архипелага Больших Антильских островов. 
           Столица — Санто-Доминго. Официальный язык — испанский. Население государства — около 10,5 млн чел.
           (2020). Большую часть своей истории (до независимости) колония была известна как «Санто-Доминго»,
           <img className='img-description' src={Beach} alt='Dominicana' width="330" height="220" align='right'/>
            в честь её святого заступника, Святого Доминика. Жителей назвали «Dominicanos» («Доминиканцы»), 
            адъективная форма «Доминго», и революционеры назвали свою независимую страну «Ла Република 
            Доминикана (La República Dominicana)».</p>
            <div className="row">
                        <h5 style={{margin: '2rem 0 1.5rem'}}>Интересные факты</h5>
                      <iframe title="Dominicana" src="https://www.youtube.com/embed/27r5PAyeTFg" allowfullscreen/>
                     
            </div>
<button className="btn grey darken-2 buttons-main" onClick={() => setDescription('main')}>На главную страницу<i className="material-icons right">last_page</i></button>
    </div>
    
}