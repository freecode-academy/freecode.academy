import React from 'react'

import Editor from 'src/uikit/Editor'

import EditableView from 'apollo-cms/dist/DataView/Object/Editable'

import Typography from 'material-ui/Typography'
import SendIcon from 'material-ui-icons/Send'

import Grid from 'src/uikit/Grid'

import CommentLink from 'src/uikit/Link/Comment'

import { UikitCommentProps } from './interfaces'
import UserLink from 'src/uikit/Link/User'
import { PrismaCmsEditorRawContent } from '@prisma-cms/editor'
import { UikitCommentStyled } from './styles'
import {
  CreateCommentProcessorDocument,
  UpdateCommentProcessorDocument,
} from 'src/modules/gql/generated'
import SiteFrontEditor from 'src/components/SiteFrontEditor'
import { EditorComponentProps } from '@prisma-cms/front-editor/dist'
// import moment from 'moment';

export * from './interfaces'

// TODO Add Topic link
class UikitComment extends EditableView<UikitCommentProps> {
  static defaultProps = {
    ...EditableView.defaultProps,
    SaveIcon: SendIcon,
    linkType: 'comment',
  }

  getMutation(data: Record<string, any> | null | undefined) {
    let mutation

    const id = this.getObjectWithMutations()?.id

    if (id) {
      mutation = UpdateCommentProcessorDocument
    } else {
      mutation = CreateCommentProcessorDocument
    }

    return {
      ...super.getMutation(data),
      mutation,
    }
  }

  canEdit() {
    const { user: currentUser } = this.context

    const { id: currentUserId, sudo } = currentUser || {}

    const { id, CreatedBy } = this.getObjectWithMutations() || {}

    const { id: createdById } = CreatedBy || {}

    return (
      !id || (createdById && createdById === currentUserId) || sudo === true
    )
  }

  async save() {
    const { user: currentUser, openLoginForm } = this.context

    if (!currentUser) {
      openLoginForm()
      return
    }

    return super.save()
  }

  renderHeader() {
    const { linkType } = this.props

    const object = this.getObjectWithMutations()

    const {
      id: commentId,
      CreatedBy,
      // createdAt,
    } = object || {}

    if (!commentId) {
      return (
        <Typography variant="subheading" className={'addCommentTitle'}>
          Добавить комментарий
        </Typography>
      )
    }

    return (
      <div className={'header'}>
        <Grid container spacing={16}>
          {CreatedBy ? (
            <Grid item>
              <UserLink
                user={CreatedBy}
                showName={false}
                // avatarProps={{
                //   size: "medium",
                // }}
              />
            </Grid>
          ) : null}

          <Grid item xs>
            <Grid container>
              <Grid item xs>
                {CreatedBy ? (
                  <UserLink user={CreatedBy} withAvatar={false} />
                ) : null}
              </Grid>

              <Grid item>
                {/* {createdAt ? <Typography
                  variant="caption"
                  color="textSecondary"
                >
                  {moment(createdAt).format('lll')}
                </Typography> : null} */}

                {commentId ? (
                  <CommentLink object={object} linkType={linkType} />
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }

  onEditComment = (rawContent: PrismaCmsEditorRawContent) => {
    this.updateObject({
      content: rawContent,
    })
  }

  onChangeState = (data: EditorComponentProps['_dirty']) => {
    this.updateObject(data)
    return data
  }

  renderDefaultView() {
    const comment = this.getObjectWithMutations()

    if (!comment) {
      return null
    }

    let editor: JSX.Element | undefined

    const inEditMode = this.inEditMode()

    const components = comment.components

    if (components) {
      editor = (
        <SiteFrontEditor
          // object={undefined}
          inEditMode={inEditMode}
          itemsOnly
          onChangeState={this.onChangeState}
          object={{
            name: 'Section',
            component: 'Section',
            components:
              components && Array.isArray(components) ? components : [],
            props: {},
          }}
        />
      )
    } else {
      // TODO add custom scalar in API
      const content = comment.content as
        | PrismaCmsEditorRawContent
        | null
        | undefined

      const readOnly = !inEditMode

      editor = (
        <Editor
          // className="topic-editor"
          editorKey="comment"
          value={content || undefined}
          readOnly={readOnly}
          // fullView={true}
          // allow_edit={allow_edit}
          onChange={this.onEditComment}
        />
      )
    }

    return (
      <Grid container>
        <Grid item xs>
          {editor}
        </Grid>

        <Grid item>{this.getButtons()}</Grid>
      </Grid>
    )
  }

  renderEditableView() {
    return this.renderDefaultView()
  }

  renderResetButton() {
    const { id } = this.getObjectWithMutations() || {}

    return id ? super.renderResetButton() : null
  }

  render() {
    const { className } = this.props

    const object = this.getObjectWithMutations()

    if (!object) {
      return null
    }

    return (
      <UikitCommentStyled className={className}>
        {super.render()}
      </UikitCommentStyled>
    )
  }
}

export default UikitComment
