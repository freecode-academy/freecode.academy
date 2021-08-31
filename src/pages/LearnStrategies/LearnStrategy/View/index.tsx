import React, { useContext, useMemo } from 'react'
import Context, { PrismaCmsContext } from '@prisma-cms/context'
import { LearnStrategyPageViewProps } from './interfaces'
import { LearnStrategyView } from './LearnStrategy'

export const LearnStrategyPageView: React.FC<LearnStrategyPageViewProps> = ({
  learnStrategy,
}) => {
  const context = useContext(Context) as PrismaCmsContext
  const currentUser = context?.user

  return useMemo(() => {
    return (
      <>
        <LearnStrategyView
          // learnStrategy={learnStrategy}
          /**
           * Ключ здесь нужен, так как неправильно обрабатывается стейт при переходе
           * из одной стратегии в другую.
           */
          key={learnStrategy.id}
          id={learnStrategy.id}
          loadedIDs={[]}
          currentUser={currentUser}
          showChilds={true}
          editable={true}
        />
      </>
    )
  }, [learnStrategy.id, currentUser])
}
