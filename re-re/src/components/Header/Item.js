import './Item.scss';

function Item(props) {
    console.log(props)
    return (
        <div className="header-slide">
            <img className="header-slide__img" src={props.value.img} alt="slider-img" />
            <h6 className="header-slide__title">{props.value.title}</h6>
            <p className="header-slide__text">{props.value.text}</p>
        </div>
    );
}

export default Item;