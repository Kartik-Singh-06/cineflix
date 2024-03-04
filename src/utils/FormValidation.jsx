export const checkValidForm = (email,password,name)=>{
    const isemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isname = /[a-zA-Z]+\\.?/.test(name)
    if(!isemail) return "Email is not valid"
    if(!ispassword) return "Password is not valid"
    if(isname) return "Name is not valid"

    return null
}