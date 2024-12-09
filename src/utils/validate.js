export const checkValidData = (fName, email, password) => {

    if (fName !== null) {
        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fName);
        if(!isNameValid) return "Invalid Name!!!";
    }

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is Invalid!!!";
    if(!isPasswordValid) return "Password is Invalid!!!";

    return null;
}