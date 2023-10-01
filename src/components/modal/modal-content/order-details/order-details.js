import React from 'react';
import styles from './order-details.module.css';
import doneIcon from '../../../../images/done.svg'

function OrderDetails({orderPrice}) {

    return (
        <>
            <div className={`${styles.price} mt-30 mb-8 text text_type_digits-large`}>{orderPrice}</div>
            <div className={`${styles.description} text text_type_main-medium`}>идентификатор заказа</div>
            <div className={styles.icon}>
                <img className={styles.icon} src={doneIcon} alt={'done'}/>
            </div>
            <p className={`${styles.text} mb-2 text text_type_main-default`}>Ваш заказ начали готовить</p>
            <p className={`${styles.text} mb-30 text text_type_main-default text_color_inactive`}>Дождитесь готовности
                на орбитальной станции</p>
        </>
    )
}

export default OrderDetails;