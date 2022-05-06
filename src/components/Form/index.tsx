import React from 'react';
import { useForm } from 'react-hook-form';

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

type InputData = {
  process: string
}

export default function Form() {
  const {
    register, formState,
  } = useForm<InputData>();
  const { errors } = formState;

  return (
    <Container>
      <Description>Acompanhe aqui o seu processo jurídico com mais facilidade</Description>
      <FormContent method="POST">
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
    </Container>
  );
}
