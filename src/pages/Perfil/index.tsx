import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useCallback } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/Header/Perfil'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Cart'
import Button from '../../components/Button'
import Loader from '../../components/Loader'

import { useGetRestCartQuery, usePurchaseMutation } from '../../services/api'
import { remove, close, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const { data: rest } = useGetRestCartQuery(id as string, {
    skip: !id // Pula a execução se o id não existir
  })
  const [purchase, { data: purchaseData, isSuccess, reset }] =
    usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [cart, setCart] = useState(true)
  const [payment, setPayment] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().when((values, schema) =>
        !payment && !cart
          ? schema
              .min(5, 'o Nome precisa ter pelo menos 5 caracateres')
              .required('Campo obrigatório')
          : schema
      ),
      address: Yup.string().when((values, schema) =>
        !payment && !cart
          ? schema
              .min(10, 'o Endereço precisa ter pelo menos 10 caracateres')
              .required('Campo obrigatório')
          : schema
      ),
      city: Yup.string().when((values, schema) =>
        !payment && !cart
          ? schema
              .min(3, 'A Cidade precisa ter pelo menos 3 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      cep: Yup.string().when((values, schema) =>
        !payment && !cart
          ? schema
              .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
              .max(9, 'O CEP precisa ter no máximo 9 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      number: Yup.number().when((values, schema) =>
        !payment && !cart ? schema.required('Campo obrigatório') : schema
      ),
      complement: Yup.string(),
      cardName: Yup.string().when((values, schema) =>
        payment && !cart ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payment && !cart ? schema.required('Campo obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payment && !cart ? schema.required('Campo obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payment && !cart ? schema.required('Campo obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payment && !cart ? schema.required('Campo obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkFormHasError = () => {
    return (
      Object.keys(form.errors).length > 0 ||
      Object.keys(form.touched).length === 0
    )
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const closeCart = useCallback(() => {
    dispatch(close())
  }, [dispatch])

  useEffect(() => {
    if (items.length === 0 && !isSuccess && !cart && !payment) {
      closeCart()
      setCart(true)
      if (rest) {
        navigate(`/perfil/${rest.id}`)
      }
    }
  }, [items, isSuccess, cart, payment, navigate, closeCart, rest])

  if (!rest) {
    return <Loader />
  }

  return (
    <>
      <HeaderPerfil />
      <Banner />
      <div className="container">
        <ProductList restaurants={[rest]} />
      </div>
      <>
        {cart ? (
          <Cart>
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{parseToBrl(item.preco)}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartItem>
                ))}
              </ul>
              <S.PriceContent>
                <p>Valor Total</p>
                <p>{parseToBrl(totalPrice)}</p>
              </S.PriceContent>
              <Button
                type="button"
                title="Clique para continuar com a entrega"
                onClick={() => {
                  setCart(false)
                  setPayment(false)
                }}
              >
                Continuar com a entrega
              </Button>
            </>
          </Cart>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {!cart && payment && !isSuccess ? (
              <Cart>
                <S.CartContent>
                  <div>
                    <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3>
                    <S.InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.RowInput>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <S.InputGroup
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="87px">
                        <label htmlFor="cardCode">CVV</label>
                        <S.InputGroup
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.RowInput>
                    <S.RowInput>
                      <S.InputGroup>
                        <label htmlFor="expiresMonth">Mês de Expiração</label>
                        <S.InputGroup
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="expiresYear">Ano de Expiração</label>
                        <S.InputGroup
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                    </S.RowInput>
                  </div>
                  <Button
                    type="button"
                    title="Clique para finalizar pagamento"
                    onClick={form.handleSubmit}
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    type="button"
                    title="Clique para voltar para edição de endereço"
                    onClick={() => {
                      setPayment(false)
                    }}
                  >
                    Voltar para edição de endereço
                  </Button>
                </S.CartContent>
              </Cart>
            ) : (
              <>
                {isSuccess && purchaseData ? (
                  <Cart>
                    <>
                      <S.OrderContent>
                        <h3>Pedido Realizado {purchaseData.orderId}</h3>
                        <p>
                          Estamos felizes em informar que seu pedido já está em
                          processo de preparação e, em breve, será entregue no
                          endereço fornecido.
                        </p>
                        <p>
                          Gostaríamos de ressaltar que nossos entregadores não
                          estão autorizados a realizar cobranças extras.
                        </p>
                        <p>
                          Lembre-se da importância de higienizar as mãos após o
                          recebimento do pedido, garantindo assim sua segurança
                          e bem-estar durante a refeição.
                        </p>
                        <p>
                          Esperamos que desfrute de uma deliciosa e agradável
                          experiência gastronômica. Bom apetite!
                        </p>
                      </S.OrderContent>
                      <Button
                        type="button"
                        title="Clique para concluir a compra"
                        onClick={() => {
                          closeCart()
                          clearCart()
                          setCart(true)
                          reset()
                        }}
                      >
                        Concluir
                      </Button>
                    </>
                  </Cart>
                ) : (
                  <Cart>
                    <S.CartContent>
                      <div>
                        <h3>Entrega</h3>
                        <S.InputGroup>
                          <label htmlFor="fullName">Quem irá receber</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={form.values.fullName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('fullName') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="address">Endereço</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('address') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="city">Cidade</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('city') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.RowInput>
                          <S.InputGroup>
                            <label htmlFor="cep">CEP</label>
                            <S.InputGroup
                              type="text"
                              id="cep"
                              name="cep"
                              value={form.values.cep}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cep') ? 'error' : ''
                              }
                              mask="99999-999"
                            />
                          </S.InputGroup>
                          <S.InputGroup>
                            <label htmlFor="number">Número</label>
                            <input
                              type="text"
                              id="number"
                              name="number"
                              value={form.values.number}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('number') ? 'error' : ''
                              }
                            />
                          </S.InputGroup>
                        </S.RowInput>
                        <S.InputGroup>
                          <label htmlFor="complement">
                            Complemento(opcional)
                          </label>
                          <input
                            type="text"
                            id="complement"
                            name="complement"
                            value={form.values.complement}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('complement') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                      </div>
                      <Button
                        type="button"
                        title="Clique para continuar pagamento"
                        onClick={() => {
                          if (!checkFormHasError()) {
                            setPayment(true)
                          } else {
                            alert(
                              'Por favor, preencha todos os campos obrigatórios corretamente.'
                            )
                          }
                        }}
                      >
                        Continuar com o pagamento
                      </Button>
                      <Button
                        type="button"
                        title="Clique para voltar para o carrinho"
                        onClick={() => setCart(true)}
                      >
                        Voltar para o carrinho
                      </Button>
                    </S.CartContent>
                  </Cart>
                )}
              </>
            )}
          </form>
        )}
      </>
    </>
  )
}

export default Perfil
