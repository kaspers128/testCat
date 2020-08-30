import React, {Component} from 'react';


export default class Product extends Component {

    render(){

        const {
            headDefault, headActive, flavor, portion, weight, present, 
            onChangeActive, onLeaveActive, active, activeLeave, disabled, 
            bottomActive, bottomDisabled
        } = this.props;

        let classProduct = 'product__top',
            headText = headDefault,
            stringOnClick = onChangeActive,
            stringOnLeave = null;

        if (active) {
            classProduct += ' product__top-active';
            stringOnLeave = onLeaveActive;
        }
        if (activeLeave){
            headText = headActive;
        }

        if (disabled) {
            classProduct = 'product__top product__top-disabled';
            stringOnClick = null;
        }

        let bottomText = (<>Чего сидишь? Порадуй котэ, <button onClick={stringOnClick}>купи</button></>);
        bottomText = (active) ? (<>{bottomActive}</>) : bottomText;
        bottomText = (disabled) ? (<span className="product__warning">{bottomDisabled}</span>) : bottomText;
        
        return (
            <div className="product" onMouseLeave={stringOnLeave}>
                <div className={classProduct} onClick={stringOnClick}>
                    <div className="product__inner">
                        <div className="product__pl">
                            <div className="product__head">{headText}</div>
                            <div className="product__name">Нямушка</div>
                            <div className="product__flavor">{flavor}</div>
                            <div className="product__desc">
                                <span><strong>{portion}</strong> порций</span>
                                <span>{present}</span>
                                <span>{(disabled) ? 'заказчик доволен' : ''}</span>
                            </div>
                        </div>
                        <div className="product__img">
                            <img src="./images/cat.png" alt="" />
                        </div>
                        <div className="product__weight">{weight} <div>кг</div></div>
                    </div>
                </div>
                <div className="product__bottom">
                    {bottomText}
                </div>
            </div>
        )
    }

}