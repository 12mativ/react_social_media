import * as Yup from "yup";

const usersSearchFormSchema = Yup.object({
    searchName: Yup.string().required('Required'),

});
export default usersSearchFormSchema;