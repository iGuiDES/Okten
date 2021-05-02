import './card.style.css';

export default function Card(props) {
    let {title, img, alt, text, link} = props;

    return <div className={'container'}>
        <div className={'card-class'}>
            <h1 className={'h1-class'}>{title}</h1>
            <img className={'img-class'} src={img} alt={alt}/>
            <p className={'text-class'}>{text}</p>
            <button className={'btn-class'}>
                <a className={'link-class'}>{link}</a>
            </button>
        </div>
    </div>
}