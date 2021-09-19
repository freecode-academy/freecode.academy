import React, { useCallback, useMemo } from 'react'
import {
  EditorComponentObject,
  EditorComponentProps,
} from '@prisma-cms/front-editor'
import SiteFrontEditor from 'src/components/SiteFrontEditor'
import { UserAboutProps } from './interfaces'
import { Typography } from 'material-ui'

export const UserAbout: React.FC<UserAboutProps> = ({
  userEdited,
  setData,
  inEditMode,
}) => {
  const onChangeState: EditorComponentProps['onChangeState'] = useCallback(
    (data) => {
      setData({
        about: {
          name: 'RichText',
          component: 'RichText',
          components: [],
          ...data,
        },
      })

      return data
    },
    [setData]
  )

  const object = useMemo<EditorComponentObject | null>(() => {
    if (!inEditMode && !userEdited.about) {
      return null
    }

    return (
      userEdited.about || {
        name: 'RichText',
        component: 'RichText',
        components: [],
        props: {},
      }
    )
  }, [inEditMode, userEdited.about])

  return useMemo(() => {
    if (!object) {
      return null
    }

    return (
      <>
        {inEditMode ? (
          <Typography variant="subheading">О себе</Typography>
        ) : null}
        <SiteFrontEditor
          inEditMode={inEditMode}
          itemsOnly
          onChangeState={onChangeState}
          object={object}
          className=""
        />
      </>
    )
  }, [inEditMode, object, onChangeState])
}
