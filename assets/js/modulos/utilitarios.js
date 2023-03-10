const converterParaMesBRL = (numero) => {
  let mes = null;

  switch (numero + 1){
    case 1: mes = 'janeiro'; break;
    case 2: mes = 'fevereiro'; break;
    case 3: mes = 'março'; break;
    case 4: mes = 'abril'; break;
    case 5: mes = 'maio'; break;
    case 6: mes = 'junho'; break;
    case 7: mes = 'julho'; break;
    case 8: mes = 'agosto'; break;
    case 9: mes = 'setembro'; break;
    case 10: mes = 'outubro'; break;
    case 11: mes = 'novembro'; break;
    case 12: mes = 'dezembro'; break;
    default: mes = 'janeiro'; break;
  }

  return mes;
}

const converterValor = (valor) => {
  return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

const controlarModal = () => {
  const botaoModal = document.querySelectorAll('[data-direito-autorais]');
  botaoModal.forEach(botao => {
    botao.addEventListener('click', (evento) => {
      const modal = document.querySelector('[data-modal]');
      modal.showModal();
      
      const btnFecha = modal.querySelector('[data-modal-fecha]');
      btnFecha.addEventListener('click', () => {
        modal.close();
      })
    })
  });
}

const mascararCamposMonetarios = (campo) => {
  SimpleMaskMoney.setMask(campo, {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
  });
}

const URLPaginaErro = './erro.html';

export{
  converterParaMesBRL,
  controlarModal,
  converterValor,
  URLPaginaErro,
  mascararCamposMonetarios
}