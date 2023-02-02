import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles"
import styles from './index.module.scss';

export const LoginForm = () => { 
     const {
          register, 
          handleSubmit,
          formState: { errors }
     } = useForm();

     const onSubmit = (data: any) => { };

     return (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <InputContainer>
                    <InputLabel htmlFor="email">이메일</InputLabel>
                    <InputField type="email" id="email" {...register('email', { required: true })} />
               </InputContainer>
               <InputContainer className={styles.loginFormPassword}>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <InputField type="password" id="password" {...register('password', { required: true })}/>
               </InputContainer>
               <Button>로그인</Button>
               <div className={styles.footerText}>
                    <span>계정이 없으십니까? </span>
                    <Link to="/register">
                         <span>회원가입</span>
                    </Link>
               </div>
          </form>
     )
}

