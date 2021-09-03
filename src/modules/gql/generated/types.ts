/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: globalThis.Date;
  Decimal: any;
  JSON: any;
  Json: globalThis.Record<string, any> | globalThis.Array<any>;
  /** desc */
  Upload: globalThis.File;
  /** UserTechnologyLevel from 1 to 5 */
  UserTechnologyLevel: 1 | 2 | 3 | 4 | 5;
};

export interface AggregateChatMessage {
  __typename?: 'AggregateChatMessage';
  count: Scalars['Int'];
}

export interface AggregateNotice {
  __typename?: 'AggregateNotice';
  count: Scalars['Int'];
}

export interface AggregateProject {
  __typename?: 'AggregateProject';
  count: Scalars['Int'];
}

export interface AggregateResource {
  __typename?: 'AggregateResource';
  count: Scalars['Int'];
}

export interface AggregateTag {
  __typename?: 'AggregateTag';
  count: Scalars['Int'];
}

export interface AggregateTask {
  __typename?: 'AggregateTask';
  count: Scalars['Int'];
}

export interface AggregateTimer {
  __typename?: 'AggregateTimer';
  count: Scalars['Int'];
}

export interface AggregateUser {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
}

/** Объект ответа мутации пользователя */
export interface AuthPayload {
  __typename?: 'AuthPayload';
  data?: Maybe<User>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
}

export interface BlockListRelationFilter {
  every?: Maybe<BlockWhereInput>;
  none?: Maybe<BlockWhereInput>;
  some?: Maybe<BlockWhereInput>;
}

export interface BlockWhereInput {
  AND?: Maybe<Array<BlockWhereInput>>;
  NOT?: Maybe<Array<BlockWhereInput>>;
  OR?: Maybe<Array<BlockWhereInput>>;
  World?: Maybe<WorldWhereInput>;
  id?: Maybe<StringFilter>;
  representation?: Maybe<StringFilter>;
  type?: Maybe<IntFilter>;
  world?: Maybe<StringNullableFilter>;
  x?: Maybe<IntFilter>;
  y?: Maybe<IntFilter>;
  z?: Maybe<IntFilter>;
}

export interface BlogCreateInput {
  content?: Maybe<Scalars['JSON']>;
  name?: Scalars['String'];
}

export interface BlogUpdateInput {
  content?: Maybe<Scalars['JSON']>;
  name?: Scalars['String'];
}

export interface BoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface BoolNullableFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
}

export interface CallRequestListRelationFilter {
  every?: Maybe<CallRequestWhereInput>;
  none?: Maybe<CallRequestWhereInput>;
  some?: Maybe<CallRequestWhereInput>;
}

export enum CallRequestStatus {
  ACCEPTED = 'Accepted',
  BILLED = 'Billed',
  CANCELED = 'Canceled',
  CREATED = 'Created',
  ENDED = 'Ended',
  ERROR = 'Error',
  MISSED = 'Missed',
  REJECTED = 'Rejected',
  STARTED = 'Started'
}

export interface CallRequestWhereInput {
  AND?: Maybe<Array<CallRequestWhereInput>>;
  Called?: Maybe<StringNullableFilter>;
  Caller?: Maybe<StringNullableFilter>;
  ChatRoom?: Maybe<ChatRoomWhereInput>;
  NOT?: Maybe<Array<CallRequestWhereInput>>;
  OR?: Maybe<Array<CallRequestWhereInput>>;
  Room?: Maybe<StringNullableFilter>;
  User_CallRequest_CalledToUser?: Maybe<UserWhereInput>;
  User_CallRequest_CallerToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  startedAt?: Maybe<DateTimeNullableFilter>;
  status?: Maybe<EnumCallRequestStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface CareerListRelationFilter {
  every?: Maybe<CareerWhereInput>;
  none?: Maybe<CareerWhereInput>;
  some?: Maybe<CareerWhereInput>;
}

export interface CareerWhereInput {
  AND?: Maybe<Array<CareerWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CareerWhereInput>>;
  OR?: Maybe<Array<CareerWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  start_date?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ChatMessage {
  __typename?: 'ChatMessage';
  CreatedBy?: Maybe<User>;
  Room?: Maybe<ChatRoom>;
  content?: Maybe<Scalars['JSON']>;
  contentText?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
}

export interface ChatMessageConnection {
  __typename?: 'ChatMessageConnection';
  aggregate: AggregateChatMessage;
  edges: Array<Maybe<ChatMessageEdge>>;
}

export interface ChatMessageCreateInput {
  Room?: Maybe<ChatRoomCreateOneWithoutMessagesInput>;
  content?: Maybe<Scalars['JSON']>;
}

export interface ChatMessageEdge {
  __typename?: 'ChatMessageEdge';
  node: ChatMessage;
}

export interface ChatMessageListRelationFilter {
  every?: Maybe<ChatMessageWhereInput>;
  none?: Maybe<ChatMessageWhereInput>;
  some?: Maybe<ChatMessageWhereInput>;
}

export interface ChatMessageOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Room?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  contentText?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface ChatMessageReadedListRelationFilter {
  every?: Maybe<ChatMessageReadedWhereInput>;
  none?: Maybe<ChatMessageReadedWhereInput>;
  some?: Maybe<ChatMessageReadedWhereInput>;
}

export interface ChatMessageReadedWhereInput {
  AND?: Maybe<Array<ChatMessageReadedWhereInput>>;
  ChatMessage?: Maybe<ChatMessageWhereInput>;
  Message?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ChatMessageReadedWhereInput>>;
  OR?: Maybe<Array<ChatMessageReadedWhereInput>>;
  User?: Maybe<StringNullableFilter>;
  User_ChatMessageReadedToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ChatMessageResponse {
  __typename?: 'ChatMessageResponse';
  data?: Maybe<ChatMessage>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface ChatMessageWhereInput {
  AND?: Maybe<Array<ChatMessageWhereInput>>;
  ChatMessagesReaded?: Maybe<ChatMessageReadedListRelationFilter>;
  ChatRoom?: Maybe<ChatRoomWhereInput>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ChatMessageWhereInput>>;
  Notices?: Maybe<NoticeListRelationFilter>;
  OR?: Maybe<Array<ChatMessageWhereInput>>;
  Room?: Maybe<StringNullableFilter>;
  User?: Maybe<UserWhereInput>;
  content?: Maybe<JsonNullableFilter>;
  contentText?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ChatMessageWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface ChatRoom {
  __typename?: 'ChatRoom';
  CreatedBy?: Maybe<User>;
  Invitations?: Maybe<Array<ChatRoomInvitation>>;
  Members?: Maybe<Array<User>>;
  Messages?: Maybe<Array<ChatMessage>>;
  code?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface ChatRoomCreateOneWithoutMessagesInput {
  connect?: Maybe<ChatRoomWhereUniqueInput>;
  to?: Maybe<Scalars['ID']>;
}

export interface ChatRoomInvitation {
  __typename?: 'ChatRoomInvitation';
  ChatRoom?: Maybe<ChatRoom>;
  CreatedBy?: Maybe<User>;
  User?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
}

export interface ChatRoomInvitationListRelationFilter {
  every?: Maybe<ChatRoomInvitationWhereInput>;
  none?: Maybe<ChatRoomInvitationWhereInput>;
  some?: Maybe<ChatRoomInvitationWhereInput>;
}

export interface ChatRoomInvitationWhereInput {
  AND?: Maybe<Array<ChatRoomInvitationWhereInput>>;
  ChatRoom?: Maybe<StringNullableFilter>;
  ChatRoom_ChatRoomToChatRoomInvitation?: Maybe<ChatRoomWhereInput>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ChatRoomInvitationWhereInput>>;
  Notice?: Maybe<StringNullableFilter>;
  Notice_ChatRoomInvitationToNotice?: Maybe<NoticeWhereInput>;
  OR?: Maybe<Array<ChatRoomInvitationWhereInput>>;
  User?: Maybe<StringNullableFilter>;
  User_ChatRoomInvitation_CreatedByToUser?: Maybe<UserWhereInput>;
  User_ChatRoomInvitation_UserToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ChatRoomListRelationFilter {
  every?: Maybe<ChatRoomWhereInput>;
  none?: Maybe<ChatRoomWhereInput>;
  some?: Maybe<ChatRoomWhereInput>;
}

export interface ChatRoomOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  allowAnonymous?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isPublic?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sandbox?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface ChatRoomWhereInput {
  AND?: Maybe<Array<ChatRoomWhereInput>>;
  CallRequests?: Maybe<CallRequestListRelationFilter>;
  ChatMessages?: Maybe<ChatMessageListRelationFilter>;
  ChatRoomInvitations?: Maybe<ChatRoomInvitationListRelationFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ChatRoomWhereInput>>;
  OR?: Maybe<Array<ChatRoomWhereInput>>;
  Projects?: Maybe<ProjectListRelationFilter>;
  Tasks?: Maybe<TaskListRelationFilter>;
  User_ChatRoomToUser?: Maybe<UserWhereInput>;
  User_ChatRoomsMembers?: Maybe<UserListRelationFilter>;
  allowAnonymous?: Maybe<BoolNullableFilter>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  isPublic?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringFilter>;
  sandbox?: Maybe<BoolNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ChatRoomWhereUniqueInput {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
}

export interface CodeChallenge {
  __typename?: 'CodeChallenge';
  Block?: Maybe<CodeChallengeBlock>;
  CodeChallengeCompletions?: Maybe<Array<CodeChallengeCompletion>>;
  CreatedBy?: Maybe<User>;
  Topic?: Maybe<Resource>;
  challengeOrder?: Maybe<Scalars['Int']>;
  challengeType?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  dashedName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  externalKey?: Maybe<Scalars['ID']>;
  files?: Maybe<Scalars['JSON']>;
  forumTopicId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  instructions?: Maybe<Scalars['String']>;
  isBeta?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  localeTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['JSON']>;
  solutions?: Maybe<Scalars['JSON']>;
  superOrder?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  tests?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['String']>;
  translations?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['DateTime'];
  videoUrl?: Maybe<Scalars['String']>;
}


export type CodeChallengeCodeChallengeCompletionsArgs = {
  orderBy?: Maybe<Array<CodeChallengeCompletionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CodeChallengeCompletionWhereInput>;
};

export interface CodeChallengeBlock {
  __typename?: 'CodeChallengeBlock';
  Challenges?: Maybe<Array<CodeChallenge>>;
  Children?: Maybe<Array<CodeChallengeBlock>>;
  Parent?: Maybe<CodeChallengeBlock>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
}


export type CodeChallengeBlockChallengesArgs = {
  orderBy?: Maybe<CodeChallengeOrderByInput>;
};


export type CodeChallengeBlockChildrenArgs = {
  orderBy?: Maybe<CodeChallengeBlockOrderByInput>;
};

export interface CodeChallengeBlockListRelationFilter {
  every?: Maybe<CodeChallengeBlockWhereInput>;
  none?: Maybe<CodeChallengeBlockWhereInput>;
  some?: Maybe<CodeChallengeBlockWhereInput>;
}

export interface CodeChallengeBlockOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Parent?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  externalKey?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  rank?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface CodeChallengeBlockWhereInput {
  AND?: Maybe<Array<CodeChallengeBlockWhereInput>>;
  CodeChallenge?: Maybe<CodeChallengeListRelationFilter>;
  CodeChallengeBlock?: Maybe<CodeChallengeBlockWhereInput>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CodeChallengeBlockWhereInput>>;
  OR?: Maybe<Array<CodeChallengeBlockWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  externalKey?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  other_CodeChallengeBlock?: Maybe<CodeChallengeBlockListRelationFilter>;
  rank?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface CodeChallengeBlockWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface CodeChallengeCompletion {
  __typename?: 'CodeChallengeCompletion';
  CodeChallenge?: Maybe<CodeChallenge>;
  CreatedBy?: Maybe<User>;
  Task?: Maybe<Task>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  success?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
}

export interface CodeChallengeCompletionCreateInput {
  CodeChallenge: CodeChallengeCreateOneWithoutCompletionsInput;
}

export interface CodeChallengeCompletionListRelationFilter {
  every?: Maybe<CodeChallengeCompletionWhereInput>;
  none?: Maybe<CodeChallengeCompletionWhereInput>;
  some?: Maybe<CodeChallengeCompletionWhereInput>;
}

export interface CodeChallengeCompletionOrderByInput {
  CodeChallenge?: Maybe<SortOrder>;
  CreatedBy?: Maybe<SortOrder>;
  Task?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  success?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface CodeChallengeCompletionResponse {
  __typename?: 'CodeChallengeCompletionResponse';
  data?: Maybe<CodeChallengeCompletion>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface CodeChallengeCompletionUpdateInput {
  content?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
}

export interface CodeChallengeCompletionWhereInput {
  AND?: Maybe<Array<CodeChallengeCompletionWhereInput>>;
  CodeChallenge?: Maybe<StringNullableFilter>;
  CodeChallenge_CodeChallengeToCodeChallengeCompletion?: Maybe<CodeChallengeWhereInput>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CodeChallengeCompletionWhereInput>>;
  OR?: Maybe<Array<CodeChallengeCompletionWhereInput>>;
  Task?: Maybe<StringNullableFilter>;
  Task_CodeChallengeCompletionToTask?: Maybe<TaskWhereInput>;
  User?: Maybe<UserWhereInput>;
  content?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  success?: Maybe<BoolNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface CodeChallengeCompletionWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface CodeChallengeCreateOneWithoutCompletionsInput {
  connect?: Maybe<CodeChallengeWhereUniqueInput>;
}

export interface CodeChallengeCreateOneWithoutTopicInput {
  connect?: Maybe<CodeChallengeWhereUniqueInput>;
}

export interface CodeChallengeListRelationFilter {
  every?: Maybe<CodeChallengeWhereInput>;
  none?: Maybe<CodeChallengeWhereInput>;
  some?: Maybe<CodeChallengeWhereInput>;
}

export interface CodeChallengeOrderByInput {
  Block?: Maybe<SortOrder>;
  CreatedBy?: Maybe<SortOrder>;
  Topic?: Maybe<SortOrder>;
  challengeOrder?: Maybe<SortOrder>;
  challengeType?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  dashedName?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  externalKey?: Maybe<SortOrder>;
  files?: Maybe<SortOrder>;
  forumTopicId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  instructions?: Maybe<SortOrder>;
  isBeta?: Maybe<SortOrder>;
  isPrivate?: Maybe<SortOrder>;
  isRequired?: Maybe<SortOrder>;
  localeTitle?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  rank?: Maybe<SortOrder>;
  required?: Maybe<SortOrder>;
  solutions?: Maybe<SortOrder>;
  superOrder?: Maybe<SortOrder>;
  template?: Maybe<SortOrder>;
  tests?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  translations?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  videoUrl?: Maybe<SortOrder>;
}

export interface CodeChallengeWhereInput {
  AND?: Maybe<Array<CodeChallengeWhereInput>>;
  Block?: Maybe<StringNullableFilter>;
  CodeChallengeBlock?: Maybe<CodeChallengeBlockWhereInput>;
  CodeChallengeCompletions?: Maybe<CodeChallengeCompletionListRelationFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CodeChallengeWhereInput>>;
  OR?: Maybe<Array<CodeChallengeWhereInput>>;
  Resource?: Maybe<ResourceWhereInput>;
  Topic?: Maybe<StringNullableFilter>;
  User?: Maybe<UserWhereInput>;
  challengeOrder?: Maybe<IntNullableFilter>;
  challengeType?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  dashedName?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  externalKey?: Maybe<StringNullableFilter>;
  files?: Maybe<JsonNullableFilter>;
  forumTopicId?: Maybe<IntNullableFilter>;
  id?: Maybe<StringFilter>;
  instructions?: Maybe<StringNullableFilter>;
  isBeta?: Maybe<BoolNullableFilter>;
  isPrivate?: Maybe<BoolNullableFilter>;
  isRequired?: Maybe<BoolNullableFilter>;
  localeTitle?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  order?: Maybe<IntNullableFilter>;
  rank?: Maybe<IntNullableFilter>;
  required?: Maybe<JsonNullableFilter>;
  solutions?: Maybe<JsonNullableFilter>;
  superOrder?: Maybe<IntNullableFilter>;
  template?: Maybe<StringNullableFilter>;
  tests?: Maybe<JsonNullableFilter>;
  time?: Maybe<StringNullableFilter>;
  translations?: Maybe<JsonNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  videoUrl?: Maybe<StringNullableFilter>;
}

export interface CodeChallengeWhereUniqueInput {
  externalKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
}

export interface CommentCreateInput {
  Task?: Maybe<TaskCreateOneWithoutCommentsInput>;
  components?: Maybe<Scalars['JSON']>;
  content?: Maybe<Scalars['JSON']>;
  topicID?: Maybe<Scalars['ID']>;
}

export interface CommentListRelationFilter {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
}

export interface CommentUpdateInput {
  components?: Maybe<Scalars['JSON']>;
  content?: Maybe<Scalars['JSON']>;
}

export interface CommentWhereInput {
  AND?: Maybe<Array<CommentWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  TechnologyLesson?: Maybe<StringNullableFilter>;
  TechnologyLesson_CommentToTechnologyLesson?: Maybe<TechnologyLessonWhereInput>;
  User?: Maybe<UserWhereInput>;
  components?: Maybe<StringNullableFilter>;
  contentText?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}


export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}


export interface DecimalFilter {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
}

export interface DecimalNullableFilter {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalNullableFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
}

export interface EnumCallRequestStatusFilter {
  equals?: Maybe<CallRequestStatus>;
  in?: Maybe<Array<CallRequestStatus>>;
  not?: Maybe<NestedEnumCallRequestStatusFilter>;
  notIn?: Maybe<Array<CallRequestStatus>>;
}

export interface EnumEthAccountTypeFilter {
  equals?: Maybe<EthAccountType>;
  in?: Maybe<Array<EthAccountType>>;
  not?: Maybe<NestedEnumEthAccountTypeFilter>;
  notIn?: Maybe<Array<EthAccountType>>;
}

export interface EnumEthTransactionTypeNullableFilter {
  equals?: Maybe<EthTransactionType>;
  in?: Maybe<Array<EthTransactionType>>;
  not?: Maybe<NestedEnumEthTransactionTypeNullableFilter>;
  notIn?: Maybe<Array<EthTransactionType>>;
}

export interface EnumGamemodeFilter {
  equals?: Maybe<Gamemode>;
  in?: Maybe<Array<Gamemode>>;
  not?: Maybe<NestedEnumGamemodeFilter>;
  notIn?: Maybe<Array<Gamemode>>;
}

export interface EnumImportStatusFilter {
  equals?: Maybe<ImportStatus>;
  in?: Maybe<Array<ImportStatus>>;
  not?: Maybe<NestedEnumImportStatusFilter>;
  notIn?: Maybe<Array<ImportStatus>>;
}

export interface EnumLetsadsSmsMessageStatusEnumNullableFilter {
  equals?: Maybe<LetsadsSmsMessageStatusEnum>;
  in?: Maybe<Array<LetsadsSmsMessageStatusEnum>>;
  not?: Maybe<NestedEnumLetsadsSmsMessageStatusEnumNullableFilter>;
  notIn?: Maybe<Array<LetsadsSmsMessageStatusEnum>>;
}

export interface EnumLetsadsSmsMessageStatusErrorCodeEnumNullableFilter {
  equals?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  in?: Maybe<Array<LetsadsSmsMessageStatusErrorCodeEnum>>;
  not?: Maybe<NestedEnumLetsadsSmsMessageStatusErrorCodeEnumNullableFilter>;
  notIn?: Maybe<Array<LetsadsSmsMessageStatusErrorCodeEnum>>;
}

export interface EnumLetterStatusFilter {
  equals?: Maybe<LetterStatus>;
  in?: Maybe<Array<LetterStatus>>;
  not?: Maybe<NestedEnumLetterStatusFilter>;
  notIn?: Maybe<Array<LetterStatus>>;
}

export interface EnumLogLevelFilter {
  equals?: Maybe<LogLevel>;
  in?: Maybe<Array<LogLevel>>;
  not?: Maybe<NestedEnumLogLevelFilter>;
  notIn?: Maybe<Array<LogLevel>>;
}

export interface EnumMessageTypeFilter {
  equals?: Maybe<MessageType>;
  in?: Maybe<Array<MessageType>>;
  not?: Maybe<NestedEnumMessageTypeFilter>;
  notIn?: Maybe<Array<MessageType>>;
}

export interface EnumNoticeTypeFilter {
  equals?: Maybe<NoticeType>;
  in?: Maybe<Array<NoticeType>>;
  not?: Maybe<NestedEnumNoticeTypeFilter>;
  notIn?: Maybe<Array<NoticeType>>;
}

export interface EnumProjectMemberStatusFilter {
  equals?: Maybe<ProjectMemberStatus>;
  in?: Maybe<Array<ProjectMemberStatus>>;
  not?: Maybe<NestedEnumProjectMemberStatusFilter>;
  notIn?: Maybe<Array<ProjectMemberStatus>>;
}

export interface EnumProjectStatusNullableFilter {
  equals?: Maybe<ProjectStatus>;
  in?: Maybe<Array<ProjectStatus>>;
  not?: Maybe<NestedEnumProjectStatusNullableFilter>;
  notIn?: Maybe<Array<ProjectStatus>>;
}

export interface EnumProjectTypeNullableFilter {
  equals?: Maybe<ProjectType>;
  in?: Maybe<Array<ProjectType>>;
  not?: Maybe<NestedEnumProjectTypeNullableFilter>;
  notIn?: Maybe<Array<ProjectType>>;
}

export interface EnumResourceTypeFilter {
  equals?: Maybe<ResourceType>;
  in?: Maybe<Array<ResourceType>>;
  not?: Maybe<NestedEnumResourceTypeFilter>;
  notIn?: Maybe<Array<ResourceType>>;
}

export interface EnumTagStatusFilter {
  equals?: Maybe<TagStatus>;
  in?: Maybe<Array<TagStatus>>;
  not?: Maybe<NestedEnumTagStatusFilter>;
  notIn?: Maybe<Array<TagStatus>>;
}

export interface EnumTaskMemberStatusFilter {
  equals?: Maybe<TaskMemberStatus>;
  in?: Maybe<Array<TaskMemberStatus>>;
  not?: Maybe<NestedEnumTaskMemberStatusFilter>;
  notIn?: Maybe<Array<TaskMemberStatus>>;
}

export interface EnumTaskReactionTypeFilter {
  equals?: Maybe<TaskReactionType>;
  in?: Maybe<Array<TaskReactionType>>;
  not?: Maybe<NestedEnumTaskReactionTypeFilter>;
  notIn?: Maybe<Array<TaskReactionType>>;
}

export interface EnumTaskStatusFilter {
  equals?: Maybe<TaskStatus>;
  in?: Maybe<Array<TaskStatus>>;
  not?: Maybe<NestedEnumTaskStatusFilter>;
  notIn?: Maybe<Array<TaskStatus>>;
}

export interface EnumTeamMemberStatusFilter {
  equals?: Maybe<TeamMemberStatus>;
  in?: Maybe<Array<TeamMemberStatus>>;
  not?: Maybe<NestedEnumTeamMemberStatusFilter>;
  notIn?: Maybe<Array<TeamMemberStatus>>;
}

export interface EnumTeamStatusFilter {
  equals?: Maybe<TeamStatus>;
  in?: Maybe<Array<TeamStatus>>;
  not?: Maybe<NestedEnumTeamStatusFilter>;
  notIn?: Maybe<Array<TeamStatus>>;
}

export interface EnumTechnologyLessonUserStatusFilter {
  equals?: Maybe<TechnologyLessonUserStatus>;
  in?: Maybe<Array<TechnologyLessonUserStatus>>;
  not?: Maybe<NestedEnumTechnologyLessonUserStatusFilter>;
  notIn?: Maybe<Array<TechnologyLessonUserStatus>>;
}

export interface EnumUserTechnologyHiringStatusNullableFilter {
  equals?: Maybe<UserTechnologyHiringStatus>;
  in?: Maybe<Array<UserTechnologyHiringStatus>>;
  not?: Maybe<NestedEnumUserTechnologyHiringStatusNullableFilter>;
  notIn?: Maybe<Array<UserTechnologyHiringStatus>>;
}

export interface EnumUserTechnologyStatusNullableFilter {
  equals?: Maybe<UserTechnologyStatus>;
  in?: Maybe<Array<UserTechnologyStatus>>;
  not?: Maybe<NestedEnumUserTechnologyStatusNullableFilter>;
  notIn?: Maybe<Array<UserTechnologyStatus>>;
}

export interface EnumWorldTypeFilter {
  equals?: Maybe<WorldType>;
  in?: Maybe<Array<WorldType>>;
  not?: Maybe<NestedEnumWorldTypeFilter>;
  notIn?: Maybe<Array<WorldType>>;
}

export interface EthAccount {
  __typename?: 'EthAccount';
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  bytecode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  updatedAt: Scalars['DateTime'];
}


export type EthAccountBalanceArgs = {
  convert?: Maybe<EthAmountConvert>;
};

export interface EthAccountListRelationFilter {
  every?: Maybe<EthAccountWhereInput>;
  none?: Maybe<EthAccountWhereInput>;
  some?: Maybe<EthAccountWhereInput>;
}

export enum EthAccountType {
  ACCOUNT = 'Account',
  CONTRACT = 'Contract'
}

export interface EthAccountWhereInput {
  AND?: Maybe<Array<EthAccountWhereInput>>;
  ContractSource?: Maybe<StringNullableFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  EthBlock?: Maybe<EthBlockListRelationFilter>;
  EthContractSource?: Maybe<EthContractSourceWhereInput>;
  EthTransaction_EthAccountToEthTransaction_Account?: Maybe<EthTransactionListRelationFilter>;
  EthTransaction_EthAccountToEthTransaction_Receiver?: Maybe<EthTransactionListRelationFilter>;
  EthTransaction_EthAccountToEthTransaction_Sender?: Maybe<EthTransactionListRelationFilter>;
  NOT?: Maybe<Array<EthAccountWhereInput>>;
  OR?: Maybe<Array<EthAccountWhereInput>>;
  Project?: Maybe<StringNullableFilter>;
  Project_EthAccountToProject?: Maybe<ProjectWhereInput>;
  Resource?: Maybe<ResourceListRelationFilter>;
  User_EthAccountToUser_EthAccountAuthed?: Maybe<UserListRelationFilter>;
  User_EthAccount_CreatedByToUser?: Maybe<UserWhereInput>;
  abi?: Maybe<JsonNullableFilter>;
  address?: Maybe<StringFilter>;
  bytecode?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumEthAccountTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export enum EthAmountConvert {
  GWEI = 'Gwei',
  KWEI = 'Kwei',
  MWEI = 'Mwei',
  ETHER = 'ether',
  GETHER = 'gether',
  KETHER = 'kether',
  METHER = 'mether',
  NANO = 'nano',
  TETHER = 'tether',
  WEI = 'wei'
}

export interface EthBlockListRelationFilter {
  every?: Maybe<EthBlockWhereInput>;
  none?: Maybe<EthBlockWhereInput>;
  some?: Maybe<EthBlockWhereInput>;
}

export interface EthBlockWhereInput {
  AND?: Maybe<Array<EthBlockWhereInput>>;
  EthAccount?: Maybe<EthAccountWhereInput>;
  EthBlock_A?: Maybe<EthBlockListRelationFilter>;
  EthBlock_B?: Maybe<EthBlockListRelationFilter>;
  EthTransaction?: Maybe<EthTransactionListRelationFilter>;
  Miner?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<EthBlockWhereInput>>;
  OR?: Maybe<Array<EthBlockWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  difficulty?: Maybe<DecimalNullableFilter>;
  extraData?: Maybe<StringNullableFilter>;
  gasLimit?: Maybe<DecimalNullableFilter>;
  gasUsed?: Maybe<DecimalNullableFilter>;
  hash?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  mixHash?: Maybe<StringNullableFilter>;
  nonce?: Maybe<StringNullableFilter>;
  number?: Maybe<IntFilter>;
  parentHash?: Maybe<StringNullableFilter>;
  receiptsRoot?: Maybe<StringNullableFilter>;
  sha3Uncles?: Maybe<StringNullableFilter>;
  size?: Maybe<IntNullableFilter>;
  stateRoot?: Maybe<StringNullableFilter>;
  totalDifficulty?: Maybe<DecimalNullableFilter>;
  transactionsRoot?: Maybe<StringNullableFilter>;
  transactions_count?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface EthContractSourceListRelationFilter {
  every?: Maybe<EthContractSourceWhereInput>;
  none?: Maybe<EthContractSourceWhereInput>;
  some?: Maybe<EthContractSourceWhereInput>;
}

export interface EthContractSourceWhereInput {
  AND?: Maybe<Array<EthContractSourceWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  EthAccount?: Maybe<EthAccountListRelationFilter>;
  NOT?: Maybe<Array<EthContractSourceWhereInput>>;
  OR?: Maybe<Array<EthContractSourceWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  source?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface EthTransactionListRelationFilter {
  every?: Maybe<EthTransactionWhereInput>;
  none?: Maybe<EthTransactionWhereInput>;
  some?: Maybe<EthTransactionWhereInput>;
}

export enum EthTransactionType {
  CONTRACTCALL = 'ContractCall',
  CONTRACTCREATE = 'ContractCreate',
  CONTRACTREAD = 'ContractRead',
  SENDETH = 'SendEth',
  SENDTOKEN = 'SendToken'
}

export interface EthTransactionWhereInput {
  AND?: Maybe<Array<EthTransactionWhereInput>>;
  Account?: Maybe<StringNullableFilter>;
  Block?: Maybe<StringNullableFilter>;
  EthAccount_EthAccountToEthTransaction_Account?: Maybe<EthAccountWhereInput>;
  EthAccount_EthAccountToEthTransaction_Receiver?: Maybe<EthAccountWhereInput>;
  EthAccount_EthAccountToEthTransaction_Sender?: Maybe<EthAccountWhereInput>;
  EthBlock?: Maybe<EthBlockWhereInput>;
  NOT?: Maybe<Array<EthTransactionWhereInput>>;
  OR?: Maybe<Array<EthTransactionWhereInput>>;
  Receiver?: Maybe<StringNullableFilter>;
  Sender?: Maybe<StringNullableFilter>;
  address?: Maybe<StringFilter>;
  amount?: Maybe<DecimalNullableFilter>;
  chainId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  index?: Maybe<IntNullableFilter>;
  input?: Maybe<StringNullableFilter>;
  r?: Maybe<StringNullableFilter>;
  s?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumEthTransactionTypeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  v?: Maybe<StringNullableFilter>;
}

/** Файл */
export interface File {
  __typename?: 'File';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  /** Кодировка */
  encoding: Scalars['String'];
  /** Имя файла */
  filename?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** Миме-тип */
  mimetype: Scalars['String'];
  /** Пользовательское имя файла */
  name?: Maybe<Scalars['String']>;
  /** Путь к файлу */
  path: Scalars['String'];
  /** Очередность */
  rank?: Maybe<Scalars['Int']>;
  /** Размер в байтах */
  size?: Maybe<Scalars['Float']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
}

export interface FileListRelationFilter {
  every?: Maybe<FileWhereInput>;
  none?: Maybe<FileWhereInput>;
  some?: Maybe<FileWhereInput>;
}

export interface FileOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Gallery?: Maybe<SortOrder>;
  ImageResource?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  encoding?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  hash?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mimetype?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  rank?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface FileWhereInput {
  AND?: Maybe<Array<FileWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  Gallery?: Maybe<StringNullableFilter>;
  Gallery_FileToGallery?: Maybe<GalleryWhereInput>;
  ImageResource?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  Projects?: Maybe<ProjectListRelationFilter>;
  Resource?: Maybe<ResourceWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  encoding?: Maybe<StringFilter>;
  filename?: Maybe<StringNullableFilter>;
  hash?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mimetype?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  path?: Maybe<StringFilter>;
  rank?: Maybe<IntNullableFilter>;
  size?: Maybe<DecimalNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface FileWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface GalleryListRelationFilter {
  every?: Maybe<GalleryWhereInput>;
  none?: Maybe<GalleryWhereInput>;
  some?: Maybe<GalleryWhereInput>;
}

export interface GalleryWhereInput {
  AND?: Maybe<Array<GalleryWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  Files?: Maybe<FileListRelationFilter>;
  NOT?: Maybe<Array<GalleryWhereInput>>;
  OR?: Maybe<Array<GalleryWhereInput>>;
  Resource?: Maybe<StringNullableFilter>;
  Resource_GalleryToResource?: Maybe<ResourceWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface GameListRelationFilter {
  every?: Maybe<GameWhereInput>;
  none?: Maybe<GameWhereInput>;
  some?: Maybe<GameWhereInput>;
}

export interface GameResultListRelationFilter {
  every?: Maybe<GameResultWhereInput>;
  none?: Maybe<GameResultWhereInput>;
  some?: Maybe<GameResultWhereInput>;
}

export interface GameResultWhereInput {
  AND?: Maybe<Array<GameResultWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  Game?: Maybe<StringNullableFilter>;
  Game_GameToGameResult?: Maybe<GameWhereInput>;
  NOT?: Maybe<Array<GameResultWhereInput>>;
  OR?: Maybe<Array<GameResultWhereInput>>;
  Team?: Maybe<StringNullableFilter>;
  Team_GameResultToTeam?: Maybe<TeamWhereInput>;
  User?: Maybe<StringNullableFilter>;
  User_GameResult_CreatedByToUser?: Maybe<UserWhereInput>;
  User_GameResult_UserToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<DecimalNullableFilter>;
}

export interface GameWhereInput {
  AND?: Maybe<Array<GameWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  Game?: Maybe<GameWhereInput>;
  GameResult?: Maybe<GameResultListRelationFilter>;
  NOT?: Maybe<Array<GameWhereInput>>;
  OR?: Maybe<Array<GameWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  Team?: Maybe<TeamListRelationFilter>;
  Tourney?: Maybe<StringNullableFilter>;
  Tourney_GameToTourney?: Maybe<TourneyWhereInput>;
  User_GameToUser?: Maybe<UserWhereInput>;
  User_GameUsers?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  end_date?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  other_Game?: Maybe<GameListRelationFilter>;
  sequence?: Maybe<IntNullableFilter>;
  start_date?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export enum Gamemode {
  ADVENTURE = 'ADVENTURE',
  CREATIVE = 'CREATIVE',
  SPECTATOR = 'SPECTATOR',
  SURVIVAL = 'SURVIVAL'
}

export interface ImportListRelationFilter {
  every?: Maybe<ImportWhereInput>;
  none?: Maybe<ImportWhereInput>;
  some?: Maybe<ImportWhereInput>;
}

export enum ImportStatus {
  COMPLETED = 'Completed',
  CREATED = 'Created',
  ERROR = 'Error',
  STARTED = 'Started',
  STOPED = 'Stoped'
}

export interface ImportWhereInput {
  AND?: Maybe<Array<ImportWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  Log?: Maybe<LogListRelationFilter>;
  NOT?: Maybe<Array<ImportWhereInput>>;
  OR?: Maybe<Array<ImportWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  status?: Maybe<EnumImportStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface IntFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface IntNullableFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface InventoryWhereInput {
  AND?: Maybe<Array<InventoryWhereInput>>;
  NOT?: Maybe<Array<InventoryWhereInput>>;
  OR?: Maybe<Array<InventoryWhereInput>>;
  Player?: Maybe<PlayerListRelationFilter>;
  cursor?: Maybe<IntFilter>;
  data?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
}



export interface JsonNullableFilter {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
}

export interface LearnStrategy {
  __typename?: 'LearnStrategy';
  CreatedBy?: Maybe<User>;
  LearnStrategyStages?: Maybe<Array<LearnStrategyStage>>;
  UserLearnStrategies?: Maybe<Array<UserLearnStrategy>>;
  createdAt: Scalars['DateTime'];
  createdById: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  level: Scalars['UserTechnologyLevel'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface LearnStrategyCreateInput {
  description?: Maybe<Scalars['String']>;
  level: Scalars['UserTechnologyLevel'];
  name: Scalars['String'];
}

export interface LearnStrategyListRelationFilter {
  every?: Maybe<LearnStrategyWhereInput>;
  none?: Maybe<LearnStrategyWhereInput>;
  some?: Maybe<LearnStrategyWhereInput>;
}

export interface LearnStrategyOrderByInput {
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  level?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface LearnStrategyStage {
  __typename?: 'LearnStrategyStage';
  LearnStrategy?: Maybe<LearnStrategy>;
  LearnStrategyTarget?: Maybe<LearnStrategy>;
  Technology?: Maybe<Technology>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  learnStrategyId: Scalars['String'];
  learnStrategyTargetId?: Maybe<Scalars['String']>;
  /** Если цель освоить технологию, то до какого уровня */
  level?: Maybe<Scalars['Int']>;
  technologyId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
}

/** Этапом развития может быть или технология, или другая стратегия развития */
export interface LearnStrategyStageCreateInput {
  /** Стратегия развития, для которой создается этап */
  LearnStrategy: LearnStrategyStageCreateLearnStrategyInput;
  /** Стратегия развития */
  LearnStrategyTarget?: Maybe<LearnStrategyStageCreateLearnStrategyInput>;
  /** Технология */
  TechnologyTarget?: Maybe<LearnStrategyStageCreateTechnologyInput>;
}

/** Стратегия развития */
export interface LearnStrategyStageCreateLearnStrategyInput {
  id: Scalars['ID'];
}

/** Технология */
export interface LearnStrategyStageCreateTechnologyInput {
  id: Scalars['ID'];
  level: Scalars['UserTechnologyLevel'];
}

export interface LearnStrategyStageListRelationFilter {
  every?: Maybe<LearnStrategyStageWhereInput>;
  none?: Maybe<LearnStrategyStageWhereInput>;
  some?: Maybe<LearnStrategyStageWhereInput>;
}

export interface LearnStrategyStageOrderByInput {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  learnStrategyId?: Maybe<SortOrder>;
  learnStrategyTargetId?: Maybe<SortOrder>;
  level?: Maybe<SortOrder>;
  technologyId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface LearnStrategyStageWhereInput {
  AND?: Maybe<Array<LearnStrategyStageWhereInput>>;
  LearnStrategy?: Maybe<LearnStrategyWhereInput>;
  LearnStrategyTarget?: Maybe<LearnStrategyWhereInput>;
  NOT?: Maybe<Array<LearnStrategyStageWhereInput>>;
  OR?: Maybe<Array<LearnStrategyStageWhereInput>>;
  Technology?: Maybe<TechnologyWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  learnStrategyId?: Maybe<StringFilter>;
  learnStrategyTargetId?: Maybe<StringNullableFilter>;
  level?: Maybe<IntNullableFilter>;
  technologyId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface LearnStrategyStageWhereUniqueInput {
  id: Scalars['ID'];
}

export interface LearnStrategyUpdateInput {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface LearnStrategyWhereInput {
  AND?: Maybe<Array<LearnStrategyWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  LearnStrategyStages?: Maybe<LearnStrategyStageListRelationFilter>;
  LearnStrategyStagesTargets?: Maybe<LearnStrategyStageListRelationFilter>;
  NOT?: Maybe<Array<LearnStrategyWhereInput>>;
  OR?: Maybe<Array<LearnStrategyWhereInput>>;
  UserLearnStrategies?: Maybe<UserLearnStrategyListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  level?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface LearnStrategyWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export enum LetsadsSmsMessageStatusEnum {
  COMPLETE = 'Complete',
  ERROR = 'Error'
}

export enum LetsadsSmsMessageStatusErrorCodeEnum {
  API_DISABLED = 'API_DISABLED',
  AUTH_DATA = 'AUTH_DATA',
  INCORRECT_FROM = 'INCORRECT_FROM',
  INVALID_FROM = 'INVALID_FROM',
  MAX_MESSAGES_COUNT = 'MAX_MESSAGES_COUNT',
  MESSAGE_TOO_LONG = 'MESSAGE_TOO_LONG',
  NOT_ENOUGH_MONEY = 'NOT_ENOUGH_MONEY',
  NO_DATA = 'NO_DATA',
  NO_MESSAGE = 'NO_MESSAGE',
  REQUEST_FORMAT = 'REQUEST_FORMAT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  USER_NOT_MODERATED = 'USER_NOT_MODERATED',
  WRONG_DATA_FORMAT = 'WRONG_DATA_FORMAT'
}

export interface LetsadsSmsMessageStatusItemListRelationFilter {
  every?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
  none?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
  some?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
}

export interface LetsadsSmsMessageStatusItemWhereInput {
  AND?: Maybe<Array<LetsadsSmsMessageStatusItemWhereInput>>;
  LetsadsSmsMessageStatus?: Maybe<LetsadsSmsMessageStatusWhereInput>;
  NOT?: Maybe<Array<LetsadsSmsMessageStatusItemWhereInput>>;
  OR?: Maybe<Array<LetsadsSmsMessageStatusItemWhereInput>>;
  Status?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sms_id?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface LetsadsSmsMessageStatusWhereInput {
  AND?: Maybe<Array<LetsadsSmsMessageStatusWhereInput>>;
  LetsadsSmsMessageStatusItem?: Maybe<LetsadsSmsMessageStatusItemListRelationFilter>;
  NOT?: Maybe<Array<LetsadsSmsMessageStatusWhereInput>>;
  OR?: Maybe<Array<LetsadsSmsMessageStatusWhereInput>>;
  SmsMessage?: Maybe<SmsMessageListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  errorCode?: Maybe<EnumLetsadsSmsMessageStatusErrorCodeEnumNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<EnumLetsadsSmsMessageStatusEnumNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface LetterListRelationFilter {
  every?: Maybe<LetterWhereInput>;
  none?: Maybe<LetterWhereInput>;
  some?: Maybe<LetterWhereInput>;
}

export enum LetterStatus {
  CREATED = 'Created',
  ERROR = 'Error',
  PROCESSING = 'Processing',
  SENDED = 'Sended'
}

export interface LetterWhereInput {
  AND?: Maybe<Array<LetterWhereInput>>;
  NOT?: Maybe<Array<LetterWhereInput>>;
  OR?: Maybe<Array<LetterWhereInput>>;
  User?: Maybe<StringNullableFilter>;
  User_LetterToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  deleteOnSend?: Maybe<BoolFilter>;
  email?: Maybe<StringFilter>;
  errorMessage?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  message?: Maybe<StringFilter>;
  rank?: Maybe<IntNullableFilter>;
  replyTo?: Maybe<StringNullableFilter>;
  returnTo?: Maybe<StringNullableFilter>;
  status?: Maybe<EnumLetterStatusFilter>;
  subject?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export enum LogLevel {
  ERROR = 'Error',
  FATAL = 'Fatal',
  INFO = 'Info',
  NOTICE = 'Notice',
  WARNING = 'Warning'
}

export interface LogListRelationFilter {
  every?: Maybe<LogWhereInput>;
  none?: Maybe<LogWhereInput>;
  some?: Maybe<LogWhereInput>;
}

export interface LogWhereInput {
  AND?: Maybe<Array<LogWhereInput>>;
  Import?: Maybe<StringNullableFilter>;
  Import_ImportToLog?: Maybe<ImportWhereInput>;
  NOT?: Maybe<Array<LogWhereInput>>;
  OR?: Maybe<Array<LogWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  level?: Maybe<EnumLogLevelFilter>;
  message?: Maybe<StringFilter>;
  objectType?: Maybe<StringNullableFilter>;
  stack?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface LogedInListRelationFilter {
  every?: Maybe<LogedInWhereInput>;
  none?: Maybe<LogedInWhereInput>;
  some?: Maybe<LogedInWhereInput>;
}

export interface LogedInWhereInput {
  AND?: Maybe<Array<LogedInWhereInput>>;
  NOT?: Maybe<Array<LogedInWhereInput>>;
  OR?: Maybe<Array<LogedInWhereInput>>;
  User?: Maybe<StringNullableFilter>;
  User_LogedInToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  fake?: Maybe<BoolNullableFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface MessageListRelationFilter {
  every?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
}

export enum MessageType {
  ERROR = 'ERROR',
  INFO = 'INFO',
  PLAYER = 'PLAYER',
  SERVER = 'SERVER'
}

export interface MessageWhereInput {
  AND?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  World?: Maybe<WorldWhereInput>;
  body?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  sender?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumMessageTypeFilter>;
  world?: Maybe<StringNullableFilter>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createBlogProcessor: ResourceResponse;
  createChatMessageProcessor: ChatMessageResponse;
  createCodeChallengeCompletionProcessor: CodeChallengeCompletionResponse;
  createCommentProcessor: ResourceResponse;
  createLearnStrategy: LearnStrategy;
  createLearnStrategyStage: LearnStrategyStage;
  createProjectProcessor: ProjectResponse;
  createResetPasswordProcessor: ResetPasswordResponse;
  createTaskProcessor: TaskResponse;
  createTaskTechnologyProcessor: TaskTechnologyResponse;
  createTechnology: Technology;
  createTimerProcessor: TimerResponse;
  createTopicProcessor: ResourceResponse;
  createUserLearnStrategy: UserLearnStrategy;
  createUserTechnologyProcessor: UserTechnologyResponse;
  deleteLearnStrategyStage: LearnStrategyStage;
  deleteNotice?: Maybe<Notice>;
  resetPasswordProcessor: AuthPayload;
  /** Авторизация */
  signin: AuthPayload;
  /** Регистрация */
  signup: AuthPayload;
  /** Загрузка файла */
  singleUpload?: Maybe<File>;
  updateBlogProcessor: ResourceResponse;
  updateCodeChallengeCompletionProcessor: CodeChallengeCompletionResponse;
  updateCommentProcessor: ResourceResponse;
  updateLearnStrategy: LearnStrategy;
  updateProjectProcessor: ProjectResponse;
  updateTaskProcessor: TaskResponse;
  updateTaskTechnologyProcessor: TaskTechnologyResponse;
  updateTimerProcessor: TimerResponse;
  updateTopicProcessor: ResourceResponse;
  updateUserProcessor: UserResponse;
  updateUserTechnologyProcessor: UserTechnologyResponse;
}


export type MutationCreateBlogProcessorArgs = {
  data: BlogCreateInput;
};


export type MutationCreateChatMessageProcessorArgs = {
  data: ChatMessageCreateInput;
};


export type MutationCreateCodeChallengeCompletionProcessorArgs = {
  data: CodeChallengeCompletionCreateInput;
};


export type MutationCreateCommentProcessorArgs = {
  data: CommentCreateInput;
};


export type MutationCreateLearnStrategyArgs = {
  data: LearnStrategyCreateInput;
};


export type MutationCreateLearnStrategyStageArgs = {
  data: LearnStrategyStageCreateInput;
};


export type MutationCreateProjectProcessorArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateResetPasswordProcessorArgs = {
  where: UserWhereUniqueInput;
};


export type MutationCreateTaskProcessorArgs = {
  data: TaskCreateInput;
};


export type MutationCreateTaskTechnologyProcessorArgs = {
  data: TaskTechnologyCreateInput;
};


export type MutationCreateTechnologyArgs = {
  data: TechnologyCreateInput;
};


export type MutationCreateTimerProcessorArgs = {
  data: TimerCreateInput;
};


export type MutationCreateTopicProcessorArgs = {
  data: TopicCreateInput;
};


export type MutationCreateUserLearnStrategyArgs = {
  data: UserLearnStrategyCreateInput;
};


export type MutationCreateUserTechnologyProcessorArgs = {
  data: UserTechnologyCreateInput;
};


export type MutationDeleteLearnStrategyStageArgs = {
  where: LearnStrategyStageWhereUniqueInput;
};


export type MutationDeleteNoticeArgs = {
  where: NoticeWhereUniqueInput;
};


export type MutationResetPasswordProcessorArgs = {
  where: ResetPasswordProcessorWhereInput;
};


export type MutationSigninArgs = {
  data: UserSigninDataInput;
  where: UserWhereUniqueInput;
};


export type MutationSignupArgs = {
  data: UserSignupDataInput;
};


export type MutationSingleUploadArgs = {
  data?: Maybe<SingleUploadInput>;
  file?: Maybe<Scalars['Upload']>;
};


export type MutationUpdateBlogProcessorArgs = {
  data: BlogUpdateInput;
  where: ResourceWhereUniqueInput;
};


export type MutationUpdateCodeChallengeCompletionProcessorArgs = {
  data: CodeChallengeCompletionUpdateInput;
  where: CodeChallengeCompletionWhereUniqueInput;
};


export type MutationUpdateCommentProcessorArgs = {
  data: CommentUpdateInput;
  where: ResourceWhereUniqueInput;
};


export type MutationUpdateLearnStrategyArgs = {
  data: LearnStrategyUpdateInput;
  where: LearnStrategyWhereUniqueInput;
};


export type MutationUpdateProjectProcessorArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateTaskProcessorArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateTaskTechnologyProcessorArgs = {
  data: TaskTechnologyUpdateInput;
  where: TaskTechnologyWhereUniqueInput;
};


export type MutationUpdateTimerProcessorArgs = {
  data: TimerUpdateInput;
  where: TimerWhereUniqueInput;
};


export type MutationUpdateTopicProcessorArgs = {
  data: TopicUpdateInput;
  where: ResourceWhereUniqueInput;
};


export type MutationUpdateUserProcessorArgs = {
  data: UserUpdateInput;
};


export type MutationUpdateUserTechnologyProcessorArgs = {
  data: UserTechnologyUpdateInput;
  where: UserTechnologyWhereUniqueInput;
};

export interface NestedBoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface NestedBoolNullableFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
}

export interface NestedDateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedDecimalFilter {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
}

export interface NestedDecimalNullableFilter {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalNullableFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
}

export interface NestedEnumCallRequestStatusFilter {
  equals?: Maybe<CallRequestStatus>;
  in?: Maybe<Array<CallRequestStatus>>;
  not?: Maybe<NestedEnumCallRequestStatusFilter>;
  notIn?: Maybe<Array<CallRequestStatus>>;
}

export interface NestedEnumEthAccountTypeFilter {
  equals?: Maybe<EthAccountType>;
  in?: Maybe<Array<EthAccountType>>;
  not?: Maybe<NestedEnumEthAccountTypeFilter>;
  notIn?: Maybe<Array<EthAccountType>>;
}

export interface NestedEnumEthTransactionTypeNullableFilter {
  equals?: Maybe<EthTransactionType>;
  in?: Maybe<Array<EthTransactionType>>;
  not?: Maybe<NestedEnumEthTransactionTypeNullableFilter>;
  notIn?: Maybe<Array<EthTransactionType>>;
}

export interface NestedEnumGamemodeFilter {
  equals?: Maybe<Gamemode>;
  in?: Maybe<Array<Gamemode>>;
  not?: Maybe<NestedEnumGamemodeFilter>;
  notIn?: Maybe<Array<Gamemode>>;
}

export interface NestedEnumImportStatusFilter {
  equals?: Maybe<ImportStatus>;
  in?: Maybe<Array<ImportStatus>>;
  not?: Maybe<NestedEnumImportStatusFilter>;
  notIn?: Maybe<Array<ImportStatus>>;
}

export interface NestedEnumLetsadsSmsMessageStatusEnumNullableFilter {
  equals?: Maybe<LetsadsSmsMessageStatusEnum>;
  in?: Maybe<Array<LetsadsSmsMessageStatusEnum>>;
  not?: Maybe<NestedEnumLetsadsSmsMessageStatusEnumNullableFilter>;
  notIn?: Maybe<Array<LetsadsSmsMessageStatusEnum>>;
}

export interface NestedEnumLetsadsSmsMessageStatusErrorCodeEnumNullableFilter {
  equals?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  in?: Maybe<Array<LetsadsSmsMessageStatusErrorCodeEnum>>;
  not?: Maybe<NestedEnumLetsadsSmsMessageStatusErrorCodeEnumNullableFilter>;
  notIn?: Maybe<Array<LetsadsSmsMessageStatusErrorCodeEnum>>;
}

export interface NestedEnumLetterStatusFilter {
  equals?: Maybe<LetterStatus>;
  in?: Maybe<Array<LetterStatus>>;
  not?: Maybe<NestedEnumLetterStatusFilter>;
  notIn?: Maybe<Array<LetterStatus>>;
}

export interface NestedEnumLogLevelFilter {
  equals?: Maybe<LogLevel>;
  in?: Maybe<Array<LogLevel>>;
  not?: Maybe<NestedEnumLogLevelFilter>;
  notIn?: Maybe<Array<LogLevel>>;
}

export interface NestedEnumMessageTypeFilter {
  equals?: Maybe<MessageType>;
  in?: Maybe<Array<MessageType>>;
  not?: Maybe<NestedEnumMessageTypeFilter>;
  notIn?: Maybe<Array<MessageType>>;
}

export interface NestedEnumNoticeTypeFilter {
  equals?: Maybe<NoticeType>;
  in?: Maybe<Array<NoticeType>>;
  not?: Maybe<NestedEnumNoticeTypeFilter>;
  notIn?: Maybe<Array<NoticeType>>;
}

export interface NestedEnumProjectMemberStatusFilter {
  equals?: Maybe<ProjectMemberStatus>;
  in?: Maybe<Array<ProjectMemberStatus>>;
  not?: Maybe<NestedEnumProjectMemberStatusFilter>;
  notIn?: Maybe<Array<ProjectMemberStatus>>;
}

export interface NestedEnumProjectStatusNullableFilter {
  equals?: Maybe<ProjectStatus>;
  in?: Maybe<Array<ProjectStatus>>;
  not?: Maybe<NestedEnumProjectStatusNullableFilter>;
  notIn?: Maybe<Array<ProjectStatus>>;
}

export interface NestedEnumProjectTypeNullableFilter {
  equals?: Maybe<ProjectType>;
  in?: Maybe<Array<ProjectType>>;
  not?: Maybe<NestedEnumProjectTypeNullableFilter>;
  notIn?: Maybe<Array<ProjectType>>;
}

export interface NestedEnumResourceTypeFilter {
  equals?: Maybe<ResourceType>;
  in?: Maybe<Array<ResourceType>>;
  not?: Maybe<NestedEnumResourceTypeFilter>;
  notIn?: Maybe<Array<ResourceType>>;
}

export interface NestedEnumTagStatusFilter {
  equals?: Maybe<TagStatus>;
  in?: Maybe<Array<TagStatus>>;
  not?: Maybe<NestedEnumTagStatusFilter>;
  notIn?: Maybe<Array<TagStatus>>;
}

export interface NestedEnumTaskMemberStatusFilter {
  equals?: Maybe<TaskMemberStatus>;
  in?: Maybe<Array<TaskMemberStatus>>;
  not?: Maybe<NestedEnumTaskMemberStatusFilter>;
  notIn?: Maybe<Array<TaskMemberStatus>>;
}

export interface NestedEnumTaskReactionTypeFilter {
  equals?: Maybe<TaskReactionType>;
  in?: Maybe<Array<TaskReactionType>>;
  not?: Maybe<NestedEnumTaskReactionTypeFilter>;
  notIn?: Maybe<Array<TaskReactionType>>;
}

export interface NestedEnumTaskStatusFilter {
  equals?: Maybe<TaskStatus>;
  in?: Maybe<Array<TaskStatus>>;
  not?: Maybe<NestedEnumTaskStatusFilter>;
  notIn?: Maybe<Array<TaskStatus>>;
}

export interface NestedEnumTeamMemberStatusFilter {
  equals?: Maybe<TeamMemberStatus>;
  in?: Maybe<Array<TeamMemberStatus>>;
  not?: Maybe<NestedEnumTeamMemberStatusFilter>;
  notIn?: Maybe<Array<TeamMemberStatus>>;
}

export interface NestedEnumTeamStatusFilter {
  equals?: Maybe<TeamStatus>;
  in?: Maybe<Array<TeamStatus>>;
  not?: Maybe<NestedEnumTeamStatusFilter>;
  notIn?: Maybe<Array<TeamStatus>>;
}

export interface NestedEnumTechnologyLessonUserStatusFilter {
  equals?: Maybe<TechnologyLessonUserStatus>;
  in?: Maybe<Array<TechnologyLessonUserStatus>>;
  not?: Maybe<NestedEnumTechnologyLessonUserStatusFilter>;
  notIn?: Maybe<Array<TechnologyLessonUserStatus>>;
}

export interface NestedEnumUserTechnologyHiringStatusNullableFilter {
  equals?: Maybe<UserTechnologyHiringStatus>;
  in?: Maybe<Array<UserTechnologyHiringStatus>>;
  not?: Maybe<NestedEnumUserTechnologyHiringStatusNullableFilter>;
  notIn?: Maybe<Array<UserTechnologyHiringStatus>>;
}

export interface NestedEnumUserTechnologyStatusNullableFilter {
  equals?: Maybe<UserTechnologyStatus>;
  in?: Maybe<Array<UserTechnologyStatus>>;
  not?: Maybe<NestedEnumUserTechnologyStatusNullableFilter>;
  notIn?: Maybe<Array<UserTechnologyStatus>>;
}

export interface NestedEnumWorldTypeFilter {
  equals?: Maybe<WorldType>;
  in?: Maybe<Array<WorldType>>;
  not?: Maybe<NestedEnumWorldTypeFilter>;
  notIn?: Maybe<Array<WorldType>>;
}

export interface NestedIntFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedIntNullableFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedStringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface NestedStringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Notice {
  __typename?: 'Notice';
  ChatMessage?: Maybe<ChatMessage>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitation>;
  CreatedBy?: Maybe<User>;
  User?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  type: NoticeType;
  updatedAt: Scalars['DateTime'];
}

export interface NoticeConnection {
  __typename?: 'NoticeConnection';
  aggregate: AggregateNotice;
  edges: Array<Maybe<NoticeEdge>>;
}

export interface NoticeEdge {
  __typename?: 'NoticeEdge';
  node: Notice;
}

export interface NoticeListRelationFilter {
  every?: Maybe<NoticeWhereInput>;
  none?: Maybe<NoticeWhereInput>;
  some?: Maybe<NoticeWhereInput>;
}

export interface NoticeOrderByInput {
  ChatMessage?: Maybe<SortOrder>;
  CreatedBy?: Maybe<SortOrder>;
  User?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export enum NoticeType {
  CALL = 'Call',
  CALLREQUEST = 'CallRequest',
  CHATMESSAGE = 'ChatMessage',
  CHATROOMINVITATION = 'ChatRoomInvitation'
}

export interface NoticeWhereInput {
  AND?: Maybe<Array<NoticeWhereInput>>;
  ChatMessage?: Maybe<StringNullableFilter>;
  ChatMessage_ChatMessageToNotice?: Maybe<ChatMessageWhereInput>;
  ChatRoomInvitations?: Maybe<ChatRoomInvitationListRelationFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<NoticeWhereInput>>;
  OR?: Maybe<Array<NoticeWhereInput>>;
  User?: Maybe<StringNullableFilter>;
  User_Notice_CreatedByToUser?: Maybe<UserWhereInput>;
  User_Notice_UserToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  type?: Maybe<EnumNoticeTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface NoticeWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface NotificationType {
  __typename?: 'NotificationType';
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  oldID?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
}

export interface NotificationTypeListRelationFilter {
  every?: Maybe<NotificationTypeWhereInput>;
  none?: Maybe<NotificationTypeWhereInput>;
  some?: Maybe<NotificationTypeWhereInput>;
}

export interface NotificationTypeOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  comment?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  oldID?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface NotificationTypeWhereInput {
  AND?: Maybe<Array<NotificationTypeWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<NotificationTypeWhereInput>>;
  OR?: Maybe<Array<NotificationTypeWhereInput>>;
  User_NotificationTypeToUser?: Maybe<UserWhereInput>;
  User_UserNotificationTypes?: Maybe<UserListRelationFilter>;
  code?: Maybe<StringNullableFilter>;
  comment?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  oldID?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface NotificationTypeWhereUniqueInput {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  oldID?: Maybe<Scalars['Int']>;
}

export interface NotificationTypeUserNotificationTypesUpdateInput {
  connect?: Maybe<NotificationTypeWhereUniqueInput>;
  disconnect?: Maybe<NotificationTypeWhereUniqueInput>;
}

export interface PlayerListRelationFilter {
  every?: Maybe<PlayerWhereInput>;
  none?: Maybe<PlayerWhereInput>;
  some?: Maybe<PlayerWhereInput>;
}

export interface PlayerWhereInput {
  AND?: Maybe<Array<PlayerWhereInput>>;
  Inventory?: Maybe<InventoryWhereInput>;
  NOT?: Maybe<Array<PlayerWhereInput>>;
  OR?: Maybe<Array<PlayerWhereInput>>;
  User?: Maybe<UserWhereInput>;
  World?: Maybe<WorldWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  dirx?: Maybe<DecimalFilter>;
  diry?: Maybe<DecimalFilter>;
  gamemode?: Maybe<EnumGamemodeFilter>;
  id?: Maybe<StringFilter>;
  inventory?: Maybe<StringNullableFilter>;
  isAdmin?: Maybe<BoolFilter>;
  lastLogin?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<StringNullableFilter>;
  world?: Maybe<StringNullableFilter>;
  x?: Maybe<DecimalFilter>;
  y?: Maybe<DecimalFilter>;
  z?: Maybe<DecimalFilter>;
}

export interface PositionListRelationFilter {
  every?: Maybe<PositionWhereInput>;
  none?: Maybe<PositionWhereInput>;
  some?: Maybe<PositionWhereInput>;
}

export interface PositionWhereInput {
  AND?: Maybe<Array<PositionWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<PositionWhereInput>>;
  OR?: Maybe<Array<PositionWhereInput>>;
  User_PositionToUser?: Maybe<UserWhereInput>;
  User_PositionUsers?: Maybe<UserListRelationFilter>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface Project {
  __typename?: 'Project';
  CreatedBy?: Maybe<User>;
  Members?: Maybe<Array<ProjectMember>>;
  ProjectTasks?: Maybe<Array<ProjectTask>>;
  Resource?: Maybe<Resource>;
  content?: Maybe<Scalars['JSON']>;
  contentText?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  oldID?: Maybe<Scalars['Int']>;
  public?: Maybe<Scalars['Boolean']>;
  sequence?: Maybe<Scalars['Int']>;
  status?: Maybe<ProjectStatus>;
  type?: Maybe<ProjectType>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
}


export type ProjectProjectTasksArgs = {
  orderBy?: Maybe<ProjectTaskOrderByInput>;
};

export interface ProjectConnection {
  __typename?: 'ProjectConnection';
  aggregate: AggregateProject;
  edges: Array<Maybe<ProjectEdge>>;
}

export interface ProjectCreateInput {
  name: Scalars['String'];
}

export interface ProjectCreateOneWithoutProjectTasksInput {
  connect?: Maybe<ProjectWhereUniqueInput>;
}

export interface ProjectEdge {
  __typename?: 'ProjectEdge';
  node: Project;
}

export interface ProjectListRelationFilter {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
}

export interface ProjectMember {
  __typename?: 'ProjectMember';
  Project?: Maybe<Project>;
  User?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status?: Maybe<ProjectMemberStatus>;
  updatedAt: Scalars['DateTime'];
}

export interface ProjectMemberListRelationFilter {
  every?: Maybe<ProjectMemberWhereInput>;
  none?: Maybe<ProjectMemberWhereInput>;
  some?: Maybe<ProjectMemberWhereInput>;
}

export enum ProjectMemberStatus {
  ACTIVE = 'Active',
  FIRED = 'Fired',
  INVITED = 'Invited',
  QUIT = 'Quit'
}

export interface ProjectMemberWhereInput {
  AND?: Maybe<Array<ProjectMemberWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ProjectMemberWhereInput>>;
  OR?: Maybe<Array<ProjectMemberWhereInput>>;
  Project?: Maybe<StringNullableFilter>;
  Project_ProjectToProjectMember?: Maybe<ProjectWhereInput>;
  Services?: Maybe<ServiceListRelationFilter>;
  User?: Maybe<StringNullableFilter>;
  User_ProjectMember_CreatedByToUser?: Maybe<UserWhereInput>;
  User_ProjectMember_UserToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<EnumProjectMemberStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ProjectOrderByInput {
  ChatRoom?: Maybe<SortOrder>;
  CreatedBy?: Maybe<SortOrder>;
  Image?: Maybe<SortOrder>;
  Resource?: Maybe<SortOrder>;
  Team?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  contentText?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  domain?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  oldID?: Maybe<SortOrder>;
  public?: Maybe<SortOrder>;
  sequence?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
}

export interface ProjectResponse {
  __typename?: 'ProjectResponse';
  data?: Maybe<Project>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export enum ProjectStatus {
  ACCEPTED = 'Accepted',
  COMPLETED = 'Completed',
  NEW = 'New',
  PROCESSING = 'Processing',
  REJECTED = 'Rejected',
  REOPENED = 'Reopened'
}

export interface ProjectTask {
  __typename?: 'ProjectTask';
  CreatedBy?: Maybe<User>;
  Project?: Maybe<Project>;
  Task?: Maybe<Task>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
}

export interface ProjectTaskListRelationFilter {
  every?: Maybe<ProjectTaskWhereInput>;
  none?: Maybe<ProjectTaskWhereInput>;
  some?: Maybe<ProjectTaskWhereInput>;
}

export interface ProjectTaskOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Project?: Maybe<SortOrder>;
  Task?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export enum ProjectTaskType {
  BLOG = 'Blog',
  COMMENT = 'Comment',
  PERSONALBLOG = 'PersonalBlog',
  PROJECT = 'Project',
  PROJECTTASK = 'ProjectTask',
  SERVICE = 'Service',
  TEAM = 'Team',
  TOPIC = 'Topic'
}

export interface ProjectTaskWhereInput {
  AND?: Maybe<Array<ProjectTaskWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ProjectTaskWhereInput>>;
  OR?: Maybe<Array<ProjectTaskWhereInput>>;
  Project?: Maybe<StringNullableFilter>;
  Project_ProjectToProjectTask?: Maybe<ProjectWhereInput>;
  Task?: Maybe<StringNullableFilter>;
  Task_ProjectTaskToTask?: Maybe<TaskWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ProjectTaskWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export enum ProjectType {
  EDUCATION = 'Education'
}

export interface ProjectUpdateInput {
  name?: Maybe<Scalars['String']>;
}

export interface ProjectWhereInput {
  AND?: Maybe<Array<ProjectWhereInput>>;
  ChatRoom?: Maybe<StringNullableFilter>;
  ChatRoom_ChatRoomToProject?: Maybe<ChatRoomWhereInput>;
  CreatedBy?: Maybe<StringNullableFilter>;
  EthAccounts?: Maybe<EthAccountListRelationFilter>;
  File?: Maybe<FileWhereInput>;
  Image?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  ProjectMembers?: Maybe<ProjectMemberListRelationFilter>;
  ProjectTasks?: Maybe<ProjectTaskListRelationFilter>;
  Resource?: Maybe<StringNullableFilter>;
  Resource_Project_ResourceToResource?: Maybe<ResourceWhereInput>;
  Resources_ProjectToResource_PrismaProject?: Maybe<ResourceListRelationFilter>;
  Team?: Maybe<StringNullableFilter>;
  Team_ProjectCustomers?: Maybe<TeamListRelationFilter>;
  Team_ProjectToTeam?: Maybe<TeamWhereInput>;
  Templates_ProjectToTemplate_PrismaProject?: Maybe<TemplateListRelationFilter>;
  Templates_ProjectToTemplate_Project?: Maybe<TemplateListRelationFilter>;
  User_PrismaProjectUsers?: Maybe<UserListRelationFilter>;
  User_ProjectToUser?: Maybe<UserWhereInput>;
  content?: Maybe<JsonNullableFilter>;
  contentText?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  domain?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  oldID?: Maybe<IntNullableFilter>;
  public?: Maybe<BoolNullableFilter>;
  sequence?: Maybe<IntNullableFilter>;
  status?: Maybe<EnumProjectStatusNullableFilter>;
  type?: Maybe<EnumProjectTypeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  url?: Maybe<StringNullableFilter>;
}

export interface ProjectWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
  oldID?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
}

export interface Query {
  __typename?: 'Query';
  chatMessage?: Maybe<ChatMessage>;
  chatMessages: Array<ChatMessage>;
  chatMessagesConnection: ChatMessageConnection;
  chatMessagesCount: Scalars['Int'];
  chatRoom?: Maybe<ChatRoom>;
  chatRooms: Array<ChatRoom>;
  /** Количество чат-комнат */
  chatRoomsCount: Scalars['Int'];
  codeChallenge?: Maybe<CodeChallenge>;
  codeChallengeBlock?: Maybe<CodeChallengeBlock>;
  codeChallengeBlocks: Array<CodeChallengeBlock>;
  codeChallengeBlocksCount: Scalars['Int'];
  codeChallengeCompletion?: Maybe<CodeChallengeCompletion>;
  codeChallengeCompletions: Array<CodeChallengeCompletion>;
  codeChallenges: Array<CodeChallenge>;
  /** Файл */
  file?: Maybe<File>;
  /** Список файлов */
  files: Array<File>;
  /** Количество файлов */
  filesCount: Scalars['Int'];
  learnStrategies: Array<LearnStrategy>;
  learnStrategiesCount: Scalars['Int'];
  learnStrategy?: Maybe<LearnStrategy>;
  learnStrategyStage?: Maybe<LearnStrategyStage>;
  learnStrategyStages: Array<LearnStrategyStage>;
  learnStrategyStagesCount: Scalars['Int'];
  me?: Maybe<User>;
  /** Уведомление */
  notice?: Maybe<Notice>;
  /** Список уведомлений */
  notices: Array<Notice>;
  noticesConnection: NoticeConnection;
  /** Количество уведомлений */
  noticesCount: Scalars['Int'];
  /** Список уведомлений */
  notificationTypes: Array<NotificationType>;
  /** Количество уведомлений */
  notificationTypesCount: Scalars['Int'];
  project?: Maybe<Project>;
  projectTasks: Array<ProjectTask>;
  projects: Array<Project>;
  projectsConnection: ProjectConnection;
  resource?: Maybe<Resource>;
  resources: Array<Resource>;
  resourcesConnection: ResourceConnection;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  tagsConnection: TagConnection;
  task?: Maybe<Task>;
  taskTechnologies: Array<TaskTechnology>;
  taskTechnology?: Maybe<TaskTechnology>;
  taskTechnologysCount: Scalars['Int'];
  tasks: Array<Task>;
  tasksConnection: TaskConnection;
  tasksCount: Scalars['Int'];
  technologies: Array<Technology>;
  technologiesCount: Scalars['Int'];
  technology?: Maybe<Technology>;
  timer?: Maybe<Timer>;
  timers: Array<Timer>;
  timersConnection: TimerConnection;
  /** Пользователь */
  user?: Maybe<User>;
  userLearnStrategies: Array<UserLearnStrategy>;
  userLearnStrategiesCount: Scalars['Int'];
  userLearnStrategy?: Maybe<UserLearnStrategy>;
  userTechnologies: Array<UserTechnology>;
  userTechnology?: Maybe<UserTechnology>;
  userTechnologysCount: Scalars['Int'];
  /** Список пользователей */
  users: Array<User>;
  usersConnection: UserConnection;
  /** Количество пользователей */
  usersCount: Scalars['Int'];
}


export type QueryChatMessageArgs = {
  where: ChatMessageWhereUniqueInput;
};


export type QueryChatMessagesArgs = {
  cursor?: Maybe<ChatMessageWhereUniqueInput>;
  orderBy?: Maybe<Array<ChatMessageOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ChatMessageWhereInput>;
};


export type QueryChatMessagesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChatMessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ChatMessageWhereInput>;
};


export type QueryChatMessagesCountArgs = {
  where?: Maybe<ChatMessageWhereInput>;
};


export type QueryChatRoomArgs = {
  where: ChatRoomWhereUniqueInput;
};


export type QueryChatRoomsArgs = {
  cursor?: Maybe<ChatRoomWhereUniqueInput>;
  orderBy?: Maybe<Array<ChatRoomOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ChatRoomWhereInput>;
};


export type QueryChatRoomsCountArgs = {
  where?: Maybe<ChatRoomWhereInput>;
};


export type QueryCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
};


export type QueryCodeChallengeBlockArgs = {
  where: CodeChallengeBlockWhereUniqueInput;
};


export type QueryCodeChallengeBlocksArgs = {
  cursor?: Maybe<CodeChallengeBlockWhereUniqueInput>;
  orderBy?: Maybe<Array<CodeChallengeBlockOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CodeChallengeBlockWhereInput>;
};


export type QueryCodeChallengeBlocksCountArgs = {
  where?: Maybe<CodeChallengeBlockWhereInput>;
};


export type QueryCodeChallengeCompletionArgs = {
  where: CodeChallengeCompletionWhereUniqueInput;
};


export type QueryCodeChallengeCompletionsArgs = {
  cursor?: Maybe<CodeChallengeCompletionWhereUniqueInput>;
  orderBy?: Maybe<Array<CodeChallengeCompletionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CodeChallengeCompletionWhereInput>;
};


export type QueryCodeChallengesArgs = {
  cursor?: Maybe<CodeChallengeWhereUniqueInput>;
  orderBy?: Maybe<Array<CodeChallengeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CodeChallengeWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: Maybe<FileWhereUniqueInput>;
  orderBy?: Maybe<Array<FileOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FileWhereInput>;
};


export type QueryFilesCountArgs = {
  where?: Maybe<FileWhereInput>;
};


export type QueryLearnStrategiesArgs = {
  cursor?: Maybe<LearnStrategyWhereUniqueInput>;
  orderBy?: Maybe<Array<LearnStrategyOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LearnStrategyWhereInput>;
};


export type QueryLearnStrategiesCountArgs = {
  where?: Maybe<LearnStrategyWhereInput>;
};


export type QueryLearnStrategyArgs = {
  where: LearnStrategyWhereUniqueInput;
};


export type QueryLearnStrategyStageArgs = {
  where: LearnStrategyStageWhereUniqueInput;
};


export type QueryLearnStrategyStagesArgs = {
  cursor?: Maybe<LearnStrategyStageWhereUniqueInput>;
  orderBy?: Maybe<Array<LearnStrategyStageOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LearnStrategyStageWhereInput>;
};


export type QueryLearnStrategyStagesCountArgs = {
  where?: Maybe<LearnStrategyStageWhereInput>;
};


export type QueryNoticeArgs = {
  where: NoticeWhereUniqueInput;
};


export type QueryNoticesArgs = {
  cursor?: Maybe<NoticeWhereUniqueInput>;
  orderBy?: Maybe<Array<NoticeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NoticeWhereInput>;
};


export type QueryNoticesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<NoticeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NoticeWhereInput>;
};


export type QueryNoticesCountArgs = {
  where?: Maybe<NoticeWhereInput>;
};


export type QueryNotificationTypesArgs = {
  cursor?: Maybe<NotificationTypeWhereUniqueInput>;
  orderBy?: Maybe<Array<NotificationTypeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NotificationTypeWhereInput>;
};


export type QueryNotificationTypesCountArgs = {
  where?: Maybe<NotificationTypeWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectTasksArgs = {
  cursor?: Maybe<ProjectTaskWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectTaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectTaskWhereInput>;
};


export type QueryProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryResourceArgs = {
  where: ResourceWhereUniqueInput;
};


export type QueryResourcesArgs = {
  cursor?: Maybe<ResourceWhereUniqueInput>;
  orderBy?: Maybe<Array<ResourceOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResourceWhereInput>;
};


export type QueryResourcesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ResourceWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type QueryTagsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTaskTechnologiesArgs = {
  cursor?: Maybe<TaskTechnologyWhereUniqueInput>;
  orderBy?: Maybe<Array<TaskTechnologyOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskTechnologyWhereInput>;
};


export type QueryTaskTechnologyArgs = {
  where: TaskTechnologyWhereUniqueInput;
};


export type QueryTaskTechnologysCountArgs = {
  where?: Maybe<TaskTechnologyWhereInput>;
};


export type QueryTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryTasksConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TaskOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryTasksCountArgs = {
  where?: Maybe<TaskWhereInput>;
};


export type QueryTechnologiesArgs = {
  cursor?: Maybe<TechnologyWhereUniqueInput>;
  orderBy?: Maybe<Array<TechnologyOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TechnologyWhereInput>;
};


export type QueryTechnologiesCountArgs = {
  where?: Maybe<TechnologyWhereInput>;
};


export type QueryTechnologyArgs = {
  where: TechnologyWhereUniqueInput;
};


export type QueryTimerArgs = {
  where: TimerWhereUniqueInput;
};


export type QueryTimersArgs = {
  cursor?: Maybe<TimerWhereUniqueInput>;
  orderBy?: Maybe<Array<TimerOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TimerWhereInput>;
};


export type QueryTimersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TimerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TimerWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserLearnStrategiesArgs = {
  cursor?: Maybe<UserLearnStrategyWhereUniqueInput>;
  orderBy?: Maybe<Array<UserLearnStrategyOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserLearnStrategyWhereInput>;
};


export type QueryUserLearnStrategiesCountArgs = {
  where?: Maybe<UserLearnStrategyWhereInput>;
};


export type QueryUserLearnStrategyArgs = {
  where: UserLearnStrategyWhereUniqueInput;
};


export type QueryUserTechnologiesArgs = {
  cursor?: Maybe<UserTechnologyWhereUniqueInput>;
  orderBy?: Maybe<Array<UserTechnologyOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserTechnologyWhereInput>;
};


export type QueryUserTechnologyArgs = {
  where: UserTechnologyWhereUniqueInput;
};


export type QueryUserTechnologysCountArgs = {
  where?: Maybe<UserTechnologyWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: Maybe<UserWhereInput>;
};

/** Объект ошибки */
export interface RequestError {
  __typename?: 'RequestError';
  key: Scalars['String'];
  message: Scalars['String'];
}

export interface ResetPassword {
  __typename?: 'ResetPassword';
  foo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

export interface ResetPasswordListRelationFilter {
  every?: Maybe<ResetPasswordWhereInput>;
  none?: Maybe<ResetPasswordWhereInput>;
  some?: Maybe<ResetPasswordWhereInput>;
}

export interface ResetPasswordProcessorWhereInput {
  User: UserWhereUniqueInput;
  code: Scalars['ID'];
}

export interface ResetPasswordResponse {
  __typename?: 'ResetPasswordResponse';
  data?: Maybe<ResetPassword>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface ResetPasswordWhereInput {
  AND?: Maybe<Array<ResetPasswordWhereInput>>;
  NOT?: Maybe<Array<ResetPasswordWhereInput>>;
  OR?: Maybe<Array<ResetPasswordWhereInput>>;
  User?: Maybe<StringFilter>;
  User_ResetPasswordToUser?: Maybe<UserWhereInput>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  validTill?: Maybe<DateTimeNullableFilter>;
}

export interface ResetPasswordWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface Resource {
  __typename?: 'Resource';
  Blog?: Maybe<Resource>;
  CodeChallenge?: Maybe<CodeChallenge>;
  /** Комментарии */
  Comments?: Maybe<Array<Resource>>;
  CreatedBy?: Maybe<User>;
  Image?: Maybe<File>;
  Tags?: Maybe<Array<ResourceTag>>;
  Task?: Maybe<Task>;
  Topic?: Maybe<Resource>;
  class_key?: Maybe<Scalars['String']>;
  commentOldID?: Maybe<Scalars['Int']>;
  components?: Maybe<Scalars['JSON']>;
  content?: Maybe<Scalars['JSON']>;
  contentText?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  hidemenu: Scalars['Boolean'];
  id: Scalars['ID'];
  isfolder: Scalars['Boolean'];
  longtitle?: Maybe<Scalars['String']>;
  mockUpdate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  oldID?: Maybe<Scalars['Int']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  rating?: Maybe<Scalars['Float']>;
  searchable: Scalars['Boolean'];
  template?: Maybe<Scalars['Int']>;
  type?: Maybe<ResourceType>;
  updatedAt: Scalars['DateTime'];
  uri: Scalars['String'];
}


export type ResourceCommentsArgs = {
  orderBy?: Maybe<ResourceOrderByInput>;
};

export interface ResourceConnection {
  __typename?: 'ResourceConnection';
  aggregate: AggregateResource;
  edges: Array<Maybe<ResourceEdge>>;
}

export interface ResourceEdge {
  __typename?: 'ResourceEdge';
  node: Resource;
}

export interface ResourceListRelationFilter {
  every?: Maybe<ResourceWhereInput>;
  none?: Maybe<ResourceWhereInput>;
  some?: Maybe<ResourceWhereInput>;
}

export interface ResourceOrderByInput {
  Blog?: Maybe<SortOrder>;
  CreatedBy?: Maybe<SortOrder>;
  EthAccount?: Maybe<SortOrder>;
  Parent?: Maybe<SortOrder>;
  PrismaProject?: Maybe<SortOrder>;
  Service?: Maybe<SortOrder>;
  Task?: Maybe<SortOrder>;
  Team?: Maybe<SortOrder>;
  Topic?: Maybe<SortOrder>;
  class_key?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  commentOldID?: Maybe<SortOrder>;
  components?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  contentText?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  hidemenu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isfolder?: Maybe<SortOrder>;
  longtitle?: Maybe<SortOrder>;
  mockUpdate?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  negativeVotesCount?: Maybe<SortOrder>;
  neutralVotesCount?: Maybe<SortOrder>;
  oldID?: Maybe<SortOrder>;
  positiveVotesCount?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  searchable?: Maybe<SortOrder>;
  template?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  uri?: Maybe<SortOrder>;
}

export interface ResourceResponse {
  __typename?: 'ResourceResponse';
  data?: Maybe<Resource>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface ResourceTag {
  __typename?: 'ResourceTag';
  CreatedBy?: Maybe<User>;
  Resource?: Maybe<Resource>;
  Tag?: Maybe<Tag>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: TagStatus;
  updatedAt: Scalars['DateTime'];
}

export interface ResourceTagListRelationFilter {
  every?: Maybe<ResourceTagWhereInput>;
  none?: Maybe<ResourceTagWhereInput>;
  some?: Maybe<ResourceTagWhereInput>;
}

export interface ResourceTagWhereInput {
  AND?: Maybe<Array<ResourceTagWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ResourceTagWhereInput>>;
  OR?: Maybe<Array<ResourceTagWhereInput>>;
  Resource?: Maybe<StringNullableFilter>;
  Resource_ResourceToResourceTag?: Maybe<ResourceWhereInput>;
  Tag?: Maybe<StringNullableFilter>;
  Tag_ResourceTagToTag?: Maybe<TagWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export enum ResourceType {
  BLOG = 'Blog',
  COMMENT = 'Comment',
  PERSONALBLOG = 'PersonalBlog',
  PROJECT = 'Project',
  RESOURCE = 'Resource',
  SERVICE = 'Service',
  TEAM = 'Team',
  TOPIC = 'Topic'
}

export interface ResourceWhereInput {
  AND?: Maybe<Array<ResourceWhereInput>>;
  Blog?: Maybe<StringNullableFilter>;
  CodeChallenges?: Maybe<CodeChallengeListRelationFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  EthAccount?: Maybe<StringNullableFilter>;
  EthAccount_EthAccountToResource?: Maybe<EthAccountWhereInput>;
  Files?: Maybe<FileListRelationFilter>;
  Galleries?: Maybe<GalleryListRelationFilter>;
  NOT?: Maybe<Array<ResourceWhereInput>>;
  OR?: Maybe<Array<ResourceWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  PrismaProject?: Maybe<StringNullableFilter>;
  Project_ProjectToResource_PrismaProject?: Maybe<ProjectWhereInput>;
  Projects_Project_ResourceToResource?: Maybe<ProjectListRelationFilter>;
  ResourceTags?: Maybe<ResourceTagListRelationFilter>;
  Resource_ResourceToResource_Blog?: Maybe<ResourceWhereInput>;
  Resource_ResourceToResource_Parent?: Maybe<ResourceWhereInput>;
  Resource_ResourceToResource_Topic?: Maybe<ResourceWhereInput>;
  Service?: Maybe<StringNullableFilter>;
  Service_ResourceToService?: Maybe<ServiceWhereInput>;
  Task?: Maybe<StringNullableFilter>;
  Task_ResourceToTask?: Maybe<TaskWhereInput>;
  Team?: Maybe<StringNullableFilter>;
  Team_ResourceToTeam?: Maybe<TeamWhereInput>;
  Topic?: Maybe<StringNullableFilter>;
  User?: Maybe<UserWhereInput>;
  Votes?: Maybe<VoteListRelationFilter>;
  class_key?: Maybe<StringNullableFilter>;
  code?: Maybe<StringNullableFilter>;
  commentOldID?: Maybe<IntNullableFilter>;
  components?: Maybe<JsonNullableFilter>;
  content?: Maybe<JsonNullableFilter>;
  contentText?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deleted?: Maybe<BoolFilter>;
  hidemenu?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  isfolder?: Maybe<BoolFilter>;
  longtitle?: Maybe<StringNullableFilter>;
  mockUpdate?: Maybe<DateTimeNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  negativeVotesCount?: Maybe<IntNullableFilter>;
  neutralVotesCount?: Maybe<IntNullableFilter>;
  oldID?: Maybe<IntNullableFilter>;
  other_Resource_ResourceToResource_Blogs?: Maybe<ResourceListRelationFilter>;
  other_Resource_ResourceToResource_Parents?: Maybe<ResourceListRelationFilter>;
  other_Resource_ResourceToResource_Topics?: Maybe<ResourceListRelationFilter>;
  positiveVotesCount?: Maybe<IntNullableFilter>;
  published?: Maybe<BoolFilter>;
  rating?: Maybe<DecimalNullableFilter>;
  searchable?: Maybe<BoolFilter>;
  template?: Maybe<IntNullableFilter>;
  type?: Maybe<EnumResourceTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  uri?: Maybe<StringFilter>;
}

export interface ResourceWhereUniqueInput {
  code?: Maybe<Scalars['String']>;
  commentOldID?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  oldID?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
}

export interface RouteListRelationFilter {
  every?: Maybe<RouteWhereInput>;
  none?: Maybe<RouteWhereInput>;
  some?: Maybe<RouteWhereInput>;
}

export interface RouteWhereInput {
  AND?: Maybe<Array<RouteWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<RouteWhereInput>>;
  OR?: Maybe<Array<RouteWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  Route?: Maybe<RouteWhereInput>;
  User?: Maybe<UserWhereInput>;
  component?: Maybe<StringFilter>;
  exact?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  other_Routes?: Maybe<RouteListRelationFilter>;
  path?: Maybe<StringFilter>;
}

export interface ServiceCategoryListRelationFilter {
  every?: Maybe<ServiceCategoryWhereInput>;
  none?: Maybe<ServiceCategoryWhereInput>;
  some?: Maybe<ServiceCategoryWhereInput>;
}

export interface ServiceCategoryWhereInput {
  AND?: Maybe<Array<ServiceCategoryWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ServiceCategoryWhereInput>>;
  OR?: Maybe<Array<ServiceCategoryWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  ServiceCategory?: Maybe<ServiceCategoryWhereInput>;
  Services?: Maybe<ServiceListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  other_ServiceCategories?: Maybe<ServiceCategoryListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface ServiceListRelationFilter {
  every?: Maybe<ServiceWhereInput>;
  none?: Maybe<ServiceWhereInput>;
  some?: Maybe<ServiceWhereInput>;
}

export interface ServiceWhereInput {
  AND?: Maybe<Array<ServiceWhereInput>>;
  Category?: Maybe<StringNullableFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<ServiceWhereInput>>;
  OR?: Maybe<Array<ServiceWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  ProjectMembers?: Maybe<ProjectMemberListRelationFilter>;
  Resources?: Maybe<ResourceListRelationFilter>;
  Service?: Maybe<ServiceWhereInput>;
  ServiceCategory?: Maybe<ServiceCategoryWhereInput>;
  User?: Maybe<UserWhereInput>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  oldID?: Maybe<IntNullableFilter>;
  other_Services?: Maybe<ServiceListRelationFilter>;
  rank?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface SettingsListRelationFilter {
  every?: Maybe<SettingsWhereInput>;
  none?: Maybe<SettingsWhereInput>;
  some?: Maybe<SettingsWhereInput>;
}

export interface SettingsWhereInput {
  AND?: Maybe<Array<SettingsWhereInput>>;
  NOT?: Maybe<Array<SettingsWhereInput>>;
  OR?: Maybe<Array<SettingsWhereInput>>;
  User?: Maybe<StringNullableFilter>;
  User_SettingsToUser?: Maybe<UserWhereInput>;
  id?: Maybe<StringFilter>;
  renderDistance?: Maybe<IntFilter>;
}

export interface SingleUploadInput {
  /** В какую директорю загружать файл */
  directory?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  /** Пользовательское имя файла */
  name?: Maybe<Scalars['String']>;
}

export interface SmsMessageListRelationFilter {
  every?: Maybe<SmsMessageWhereInput>;
  none?: Maybe<SmsMessageWhereInput>;
  some?: Maybe<SmsMessageWhereInput>;
}

export interface SmsMessageWhereInput {
  AND?: Maybe<Array<SmsMessageWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  LetsadsSmsMessageStatus?: Maybe<LetsadsSmsMessageStatusWhereInput>;
  NOT?: Maybe<Array<SmsMessageWhereInput>>;
  OR?: Maybe<Array<SmsMessageWhereInput>>;
  Provider?: Maybe<StringNullableFilter>;
  SmsMessage_recipients?: Maybe<SmsMessageRecipientsListRelationFilter>;
  SmsProvider?: Maybe<SmsProviderWhereInput>;
  Status?: Maybe<StringNullableFilter>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  deletOnSend?: Maybe<BoolNullableFilter>;
  from?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface SmsMessageRecipientsListRelationFilter {
  every?: Maybe<SmsMessageRecipientsWhereInput>;
  none?: Maybe<SmsMessageRecipientsWhereInput>;
  some?: Maybe<SmsMessageRecipientsWhereInput>;
}

export interface SmsMessageRecipientsWhereInput {
  AND?: Maybe<Array<SmsMessageRecipientsWhereInput>>;
  NOT?: Maybe<Array<SmsMessageRecipientsWhereInput>>;
  OR?: Maybe<Array<SmsMessageRecipientsWhereInput>>;
  SmsMessage?: Maybe<SmsMessageWhereInput>;
  nodeId?: Maybe<StringFilter>;
  position?: Maybe<IntFilter>;
  value?: Maybe<StringFilter>;
}

export interface SmsProviderListRelationFilter {
  every?: Maybe<SmsProviderWhereInput>;
  none?: Maybe<SmsProviderWhereInput>;
  some?: Maybe<SmsProviderWhereInput>;
}

export interface SmsProviderWhereInput {
  AND?: Maybe<Array<SmsProviderWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<SmsProviderWhereInput>>;
  OR?: Maybe<Array<SmsProviderWhereInput>>;
  SmsMessages?: Maybe<SmsMessageListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  credentials?: Maybe<JsonNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export interface StringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface StringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Tag {
  __typename?: 'Tag';
  CreatedBy?: Maybe<User>;
  Resources?: Maybe<Array<ResourceTag>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface TagConnection {
  __typename?: 'TagConnection';
  aggregate: AggregateTag;
  edges: Array<Maybe<TagEdge>>;
}

export interface TagEdge {
  __typename?: 'TagEdge';
  node: Tag;
}

export interface TagListRelationFilter {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
}

export interface TagOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export enum TagStatus {
  ACTIVE = 'Active',
  BLOCKED = 'Blocked',
  MODERATED = 'Moderated'
}

export interface TagWhereInput {
  AND?: Maybe<Array<TagWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  ResourceTags?: Maybe<ResourceTagListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  status?: Maybe<EnumTagStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TagWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface Task {
  __typename?: 'Task';
  CodeChallengeCompletion?: Maybe<CodeChallengeCompletion>;
  Comments?: Maybe<Array<Resource>>;
  CreatedBy?: Maybe<User>;
  Parent?: Maybe<Task>;
  TaskProjects?: Maybe<Array<ProjectTask>>;
  TaskTechnologies?: Maybe<Array<TaskTechnology>>;
  Timers?: Maybe<Array<Timer>>;
  content?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  endDatePlaning?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  needHelp?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['DateTime']>;
  startDatePlaning?: Maybe<Scalars['DateTime']>;
  status: TaskStatus;
  updatedAt: Scalars['DateTime'];
}


export type TaskCommentsArgs = {
  orderBy?: Maybe<ResourceOrderByInput>;
  where?: Maybe<ResourceWhereInput>;
};


export type TaskTimersArgs = {
  orderBy?: Maybe<TimerOrderByInput>;
  where?: Maybe<TimerWhereInput>;
};

export interface TaskConnection {
  __typename?: 'TaskConnection';
  aggregate: AggregateTask;
  edges: Array<Maybe<TaskEdge>>;
}

export interface TaskCreateInput {
  Parent?: Maybe<TaskCreateOneWithoutChildsInput>;
  Project?: Maybe<ProjectCreateOneWithoutProjectTasksInput>;
  content?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  endDatePlaning?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  needHelp?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['DateTime']>;
  startDatePlaning?: Maybe<Scalars['DateTime']>;
  status?: Maybe<TaskStatus>;
}

export interface TaskCreateOneWithoutChildsInput {
  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskCreateOneWithoutCommentsInput {
  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskCreateOneWithoutTaskTechnologiesInput {
  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskCreateOneWithoutTimersInput {
  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskEdge {
  __typename?: 'TaskEdge';
  node: Task;
}

export interface TaskListRelationFilter {
  every?: Maybe<TaskWhereInput>;
  none?: Maybe<TaskWhereInput>;
  some?: Maybe<TaskWhereInput>;
}

export interface TaskMemberListRelationFilter {
  every?: Maybe<TaskMemberWhereInput>;
  none?: Maybe<TaskMemberWhereInput>;
  some?: Maybe<TaskMemberWhereInput>;
}

export enum TaskMemberStatus {
  ACTIVE = 'Active',
  FIRED = 'Fired',
  INVITED = 'Invited',
  QUIT = 'Quit'
}

export interface TaskMemberWhereInput {
  AND?: Maybe<Array<TaskMemberWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<TaskMemberWhereInput>>;
  OR?: Maybe<Array<TaskMemberWhereInput>>;
  Task?: Maybe<StringNullableFilter>;
  Task_TaskToTaskMember?: Maybe<TaskWhereInput>;
  User?: Maybe<StringNullableFilter>;
  User_TaskMember_CreatedByToUser?: Maybe<UserWhereInput>;
  User_TaskMember_UserToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<EnumTaskMemberStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TaskOrderByInput {
  ChatRoom?: Maybe<SortOrder>;
  CreatedBy?: Maybe<SortOrder>;
  Parent?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  endDatePlaning?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  needHelp?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  startDatePlaning?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface TaskReaction {
  __typename?: 'TaskReaction';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  type?: Maybe<TaskReactionType>;
  updatedAt: Scalars['DateTime'];
}

export interface TaskReactionListRelationFilter {
  every?: Maybe<TaskReactionWhereInput>;
  none?: Maybe<TaskReactionWhereInput>;
  some?: Maybe<TaskReactionWhereInput>;
}

export enum TaskReactionType {
  UPVOTE = 'UpVote'
}

export interface TaskReactionWhereInput {
  AND?: Maybe<Array<TaskReactionWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TaskReactionWhereInput>>;
  OR?: Maybe<Array<TaskReactionWhereInput>>;
  Task?: Maybe<StringNullableFilter>;
  Task_TaskToTaskReaction?: Maybe<TaskWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  type?: Maybe<EnumTaskReactionTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TaskResponse {
  __typename?: 'TaskResponse';
  data?: Maybe<Task>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export enum TaskStatus {
  ACCEPTED = 'Accepted',
  APPROVED = 'Approved',
  COMPLETED = 'Completed',
  DISCUSS = 'Discuss',
  DONE = 'Done',
  NEW = 'New',
  PAUSED = 'Paused',
  PROGRESS = 'Progress',
  REJECTED = 'Rejected',
  REVISIONSREQUIRED = 'RevisionsRequired'
}

export interface TaskTechnology {
  __typename?: 'TaskTechnology';
  CreatedBy?: Maybe<User>;
  Task?: Maybe<Task>;
  Technology?: Maybe<Technology>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  level?: Maybe<Scalars['UserTechnologyLevel']>;
  updatedAt: Scalars['DateTime'];
}

export interface TaskTechnologyCreateInput {
  Task: TaskCreateOneWithoutTaskTechnologiesInput;
  Technology: TechnologyCreateOneWithoutTaskTechnologiesInput;
  id?: Maybe<Scalars['ID']>;
  level?: Maybe<Scalars['UserTechnologyLevel']>;
}

export interface TaskTechnologyListRelationFilter {
  every?: Maybe<TaskTechnologyWhereInput>;
  none?: Maybe<TaskTechnologyWhereInput>;
  some?: Maybe<TaskTechnologyWhereInput>;
}

export interface TaskTechnologyOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Task?: Maybe<SortOrder>;
  Technology?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  level?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface TaskTechnologyResponse {
  __typename?: 'TaskTechnologyResponse';
  data?: Maybe<TaskTechnology>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface TaskTechnologyUpdateInput {
  Task?: Maybe<TaskCreateOneWithoutTaskTechnologiesInput>;
  Technology?: Maybe<TechnologyCreateOneWithoutTaskTechnologiesInput>;
  level?: Maybe<Scalars['UserTechnologyLevel']>;
}

export interface TaskTechnologyWhereInput {
  AND?: Maybe<Array<TaskTechnologyWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TaskTechnologyWhereInput>>;
  OR?: Maybe<Array<TaskTechnologyWhereInput>>;
  Task?: Maybe<StringNullableFilter>;
  Task_TaskToTaskTechnology?: Maybe<TaskWhereInput>;
  Technology?: Maybe<StringNullableFilter>;
  Technology_TaskTechnologyToTechnology?: Maybe<TechnologyWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  level?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TaskTechnologyWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface TaskUpdateInput {
  Timers?: Maybe<TimerUpdateManyWithoutTaskInput>;
  content?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  endDatePlaning?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  needHelp?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['DateTime']>;
  startDatePlaning?: Maybe<Scalars['DateTime']>;
  status?: Maybe<TaskStatus>;
}

export interface TaskWhereInput {
  AND?: Maybe<Array<TaskWhereInput>>;
  ChatRoom?: Maybe<StringNullableFilter>;
  ChatRoom_ChatRoomToTask?: Maybe<ChatRoomWhereInput>;
  CodeChallengeCompletions?: Maybe<CodeChallengeCompletionListRelationFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<TaskWhereInput>>;
  OR?: Maybe<Array<TaskWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  ProjectTasks?: Maybe<ProjectTaskListRelationFilter>;
  Resources?: Maybe<ResourceListRelationFilter>;
  Task?: Maybe<TaskWhereInput>;
  TaskMembers?: Maybe<TaskMemberListRelationFilter>;
  TaskReactions?: Maybe<TaskReactionListRelationFilter>;
  TaskTechnologies?: Maybe<TaskTechnologyListRelationFilter>;
  Tasks_A?: Maybe<TaskListRelationFilter>;
  Tasks_B?: Maybe<TaskListRelationFilter>;
  Timers?: Maybe<TimerListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  content?: Maybe<JsonNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  endDate?: Maybe<DateTimeNullableFilter>;
  endDatePlaning?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  needHelp?: Maybe<BoolNullableFilter>;
  other_Tasks?: Maybe<TaskListRelationFilter>;
  startDate?: Maybe<DateTimeNullableFilter>;
  startDatePlaning?: Maybe<DateTimeNullableFilter>;
  status?: Maybe<EnumTaskStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TaskWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface TeamListRelationFilter {
  every?: Maybe<TeamWhereInput>;
  none?: Maybe<TeamWhereInput>;
  some?: Maybe<TeamWhereInput>;
}

export interface TeamMemberListRelationFilter {
  every?: Maybe<TeamMemberWhereInput>;
  none?: Maybe<TeamMemberWhereInput>;
  some?: Maybe<TeamMemberWhereInput>;
}

export enum TeamMemberStatus {
  ACTIVE = 'Active',
  FIRED = 'Fired',
  INVITED = 'Invited'
}

export interface TeamMemberWhereInput {
  AND?: Maybe<Array<TeamMemberWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TeamMemberWhereInput>>;
  OR?: Maybe<Array<TeamMemberWhereInput>>;
  Team?: Maybe<StringNullableFilter>;
  Team_TeamToTeamMember?: Maybe<TeamWhereInput>;
  User?: Maybe<StringNullableFilter>;
  User_TeamMember_CreatedByToUser?: Maybe<UserWhereInput>;
  User_TeamMember_UserToUser?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<EnumTeamMemberStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export enum TeamStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive'
}

export interface TeamWhereInput {
  AND?: Maybe<Array<TeamWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  GameResults?: Maybe<GameResultListRelationFilter>;
  Games?: Maybe<GameListRelationFilter>;
  NOT?: Maybe<Array<TeamWhereInput>>;
  OR?: Maybe<Array<TeamWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  Project_ProjectCustomers?: Maybe<ProjectListRelationFilter>;
  Projects_ProjectToTeam?: Maybe<ProjectListRelationFilter>;
  Resources?: Maybe<ResourceListRelationFilter>;
  Team?: Maybe<TeamWhereInput>;
  TeamMembers?: Maybe<TeamMemberListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  address?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  oldID?: Maybe<IntNullableFilter>;
  other_Teams?: Maybe<TeamListRelationFilter>;
  phone?: Maybe<StringNullableFilter>;
  status?: Maybe<EnumTeamStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
}

export interface Technology {
  __typename?: 'Technology';
  CreatedBy?: Maybe<User>;
  UserTechnologies?: Maybe<Array<UserTechnology>>;
  components?: Maybe<Scalars['JSON']>;
  contentText?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Примерное количество часов на освоение уровня */
  level1hours?: Maybe<Scalars['Int']>;
  /** Примерное количество часов на освоение уровня */
  level2hours?: Maybe<Scalars['Int']>;
  /** Примерное количество часов на освоение уровня */
  level3hours?: Maybe<Scalars['Int']>;
  /** Примерное количество часов на освоение уровня */
  level4hours?: Maybe<Scalars['Int']>;
  /** Примерное количество часов на освоение уровня */
  level5hours?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
}

export interface TechnologyCreateInput {
  name: Scalars['String'];
}

export interface TechnologyCreateOneWithoutTaskTechnologiesInput {
  connect?: Maybe<TechnologyWhereUniqueInput>;
}

export interface TechnologyCreateOneWithoutUserTechnologiesInput {
  connect?: Maybe<TechnologyWhereUniqueInput>;
}

export interface TechnologyLessonListRelationFilter {
  every?: Maybe<TechnologyLessonWhereInput>;
  none?: Maybe<TechnologyLessonWhereInput>;
  some?: Maybe<TechnologyLessonWhereInput>;
}

export interface TechnologyLessonUserListRelationFilter {
  every?: Maybe<TechnologyLessonUserWhereInput>;
  none?: Maybe<TechnologyLessonUserWhereInput>;
  some?: Maybe<TechnologyLessonUserWhereInput>;
}

export enum TechnologyLessonUserStatus {
  ACCEPTED = 'Accepted',
  COMPLETED = 'Completed'
}

export interface TechnologyLessonUserWhereInput {
  AND?: Maybe<Array<TechnologyLessonUserWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  Lesson?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TechnologyLessonUserWhereInput>>;
  OR?: Maybe<Array<TechnologyLessonUserWhereInput>>;
  TechnologyLesson?: Maybe<TechnologyLessonWhereInput>;
  User?: Maybe<UserWhereInput>;
  completedAt?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<EnumTechnologyLessonUserStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TechnologyLessonWhereInput {
  AND?: Maybe<Array<TechnologyLessonWhereInput>>;
  Comments?: Maybe<CommentListRelationFilter>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TechnologyLessonWhereInput>>;
  OR?: Maybe<Array<TechnologyLessonWhereInput>>;
  Technology?: Maybe<StringFilter>;
  TechnologyLessonUsers?: Maybe<TechnologyLessonUserListRelationFilter>;
  Technology_TechnologyToTechnologyLesson?: Maybe<TechnologyWhereInput>;
  User?: Maybe<UserWhereInput>;
  components?: Maybe<JsonNullableFilter>;
  contentText?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
}

export interface TechnologyListRelationFilter {
  every?: Maybe<TechnologyWhereInput>;
  none?: Maybe<TechnologyWhereInput>;
  some?: Maybe<TechnologyWhereInput>;
}

export interface TechnologyOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  components?: Maybe<SortOrder>;
  contentText?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  level1hours?: Maybe<SortOrder>;
  level2hours?: Maybe<SortOrder>;
  level3hours?: Maybe<SortOrder>;
  level4hours?: Maybe<SortOrder>;
  level5hours?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  site_url?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface TechnologyWhereInput {
  AND?: Maybe<Array<TechnologyWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  LearnStrategyStages?: Maybe<LearnStrategyStageListRelationFilter>;
  NOT?: Maybe<Array<TechnologyWhereInput>>;
  OR?: Maybe<Array<TechnologyWhereInput>>;
  TaskTechnologies?: Maybe<TaskTechnologyListRelationFilter>;
  TechnologyLessons?: Maybe<TechnologyLessonListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  UserTechnologies?: Maybe<UserTechnologyListRelationFilter>;
  components?: Maybe<JsonNullableFilter>;
  contentText?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  level1hours?: Maybe<IntNullableFilter>;
  level2hours?: Maybe<IntNullableFilter>;
  level3hours?: Maybe<IntNullableFilter>;
  level4hours?: Maybe<IntNullableFilter>;
  level5hours?: Maybe<IntNullableFilter>;
  name?: Maybe<StringFilter>;
  site_url?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TechnologyWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface TemplateListRelationFilter {
  every?: Maybe<TemplateWhereInput>;
  none?: Maybe<TemplateWhereInput>;
  some?: Maybe<TemplateWhereInput>;
}

export interface TemplateWhereInput {
  AND?: Maybe<Array<TemplateWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TemplateWhereInput>>;
  OR?: Maybe<Array<TemplateWhereInput>>;
  Parent?: Maybe<StringNullableFilter>;
  PrismaProject?: Maybe<StringNullableFilter>;
  Project?: Maybe<StringNullableFilter>;
  Project_ProjectToTemplate_PrismaProject?: Maybe<ProjectWhereInput>;
  Project_ProjectToTemplate_Project?: Maybe<ProjectWhereInput>;
  Template?: Maybe<TemplateWhereInput>;
  User?: Maybe<UserWhereInput>;
  component?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  externalKey?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  other_Templates?: Maybe<TemplateListRelationFilter>;
  rank?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  vars?: Maybe<JsonNullableFilter>;
}

export interface Timer {
  __typename?: 'Timer';
  CreatedBy?: Maybe<User>;
  Task?: Maybe<Task>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  stopedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
}

export interface TimerConnection {
  __typename?: 'TimerConnection';
  aggregate: AggregateTimer;
  edges: Array<Maybe<TimerEdge>>;
}

export interface TimerCreateInput {
  Task?: Maybe<TaskCreateOneWithoutTimersInput>;
  stopedAt?: Maybe<Scalars['DateTime']>;
}

export interface TimerEdge {
  __typename?: 'TimerEdge';
  node: Timer;
}

export interface TimerListRelationFilter {
  every?: Maybe<TimerWhereInput>;
  none?: Maybe<TimerWhereInput>;
  some?: Maybe<TimerWhereInput>;
}

export interface TimerOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Task?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  stopedAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface TimerResponse {
  __typename?: 'TimerResponse';
  data?: Maybe<Timer>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface TimerUpdateInput {
  stopedAt?: Maybe<Scalars['DateTime']>;
}

export interface TimerUpdateManyDataInput {
  stopedAt?: Maybe<Scalars['DateTime']>;
}

export interface TimerUpdateManyWithWhereNestedInput {
  data: TimerUpdateManyDataInput;
  where: TimerWhereInput;
}

export interface TimerUpdateManyWithoutTaskInput {
  updateMany?: Maybe<Array<TimerUpdateManyWithWhereNestedInput>>;
}

export interface TimerWhereInput {
  AND?: Maybe<Array<TimerWhereInput>>;
  CreatedBy?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<TimerWhereInput>>;
  OR?: Maybe<Array<TimerWhereInput>>;
  Task?: Maybe<StringNullableFilter>;
  Task_TaskToTimer?: Maybe<TaskWhereInput>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  stopedAt?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TimerWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface TokenListRelationFilter {
  every?: Maybe<TokenWhereInput>;
  none?: Maybe<TokenWhereInput>;
  some?: Maybe<TokenWhereInput>;
}

export interface TokenWhereInput {
  AND?: Maybe<Array<TokenWhereInput>>;
  NOT?: Maybe<Array<TokenWhereInput>>;
  OR?: Maybe<Array<TokenWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  expiredAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
}

export interface TopicCreateInput {
  CodeChallenge?: Maybe<CodeChallengeCreateOneWithoutTopicInput>;
  blogID?: Maybe<Scalars['ID']>;
  components?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
}

export interface TopicUpdateInput {
  components?: Maybe<Scalars['JSON']>;
  content?: Maybe<Scalars['JSON']>;
  longtitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface TournamentGroupListRelationFilter {
  every?: Maybe<TournamentGroupWhereInput>;
  none?: Maybe<TournamentGroupWhereInput>;
  some?: Maybe<TournamentGroupWhereInput>;
}

export interface TournamentGroupWhereInput {
  AND?: Maybe<Array<TournamentGroupWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TournamentGroupWhereInput>>;
  OR?: Maybe<Array<TournamentGroupWhereInput>>;
  Tournaments?: Maybe<TournamentListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TournamentListRelationFilter {
  every?: Maybe<TournamentWhereInput>;
  none?: Maybe<TournamentWhereInput>;
  some?: Maybe<TournamentWhereInput>;
}

export interface TournamentWhereInput {
  AND?: Maybe<Array<TournamentWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  Group?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<TournamentWhereInput>>;
  OR?: Maybe<Array<TournamentWhereInput>>;
  TournamentGroup?: Maybe<TournamentGroupWhereInput>;
  Tourneys?: Maybe<TourneyListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface TourneyListRelationFilter {
  every?: Maybe<TourneyWhereInput>;
  none?: Maybe<TourneyWhereInput>;
  some?: Maybe<TourneyWhereInput>;
}

export interface TourneyPlayerListRelationFilter {
  every?: Maybe<TourneyPlayerWhereInput>;
  none?: Maybe<TourneyPlayerWhereInput>;
  some?: Maybe<TourneyPlayerWhereInput>;
}

export interface TourneyPlayerWhereInput {
  AND?: Maybe<Array<TourneyPlayerWhereInput>>;
  NOT?: Maybe<Array<TourneyPlayerWhereInput>>;
  OR?: Maybe<Array<TourneyPlayerWhereInput>>;
  Tourney?: Maybe<StringNullableFilter>;
  Tourney_TourneyToTourneyPlayer?: Maybe<TourneyWhereInput>;
  User?: Maybe<StringNullableFilter>;
  User_TourneyPlayerToUser?: Maybe<UserWhereInput>;
  id?: Maybe<StringFilter>;
}

export interface TourneyWhereInput {
  AND?: Maybe<Array<TourneyWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  Games?: Maybe<GameListRelationFilter>;
  NOT?: Maybe<Array<TourneyWhereInput>>;
  OR?: Maybe<Array<TourneyWhereInput>>;
  Tournament?: Maybe<StringNullableFilter>;
  Tournament_TournamentToTourney?: Maybe<TournamentWhereInput>;
  TourneyPlayers?: Maybe<TourneyPlayerListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  code?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  date_till?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}


/** Пользователь */
export interface User {
  __typename?: 'User';
  CodeChallengeCompletions?: Maybe<Array<CodeChallengeCompletion>>;
  EthAccounts?: Maybe<Array<EthAccount>>;
  NotificationTypes?: Maybe<Array<NotificationType>>;
  /** Проекты, в которых участвует пользователь */
  Projects?: Maybe<Array<ProjectMember>>;
  /** Проекты, созданные пользователем */
  ProjectsCreated?: Maybe<Array<Project>>;
  Timers?: Maybe<Array<Timer>>;
  UserTechnologies?: Maybe<Array<UserTechnology>>;
  acceptChatMessageAnonymous?: Maybe<Scalars['Boolean']>;
  acceptNewChatRoom?: Maybe<Scalars['Boolean']>;
  acceptNewChatRoomAnonymous?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  hasEmail?: Maybe<Scalars['Boolean']>;
  hasPhone?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  /** Avatar */
  image?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** Показывать емейл другим пользователям */
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  sudo?: Maybe<Scalars['Boolean']>;
  technologyLevel?: Maybe<Scalars['UserTechnologyLevel']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
}


/** Пользователь */
export type UserTimersArgs = {
  first?: Maybe<Scalars['Int']>;
  where?: Maybe<TimerWhereInput>;
};

export interface UserConnection {
  __typename?: 'UserConnection';
  aggregate: AggregateUser;
  edges: Array<Maybe<UserEdge>>;
}

export interface UserCreateOneInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserEdge {
  __typename?: 'UserEdge';
  node: User;
}

export interface UserGroupListRelationFilter {
  every?: Maybe<UserGroupWhereInput>;
  none?: Maybe<UserGroupWhereInput>;
  some?: Maybe<UserGroupWhereInput>;
}

export interface UserGroupWhereInput {
  AND?: Maybe<Array<UserGroupWhereInput>>;
  NOT?: Maybe<Array<UserGroupWhereInput>>;
  OR?: Maybe<Array<UserGroupWhereInput>>;
  Users?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface UserLearnStrategy {
  __typename?: 'UserLearnStrategy';
  CreatedBy?: Maybe<User>;
  LearnStrategy?: Maybe<LearnStrategy>;
  createdAt: Scalars['DateTime'];
  createdById?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  learnStrategyId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
}

export interface UserLearnStrategyCreateInput {
  LearnStrategy: LearnStrategyWhereUniqueInput;
}

export interface UserLearnStrategyCreatedByIdLearnStrategyIdCompoundUniqueInput {
  createdById: Scalars['String'];
  learnStrategyId: Scalars['String'];
}

export interface UserLearnStrategyListRelationFilter {
  every?: Maybe<UserLearnStrategyWhereInput>;
  none?: Maybe<UserLearnStrategyWhereInput>;
  some?: Maybe<UserLearnStrategyWhereInput>;
}

export interface UserLearnStrategyOrderByInput {
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  learnStrategyId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface UserLearnStrategyWhereInput {
  AND?: Maybe<Array<UserLearnStrategyWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  LearnStrategy?: Maybe<LearnStrategyWhereInput>;
  NOT?: Maybe<Array<UserLearnStrategyWhereInput>>;
  OR?: Maybe<Array<UserLearnStrategyWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  learnStrategyId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface UserLearnStrategyWhereUniqueInput {
  createdById_learnStrategyId?: Maybe<UserLearnStrategyCreatedByIdLearnStrategyIdCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
}

export interface UserListRelationFilter {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
}

export interface UserOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  EthAccountAuthed?: Maybe<SortOrder>;
  acceptChatMessageAnonymous?: Maybe<SortOrder>;
  acceptNewChatRoom?: Maybe<SortOrder>;
  acceptNewChatRoomAnonymous?: Maybe<SortOrder>;
  activated?: Maybe<SortOrder>;
  active?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fullname?: Maybe<SortOrder>;
  hidden?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  marketplaceToken?: Maybe<SortOrder>;
  oldID?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  showEmail?: Maybe<SortOrder>;
  showFullname?: Maybe<SortOrder>;
  showPhone?: Maybe<SortOrder>;
  sudo?: Maybe<SortOrder>;
  technologyLevel?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
}

export interface UserResponse {
  __typename?: 'UserResponse';
  data?: Maybe<User>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export interface UserSigninDataInput {
  password?: Maybe<Scalars['String']>;
}

export interface UserSignupDataInput {
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** Показывать емейл другим пользователям */
  showEmail?: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname?: Scalars['Boolean'];
  username?: Maybe<Scalars['String']>;
}

export interface UserTechnology {
  __typename?: 'UserTechnology';
  CreatedBy?: Maybe<User>;
  Technology?: Maybe<Technology>;
  components?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  date_from?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  hiring_status?: Maybe<UserTechnologyHiringStatus>;
  id: Scalars['ID'];
  level?: Maybe<Scalars['UserTechnologyLevel']>;
  status?: Maybe<UserTechnologyStatus>;
  technologyId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface UserTechnologyCreateInput {
  Technology: TechnologyCreateOneWithoutUserTechnologiesInput;
}

export interface UserTechnologyCreatedByTechnologyCompoundUniqueInput {
  CreatedBy: Scalars['String'];
  Technology: Scalars['String'];
}

/** Готов ли принимать заказы с таким технологиями */
export enum UserTechnologyHiringStatus {
  /** Очень интересно */
  ACTIVE = 'Active',
  /** Отрицательно */
  NEGATIVE = 'Negative',
  /** Малоинтересно */
  NEUTRAL = 'Neutral'
}


export interface UserTechnologyListRelationFilter {
  every?: Maybe<UserTechnologyWhereInput>;
  none?: Maybe<UserTechnologyWhereInput>;
  some?: Maybe<UserTechnologyWhereInput>;
}

export interface UserTechnologyOrderByInput {
  CreatedBy?: Maybe<SortOrder>;
  Technology?: Maybe<SortOrder>;
  components?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  date_from?: Maybe<SortOrder>;
  date_till?: Maybe<SortOrder>;
  hiring_status?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  level?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

export interface UserTechnologyResponse {
  __typename?: 'UserTechnologyResponse';
  data?: Maybe<UserTechnology>;
  errors: Array<RequestError>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
}

export enum UserTechnologyStatus {
  /** Активно использую */
  ACTIVEUSE = 'ActiveUse',
  /** Больше не использую */
  NOLONGERUSE = 'NoLongerUse',
  /** Планирую изучать */
  PLANTOSTUDY = 'PlanToStudy',
  /** Иногда использую */
  RARELYUSE = 'RarelyUse',
  /** Отказался изучать */
  REFUSEDTOSTUDY = 'RefusedToStudy',
  /** Изучаю */
  STUDY = 'Study'
}

export interface UserTechnologyUpdateInput {
  components?: Maybe<Scalars['UserTechnologyLevel']>;
  date_from?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  hiring_status?: Maybe<UserTechnologyHiringStatus>;
  level?: Maybe<Scalars['UserTechnologyLevel']>;
  status?: Maybe<UserTechnologyStatus>;
}

export interface UserTechnologyWhereInput {
  AND?: Maybe<Array<UserTechnologyWhereInput>>;
  CreatedBy?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserTechnologyWhereInput>>;
  OR?: Maybe<Array<UserTechnologyWhereInput>>;
  Technology?: Maybe<StringFilter>;
  Technology_TechnologyToUserTechnology?: Maybe<TechnologyWhereInput>;
  User?: Maybe<UserWhereInput>;
  components?: Maybe<JsonNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date_from?: Maybe<DateTimeNullableFilter>;
  date_till?: Maybe<DateTimeNullableFilter>;
  hiring_status?: Maybe<EnumUserTechnologyHiringStatusNullableFilter>;
  id?: Maybe<StringFilter>;
  level?: Maybe<IntNullableFilter>;
  status?: Maybe<EnumUserTechnologyStatusNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface UserTechnologyWhereUniqueInput {
  CreatedBy_Technology?: Maybe<UserTechnologyCreatedByTechnologyCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
}

export interface UserUpdateInput {
  NotificationTypes?: Maybe<NotificationTypeUserNotificationTypesUpdateInput>;
  acceptChatMessageAnonymous?: Maybe<Scalars['Boolean']>;
  acceptNewChatRoom?: Maybe<Scalars['Boolean']>;
  acceptNewChatRoomAnonymous?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  technologyLevel?: Maybe<Scalars['UserTechnologyLevel']>;
  username?: Maybe<Scalars['String']>;
}

export interface UserWhereInput {
  AND?: Maybe<Array<UserWhereInput>>;
  CallRequests_CallRequest_CalledToUser?: Maybe<CallRequestListRelationFilter>;
  CallRequests_CallRequest_CallerToUser?: Maybe<CallRequestListRelationFilter>;
  Careers?: Maybe<CareerListRelationFilter>;
  ChatMessages?: Maybe<ChatMessageListRelationFilter>;
  ChatMessagesReaded?: Maybe<ChatMessageReadedListRelationFilter>;
  ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser?: Maybe<ChatRoomInvitationListRelationFilter>;
  ChatRoomInvitations_ChatRoomInvitation_UserToUser?: Maybe<ChatRoomInvitationListRelationFilter>;
  ChatRooms_ChatRoomToUser?: Maybe<ChatRoomListRelationFilter>;
  ChatRooms_ChatRoomsMembers?: Maybe<ChatRoomListRelationFilter>;
  CodeChallengeBlocks?: Maybe<CodeChallengeBlockListRelationFilter>;
  CodeChallengeCompletions?: Maybe<CodeChallengeCompletionListRelationFilter>;
  CodeChallenges?: Maybe<CodeChallengeListRelationFilter>;
  Comments?: Maybe<CommentListRelationFilter>;
  CreatedBy?: Maybe<StringNullableFilter>;
  EthAccountAuthed?: Maybe<StringNullableFilter>;
  EthAccount_EthAccountToUser_EthAccountAuthed?: Maybe<EthAccountWhereInput>;
  EthAccounts_EthAccount_CreatedByToUser?: Maybe<EthAccountListRelationFilter>;
  EthContractSources?: Maybe<EthContractSourceListRelationFilter>;
  Files?: Maybe<FileListRelationFilter>;
  Galleries?: Maybe<GalleryListRelationFilter>;
  GameResults_GameResult_CreatedByToUser?: Maybe<GameResultListRelationFilter>;
  GameResults_GameResult_UserToUser?: Maybe<GameResultListRelationFilter>;
  Games_GameToUser?: Maybe<GameListRelationFilter>;
  Games_GameUsers?: Maybe<GameListRelationFilter>;
  Imports?: Maybe<ImportListRelationFilter>;
  LearnStrategies?: Maybe<LearnStrategyListRelationFilter>;
  Letters?: Maybe<LetterListRelationFilter>;
  LogedIns?: Maybe<LogedInListRelationFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  Notices_Notice_CreatedByToUser?: Maybe<NoticeListRelationFilter>;
  Notices_Notice_UserToUser?: Maybe<NoticeListRelationFilter>;
  NotificationTypes_NotificationTypeToUser?: Maybe<NotificationTypeListRelationFilter>;
  NotificationTypes_UserNotificationTypes?: Maybe<NotificationTypeListRelationFilter>;
  OR?: Maybe<Array<UserWhereInput>>;
  Players?: Maybe<PlayerListRelationFilter>;
  Positions_PositionToUser?: Maybe<PositionListRelationFilter>;
  Positions_PositionUsers?: Maybe<PositionListRelationFilter>;
  ProjectMembers_ProjectMember_CreatedByToUser?: Maybe<ProjectMemberListRelationFilter>;
  ProjectMembers_ProjectMember_UserToUser?: Maybe<ProjectMemberListRelationFilter>;
  ProjectTasks?: Maybe<ProjectTaskListRelationFilter>;
  Projects_PrismaProjectUsers?: Maybe<ProjectListRelationFilter>;
  Projects_ProjectToUser?: Maybe<ProjectListRelationFilter>;
  ResetPasswords?: Maybe<ResetPasswordListRelationFilter>;
  ResourceTags?: Maybe<ResourceTagListRelationFilter>;
  Resources?: Maybe<ResourceListRelationFilter>;
  Routes?: Maybe<RouteListRelationFilter>;
  ServiceCategories?: Maybe<ServiceCategoryListRelationFilter>;
  Services?: Maybe<ServiceListRelationFilter>;
  Settings?: Maybe<SettingsListRelationFilter>;
  SmsMessages?: Maybe<SmsMessageListRelationFilter>;
  SmsProviders?: Maybe<SmsProviderListRelationFilter>;
  Tags?: Maybe<TagListRelationFilter>;
  TaskMembers_TaskMember_CreatedByToUser?: Maybe<TaskMemberListRelationFilter>;
  TaskMembers_TaskMember_UserToUser?: Maybe<TaskMemberListRelationFilter>;
  TaskReactions?: Maybe<TaskReactionListRelationFilter>;
  TaskTechnologies?: Maybe<TaskTechnologyListRelationFilter>;
  Tasks?: Maybe<TaskListRelationFilter>;
  TeamMembers_TeamMember_CreatedByToUser?: Maybe<TeamMemberListRelationFilter>;
  TeamMembers_TeamMember_UserToUser?: Maybe<TeamMemberListRelationFilter>;
  Teams?: Maybe<TeamListRelationFilter>;
  Technologies?: Maybe<TechnologyListRelationFilter>;
  TechnologyLessonUsers?: Maybe<TechnologyLessonUserListRelationFilter>;
  TechnologyLessons?: Maybe<TechnologyLessonListRelationFilter>;
  Templates?: Maybe<TemplateListRelationFilter>;
  Timers?: Maybe<TimerListRelationFilter>;
  Tokens?: Maybe<TokenListRelationFilter>;
  TournamentGroups?: Maybe<TournamentGroupListRelationFilter>;
  Tournaments?: Maybe<TournamentListRelationFilter>;
  TourneyPlayers?: Maybe<TourneyPlayerListRelationFilter>;
  Tourneys?: Maybe<TourneyListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  UserGroups?: Maybe<UserGroupListRelationFilter>;
  UserLearnStrategies?: Maybe<UserLearnStrategyListRelationFilter>;
  UserTechnologies?: Maybe<UserTechnologyListRelationFilter>;
  Votes?: Maybe<VoteListRelationFilter>;
  Worlds?: Maybe<WorldListRelationFilter>;
  acceptChatMessageAnonymous?: Maybe<BoolNullableFilter>;
  acceptNewChatRoom?: Maybe<BoolNullableFilter>;
  acceptNewChatRoomAnonymous?: Maybe<BoolNullableFilter>;
  activated?: Maybe<BoolNullableFilter>;
  active?: Maybe<BoolNullableFilter>;
  address?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deleted?: Maybe<BoolNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  fullname?: Maybe<StringNullableFilter>;
  hidden?: Maybe<BoolNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  marketplaceToken?: Maybe<StringNullableFilter>;
  oldID?: Maybe<IntNullableFilter>;
  other_Users?: Maybe<UserListRelationFilter>;
  password?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  showEmail?: Maybe<BoolFilter>;
  showFullname?: Maybe<BoolFilter>;
  showPhone?: Maybe<BoolFilter>;
  sudo?: Maybe<BoolNullableFilter>;
  technologyLevel?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringNullableFilter>;
}

export interface UserWhereUniqueInput {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  oldID?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
}

export interface VoteListRelationFilter {
  every?: Maybe<VoteWhereInput>;
  none?: Maybe<VoteWhereInput>;
  some?: Maybe<VoteWhereInput>;
}

export interface VoteWhereInput {
  AND?: Maybe<Array<VoteWhereInput>>;
  NOT?: Maybe<Array<VoteWhereInput>>;
  OR?: Maybe<Array<VoteWhereInput>>;
  Resource?: Maybe<StringNullableFilter>;
  Resource_ResourceToVote?: Maybe<ResourceWhereInput>;
  User?: Maybe<StringFilter>;
  User_UserToVote?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<DecimalFilter>;
}

export interface WorldListRelationFilter {
  every?: Maybe<WorldWhereInput>;
  none?: Maybe<WorldWhereInput>;
  some?: Maybe<WorldWhereInput>;
}

export enum WorldType {
  DEFAULT = 'DEFAULT',
  SUPERFLAT = 'SUPERFLAT'
}

export interface WorldWhereInput {
  AND?: Maybe<Array<WorldWhereInput>>;
  Blocks?: Maybe<BlockListRelationFilter>;
  CreatedBy?: Maybe<StringFilter>;
  Messages?: Maybe<MessageListRelationFilter>;
  NOT?: Maybe<Array<WorldWhereInput>>;
  OR?: Maybe<Array<WorldWhereInput>>;
  Players?: Maybe<PlayerListRelationFilter>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  days?: Maybe<IntFilter>;
  id?: Maybe<StringFilter>;
  lastPlayed?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  seed?: Maybe<StringFilter>;
  time?: Maybe<DecimalFilter>;
  timeChanger?: Maybe<DecimalNullableFilter>;
  type?: Maybe<EnumWorldTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}
