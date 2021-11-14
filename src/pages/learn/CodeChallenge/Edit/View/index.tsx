import React, { useCallback, useEffect, useMemo } from 'react'
import { CodeChallengeEditViewProps } from './interfaces'
import { IconButton, Typography } from 'material-ui'
import SaveIcon from 'material-ui-icons/Save'
import ResetIcon from 'material-ui-icons/Restore'
import {
  CodeChallengeEditViewStyled,
  CodeChallengeEditViewToolbarStyled,
  CodeChallengeEditViewContentStyled,
} from './styles'
// import { TestFile } from '../../Context'
// import { modeMap } from '../../View/Editor'
import { CodeChallengeEditDescription } from './Description'
import { CodeChallengeEditMonacoEditor } from './MonacoEditor'
import {
  CodeChallengeUpdateInput,
  useUpdateCodeChallengeMutation,
} from 'src/modules/gql/generated'
import useStore from 'src/hooks/useStore'
import TextField from 'src/components/ui/form/TextField'

export const CodeChallengeEditView: React.FC<CodeChallengeEditViewProps> = ({
  codeChallange,
}) => {
  const mutation = useUpdateCodeChallengeMutation()

  const localStorageKey = `codeChallange-${codeChallange.id}--draft`

  const { store, setValue, updateStore } =
    useStore<CodeChallengeUpdateInput>(null)

  const resetStore = useCallback(() => {
    localStorage.removeItem(localStorageKey)

    updateStore(null)
  }, [localStorageKey, updateStore])

  /**
   * При загрузке устанавливаем дефолтное хранилище
   */
  useEffect(() => {
    const storageValue = localStorage.getItem(localStorageKey)

    if (storageValue) {
      try {
        const value = JSON.parse(storageValue)

        if (value) {
          updateStore(value)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }, [localStorageKey, updateStore])

  /**
   * Сохраняем черновик в локальное хранилище
   */
  useEffect(() => {
    if (store) {
      const value = JSON.stringify(store)

      // console.log('useEffect value', value)

      if (value !== localStorage.getItem(localStorageKey)) {
        localStorage.setItem(localStorageKey, value)
      }
    }
    // else {
    //   localStorage.removeItem(localStorageKey)
    // }
  }, [localStorageKey, store])

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name

      switch (name) {
        case 'localeTitle':
          setValue(name, event.target.value)
          break
      }
    },
    [setValue]
  )

  const localeTitle = store?.localeTitle ?? codeChallange.localeTitle
  const description = store?.description ?? codeChallange.description
  const instructions = store?.instructions ?? codeChallange.instructions

  // const setValue = useCallback(
  //   (name: keyof CodeChallengeFragment, value: string | null | undefined) => {
  //     //
  //     name
  //     value

  //     console.log('setValue', name, value)
  //   },
  //   []
  // )

  const save = useCallback(() => {
    if (!store || mutation[1].loading) {
      return
    }

    mutation[0]({
      variables: {
        where: {
          id: codeChallange.id,
        },
        data: store,
      },
    }).then(async (r) => {
      if (r.data?.updateCodeChallenge) {
        try {
          await mutation[1].client.resetStore()
        } catch (error) {
          console.error(error)
        }

        /**
         * Сбрасываем данные редактора
         */
        resetStore()
      }
    })
  }, [codeChallange.id, mutation, resetStore, store])

  const buttons = useMemo<JSX.Element[] | null>(() => {
    if (!store) {
      return null
    }

    return [
      <IconButton
        key="reset"
        title="Отменить изменения"
        disabled={mutation[1].loading}
        onClick={resetStore}
      >
        <ResetIcon />
      </IconButton>,
      <IconButton
        key="save"
        color="secondary"
        title="Сохранить"
        disabled={mutation[1].loading}
        onClick={save}
      >
        <SaveIcon />
      </IconButton>,
    ]
  }, [mutation, resetStore, save, store])

  return (
    <>
      <CodeChallengeEditViewStyled>
        <CodeChallengeEditViewToolbarStyled>
          <div className="title">
            {/* <Link href={`/learn/exercises/${codeChallange.id}`}>
              <a>
                <Typography variant="title">
                  {codeChallange.localeTitle || codeChallange.name}
                </Typography>
              </a>
            </Link> */}

            <div className="fields">
              <TextField
                value={localeTitle || ''}
                name="localeTitle"
                onChange={onChange}
                helperText={
                  codeChallange.localeTitle || codeChallange.name || undefined
                }
                fullWidth
              />

              {buttons}
            </div>

            <Typography variant="subheading">{codeChallange.name}</Typography>
          </div>
        </CodeChallengeEditViewToolbarStyled>

        <CodeChallengeEditViewContentStyled>
          <div>
            <CodeChallengeEditMonacoEditor<'description'>
              name={'description'}
              value={description}
              setValue={setValue}
            />
          </div>

          <div>
            <CodeChallengeEditMonacoEditor<'instructions'>
              name={'instructions'}
              value={instructions}
              setValue={setValue}
            />
          </div>

          <CodeChallengeEditDescription
            description={description || ''}
            instructions={instructions || ''}
          />
        </CodeChallengeEditViewContentStyled>
      </CodeChallengeEditViewStyled>
    </>
  )
}
