import React from 'react'
import LinkButtonContainer from '../../components/LinkButtonContainer'
import LinkButton from '../../ui/Buttons/LinkButton'
import style from './EmptyBasketPage.module.css'

export default function EmptyBasketPage() {
  return (
      <div>
          <div className={style.shopingCartContainer}>
          <LinkButtonContainer title='Shopping cart'/>
              <LinkButton buttonText='Back to the store' />
          </div>
          <p className={style.emptyBasketText}>Looks like you have no items in your basket currently.</p>
          <button></button>
      </div>
  )
}
