const Work = ({item}) => {
    return <>
        <div className="works__item">
                    <span>
                        {item.title}
                    </span>
                    <img className="work__img" src={"projects/" + item.img} alt="" />
                    <a href={item.link}>
                        <p >Перейти</p>
                        <img src="arrow.svg" alt="" />
                    </a>
                </div>
    </>;
};

export default Work;
