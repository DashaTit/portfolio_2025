import Work from "./Work";

const Works = () => {
    const works = [
        {
            title: "Московский паркет",
            img: "parket-mini.png",
            link: "https://msk-parket.ru/"
        },
        {
            title: "Центр ЦТСО РТ",
            img: "tstso_mini.png",
            link: "https://dashatit.github.io/Pautina-contest/"
        },
        {
            title: "Всероссийский центр банковских гарантий",
            img: "finance_mini.png",
            link: "https://f-finance.business/"
        },
        {
            title: "Hornymoon",
            img: "hornymoon_mini.png",
            link: "https://hornymoon.art/"
        },
        {
            title: "Переломный момент",
            img: "turningpoint_mini.png",
            link: "https://tokensale.turningpoint.expert/"
        },
        {
            title: "Zeitplan",
            img: "zeitplan-mini.png",
            link: "/"
        },
        {
            title: "Viniloff studio",
            img: "viniloff-studio.ru_.png",
            link: "https://viniloff-studio.ru/"
        },
    ];
    return (
        <>
            <div id="works" className="works">
                <h2 className="title">Работы</h2>
            </div>

            <div className="works__list">
                {works.map((e, i) => (
                    <Work key={i} item={e} />
                ))}
            </div>
        </>
    );
};

export default Works;
