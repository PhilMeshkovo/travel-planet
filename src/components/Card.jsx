export function Card(props) {

    const {
      title,
      image,
      text,
      desc,
      setDescription = Function.prototype
    } = props;
    return <div className="card" >
    <div className="card-image" >
      <img src={image} alt='text' />
      <span className="card-title red-text"><strong>{title}</strong></span>
    </div>
    <div className="card-content">
      <p>{text}</p>
      {/* <i className="material-icons right">more_vert</i> */}
    {/* </div>
    <div className="card-action">
     */}
      <button className='btn light-blue darken-5 right' onClick={() => setDescription(desc)}>Подробнее<i className="material-icons right">more_horiz</i></button>
    </div>
  </div>
}