interface IitemsProps{
  img?:string,
  title:string,
  text:string,
  textButton: string
}
interface IitemsModal{
  items:IitemsProps,
}
export const Modal= (items:IitemsProps)=>{
  const {img='.',title,text,textButton} = items;
  return(
    <div className="card">
      <img src={img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{textButton}</a>
      </div>
    </div>
  );
}
export default Modal