import SuperButton from '../components/superButton';
import '../css/Layout.scss';

export default function Layout({children}) {
  return (
    <>
        {children}
       <SuperButton text={'checkout'}></SuperButton>
    </>
  )
}
