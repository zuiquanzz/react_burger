import styles from "./sign-in-page.module.css";
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAuthLogin} from "../../services/authorization/actions";


export const SignInPage = () => {

    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const inputRef = useRef(null)
    const dispatch = useDispatch();

    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        inputRef.current.type === 'text' ? inputRef.current.type = 'password' : inputRef.current.type = 'text'
    }

    const loginCheck = (e) => {
        if (valueEmail !== '' && valuePassword !== '') {
            e.preventDefault();
            dispatch(getAuthLogin(valueEmail, valuePassword))
        }
    }

    return (
        <>
            <div className={styles.box}>
                <div className={styles.head}>Вход</div>
                <form onSubmit={loginCheck}>
                    <Input
                        type={'text'}
                        placeholder={'E-mail'}
                        onChange={e => setValueEmail(e.target.value)}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={valueEmail}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Пароль'}
                        icon={'ShowIcon'}
                        onChange={e => setValuePassword(e.target.value)}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={valuePassword}
                    />
                    <div className={`${styles.button} mt-6`}>
                        <Button htmlType="submit" type="primary" size="medium">
                            Войти
                        </Button>
                    </div>
                </form>
                <div className={`${styles.register} mt-20`}>
                    <p className={`${styles.text} `}>Новый пользователь?</p>
                    <Link to='/register' className={styles.link}>
                        <p className={`${styles.link} ml-2`}>Зарегистрироваться</p>
                    </Link>
                </div>
                <div className={`${styles.register} mt-2`}>
                    <p className={`${styles.text} `}>Забыли пароль?</p>
                    <Link to='/forgot-password' className={styles.link}>
                        <p className={`${styles.link} ml-2`}>Восстановить пароль</p>
                    </Link>
                </div>
            </div>
        </>
    )
}