export const validate=(name,email,password)=>{
    
    let isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    let isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    return [isNameValid,isEmailValid,isPasswordValid]
}