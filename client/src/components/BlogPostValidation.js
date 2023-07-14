import * as yup from "yup";

export const BlogSchema = yup.object().shape({
  imgURL: yup.string().required(),
  shortTitle: yup.string().required(),
  longDesc: yup.string().required(),
});
