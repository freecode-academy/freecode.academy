import React, { useMemo } from 'react'
import { LearnStrategyView } from '..'
import { LearnStageTechnology } from './LearnStageTechnology'
import { LearnStrategyViewStagesProps } from './interfaces'
import { CreateLearnStrategyStage } from './Create'

export const LearnStrategyViewStages: React.FC<LearnStrategyViewStagesProps> =
  ({ learnStrategy, loadedIDsWithCurrent, currentUser, inEditMode }) => {
    /**
     * Технологии
     */
    const technologies = useMemo<JSX.Element[]>(() => {
      const items: JSX.Element[] = []

      learnStrategy?.LearnStrategyStages?.forEach((learnStrategyStage) => {
        if (learnStrategyStage.Technology) {
          items.push(
            <li key={learnStrategyStage.id}>
              <LearnStageTechnology
                learnStrategyStage={learnStrategyStage}
                technology={learnStrategyStage.Technology}
                currentUser={currentUser}
                inEditMode={inEditMode}
                learnStrategy={learnStrategy}
              />
            </li>
          )
        }
      })

      return items
    }, [inEditMode, learnStrategy, currentUser])

    /**
     * Дочерние стратегии
     */
    const subStrategies = useMemo<JSX.Element[]>(() => {
      const subStrategies: JSX.Element[] = []

      learnStrategy?.LearnStrategyStages?.forEach((n) => {
        if (n.learnStrategyTargetId) {
          subStrategies.push(
            <li key={n.id}>
              <LearnStrategyView
                id={n.learnStrategyTargetId}
                loadedIDs={loadedIDsWithCurrent}
                currentUser={currentUser}
                showChilds={!inEditMode}
                editable={false}
              />
            </li>
          )
        }
      })

      return subStrategies
    }, [
      inEditMode,
      learnStrategy?.LearnStrategyStages,
      loadedIDsWithCurrent,
      currentUser,
    ])

    /**
     * Создание этапа развития
     */
    const createForm = useMemo(() => {
      if (!inEditMode) {
        return null
      }

      return <CreateLearnStrategyStage learnStrategy={learnStrategy} />
    }, [inEditMode, learnStrategy])

    return useMemo(() => {
      return (
        <>
          <ul>
            {technologies}
            {subStrategies}
          </ul>
          {createForm}
        </>
      )
    }, [createForm, subStrategies, technologies])
  }
