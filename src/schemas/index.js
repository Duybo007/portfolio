import * as yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const reservSchema = yup.object().shape({
    name: yup.string().min(3, "Name must be at least 3 characters long").required("Please enter your name"),
    email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter a phone number"),
    message: yup.string().min(3, "Message must be at least 3 characters long").required("Please enter your message"),
})

