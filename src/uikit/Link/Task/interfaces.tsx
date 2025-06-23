// import { UiLinkProps } from "../interfaces";

export interface TaskLinkProps extends React.PropsWithChildren {
  object:
    | {
        __typename?: 'Task'
        id: string
        name: string
      }
    | null
    | undefined

  // variant?: UiLinkProps["variant"];

  // classes? : {
  //   root: string;
  //   text: string;
  // }
}
