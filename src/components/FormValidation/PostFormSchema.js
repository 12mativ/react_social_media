import * as Yup from "yup";

const postFormSchema = Yup.object({
    postText: Yup.string().required('Required')
});
export default postFormSchema;