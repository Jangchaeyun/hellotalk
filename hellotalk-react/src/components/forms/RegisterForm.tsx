import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles"
import styles from './index.module.scss';

export const RegisterForm = () => {
     const {
          register, 
          handleSubmit,
          formState: { errors }
     } = useForm();
     console.log(errors);
     const onSubmit = (data: any) => {
          console.log(data)
     };
     return (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <InputContainer>
                    <InputLabel htmlFor="email" {...register('email', {
                         required: '이메일이 이미 존재합니다.'
                    })}>이메일</InputLabel>
                    <InputField type="email" id="email"/>
               </InputContainer>
               <section className={styles.nameFieldRow}>
                    <InputContainer>
                         <InputLabel htmlFor="firstName" {...register('firstName', {required: '이름이 이미 존재합니다.'})}>성</InputLabel>
                         <InputField type="text" id="firstName"/>
                    </InputContainer>
                    <InputContainer>
                         <InputLabel htmlFor="lastName" {...register('lastName', {required: '이름이 이미 존재합니다.'})}>이름</InputLabel>
                         <InputField type="text" id="lastname"/>
                    </InputContainer>
               </section>
               <InputContainer>
                    <InputLabel htmlFor="password" {...register('password', {required: '비밀번호가 이미 존재합니다.'})}>비밀번호</InputLabel>
                    <InputField type="password" id="password"/>
               </InputContainer>
               <Button className={styles.button}>계정 만들기</Button>
               <div className={styles.footerText}>
                    <span>계정이 있으십니까? </span>
                    <Link to="/login">
                         <span>로그인</span>
                    </Link>
               </div>
          </form>
     )
}

