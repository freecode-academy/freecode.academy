import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TabProps, Tabs } from 'src/components/Tabs'
import Button from 'src/components/ui/Button'
import {
  CreateLearnStrategyStageMutationVariables,
  useCreateLearnStrategyStageMutation,
} from 'src/modules/gql/generated'
import { CreateLearnStrategyStageProps } from './interfaces'
import { CreateLearnStrategyStageLearnStrategy } from './LearnStage'
import { CreateLearnStrategyStageStyled } from './styles'
import { CreateLearnStrategyStageTechnology } from './Technology'

enum StrategyStageType {
  // LearnStrategy = 'LearnStrategy',
  // Technology = 'Technology',
  LearnStrategy,
  Technology,
}

/**
 * Создание этапа стратегии развития
 */
export const CreateLearnStrategyStage: React.FC<CreateLearnStrategyStageProps> =
  ({ learnStrategy }) => {
    const [createMutation, { loading: inRequest, client }] =
      useCreateLearnStrategyStageMutation()

    const defaultVariables =
      useMemo<CreateLearnStrategyStageMutationVariables>(() => {
        return {
          data: {
            LearnStrategy: {
              id: learnStrategy.id,
            },
          },
        }
      }, [learnStrategy.id])

    const [variables, variablesSetter] =
      useState<CreateLearnStrategyStageMutationVariables>(defaultVariables)

    const [stageType, stageTypeSetter] = useState(
      StrategyStageType.LearnStrategy
    )

    const [opened, openedSetter] = useState(false)

    const toggleOpened = useCallback(() => {
      openedSetter(!opened)
    }, [opened])

    /**
     * При изменении типа этапа или закрытии формы, сбрасываем параметры
     */
    useEffect(() => {
      stageType
      opened

      variablesSetter(defaultVariables)
    }, [defaultVariables, opened, stageType])

    const onChangeTabIndex = useCallback((index) => {
      stageTypeSetter(index)
    }, [])

    const submit = useCallback(() => {
      if (inRequest) {
        return
      }

      createMutation({
        variables,
      })
        .then(async (r) => {
          /**
           * Если запрос выполнился успешно, закрываем форму и перезапрашиваем данные
           */
          if (r.data?.createLearnStrategyStage) {
            openedSetter(false)

            try {
              await client.resetStore()
            } catch (error) {
              console.error(error)
            }
          }
        })
        .catch(alert)
    }, [client, createMutation, inRequest, variables])

    const tabs = useMemo(() => {
      const tabs: TabProps[] = [
        {
          label: 'Технология',
          content: (
            <div>
              <h3>Выберите нужную технологию</h3>
              <div>
                <CreateLearnStrategyStageTechnology
                  submit={submit}
                  variables={variables}
                  variablesSetter={variablesSetter}
                  inRequest={inRequest}
                  learnStrategy={learnStrategy}
                />
              </div>
            </div>
          ),
        },
        {
          label: 'Стратегия развития',
          content: (
            <div>
              <h3>Выберите нужную стратегию развития</h3>
              <div>
                <CreateLearnStrategyStageLearnStrategy
                  submit={submit}
                  variables={variables}
                  variablesSetter={variablesSetter}
                  inRequest={inRequest}
                  learnStrategy={learnStrategy}
                />
              </div>
            </div>
          ),
        },
      ]

      return tabs
    }, [inRequest, learnStrategy, submit, variables])

    return useMemo(() => {
      return (
        <>
          <Button onClick={toggleOpened}>
            {!opened ? 'Добавить этап' : 'Отмена'}
          </Button>
          {opened ? (
            <CreateLearnStrategyStageStyled>
              <Tabs
                tabs={tabs}
                tabIndex={stageType}
                onChangeTabIndex={onChangeTabIndex}
              />
            </CreateLearnStrategyStageStyled>
          ) : null}
        </>
      )
    }, [onChangeTabIndex, opened, stageType, tabs, toggleOpened])
  }
