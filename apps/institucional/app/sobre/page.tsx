import { Envelope, Grade, Heroi, ListaTecnica, Nota, Pilha, Secao, SecaoCabecalho } from "@geio/ui";
import { marca } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Sobre",
  descricao:
    "Daiane Gondim — Arquiteta-Chefe e criadora do framework GEIO. Formação, base teórica e ecossistema de incubação.",
  caminho: "/sobre",
});

export default function Sobre() {
  return (
    <>
      <Heroi>
        <Envelope>
          <Pilha>
            <p className="rotulo">Custódia do framework</p>
            <h1>Daiane Gondim</h1>
            <p className="subtitulo">Criadora, Arquiteta-Chefe e custodiante formal do framework GEIO.</p>
          </Pilha>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-formacao">
        <Envelope>
          <SecaoCabecalho rotulo="Formação" titulo="Base técnica" tituloId="titulo-formacao" />
          <ListaTecnica
            itens={[
              { codigo: "Principal", descricao: <><strong>Técnica em Planejamento e Controle da Produção</strong> — SENAI-MG, eixo Controle e Processos Industriais.</> },
              { codigo: "Em curso", descricao: <><strong>Computação Gráfica</strong> — Centro Universitário de Patos de Minas (UNIPAM).</> },
              { codigo: "Complementar", descricao: <><strong>Tecnologia e Sustentabilidade</strong> — UCB.</> },
              { codigo: "Complementar", descricao: <><strong>Supply Chain e Logistics</strong> — MIT OpenCourseWare.</> },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-governanca">
        <Envelope>
          <SecaoCabecalho rotulo="Registro institucional" titulo="Governança e ecossistema" tituloId="titulo-governanca" />
          <ListaTecnica
            itens={[
              { codigo: "Instituição", descricao: <><strong>geio.tech</strong> — CNPJ {marca.cnpj}, {marca.cidade}.</> },
              { codigo: "Fundação", descricao: <>Framework instituído em <strong>08 de abril de 2026</strong>, com propriedade intelectual reservada.</> },
              { codigo: "Incubação", descricao: <>Empresa residente na <strong>Farol Incubadora de Empresas (FEPAM)</strong>, {marca.cidade}.</> },
              { codigo: "Governança", descricao: "Composição provisória unipessoal, com custódia formal declarada." },
            ]}
          />
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-perfis">
        <Envelope>
          <Pilha>
            <SecaoCabecalho
              rotulo="Verificação"
              titulo="Perfis públicos"
              tituloId="titulo-perfis"
              subtitulo="Referências profissionais e produção acadêmica registrada."
            />
            <Grade className="espaco-acima-minimo">
              <div>
                <h3>Currículo Lattes</h3>
                <p>Registro acadêmico oficial na plataforma do CNPq.</p>
                <p className="contato-linha espaco-acima-minimo">
                  <a href={marca.lattes} target="_blank" rel="noopener">
                    lattes.cnpq.br/4591515697537753
                  </a>
                </p>
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p>Perfil profissional e publicações técnicas.</p>
                <p className="contato-linha espaco-acima-minimo">
                  <a href={marca.linkedin} target="_blank" rel="noopener">
                    linkedin.com/in/daianegondim
                  </a>
                </p>
              </div>
            </Grade>
            <Nota className="espaco-acima-largo">
              Contato institucional — agendamento e dúvidas:{" "}
              <a href={`mailto:${marca.email}`}>{marca.email}</a>
            </Nota>
          </Pilha>
        </Envelope>
      </Secao>
    </>
  );
}
