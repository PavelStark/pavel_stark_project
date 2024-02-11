import style from './MainButton.module.css'


export default function MainButton( { onClick, title, widthBtn } ) {

  return (
    <div>
      <button onClick={onClick} className={style.checkout_btn} style={{ width: widthBtn + 'px' }} >{title}</button>
    </div>
  )
}

