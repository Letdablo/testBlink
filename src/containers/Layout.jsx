import '../css/Layout.scss';

export default function Layout({children}) {
  return (
    <>
        {children}
        <button className='custom-button'> <div className='button-inner'><span className='button-text'>checkout</span></div></button>
    </>
  )
}
