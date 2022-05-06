import { toast } from 'react-toastify';

export function ToastNotFound() {
  return toast.error('Processo não localizado.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function ToastError() {
  return toast.error('Ocorreu um erro na comunicação. Por favor, tente novamente.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
