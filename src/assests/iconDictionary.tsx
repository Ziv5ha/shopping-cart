export interface Icons {
  [device: string]: JSX.Element;
}
export const icons: Icons = {
  iPhone: <i className='fas fa-mobile-alt'></i>,
  iPad: <i className='fas fa-tablet-alt'></i>,
  MacBook: <i className='fas fa-laptop'></i>,
  'Apple Watch': <i className='fas fa-clock'></i>,
};
