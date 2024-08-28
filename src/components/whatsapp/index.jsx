import React from 'react';

const index = () => {
  return (
    <a
      href='https://wa.me/5531999551902/?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20software%21%0ANome%20do%20Projeto%3A%20%0ADescri%C3%A7%C3%A3o%20do%20Projeto%20%3A%20%0AFuncionalidades%20Desejadas%20%3A%20%0APrazo%20de%20Entrega%20%3A%20%0AOr%C3%A7amento%20Dispon%C3%ADvel%20%3A%20'
      className='Whatsapp rounded-full items-center justify-center fixed flex flex-col w-16 h-16 bottom-5 right-5 z-50 hover:scale-105'
    >
      <img
        className=' flex z-10 object-contain'
        src='/WhatsappLogo.png'
        alt=''
      />
      <div className='Cotacao bg-white w-20 z-10 h-auto -translate-y-14 rounded-md'>
        <p className='text-center'>Faça sua Cotação</p>
      </div>
    </a>
  );
};

export default index;
