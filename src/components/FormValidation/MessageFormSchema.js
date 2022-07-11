import * as Yup from "yup";

const messageFormSchema = Yup.object({
    message: Yup.string().required('Required')
});
export default messageFormSchema;