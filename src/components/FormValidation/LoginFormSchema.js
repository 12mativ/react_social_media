import * as Yup from "yup";

const loginFormSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required("Required"),

});
export default loginFormSchema;