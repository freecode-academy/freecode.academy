import React, { useCallback, useState } from 'react'
import { Typography } from 'material-ui'
import Button from 'src/components/ui/Button'
import TextField from 'src/components/ui/form/TextField'
import { DonateFormStyled } from './styles'

export const DonateForm: React.FC = () => {
  const [sum, sumSetter] = useState(1000)
  const [comment, commentSetter] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    switch (event.target.name) {
      case 'sum':
        sumSetter(parseInt(value))
        break

      case 'comment':
        commentSetter(value)
        break
    }
  }, [])

  return (
    <>
      <DonateFormStyled
        method="POST"
        action="https://yoomoney.ru/quickpay/confirm.xml"
        layout="column"
      >
        <Typography
          variant="title"
          style={{
            marginBottom: 15,
          }}
        >
          Поддержать проект FreeCode.Academy
        </Typography>
        <input
          title=""
          name="targets"
          value="На развитие проекта FreeCode.Academy"
          type="hidden"
        />{' '}
        <input type="hidden" title="" name="receiver" value="410011716898247" />{' '}
        {/* <TextField
          title=""
          name="formcomment"
          value="formcomment"
        />{' '}
        <TextField
          title=""
          name="short-dest"
          value="short-dest"
        />{' '} */}
        {/* <TextField title="" name="label" value="$order_id" />{' '} */}
        <input
          type="hidden"
          title=""
          name="quickpay-form"
          value="donate"
        />{' '}
        <TextField
          title="Сумма"
          // helperText="Можно изменить"
          name="sum"
          // value="1000"
          value={sum}
          // data-type="number"
          type="number"
          onChange={onChange}
        />{' '}
        <TextField
          title="Комментарий"
          name="comment"
          value={comment}
          onChange={onChange}
        />{' '}
        {/* <TextField name="need-fio" value="true" />{' '}
            <TextField name="need-email" value="true" />{' '}
            <TextField name="need-phone" value="false" />{' '}
            <TextField name="need-address" value="false" />{' '} */}
        {/* <label>
          <input type="radio" name="paymentType" value="PC" />
          ЮMoney
        </label>{' '}
        <label>
          <input type="radio" name="paymentType" value="AC" />
          Банковской картой
        </label>{' '} */}
        <Button type="submit" variant="success">
          Перевести
        </Button>
      </DonateFormStyled>
    </>
  )
}
