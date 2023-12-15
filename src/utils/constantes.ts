import { FormTypes } from "../types/types";
import * as Yup from 'yup';

export const valoresIniciais: FormTypes = {
  campoA: '',
  campoB: '',
  campoC: '',
  campoD: ''
};

export const SchemaValidacao = Yup.object().shape({
  campoA: Yup.string().required('Campo vazio'),
  campoB: Yup.string().required('Campo vazio'),
  campoC: Yup.string().required('Campo vazio'),
  campoD: Yup.string().required('Campo vazio'),
});