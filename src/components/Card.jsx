export function Card(props) {

    const {
      title,
      image,
      text,
      desc,
      setDescription = Function.prototype
    } = props;
    return <div className="card" onClick={() => setDescription(desc)}>
    <div className="card-image" >
      <img src={image} alt='text' />
      <span className="card-title "><strong>{title}</strong></span>
    </div>
    <div className="card-content">
      <p>{text}</p>
    </div>
    {/* <div className="card-action">
      <a href="!#">This is a link</a>
    </div> */}
  </div>
}