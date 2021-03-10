import style from './Targets.module.scss'



function TargetItem(props) {
    return (
        <div className={style.target_item}>
            <h3 className={style.heading}>
                {props.heading}
            </h3>
            <p className={style.paragraph}>
                {props.children}
            </p>
        </div>
    );
}

function Targets() {
    return (
        <ul className={style.targets}>
            <li className={style.item}>
                <TargetItem heading="7">
                    лет на рынке
                </TargetItem>
            </li>
            <li className={style.item}>
                <TargetItem heading="20">
                    человек в штате
                </TargetItem>
            </li>
            <li className={style.item}>
                <TargetItem>
                    <span className={style.p_third_item}>
                        Мы делаем<br /><span className={style.p_item}>production</span><br />контент
                    </span>
                </TargetItem>
            </li>
        </ul>
    );
}



export default Targets