import './card.style.css';

function Card(props) {
    let {title, img, alt, text, btn, link} = props;
    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                <h1 className={'wrapper-header'}>{title}</h1>
                <div className={'wrapper-image-block'}>
                    <img className={'images'} src={img} alt={alt}/>
                    <p className={'wrapper-text'}>{text}</p>
                </div>
                <button className={'btn-block'}>
                    <a className={'link-block'} href={link}>{btn}</a>
                </button>
            </div>
        </div>
    )
}

export default Card;