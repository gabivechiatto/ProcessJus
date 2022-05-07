import React from 'react';
import {
  Subtitle,
  TitleProcess,
  TitleCourt,
  Time,
  Info,
  Mov,
  Parts,
  Movimentations,
  Container,
  ContainerParts,
  HeaderContent,
  Details,
} from './styles';

interface IDataProps {
  data: {
    numero: string
    numero_alternativo: string
    foro: string
    comarca_cnj: string
    uf: string
    vara: string
    area: string
    assunto: string
    natureza: string
    alteradoEm: string
    distribuicaoData: string
    partes: Array<{}>
    tribunal: string
    classeNatureza: string
    comarca: string
    valor: number
    movs: Array<{}>
    instancia: number
  }
}
export function ProcessData({ data }: IDataProps): JSX.Element {
  const dataAtualizacao = new Date(data.alteradoEm).toLocaleDateString(
    'pt-BR',
    {
      hour: 'numeric',
      minute: 'numeric',
    },
  );
  const dataDistribuicao = new Date(data.distribuicaoData).toLocaleDateString(
    'pt-BR',
  );
  const valorCausa = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data.valor);

  const partes = [...data.partes].map((parte: any) => parte[2]);

  const advogados = [...data.partes]
    .flatMap((adv: any) => adv[9])
    .map((name) => name[1]);

  const oabs = [...data.partes]
    .flatMap((adv: any) => adv[9])
    .map((name) => name[2]);

  const tiposPartes = [...data.partes].map((parte: any) => parte[8]);

  return (
    <Container>

      <HeaderContent>
        <TitleProcess>
          Processo: {data.numero}
        </TitleProcess>
        <TitleCourt>
          Tribunal: {data.tribunal}
        </TitleCourt>
        <Time>
          Atualizado em: {dataAtualizacao}
        </Time>
      </HeaderContent>

      <Details>
        <Subtitle>Detalhes do Processo:</Subtitle>
        <Info>
          <p><b>Vara:</b> {data.vara}{data.instancia} ª Instância / {data.area}</p>
        </Info>
        <Info>
          <p><b>Natureza: </b> {data.classeNatureza}</p>
        </Info>
        <Info>
          <p><b>Comarca: </b>{data.comarca}</p>
        </Info>
        <Info>
          <p><b>Data de distribuição: </b><time>{dataDistribuicao}</time></p>
        </Info>
        <Info>
          <p><b>Valor da causa: </b>{valorCausa}</p>
        </Info>
      </Details>

      <Subtitle>Detalhes das Partes:</Subtitle>
      <ContainerParts>
        <Parts>
          {tiposPartes?.map((tipo: string) => (
            <p><b>{tipo}: &nbsp;&nbsp;</b></p>
          ))}
        </Parts>
        <Parts>
          {partes?.map((parte: string) => (
            <p>{parte}</p>
          ))}
        </Parts>
      </ContainerParts>

      <Subtitle>Detalhes dos Advogados:</Subtitle>
      <ContainerParts>
        <Parts>
          {advogados?.map((adv: string) => (
            <p key={Math.random()}>{adv}</p>
          ))}
        </Parts>
        <Parts>
          {oabs?.map((oab: string) => (
            <p key={Math.random()}>&nbsp;&nbsp; <b>OAB: </b>{oab}</p>
          ))}
        </Parts>
      </ContainerParts>

      <Mov>
        <caption><Movimentations>Movimentações Processuais</Movimentations></caption>
        <thead>
          <tr>
            <th scope="col">Data:</th>
            <th scope="col">Andamento: </th>
            <th scope="col">Descrição: </th>
          </tr>
        </thead>
        <tbody>
          {data.movs?.map((element: any) => (
            <tr key={Math.random()}>
              <td key={Math.random()}>
                {new Date(element[0]).toLocaleDateString('pt-BR')}
              </td>
              <td key={Math.random()}>
                {element[1]}
              </td>
              <td key={Math.random()}>
                {element[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </Mov>

    </Container>
  );
}
