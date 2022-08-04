import getCarAPI from '../api/get-car';

export const generateModalWindow: ({ id, time }: { id: number; time: number }) => Promise<void> = async ({
  id,
  time,
}: {
  id: number;
  time: number;
}): Promise<void> => {
  const modalWindow: HTMLDivElement = document.createElement('div');
  const body: HTMLBodyElement = document.getElementById('body') as HTMLBodyElement;
  const car = await getCarAPI(id);
  modalWindow.classList.add('modal');
  modalWindow.id = 'modal';
  modalWindow.innerText = `Winner: ${car.name}
  Time: ${time} (s)`;
  body.prepend(modalWindow);
};

export const deleteModalWindow: () => void = (): void => {
  const modalWindow: HTMLElement | null = document.getElementById('modal');
  if (modalWindow) {
    modalWindow.remove();
  }
};
