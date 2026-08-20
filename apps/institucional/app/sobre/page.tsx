import { Envelope, Grade, Heroi, ListaTecnica, Nota, Pilha, Retrato, Secao, SecaoCabecalho } from "@geio/ui";
import { marca } from "@geio/tokens";
import { metadadosDaRota } from "@/conteudo/metadados";

export const metadata = metadadosDaRota({
  titulo: "Sobre",
  descricao:
    "Daiane Gondim — Arquiteta-Chefe e criadora do framework GEIO. Formação, base teórica e registro institucional.",
  caminho: "/sobre",
});

export default function Sobre() {
  return (
    <>
      <Heroi>
        <Envelope>
          <div className="apresentacao">
            <Retrato base="/daiane-gondim" alt="Retrato de Daiane Gondim" prioritario />
            <Pilha>
              <p className="rotulo">Custódia do framework</p>
              <h1>Daiane Gondim</h1>
              <p className="subtitulo">
                Criadora, Arquiteta-Chefe e custodiante formal do framework GEIO — Gestão
                Estrutural da Incompatibilidade Organizacional.
              </p>
            </Pilha>
          </div>
        </Envelope>
      </Heroi>

      <Secao rotuladaPor="titulo-formacao">
        <Envelope>
          <SecaoCabecalho rotulo="Formação" titulo="Base técnica" tituloId="titulo-formacao" />
          <ListaTecnica
            itens={[
              { codigo: "Principal", descricao: <><strong>Técnica em Planejamento e Controle da Produção</strong> — SENAI-MG, eixo Controle e Processos Industriais.</> },
              { codigo: "Em curso", descricao: <><strong>Computação Gráfica</strong> — Centro Universitário de Patos de Minas (UNIPAM).</> },
              { codigo: "Complementar", descricao: <><strong>NR-1 e Riscos Psicossociais</strong> — SEST SENAT.</> },
              { codigo: "Complementar", descricao: <><strong>Tecnologia e Sustentabilidade</strong> — UCB.</> },
              { codigo: "Complementar", descricao: <><strong>Supply Chain e Logistics</strong> — MIT OpenCourseWare.</> },
              { codigo: "16.842", descricao: "Fundamentals of Systems Engineering" },
              { codigo: "15.762J", descricao: "Supply Chain Planning" },
              { codigo: "15.763J", descricao: "Manufacturing Systems and Supply Chain Design" },
              { codigo: "15.772J", descricao: "D-Lab: Supply Chain" },
              { codigo: "ESD.260J", descricao: "Logistics Systems" },
              { codigo: "ESD.273J", descricao: "Logistics and Supply Chain Management" },
              { codigo: "ESD.290", descricao: "Special Topics in Supply Chain Management" },
              { codigo: "ESD.S43", descricao: "Green Supply Chain Management" },
              { codigo: "1.46", descricao: "Strategic Management in the Design and Construction Value Chain" },
            ]}
          />
          <Nota className="espaco-acima-largo">
            <strong>16.842 — Fundamentals of Systems Engineering</strong> é a disciplina que
            sustenta a base teórica declarada do framework: a Engenharia de Sistemas, citada em{" "}
            <a href="/metodologia">Metodologia</a> como referência do escopo e dos limites do GEIO.
          </Nota>
        </Envelope>
      </Secao>

      <Secao rotuladaPor="titulo-governanca">
        <Envelope>
          <SecaoCabecalho rotulo="Registro institucional" titulo="Governança e ecossistema" tituloId="titulo-governanca" />
          <ListaTecnica
            itens={[
              { codigo: "Instituição", descricao: <><strong>geio.tech</strong> — CNPJ {marca.cnpj}, {marca.cidade}.</> },
              { codigo: "Fundação", descricao: <>Framework instituído em <strong>08 de abril de 2026</strong>, com propriedade intelectual reservada.</> },
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
