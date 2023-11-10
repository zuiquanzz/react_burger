import styles from "./reset-password.module.css";
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuth} from "../../services/selectors";
import {getResetPassword} from "../../services/authorization/actions";
import {useForm} from "../../hooks/use-form";


export const ResetPassword = () => {

    const dispatch = useDispatch();

    const {forgotPassword} = useSelector(getAuth)

    const navigate = useNavigate();

    useEffect(() => {
        if (!forgotPassword) {
            navigate('/');
        }
    }, []);


    const {values, handleChange} = useForm({newPass: '', confirmCode: ''})
    const {newPass, confirmCode} = values;

    const inputRef = useRef(null)

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        inputRef.current.type === 'text' ? inputRef.current.type = 'password' : inputRef.current.type = 'text'
    }

    const resetPassword = (e) => {
        e.preventDefault();
        if (newPass !== '' && confirmCode !== '') {
            dispatch(getResetPassword(newPass, confirmCode))
            if (!forgotPassword) {
                navigate('/');
            }
        }
    }

    return (
        <>
            <div className={styles.box}>
                <div className={styles.headling}>Восстановление пароля</div>
                <form onSubmit={resetPassword}>
                    <Input
                        type={'text'}
                        placeholder={'Введите новый пароль'}
                        onChange={handleChange}
                        name={'newPass'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        ref={inputRef}
                        icon={'ShowIcon'}
                        onIconClick={onIconClick}
                        value={newPass}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={handleChange}
                        name={'confirmCode'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={confirmCode}
                    />
                    <div className={`${styles.button} mt-6`}>
                        <Button htmlType="submit" type="primary" size="medium">
                            Сохранить
                        </Button>
                    </div>
                </form>
                <div className={`${styles.register} mt-20`}>
                    <p className={`${styles.text} `}>Вспомнили пароль?</p>
                    <Link to='/sign-in' className={styles.link}>
                        <p className={`${styles.link} ml-2`}>Войти</p>
                    </Link>
                </div>
            </div>
        </>
    )
}