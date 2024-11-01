import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const index = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium text-white'>
          Política de Privacidade
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/70 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='p-2 rounded fixed bg-white h-[80%] w-1/2 overflow-y-scroll top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <Dialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>
            Política de Privacidade
          </Dialog.Title>
          <div className='flex flex-col gap-5'>
          <p className='w-full h-auto'>
            A sua privacidade é importante para nós. É política da Anatonelly Tech respeitar a sua privacidade em relação a qualquer
            informação sua que possamos coletar no site Anatonelly Tech, e
            outros sites que possuímos e operamos.
          </p>
          <p className='w-full h-auto'>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>
          <p className='w-full h-auto'>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p className='w-full h-auto'>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p className='w-full h-auto'>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </p>
          <p className='w-full h-auto'>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p className='w-full h-auto'>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </p>
          <div className='pl-5'>
            <li>
              O serviço Google AdSense que usamos para veicular publicidade usa um
              cookie DoubleClick para veicular anúncios mais relevantes em toda a
              Web e limitar o número de vezes que um determinado anúncio é exibido
              para você.
            </li>
            <li>
              Para mais informações sobre o Google AdSense, consulte as FAQs
              oficiais sobre privacidade do Google AdSense.
            </li>
            <li>
              Utilizamos anúncios para compensar os custos de funcionamento deste
              site e fornecer financiamento para futuros desenvolvimentos. Os
              cookies de publicidade comportamental usados ​​por este site foram
              projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </li>
            <li>
              Vários parceiros anunciam em nosso nome e os cookies de rastreamento
              de afiliados simplesmente nos permitem ver se nossos clientes
              acessaram o site através de um dos sites de nossos parceiros, para
              que possamos creditá-los adequadamente e, quando aplicável, permitir
              que nossos parceiros afiliados ofereçam qualquer promoção que pode
              fornecê-lo para fazer uma compra.
            </li>
          </div>
          <p className='w-full h-auto'>Compromisso do Usuário</p>
          <p className='w-full h-auto'>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que a Anatonelly Tech oferece no site e com caráter
            enunciativo, mas não limitativo:
          </p>
          <div className='pl-5'>
            <li>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </li>
            <li>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, Bet Nacional ou azar, qualquer tipo de pornografia
              ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            </li>
            <li>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) da Anatonelly Tech, de seus fornecedores ou terceiros,
              para introduzir ou disseminar vírus informáticos ou quaisquer outros
              sistemas de hardware ou software que sejam capazes de causar danos
              anteriormente mencionados.
            </li>
          </div>
          <p className='w-full h-auto'>Mais informações</p>
          <p className='w-full h-auto'>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default index;
