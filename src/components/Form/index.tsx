import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastError, ToastNotFound } from '../Toast';
import { ProcessData } from '../ProcessData';

import { api } from '../../services/api';

import 'react-toastify/dist/ReactToastify.min.css';

import {
  Container,
  Box,
  Description,
  ErrorMessage,
  FormContent,
  Input,
  Label,
  FormButton,
} from './styles';
import { InputData } from '../../models/InputData';
import { IFormProps } from '../../models/IFormProps';

export default function Form() {
  const {
    register, handleSubmit, formState, reset,
  } = useForm<InputData>();
  const [response, setResponse] = useState<Array<IFormProps>>([]);
  const [status, setStatus] = useState(200);
  const { errors } = formState;

  async function getInfo(process: string): Promise<IFormProps> {
    const { data, status } = await api.get(`tribproc/${process}`, {
      params: {
        tipo_numero: '8',
      },
    });
    setResponse(data);
    setStatus(status);
    return data;
  }
  const onSubmit: SubmitHandler<InputData> = async (data) => {
    getInfo(data.process);
    reset();
  };

  useEffect(() => {
    status !== 200 ? ToastError() : null;
    Object.keys(response).length === 1 ? ToastNotFound() : null;
  }, [response]);

  return (
    <Container>
      <Description>Acompanhe aqui o seu processo jurídico com mais facilidade</Description>
      <FormContent method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Label id="process">Processo:</Label>
          <Input
            type="text"
            id="process"
            placeholder="Digite o número do processo"
            {...register('process', {
              required: 'Por favor, informe o número do processo',
              minLength: 20,
            })}
          />
          {errors?.process && (
            <ErrorMessage>{errors?.process.message}</ErrorMessage>
          )}
        </Box>
        {!errors.process ? (
          <FormButton type="submit">Pesquisar</FormButton>
        ) : (
          <FormButton type="submit" disabled>
            Pesquisar
          </FormButton>
        )}
      </FormContent>
      {Object.keys(response).length > 1 && <ProcessData data={response} />}
    </Container>
  );
}
