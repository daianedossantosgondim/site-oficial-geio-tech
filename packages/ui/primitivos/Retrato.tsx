/**
 * Retrato institucional.
 *
 * <picture> com WebP e JPEG pré-gerados em vez do otimizador de imagem
 * do Next: o site inteiro é estático servido de CDN, e o otimizador
 * introduziria uma função em tempo de execução para servir uma única
 * foto que nunca muda.
 *
 * width e height explícitos reservam a caixa antes do carregamento —
 * a foto não empurra o texto quando chega. CLS zero.
 *
 * `prioritario` para retrato acima da dobra: ali ele é candidato a LCP,
 * e adiar o carregamento atrasaria justamente a métrica que se quer
 * proteger. Abaixo da dobra, o padrão preguiçoso é o certo.
 */
export function Retrato({
  base,
  alt,
  largura = 480,
  // Proporção do arquivo atual (1120 × 1223). Se a foto trocar, este
  // número troca junto — senão a caixa reservada deixa de bater com a
  // imagem e volta a haver deslocamento no carregamento.
  altura = 524,
  prioritario = false,
}: {
  base: string;
  alt: string;
  largura?: number;
  altura?: number;
  prioritario?: boolean;
}) {
  return (
    <figure className="retrato">
      <picture>
        <source
          type="image/webp"
          srcSet={`${base}-480.webp 480w, ${base}-720.webp 720w`}
          sizes="(max-width: 720px) 100vw, 320px"
        />
        <img
          src={`${base}-480.jpg`}
          srcSet={`${base}-480.jpg 480w, ${base}-720.jpg 720w`}
          sizes="(max-width: 720px) 100vw, 320px"
          width={largura}
          height={altura}
          alt={alt}
          loading={prioritario ? "eager" : "lazy"}
          fetchPriority={prioritario ? "high" : undefined}
          decoding={prioritario ? "sync" : "async"}
        />
      </picture>
    </figure>
  );
}
