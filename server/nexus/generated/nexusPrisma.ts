import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime' | 'Decimal' | 'Json'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Token: Prisma.Token
  File: Prisma.File
  Block: Prisma.Block
  CallRequest: Prisma.CallRequest
  Career: Prisma.Career
  ChatMessage: Prisma.ChatMessage
  ChatMessageReaded: Prisma.ChatMessageReaded
  ChatRoom: Prisma.ChatRoom
  ChatRoomInvitation: Prisma.ChatRoomInvitation
  CodeChallenge: Prisma.CodeChallenge
  CodeChallengeBlock: Prisma.CodeChallengeBlock
  CodeChallengeCompletion: Prisma.CodeChallengeCompletion
  Comment: Prisma.Comment
  EthAccount: Prisma.EthAccount
  EthBlock: Prisma.EthBlock
  EthContractSource: Prisma.EthContractSource
  EthTransaction: Prisma.EthTransaction
  Gallery: Prisma.Gallery
  Game: Prisma.Game
  GameResult: Prisma.GameResult
  Import: Prisma.Import
  Inventory: Prisma.Inventory
  LetsadsSmsMessageStatus: Prisma.LetsadsSmsMessageStatus
  LetsadsSmsMessageStatusItem: Prisma.LetsadsSmsMessageStatusItem
  LogedIn: Prisma.LogedIn
  Message: Prisma.Message
  Notice: Prisma.Notice
  NotificationType: Prisma.NotificationType
  Player: Prisma.Player
  Position: Prisma.Position
  Project: Prisma.Project
  ProjectMember: Prisma.ProjectMember
  ProjectTask: Prisma.ProjectTask
  ResetPassword: Prisma.ResetPassword
  Resource: Prisma.Resource
  ResourceTag: Prisma.ResourceTag
  Route: Prisma.Route
  Service: Prisma.Service
  ServiceCategory: Prisma.ServiceCategory
  Settings: Prisma.Settings
  SmsMessage: Prisma.SmsMessage
  SmsMessage_recipients: Prisma.SmsMessage_recipients
  SmsProvider: Prisma.SmsProvider
  Tag: Prisma.Tag
  Task: Prisma.Task
  TaskMember: Prisma.TaskMember
  TaskReaction: Prisma.TaskReaction
  TaskTechnology: Prisma.TaskTechnology
  Team: Prisma.Team
  TeamMember: Prisma.TeamMember
  Technology: Prisma.Technology
  TechnologyLesson: Prisma.TechnologyLesson
  TechnologyLessonUser: Prisma.TechnologyLessonUser
  Template: Prisma.Template
  Test: Prisma.Test
  Timer: Prisma.Timer
  Tournament: Prisma.Tournament
  TournamentGroup: Prisma.TournamentGroup
  Tourney: Prisma.Tourney
  TourneyPlayer: Prisma.TourneyPlayer
  UserGroup: Prisma.UserGroup
  UserTechnology: Prisma.UserTechnology
  Vote: Prisma.Vote
  World: Prisma.World
  Letter: Prisma.Letter
  Log: Prisma.Log
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Project'
      ordering: 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt'
    }
    blocks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'representation' | 'type' | 'x' | 'y' | 'z' | 'world' | 'World'
      ordering: 'id' | 'representation' | 'type' | 'x' | 'y' | 'z' | 'world'
    }
    callRequests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    careers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | 'CreatedBy' | 'User'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | 'CreatedBy'
    }
    chatMessages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'User' | 'ChatRoom' | 'ChatMessageReaded' | 'Notice'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room'
    }
    chatMessageReadeds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User' | 'ChatMessage' | 'User_ChatMessageReadedToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User'
    }
    chatRooms: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox' | 'User_ChatRoomToUser' | 'CallRequest' | 'ChatMessage' | 'ChatRoomInvitation' | 'Project' | 'Task' | 'User_ChatRoomsMembers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox'
    }
    chatRoomInvitations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    codeChallenges: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletion'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic'
    }
    codeChallengeBlocks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent' | 'User' | 'CodeChallengeBlock' | 'CodeChallenge' | 'other_CodeChallengeBlock'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent'
    }
    codeChallengeCompletions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
    comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson' | 'User' | 'TechnologyLesson_CommentToTechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson'
    }
    ethAccounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy' | 'EthContractSource' | 'User_EthAccount_CreatedByToUser' | 'Project_EthAccountToProject' | 'EthBlock' | 'EthTransaction_EthAccountToEthTransaction_Account' | 'EthTransaction_EthAccountToEthTransaction_Receiver' | 'EthTransaction_EthAccountToEthTransaction_Sender' | 'Resource' | 'User_EthAccountToUser_EthAccountAuthed'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy'
    }
    ethBlocks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner' | 'EthAccount' | 'EthTransaction' | 'EthBlock_B' | 'EthBlock_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner'
    }
    ethContractSources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy' | 'User' | 'EthAccount'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy'
    }
    ethTransactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account' | 'EthAccount_EthAccountToEthTransaction_Account' | 'EthBlock' | 'EthAccount_EthAccountToEthTransaction_Receiver' | 'EthAccount_EthAccountToEthTransaction_Sender'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account'
    }
    galleries: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt' | 'User' | 'Resource_GalleryToResource' | 'File'
      ordering: 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt'
    }
    games: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    gameResults: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    imports: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'Log'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    inventories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'cursor' | 'data' | 'Player'
      ordering: 'id' | 'cursor' | 'data'
    }
    letsadsSmsMessageStatuses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'errorCode' | 'LetsadsSmsMessageStatusItem' | 'SmsMessage'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'errorCode'
    }
    letsadsSmsMessageStatusItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'sms_id' | 'Status' | 'LetsadsSmsMessageStatus'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'sms_id' | 'Status'
    }
    logedIns: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'fake' | 'updatedAt' | 'User' | 'User_LogedInToUser'
      ordering: 'id' | 'createdAt' | 'fake' | 'updatedAt' | 'User'
    }
    messages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'sender' | 'body' | 'world' | 'World'
      ordering: 'id' | 'type' | 'sender' | 'body' | 'world'
    }
    notices: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitation'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
    notificationTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy' | 'User_NotificationTypeToUser' | 'User_UserNotificationTypes'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy'
    }
    players: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user' | 'Inventory' | 'User' | 'World'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user'
    }
    positions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_PositionToUser' | 'User_PositionUsers'
      ordering: 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    projects: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    projectMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Service'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    projectTasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    resetPasswords: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    resources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    resourceTags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
    routes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent' | 'User' | 'Route' | 'other_Route'
      ordering: 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent'
    }
    services: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resource' | 'other_Service' | 'ProjectMember'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    serviceCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'ServiceCategory' | 'Service' | 'other_ServiceCategory'
      ordering: 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    settingss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'renderDistance' | 'User' | 'User_SettingsToUser'
      ordering: 'id' | 'renderDistance' | 'User'
    }
    smsMessages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider' | 'User' | 'SmsProvider' | 'LetsadsSmsMessageStatus' | 'SmsMessage_recipients'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider'
    }
    smsmessageRecipientss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'nodeId' | 'position' | 'value' | 'SmsMessage'
      ordering: 'nodeId' | 'position' | 'value'
    }
    smsProviders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'SmsMessage'
      ordering: 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    tags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'ResourceTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    tasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletion' | 'ProjectTask' | 'Resource' | 'other_Task' | 'TaskMember' | 'TaskReaction' | 'TaskTechnology' | 'Timer' | 'Task_B' | 'Task_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    taskMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    taskReactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskReaction'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy'
    }
    taskTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    teams: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt' | 'User' | 'Team' | 'GameResult' | 'Project_ProjectToTeam' | 'Resource' | 'other_Team' | 'TeamMember' | 'Game' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt'
    }
    teamMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    technologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'components' | 'contentText' | 'site_url' | 'CreatedBy' | 'User' | 'TaskTechnology' | 'TechnologyLesson' | 'UserTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'components' | 'contentText' | 'site_url' | 'CreatedBy'
    }
    technologyLessons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy' | 'User' | 'Technology_TechnologyToTechnologyLesson' | 'Comment' | 'TechnologyLessonUser'
      ordering: 'id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy'
    }
    technologyLessonUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'Lesson' | 'CreatedBy' | 'User' | 'TechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'Lesson' | 'CreatedBy'
    }
    templates: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Template'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    tests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'text' | 'quantity' | 'date' | 'CreatedBy' | 'User'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'text' | 'quantity' | 'date' | 'CreatedBy'
    }
    timers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTimer'
      ordering: 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy'
    }
    tournaments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group' | 'User' | 'TournamentGroup' | 'Tourney'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group'
    }
    tournamentGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Tournament'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy'
    }
    tourneys: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'Tournament' | 'CreatedBy' | 'User' | 'Tournament_TournamentToTourney' | 'Game' | 'TourneyPlayer'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'Tournament' | 'CreatedBy'
    }
    tourneyPlayers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'User' | 'Tourney' | 'Tourney_TourneyToTourneyPlayer' | 'User_TourneyPlayerToUser'
      ordering: 'id' | 'User' | 'Tourney'
    }
    userGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'createdAt' | 'updatedAt' | 'User'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt'
    }
    userTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'CreatedBy' | 'Technology' | 'level' | 'User' | 'Technology_TechnologyToUserTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'CreatedBy' | 'Technology' | 'level'
    }
    votes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User' | 'Resource_ResourceToVote' | 'User_UserToVote'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User'
    }
    worlds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy' | 'User' | 'Block' | 'Message' | 'Player'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy'
    }
    letters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdAt' | 'updatedAt' | 'User' | 'User_LetterToUser'
      ordering: 'id' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdAt' | 'updatedAt' | 'User'
    }
    logs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'level' | 'objectType' | 'message' | 'stack' | 'Import' | 'createdAt' | 'updatedAt' | 'Import_ImportToLog'
      ordering: 'id' | 'level' | 'objectType' | 'message' | 'stack' | 'Import' | 'createdAt' | 'updatedAt'
    }
  },
  User: {
    CallRequest_CallRequest_CalledToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    CallRequest_CallRequest_CallerToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    Career: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | 'CreatedBy' | 'User'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | 'CreatedBy'
    }
    ChatMessage: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'User' | 'ChatRoom' | 'ChatMessageReaded' | 'Notice'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room'
    }
    ChatMessageReaded: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User' | 'ChatMessage' | 'User_ChatMessageReadedToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User'
    }
    ChatRoom_ChatRoomToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox' | 'User_ChatRoomToUser' | 'CallRequest' | 'ChatMessage' | 'ChatRoomInvitation' | 'Project' | 'Task' | 'User_ChatRoomsMembers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox'
    }
    ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    ChatRoomInvitation_ChatRoomInvitation_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    CodeChallenge: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletion'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic'
    }
    CodeChallengeBlock: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent' | 'User' | 'CodeChallengeBlock' | 'CodeChallenge' | 'other_CodeChallengeBlock'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent'
    }
    CodeChallengeCompletion: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
    Comment: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson' | 'User' | 'TechnologyLesson_CommentToTechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson'
    }
    EthAccount_EthAccount_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy' | 'EthContractSource' | 'User_EthAccount_CreatedByToUser' | 'Project_EthAccountToProject' | 'EthBlock' | 'EthTransaction_EthAccountToEthTransaction_Account' | 'EthTransaction_EthAccountToEthTransaction_Receiver' | 'EthTransaction_EthAccountToEthTransaction_Sender' | 'Resource' | 'User_EthAccountToUser_EthAccountAuthed'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy'
    }
    EthContractSource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy' | 'User' | 'EthAccount'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy'
    }
    File: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Project'
      ordering: 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt'
    }
    Gallery: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt' | 'User' | 'Resource_GalleryToResource' | 'File'
      ordering: 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt'
    }
    Game_GameToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    GameResult_GameResult_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    GameResult_GameResult_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    Import: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'Log'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    Letter: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdAt' | 'updatedAt' | 'User' | 'User_LetterToUser'
      ordering: 'id' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdAt' | 'updatedAt' | 'User'
    }
    LogedIn: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'fake' | 'updatedAt' | 'User' | 'User_LogedInToUser'
      ordering: 'id' | 'createdAt' | 'fake' | 'updatedAt' | 'User'
    }
    Notice_Notice_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitation'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
    Notice_Notice_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitation'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
    NotificationType_NotificationTypeToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy' | 'User_NotificationTypeToUser' | 'User_UserNotificationTypes'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy'
    }
    Player: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user' | 'Inventory' | 'User' | 'World'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user'
    }
    Position_PositionToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_PositionToUser' | 'User_PositionUsers'
      ordering: 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Project_ProjectToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    ProjectMember_ProjectMember_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Service'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    ProjectMember_ProjectMember_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Service'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    ProjectTask: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    ResetPassword: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    Resource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    ResourceTag: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
    Route: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent' | 'User' | 'Route' | 'other_Route'
      ordering: 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent'
    }
    Service: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resource' | 'other_Service' | 'ProjectMember'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    ServiceCategory: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'ServiceCategory' | 'Service' | 'other_ServiceCategory'
      ordering: 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Settings: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'renderDistance' | 'User' | 'User_SettingsToUser'
      ordering: 'id' | 'renderDistance' | 'User'
    }
    SmsMessage: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider' | 'User' | 'SmsProvider' | 'LetsadsSmsMessageStatus' | 'SmsMessage_recipients'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider'
    }
    SmsProvider: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'SmsMessage'
      ordering: 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Tag: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'ResourceTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    Task: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletion' | 'ProjectTask' | 'Resource' | 'other_Task' | 'TaskMember' | 'TaskReaction' | 'TaskTechnology' | 'Timer' | 'Task_B' | 'Task_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    TaskMember_TaskMember_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TaskMember_TaskMember_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TaskReaction: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskReaction'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy'
    }
    TaskTechnology: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    Team: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt' | 'User' | 'Team' | 'GameResult' | 'Project_ProjectToTeam' | 'Resource' | 'other_Team' | 'TeamMember' | 'Game' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt'
    }
    TeamMember_TeamMember_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TeamMember_TeamMember_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Technology: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'components' | 'contentText' | 'site_url' | 'CreatedBy' | 'User' | 'TaskTechnology' | 'TechnologyLesson' | 'UserTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'components' | 'contentText' | 'site_url' | 'CreatedBy'
    }
    TechnologyLesson: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy' | 'User' | 'Technology_TechnologyToTechnologyLesson' | 'Comment' | 'TechnologyLessonUser'
      ordering: 'id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy'
    }
    TechnologyLessonUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'Lesson' | 'CreatedBy' | 'User' | 'TechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'Lesson' | 'CreatedBy'
    }
    Template: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Template'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    Test: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'text' | 'quantity' | 'date' | 'CreatedBy' | 'User'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'text' | 'quantity' | 'date' | 'CreatedBy'
    }
    Timer: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTimer'
      ordering: 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy'
    }
    Tournament: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group' | 'User' | 'TournamentGroup' | 'Tourney'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group'
    }
    TournamentGroup: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Tournament'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy'
    }
    Tourney: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'Tournament' | 'CreatedBy' | 'User' | 'Tournament_TournamentToTourney' | 'Game' | 'TourneyPlayer'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'Tournament' | 'CreatedBy'
    }
    TourneyPlayer: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'User' | 'Tourney' | 'Tourney_TourneyToTourneyPlayer' | 'User_TourneyPlayerToUser'
      ordering: 'id' | 'User' | 'Tourney'
    }
    other_User: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
    UserTechnology: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'CreatedBy' | 'Technology' | 'level' | 'User' | 'Technology_TechnologyToUserTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'CreatedBy' | 'Technology' | 'level'
    }
    Vote: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User' | 'Resource_ResourceToVote' | 'User_UserToVote'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User'
    }
    World: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy' | 'User' | 'Block' | 'Message' | 'Player'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy'
    }
    ChatRoom_ChatRoomsMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox' | 'User_ChatRoomToUser' | 'CallRequest' | 'ChatMessage' | 'ChatRoomInvitation' | 'Project' | 'Task' | 'User_ChatRoomsMembers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox'
    }
    Game_GameUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    Position_PositionUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_PositionToUser' | 'User_PositionUsers'
      ordering: 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Project_PrismaProjectUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    UserGroup: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'createdAt' | 'updatedAt' | 'User'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt'
    }
    NotificationType_UserNotificationTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy' | 'User_NotificationTypeToUser' | 'User_UserNotificationTypes'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy'
    }
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
  }
  Token: {

  }
  File: {
    Project: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
  }
  Block: {

  }
  CallRequest: {

  }
  Career: {

  }
  ChatMessage: {
    ChatMessageReaded: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User' | 'ChatMessage' | 'User_ChatMessageReadedToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User'
    }
    Notice: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitation'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
  }
  ChatMessageReaded: {

  }
  ChatRoom: {
    CallRequest: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    ChatMessage: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'User' | 'ChatRoom' | 'ChatMessageReaded' | 'Notice'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room'
    }
    ChatRoomInvitation: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    Project: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    Task: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletion' | 'ProjectTask' | 'Resource' | 'other_Task' | 'TaskMember' | 'TaskReaction' | 'TaskTechnology' | 'Timer' | 'Task_B' | 'Task_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    User_ChatRoomsMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
  }
  ChatRoomInvitation: {

  }
  CodeChallenge: {
    CodeChallengeCompletion: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
  }
  CodeChallengeBlock: {
    CodeChallenge: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletion'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic'
    }
    other_CodeChallengeBlock: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent' | 'User' | 'CodeChallengeBlock' | 'CodeChallenge' | 'other_CodeChallengeBlock'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent'
    }
  }
  CodeChallengeCompletion: {

  }
  Comment: {

  }
  EthAccount: {
    EthBlock: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner' | 'EthAccount' | 'EthTransaction' | 'EthBlock_B' | 'EthBlock_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner'
    }
    EthTransaction_EthAccountToEthTransaction_Account: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account' | 'EthAccount_EthAccountToEthTransaction_Account' | 'EthBlock' | 'EthAccount_EthAccountToEthTransaction_Receiver' | 'EthAccount_EthAccountToEthTransaction_Sender'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account'
    }
    EthTransaction_EthAccountToEthTransaction_Receiver: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account' | 'EthAccount_EthAccountToEthTransaction_Account' | 'EthBlock' | 'EthAccount_EthAccountToEthTransaction_Receiver' | 'EthAccount_EthAccountToEthTransaction_Sender'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account'
    }
    EthTransaction_EthAccountToEthTransaction_Sender: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account' | 'EthAccount_EthAccountToEthTransaction_Account' | 'EthBlock' | 'EthAccount_EthAccountToEthTransaction_Receiver' | 'EthAccount_EthAccountToEthTransaction_Sender'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account'
    }
    Resource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    User_EthAccountToUser_EthAccountAuthed: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
  }
  EthBlock: {
    EthTransaction: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account' | 'EthAccount_EthAccountToEthTransaction_Account' | 'EthBlock' | 'EthAccount_EthAccountToEthTransaction_Receiver' | 'EthAccount_EthAccountToEthTransaction_Sender'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | 'Sender' | 'Block' | 'Receiver' | 'Account'
    }
    EthBlock_B: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner' | 'EthAccount' | 'EthTransaction' | 'EthBlock_B' | 'EthBlock_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner'
    }
    EthBlock_A: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner' | 'EthAccount' | 'EthTransaction' | 'EthBlock_B' | 'EthBlock_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | 'Miner'
    }
  }
  EthContractSource: {
    EthAccount: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy' | 'EthContractSource' | 'User_EthAccount_CreatedByToUser' | 'Project_EthAccountToProject' | 'EthBlock' | 'EthTransaction_EthAccountToEthTransaction_Account' | 'EthTransaction_EthAccountToEthTransaction_Receiver' | 'EthTransaction_EthAccountToEthTransaction_Sender' | 'Resource' | 'User_EthAccountToUser_EthAccountAuthed'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy'
    }
  }
  EthTransaction: {

  }
  Gallery: {
    File: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Project'
      ordering: 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt'
    }
  }
  Game: {
    other_Game: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    GameResult: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    Team: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt' | 'User' | 'Team' | 'GameResult' | 'Project_ProjectToTeam' | 'Resource' | 'other_Team' | 'TeamMember' | 'Game' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt'
    }
    User_GameUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
  }
  GameResult: {

  }
  Import: {
    Log: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'level' | 'objectType' | 'message' | 'stack' | 'Import' | 'createdAt' | 'updatedAt' | 'Import_ImportToLog'
      ordering: 'id' | 'level' | 'objectType' | 'message' | 'stack' | 'Import' | 'createdAt' | 'updatedAt'
    }
  }
  Inventory: {
    Player: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user' | 'Inventory' | 'User' | 'World'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user'
    }
  }
  LetsadsSmsMessageStatus: {
    LetsadsSmsMessageStatusItem: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'sms_id' | 'Status' | 'LetsadsSmsMessageStatus'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'sms_id' | 'Status'
    }
    SmsMessage: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider' | 'User' | 'SmsProvider' | 'LetsadsSmsMessageStatus' | 'SmsMessage_recipients'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider'
    }
  }
  LetsadsSmsMessageStatusItem: {

  }
  LogedIn: {

  }
  Message: {

  }
  Notice: {
    ChatRoomInvitation: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
  }
  NotificationType: {
    User_UserNotificationTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
  }
  Player: {

  }
  Position: {
    User_PositionUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
  }
  Project: {
    EthAccount: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy' | 'EthContractSource' | 'User_EthAccount_CreatedByToUser' | 'Project_EthAccountToProject' | 'EthBlock' | 'EthTransaction_EthAccountToEthTransaction_Account' | 'EthTransaction_EthAccountToEthTransaction_Receiver' | 'EthTransaction_EthAccountToEthTransaction_Sender' | 'Resource' | 'User_EthAccountToUser_EthAccountAuthed'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy'
    }
    ProjectMember: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Service'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    ProjectTask: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    Resource_ProjectToResource_PrismaProject: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    Template_ProjectToTemplate_PrismaProject: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Template'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    Template_ProjectToTemplate_Project: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Template'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    User_PrismaProjectUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
    Team_ProjectCustomers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt' | 'User' | 'Team' | 'GameResult' | 'Project_ProjectToTeam' | 'Resource' | 'other_Team' | 'TeamMember' | 'Game' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt'
    }
  }
  ProjectMember: {
    Service: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resource' | 'other_Service' | 'ProjectMember'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
  }
  ProjectTask: {

  }
  ResetPassword: {

  }
  Resource: {
    CodeChallenge: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletion'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic'
    }
    File: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Project'
      ordering: 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt'
    }
    Gallery: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt' | 'User' | 'Resource_GalleryToResource' | 'File'
      ordering: 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt'
    }
    Project_Project_ResourceToResource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    other_Resource_ResourceToResource_Blog: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Resource_ResourceToResource_Parent: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Resource_ResourceToResource_Topic: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    ResourceTag: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
    Vote: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User' | 'Resource_ResourceToVote' | 'User_UserToVote'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User'
    }
  }
  ResourceTag: {

  }
  Route: {
    other_Route: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent' | 'User' | 'Route' | 'other_Route'
      ordering: 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent'
    }
  }
  Service: {
    Resource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Service: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resource' | 'other_Service' | 'ProjectMember'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    ProjectMember: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Service'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
  }
  ServiceCategory: {
    Service: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resource' | 'other_Service' | 'ProjectMember'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    other_ServiceCategory: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'ServiceCategory' | 'Service' | 'other_ServiceCategory'
      ordering: 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
  }
  Settings: {

  }
  SmsMessage: {
    SmsMessage_recipients: {
      filtering: 'AND' | 'OR' | 'NOT' | 'nodeId' | 'position' | 'value' | 'SmsMessage'
      ordering: 'nodeId' | 'position' | 'value'
    }
  }
  SmsMessage_recipients: {

  }
  SmsProvider: {
    SmsMessage: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider' | 'User' | 'SmsProvider' | 'LetsadsSmsMessageStatus' | 'SmsMessage_recipients'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider'
    }
  }
  Tag: {
    ResourceTag: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
  }
  Task: {
    CodeChallengeCompletion: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
    ProjectTask: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    Resource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Task: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletion' | 'ProjectTask' | 'Resource' | 'other_Task' | 'TaskMember' | 'TaskReaction' | 'TaskTechnology' | 'Timer' | 'Task_B' | 'Task_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    TaskMember: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TaskReaction: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskReaction'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy'
    }
    TaskTechnology: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    Timer: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTimer'
      ordering: 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy'
    }
    Task_B: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletion' | 'ProjectTask' | 'Resource' | 'other_Task' | 'TaskMember' | 'TaskReaction' | 'TaskTechnology' | 'Timer' | 'Task_B' | 'Task_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    Task_A: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletion' | 'ProjectTask' | 'Resource' | 'other_Task' | 'TaskMember' | 'TaskReaction' | 'TaskTechnology' | 'Timer' | 'Task_B' | 'Task_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
  }
  TaskMember: {

  }
  TaskReaction: {

  }
  TaskTechnology: {

  }
  Team: {
    GameResult: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    Project_ProjectToTeam: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    Resource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenge' | 'File' | 'Gallery' | 'Project_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blog' | 'other_Resource_ResourceToResource_Parent' | 'other_Resource_ResourceToResource_Topic' | 'ResourceTag' | 'Vote'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Team: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt' | 'User' | 'Team' | 'GameResult' | 'Project_ProjectToTeam' | 'Resource' | 'other_Team' | 'TeamMember' | 'Game' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'CreatedBy' | 'Parent' | 'createdAt' | 'updatedAt'
    }
    TeamMember: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Game: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    Project_ProjectCustomers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccount' | 'ProjectMember' | 'ProjectTask' | 'Resource_ProjectToResource_PrismaProject' | 'Template_ProjectToTemplate_PrismaProject' | 'Template_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
  }
  TeamMember: {

  }
  Technology: {
    TaskTechnology: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    TechnologyLesson: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy' | 'User' | 'Technology_TechnologyToTechnologyLesson' | 'Comment' | 'TechnologyLessonUser'
      ordering: 'id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy'
    }
    UserTechnology: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'CreatedBy' | 'Technology' | 'level' | 'User' | 'Technology_TechnologyToUserTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'CreatedBy' | 'Technology' | 'level'
    }
  }
  TechnologyLesson: {
    Comment: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson' | 'User' | 'TechnologyLesson_CommentToTechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson'
    }
    TechnologyLessonUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'Lesson' | 'CreatedBy' | 'User' | 'TechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'Lesson' | 'CreatedBy'
    }
  }
  TechnologyLessonUser: {

  }
  Template: {
    other_Template: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Template'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
  }
  Test: {

  }
  Timer: {

  }
  Tournament: {
    Tourney: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'Tournament' | 'CreatedBy' | 'User' | 'Tournament_TournamentToTourney' | 'Game' | 'TourneyPlayer'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'Tournament' | 'CreatedBy'
    }
  }
  TournamentGroup: {
    Tournament: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group' | 'User' | 'TournamentGroup' | 'Tourney'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group'
    }
  }
  Tourney: {
    Game: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    TourneyPlayer: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'User' | 'Tourney' | 'Tourney_TourneyToTourneyPlayer' | 'User_TourneyPlayerToUser'
      ordering: 'id' | 'User' | 'Tourney'
    }
  }
  TourneyPlayer: {

  }
  UserGroup: {
    User: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequest_CallRequest_CalledToUser' | 'CallRequest_CallRequest_CallerToUser' | 'Career' | 'ChatMessage' | 'ChatMessageReaded' | 'ChatRoom_ChatRoomToUser' | 'ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitation_ChatRoomInvitation_UserToUser' | 'CodeChallenge' | 'CodeChallengeBlock' | 'CodeChallengeCompletion' | 'Comment' | 'EthAccount_EthAccount_CreatedByToUser' | 'EthContractSource' | 'File' | 'Gallery' | 'Game_GameToUser' | 'GameResult_GameResult_CreatedByToUser' | 'GameResult_GameResult_UserToUser' | 'Import' | 'Letter' | 'LogedIn' | 'Notice_Notice_CreatedByToUser' | 'Notice_Notice_UserToUser' | 'NotificationType_NotificationTypeToUser' | 'Player' | 'Position_PositionToUser' | 'Project_ProjectToUser' | 'ProjectMember_ProjectMember_CreatedByToUser' | 'ProjectMember_ProjectMember_UserToUser' | 'ProjectTask' | 'ResetPassword' | 'Resource' | 'ResourceTag' | 'Route' | 'Service' | 'ServiceCategory' | 'Settings' | 'SmsMessage' | 'SmsProvider' | 'Tag' | 'Task' | 'TaskMember_TaskMember_CreatedByToUser' | 'TaskMember_TaskMember_UserToUser' | 'TaskReaction' | 'TaskTechnology' | 'Team' | 'TeamMember_TeamMember_CreatedByToUser' | 'TeamMember_TeamMember_UserToUser' | 'Technology' | 'TechnologyLesson' | 'TechnologyLessonUser' | 'Template' | 'Test' | 'Timer' | 'Tournament' | 'TournamentGroup' | 'Tourney' | 'TourneyPlayer' | 'other_User' | 'UserTechnology' | 'Vote' | 'World' | 'ChatRoom_ChatRoomsMembers' | 'Game_GameUsers' | 'Position_PositionUsers' | 'Project_PrismaProjectUsers' | 'UserGroup' | 'NotificationType_UserNotificationTypes' | 'Tokens'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom'
    }
  }
  UserTechnology: {

  }
  Vote: {

  }
  World: {
    Block: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'representation' | 'type' | 'x' | 'y' | 'z' | 'world' | 'World'
      ordering: 'id' | 'representation' | 'type' | 'x' | 'y' | 'z' | 'world'
    }
    Message: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'sender' | 'body' | 'world' | 'World'
      ordering: 'id' | 'type' | 'sender' | 'body' | 'world'
    }
    Player: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user' | 'Inventory' | 'User' | 'World'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user'
    }
  }
  Letter: {

  }
  Log: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    token: 'Token'
    tokens: 'Token'
    file: 'File'
    files: 'File'
    block: 'Block'
    blocks: 'Block'
    callRequest: 'CallRequest'
    callRequests: 'CallRequest'
    career: 'Career'
    careers: 'Career'
    chatMessage: 'ChatMessage'
    chatMessages: 'ChatMessage'
    chatMessageReaded: 'ChatMessageReaded'
    chatMessageReadeds: 'ChatMessageReaded'
    chatRoom: 'ChatRoom'
    chatRooms: 'ChatRoom'
    chatRoomInvitation: 'ChatRoomInvitation'
    chatRoomInvitations: 'ChatRoomInvitation'
    codeChallenge: 'CodeChallenge'
    codeChallenges: 'CodeChallenge'
    codeChallengeBlock: 'CodeChallengeBlock'
    codeChallengeBlocks: 'CodeChallengeBlock'
    codeChallengeCompletion: 'CodeChallengeCompletion'
    codeChallengeCompletions: 'CodeChallengeCompletion'
    comment: 'Comment'
    comments: 'Comment'
    ethAccount: 'EthAccount'
    ethAccounts: 'EthAccount'
    ethBlock: 'EthBlock'
    ethBlocks: 'EthBlock'
    ethContractSource: 'EthContractSource'
    ethContractSources: 'EthContractSource'
    ethTransaction: 'EthTransaction'
    ethTransactions: 'EthTransaction'
    gallery: 'Gallery'
    galleries: 'Gallery'
    game: 'Game'
    games: 'Game'
    gameResult: 'GameResult'
    gameResults: 'GameResult'
    import: 'Import'
    imports: 'Import'
    inventory: 'Inventory'
    inventories: 'Inventory'
    letsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
    letsadsSmsMessageStatuses: 'LetsadsSmsMessageStatus'
    letsadsSmsMessageStatusItem: 'LetsadsSmsMessageStatusItem'
    letsadsSmsMessageStatusItems: 'LetsadsSmsMessageStatusItem'
    logedIn: 'LogedIn'
    logedIns: 'LogedIn'
    message: 'Message'
    messages: 'Message'
    notice: 'Notice'
    notices: 'Notice'
    notificationType: 'NotificationType'
    notificationTypes: 'NotificationType'
    player: 'Player'
    players: 'Player'
    position: 'Position'
    positions: 'Position'
    project: 'Project'
    projects: 'Project'
    projectMember: 'ProjectMember'
    projectMembers: 'ProjectMember'
    projectTask: 'ProjectTask'
    projectTasks: 'ProjectTask'
    resetPassword: 'ResetPassword'
    resetPasswords: 'ResetPassword'
    resource: 'Resource'
    resources: 'Resource'
    resourceTag: 'ResourceTag'
    resourceTags: 'ResourceTag'
    route: 'Route'
    routes: 'Route'
    service: 'Service'
    services: 'Service'
    serviceCategory: 'ServiceCategory'
    serviceCategories: 'ServiceCategory'
    settings: 'Settings'
    settingss: 'Settings'
    smsMessage: 'SmsMessage'
    smsMessages: 'SmsMessage'
    smsMessageRecipients: 'SmsMessage_recipients'
    smsmessageRecipientss: 'SmsMessage_recipients'
    smsProvider: 'SmsProvider'
    smsProviders: 'SmsProvider'
    tag: 'Tag'
    tags: 'Tag'
    task: 'Task'
    tasks: 'Task'
    taskMember: 'TaskMember'
    taskMembers: 'TaskMember'
    taskReaction: 'TaskReaction'
    taskReactions: 'TaskReaction'
    taskTechnology: 'TaskTechnology'
    taskTechnologies: 'TaskTechnology'
    team: 'Team'
    teams: 'Team'
    teamMember: 'TeamMember'
    teamMembers: 'TeamMember'
    technology: 'Technology'
    technologies: 'Technology'
    technologyLesson: 'TechnologyLesson'
    technologyLessons: 'TechnologyLesson'
    technologyLessonUser: 'TechnologyLessonUser'
    technologyLessonUsers: 'TechnologyLessonUser'
    template: 'Template'
    templates: 'Template'
    test: 'Test'
    tests: 'Test'
    timer: 'Timer'
    timers: 'Timer'
    tournament: 'Tournament'
    tournaments: 'Tournament'
    tournamentGroup: 'TournamentGroup'
    tournamentGroups: 'TournamentGroup'
    tourney: 'Tourney'
    tourneys: 'Tourney'
    tourneyPlayer: 'TourneyPlayer'
    tourneyPlayers: 'TourneyPlayer'
    userGroup: 'UserGroup'
    userGroups: 'UserGroup'
    userTechnology: 'UserTechnology'
    userTechnologies: 'UserTechnology'
    vote: 'Vote'
    votes: 'Vote'
    world: 'World'
    worlds: 'World'
    letter: 'Letter'
    letters: 'Letter'
    log: 'Log'
    logs: 'Log'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneToken: 'Token'
    updateOneToken: 'Token'
    updateManyToken: 'AffectedRowsOutput'
    deleteOneToken: 'Token'
    deleteManyToken: 'AffectedRowsOutput'
    upsertOneToken: 'Token'
    createOneFile: 'File'
    updateOneFile: 'File'
    updateManyFile: 'AffectedRowsOutput'
    deleteOneFile: 'File'
    deleteManyFile: 'AffectedRowsOutput'
    upsertOneFile: 'File'
    createOneBlock: 'Block'
    updateOneBlock: 'Block'
    updateManyBlock: 'AffectedRowsOutput'
    deleteOneBlock: 'Block'
    deleteManyBlock: 'AffectedRowsOutput'
    upsertOneBlock: 'Block'
    createOneCallRequest: 'CallRequest'
    updateOneCallRequest: 'CallRequest'
    updateManyCallRequest: 'AffectedRowsOutput'
    deleteOneCallRequest: 'CallRequest'
    deleteManyCallRequest: 'AffectedRowsOutput'
    upsertOneCallRequest: 'CallRequest'
    createOneCareer: 'Career'
    updateOneCareer: 'Career'
    updateManyCareer: 'AffectedRowsOutput'
    deleteOneCareer: 'Career'
    deleteManyCareer: 'AffectedRowsOutput'
    upsertOneCareer: 'Career'
    createOneChatMessage: 'ChatMessage'
    updateOneChatMessage: 'ChatMessage'
    updateManyChatMessage: 'AffectedRowsOutput'
    deleteOneChatMessage: 'ChatMessage'
    deleteManyChatMessage: 'AffectedRowsOutput'
    upsertOneChatMessage: 'ChatMessage'
    createOneChatMessageReaded: 'ChatMessageReaded'
    updateOneChatMessageReaded: 'ChatMessageReaded'
    updateManyChatMessageReaded: 'AffectedRowsOutput'
    deleteOneChatMessageReaded: 'ChatMessageReaded'
    deleteManyChatMessageReaded: 'AffectedRowsOutput'
    upsertOneChatMessageReaded: 'ChatMessageReaded'
    createOneChatRoom: 'ChatRoom'
    updateOneChatRoom: 'ChatRoom'
    updateManyChatRoom: 'AffectedRowsOutput'
    deleteOneChatRoom: 'ChatRoom'
    deleteManyChatRoom: 'AffectedRowsOutput'
    upsertOneChatRoom: 'ChatRoom'
    createOneChatRoomInvitation: 'ChatRoomInvitation'
    updateOneChatRoomInvitation: 'ChatRoomInvitation'
    updateManyChatRoomInvitation: 'AffectedRowsOutput'
    deleteOneChatRoomInvitation: 'ChatRoomInvitation'
    deleteManyChatRoomInvitation: 'AffectedRowsOutput'
    upsertOneChatRoomInvitation: 'ChatRoomInvitation'
    createOneCodeChallenge: 'CodeChallenge'
    updateOneCodeChallenge: 'CodeChallenge'
    updateManyCodeChallenge: 'AffectedRowsOutput'
    deleteOneCodeChallenge: 'CodeChallenge'
    deleteManyCodeChallenge: 'AffectedRowsOutput'
    upsertOneCodeChallenge: 'CodeChallenge'
    createOneCodeChallengeBlock: 'CodeChallengeBlock'
    updateOneCodeChallengeBlock: 'CodeChallengeBlock'
    updateManyCodeChallengeBlock: 'AffectedRowsOutput'
    deleteOneCodeChallengeBlock: 'CodeChallengeBlock'
    deleteManyCodeChallengeBlock: 'AffectedRowsOutput'
    upsertOneCodeChallengeBlock: 'CodeChallengeBlock'
    createOneCodeChallengeCompletion: 'CodeChallengeCompletion'
    updateOneCodeChallengeCompletion: 'CodeChallengeCompletion'
    updateManyCodeChallengeCompletion: 'AffectedRowsOutput'
    deleteOneCodeChallengeCompletion: 'CodeChallengeCompletion'
    deleteManyCodeChallengeCompletion: 'AffectedRowsOutput'
    upsertOneCodeChallengeCompletion: 'CodeChallengeCompletion'
    createOneComment: 'Comment'
    updateOneComment: 'Comment'
    updateManyComment: 'AffectedRowsOutput'
    deleteOneComment: 'Comment'
    deleteManyComment: 'AffectedRowsOutput'
    upsertOneComment: 'Comment'
    createOneEthAccount: 'EthAccount'
    updateOneEthAccount: 'EthAccount'
    updateManyEthAccount: 'AffectedRowsOutput'
    deleteOneEthAccount: 'EthAccount'
    deleteManyEthAccount: 'AffectedRowsOutput'
    upsertOneEthAccount: 'EthAccount'
    createOneEthBlock: 'EthBlock'
    updateOneEthBlock: 'EthBlock'
    updateManyEthBlock: 'AffectedRowsOutput'
    deleteOneEthBlock: 'EthBlock'
    deleteManyEthBlock: 'AffectedRowsOutput'
    upsertOneEthBlock: 'EthBlock'
    createOneEthContractSource: 'EthContractSource'
    updateOneEthContractSource: 'EthContractSource'
    updateManyEthContractSource: 'AffectedRowsOutput'
    deleteOneEthContractSource: 'EthContractSource'
    deleteManyEthContractSource: 'AffectedRowsOutput'
    upsertOneEthContractSource: 'EthContractSource'
    createOneEthTransaction: 'EthTransaction'
    updateOneEthTransaction: 'EthTransaction'
    updateManyEthTransaction: 'AffectedRowsOutput'
    deleteOneEthTransaction: 'EthTransaction'
    deleteManyEthTransaction: 'AffectedRowsOutput'
    upsertOneEthTransaction: 'EthTransaction'
    createOneGallery: 'Gallery'
    updateOneGallery: 'Gallery'
    updateManyGallery: 'AffectedRowsOutput'
    deleteOneGallery: 'Gallery'
    deleteManyGallery: 'AffectedRowsOutput'
    upsertOneGallery: 'Gallery'
    createOneGame: 'Game'
    updateOneGame: 'Game'
    updateManyGame: 'AffectedRowsOutput'
    deleteOneGame: 'Game'
    deleteManyGame: 'AffectedRowsOutput'
    upsertOneGame: 'Game'
    createOneGameResult: 'GameResult'
    updateOneGameResult: 'GameResult'
    updateManyGameResult: 'AffectedRowsOutput'
    deleteOneGameResult: 'GameResult'
    deleteManyGameResult: 'AffectedRowsOutput'
    upsertOneGameResult: 'GameResult'
    createOneImport: 'Import'
    updateOneImport: 'Import'
    updateManyImport: 'AffectedRowsOutput'
    deleteOneImport: 'Import'
    deleteManyImport: 'AffectedRowsOutput'
    upsertOneImport: 'Import'
    createOneInventory: 'Inventory'
    updateOneInventory: 'Inventory'
    updateManyInventory: 'AffectedRowsOutput'
    deleteOneInventory: 'Inventory'
    deleteManyInventory: 'AffectedRowsOutput'
    upsertOneInventory: 'Inventory'
    createOneLetsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
    updateOneLetsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
    updateManyLetsadsSmsMessageStatus: 'AffectedRowsOutput'
    deleteOneLetsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
    deleteManyLetsadsSmsMessageStatus: 'AffectedRowsOutput'
    upsertOneLetsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
    createOneLetsadsSmsMessageStatusItem: 'LetsadsSmsMessageStatusItem'
    updateOneLetsadsSmsMessageStatusItem: 'LetsadsSmsMessageStatusItem'
    updateManyLetsadsSmsMessageStatusItem: 'AffectedRowsOutput'
    deleteOneLetsadsSmsMessageStatusItem: 'LetsadsSmsMessageStatusItem'
    deleteManyLetsadsSmsMessageStatusItem: 'AffectedRowsOutput'
    upsertOneLetsadsSmsMessageStatusItem: 'LetsadsSmsMessageStatusItem'
    createOneLogedIn: 'LogedIn'
    updateOneLogedIn: 'LogedIn'
    updateManyLogedIn: 'AffectedRowsOutput'
    deleteOneLogedIn: 'LogedIn'
    deleteManyLogedIn: 'AffectedRowsOutput'
    upsertOneLogedIn: 'LogedIn'
    createOneMessage: 'Message'
    updateOneMessage: 'Message'
    updateManyMessage: 'AffectedRowsOutput'
    deleteOneMessage: 'Message'
    deleteManyMessage: 'AffectedRowsOutput'
    upsertOneMessage: 'Message'
    createOneNotice: 'Notice'
    updateOneNotice: 'Notice'
    updateManyNotice: 'AffectedRowsOutput'
    deleteOneNotice: 'Notice'
    deleteManyNotice: 'AffectedRowsOutput'
    upsertOneNotice: 'Notice'
    createOneNotificationType: 'NotificationType'
    updateOneNotificationType: 'NotificationType'
    updateManyNotificationType: 'AffectedRowsOutput'
    deleteOneNotificationType: 'NotificationType'
    deleteManyNotificationType: 'AffectedRowsOutput'
    upsertOneNotificationType: 'NotificationType'
    createOnePlayer: 'Player'
    updateOnePlayer: 'Player'
    updateManyPlayer: 'AffectedRowsOutput'
    deleteOnePlayer: 'Player'
    deleteManyPlayer: 'AffectedRowsOutput'
    upsertOnePlayer: 'Player'
    createOnePosition: 'Position'
    updateOnePosition: 'Position'
    updateManyPosition: 'AffectedRowsOutput'
    deleteOnePosition: 'Position'
    deleteManyPosition: 'AffectedRowsOutput'
    upsertOnePosition: 'Position'
    createOneProject: 'Project'
    updateOneProject: 'Project'
    updateManyProject: 'AffectedRowsOutput'
    deleteOneProject: 'Project'
    deleteManyProject: 'AffectedRowsOutput'
    upsertOneProject: 'Project'
    createOneProjectMember: 'ProjectMember'
    updateOneProjectMember: 'ProjectMember'
    updateManyProjectMember: 'AffectedRowsOutput'
    deleteOneProjectMember: 'ProjectMember'
    deleteManyProjectMember: 'AffectedRowsOutput'
    upsertOneProjectMember: 'ProjectMember'
    createOneProjectTask: 'ProjectTask'
    updateOneProjectTask: 'ProjectTask'
    updateManyProjectTask: 'AffectedRowsOutput'
    deleteOneProjectTask: 'ProjectTask'
    deleteManyProjectTask: 'AffectedRowsOutput'
    upsertOneProjectTask: 'ProjectTask'
    createOneResetPassword: 'ResetPassword'
    updateOneResetPassword: 'ResetPassword'
    updateManyResetPassword: 'AffectedRowsOutput'
    deleteOneResetPassword: 'ResetPassword'
    deleteManyResetPassword: 'AffectedRowsOutput'
    upsertOneResetPassword: 'ResetPassword'
    createOneResource: 'Resource'
    updateOneResource: 'Resource'
    updateManyResource: 'AffectedRowsOutput'
    deleteOneResource: 'Resource'
    deleteManyResource: 'AffectedRowsOutput'
    upsertOneResource: 'Resource'
    createOneResourceTag: 'ResourceTag'
    updateOneResourceTag: 'ResourceTag'
    updateManyResourceTag: 'AffectedRowsOutput'
    deleteOneResourceTag: 'ResourceTag'
    deleteManyResourceTag: 'AffectedRowsOutput'
    upsertOneResourceTag: 'ResourceTag'
    createOneRoute: 'Route'
    updateOneRoute: 'Route'
    updateManyRoute: 'AffectedRowsOutput'
    deleteOneRoute: 'Route'
    deleteManyRoute: 'AffectedRowsOutput'
    upsertOneRoute: 'Route'
    createOneService: 'Service'
    updateOneService: 'Service'
    updateManyService: 'AffectedRowsOutput'
    deleteOneService: 'Service'
    deleteManyService: 'AffectedRowsOutput'
    upsertOneService: 'Service'
    createOneServiceCategory: 'ServiceCategory'
    updateOneServiceCategory: 'ServiceCategory'
    updateManyServiceCategory: 'AffectedRowsOutput'
    deleteOneServiceCategory: 'ServiceCategory'
    deleteManyServiceCategory: 'AffectedRowsOutput'
    upsertOneServiceCategory: 'ServiceCategory'
    createOneSettings: 'Settings'
    updateOneSettings: 'Settings'
    updateManySettings: 'AffectedRowsOutput'
    deleteOneSettings: 'Settings'
    deleteManySettings: 'AffectedRowsOutput'
    upsertOneSettings: 'Settings'
    createOneSmsMessage: 'SmsMessage'
    updateOneSmsMessage: 'SmsMessage'
    updateManySmsMessage: 'AffectedRowsOutput'
    deleteOneSmsMessage: 'SmsMessage'
    deleteManySmsMessage: 'AffectedRowsOutput'
    upsertOneSmsMessage: 'SmsMessage'
    createOneSmsMessage_recipients: 'SmsMessage_recipients'
    updateOneSmsMessage_recipients: 'SmsMessage_recipients'
    updateManySmsMessage_recipients: 'AffectedRowsOutput'
    deleteOneSmsMessage_recipients: 'SmsMessage_recipients'
    deleteManySmsMessage_recipients: 'AffectedRowsOutput'
    upsertOneSmsMessage_recipients: 'SmsMessage_recipients'
    createOneSmsProvider: 'SmsProvider'
    updateOneSmsProvider: 'SmsProvider'
    updateManySmsProvider: 'AffectedRowsOutput'
    deleteOneSmsProvider: 'SmsProvider'
    deleteManySmsProvider: 'AffectedRowsOutput'
    upsertOneSmsProvider: 'SmsProvider'
    createOneTag: 'Tag'
    updateOneTag: 'Tag'
    updateManyTag: 'AffectedRowsOutput'
    deleteOneTag: 'Tag'
    deleteManyTag: 'AffectedRowsOutput'
    upsertOneTag: 'Tag'
    createOneTask: 'Task'
    updateOneTask: 'Task'
    updateManyTask: 'AffectedRowsOutput'
    deleteOneTask: 'Task'
    deleteManyTask: 'AffectedRowsOutput'
    upsertOneTask: 'Task'
    createOneTaskMember: 'TaskMember'
    updateOneTaskMember: 'TaskMember'
    updateManyTaskMember: 'AffectedRowsOutput'
    deleteOneTaskMember: 'TaskMember'
    deleteManyTaskMember: 'AffectedRowsOutput'
    upsertOneTaskMember: 'TaskMember'
    createOneTaskReaction: 'TaskReaction'
    updateOneTaskReaction: 'TaskReaction'
    updateManyTaskReaction: 'AffectedRowsOutput'
    deleteOneTaskReaction: 'TaskReaction'
    deleteManyTaskReaction: 'AffectedRowsOutput'
    upsertOneTaskReaction: 'TaskReaction'
    createOneTaskTechnology: 'TaskTechnology'
    updateOneTaskTechnology: 'TaskTechnology'
    updateManyTaskTechnology: 'AffectedRowsOutput'
    deleteOneTaskTechnology: 'TaskTechnology'
    deleteManyTaskTechnology: 'AffectedRowsOutput'
    upsertOneTaskTechnology: 'TaskTechnology'
    createOneTeam: 'Team'
    updateOneTeam: 'Team'
    updateManyTeam: 'AffectedRowsOutput'
    deleteOneTeam: 'Team'
    deleteManyTeam: 'AffectedRowsOutput'
    upsertOneTeam: 'Team'
    createOneTeamMember: 'TeamMember'
    updateOneTeamMember: 'TeamMember'
    updateManyTeamMember: 'AffectedRowsOutput'
    deleteOneTeamMember: 'TeamMember'
    deleteManyTeamMember: 'AffectedRowsOutput'
    upsertOneTeamMember: 'TeamMember'
    createOneTechnology: 'Technology'
    updateOneTechnology: 'Technology'
    updateManyTechnology: 'AffectedRowsOutput'
    deleteOneTechnology: 'Technology'
    deleteManyTechnology: 'AffectedRowsOutput'
    upsertOneTechnology: 'Technology'
    createOneTechnologyLesson: 'TechnologyLesson'
    updateOneTechnologyLesson: 'TechnologyLesson'
    updateManyTechnologyLesson: 'AffectedRowsOutput'
    deleteOneTechnologyLesson: 'TechnologyLesson'
    deleteManyTechnologyLesson: 'AffectedRowsOutput'
    upsertOneTechnologyLesson: 'TechnologyLesson'
    createOneTechnologyLessonUser: 'TechnologyLessonUser'
    updateOneTechnologyLessonUser: 'TechnologyLessonUser'
    updateManyTechnologyLessonUser: 'AffectedRowsOutput'
    deleteOneTechnologyLessonUser: 'TechnologyLessonUser'
    deleteManyTechnologyLessonUser: 'AffectedRowsOutput'
    upsertOneTechnologyLessonUser: 'TechnologyLessonUser'
    createOneTemplate: 'Template'
    updateOneTemplate: 'Template'
    updateManyTemplate: 'AffectedRowsOutput'
    deleteOneTemplate: 'Template'
    deleteManyTemplate: 'AffectedRowsOutput'
    upsertOneTemplate: 'Template'
    createOneTest: 'Test'
    updateOneTest: 'Test'
    updateManyTest: 'AffectedRowsOutput'
    deleteOneTest: 'Test'
    deleteManyTest: 'AffectedRowsOutput'
    upsertOneTest: 'Test'
    createOneTimer: 'Timer'
    updateOneTimer: 'Timer'
    updateManyTimer: 'AffectedRowsOutput'
    deleteOneTimer: 'Timer'
    deleteManyTimer: 'AffectedRowsOutput'
    upsertOneTimer: 'Timer'
    createOneTournament: 'Tournament'
    updateOneTournament: 'Tournament'
    updateManyTournament: 'AffectedRowsOutput'
    deleteOneTournament: 'Tournament'
    deleteManyTournament: 'AffectedRowsOutput'
    upsertOneTournament: 'Tournament'
    createOneTournamentGroup: 'TournamentGroup'
    updateOneTournamentGroup: 'TournamentGroup'
    updateManyTournamentGroup: 'AffectedRowsOutput'
    deleteOneTournamentGroup: 'TournamentGroup'
    deleteManyTournamentGroup: 'AffectedRowsOutput'
    upsertOneTournamentGroup: 'TournamentGroup'
    createOneTourney: 'Tourney'
    updateOneTourney: 'Tourney'
    updateManyTourney: 'AffectedRowsOutput'
    deleteOneTourney: 'Tourney'
    deleteManyTourney: 'AffectedRowsOutput'
    upsertOneTourney: 'Tourney'
    createOneTourneyPlayer: 'TourneyPlayer'
    updateOneTourneyPlayer: 'TourneyPlayer'
    updateManyTourneyPlayer: 'AffectedRowsOutput'
    deleteOneTourneyPlayer: 'TourneyPlayer'
    deleteManyTourneyPlayer: 'AffectedRowsOutput'
    upsertOneTourneyPlayer: 'TourneyPlayer'
    createOneUserGroup: 'UserGroup'
    updateOneUserGroup: 'UserGroup'
    updateManyUserGroup: 'AffectedRowsOutput'
    deleteOneUserGroup: 'UserGroup'
    deleteManyUserGroup: 'AffectedRowsOutput'
    upsertOneUserGroup: 'UserGroup'
    createOneUserTechnology: 'UserTechnology'
    updateOneUserTechnology: 'UserTechnology'
    updateManyUserTechnology: 'AffectedRowsOutput'
    deleteOneUserTechnology: 'UserTechnology'
    deleteManyUserTechnology: 'AffectedRowsOutput'
    upsertOneUserTechnology: 'UserTechnology'
    createOneVote: 'Vote'
    updateOneVote: 'Vote'
    updateManyVote: 'AffectedRowsOutput'
    deleteOneVote: 'Vote'
    deleteManyVote: 'AffectedRowsOutput'
    upsertOneVote: 'Vote'
    createOneWorld: 'World'
    updateOneWorld: 'World'
    updateManyWorld: 'AffectedRowsOutput'
    deleteOneWorld: 'World'
    deleteManyWorld: 'AffectedRowsOutput'
    upsertOneWorld: 'World'
    createOneLetter: 'Letter'
    updateOneLetter: 'Letter'
    updateManyLetter: 'AffectedRowsOutput'
    deleteOneLetter: 'Letter'
    deleteManyLetter: 'AffectedRowsOutput'
    upsertOneLetter: 'Letter'
    createOneLog: 'Log'
    updateOneLog: 'Log'
    updateManyLog: 'AffectedRowsOutput'
    deleteOneLog: 'Log'
    deleteManyLog: 'AffectedRowsOutput'
    upsertOneLog: 'Log'
  },
  User: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    username: 'String'
    email: 'String'
    phone: 'String'
    showEmail: 'Boolean'
    showPhone: 'Boolean'
    showFullname: 'Boolean'
    password: 'String'
    fullname: 'String'
    image: 'String'
    address: 'String'
    active: 'Boolean'
    activated: 'Boolean'
    deleted: 'Boolean'
    hidden: 'Boolean'
    sudo: 'Boolean'
    marketplaceToken: 'String'
    oldID: 'Int'
    CreatedBy: 'String'
    EthAccountAuthed: 'String'
    acceptChatMessageAnonymous: 'Boolean'
    acceptNewChatRoomAnonymous: 'Boolean'
    acceptNewChatRoom: 'Boolean'
    User: 'User'
    EthAccount_EthAccountToUser_EthAccountAuthed: 'EthAccount'
    CallRequest_CallRequest_CalledToUser: 'CallRequest'
    CallRequest_CallRequest_CallerToUser: 'CallRequest'
    Career: 'Career'
    ChatMessage: 'ChatMessage'
    ChatMessageReaded: 'ChatMessageReaded'
    ChatRoom_ChatRoomToUser: 'ChatRoom'
    ChatRoomInvitation_ChatRoomInvitation_CreatedByToUser: 'ChatRoomInvitation'
    ChatRoomInvitation_ChatRoomInvitation_UserToUser: 'ChatRoomInvitation'
    CodeChallenge: 'CodeChallenge'
    CodeChallengeBlock: 'CodeChallengeBlock'
    CodeChallengeCompletion: 'CodeChallengeCompletion'
    Comment: 'Comment'
    EthAccount_EthAccount_CreatedByToUser: 'EthAccount'
    EthContractSource: 'EthContractSource'
    File: 'File'
    Gallery: 'Gallery'
    Game_GameToUser: 'Game'
    GameResult_GameResult_CreatedByToUser: 'GameResult'
    GameResult_GameResult_UserToUser: 'GameResult'
    Import: 'Import'
    Letter: 'Letter'
    LogedIn: 'LogedIn'
    Notice_Notice_CreatedByToUser: 'Notice'
    Notice_Notice_UserToUser: 'Notice'
    NotificationType_NotificationTypeToUser: 'NotificationType'
    Player: 'Player'
    Position_PositionToUser: 'Position'
    Project_ProjectToUser: 'Project'
    ProjectMember_ProjectMember_CreatedByToUser: 'ProjectMember'
    ProjectMember_ProjectMember_UserToUser: 'ProjectMember'
    ProjectTask: 'ProjectTask'
    ResetPassword: 'ResetPassword'
    Resource: 'Resource'
    ResourceTag: 'ResourceTag'
    Route: 'Route'
    Service: 'Service'
    ServiceCategory: 'ServiceCategory'
    Settings: 'Settings'
    SmsMessage: 'SmsMessage'
    SmsProvider: 'SmsProvider'
    Tag: 'Tag'
    Task: 'Task'
    TaskMember_TaskMember_CreatedByToUser: 'TaskMember'
    TaskMember_TaskMember_UserToUser: 'TaskMember'
    TaskReaction: 'TaskReaction'
    TaskTechnology: 'TaskTechnology'
    Team: 'Team'
    TeamMember_TeamMember_CreatedByToUser: 'TeamMember'
    TeamMember_TeamMember_UserToUser: 'TeamMember'
    Technology: 'Technology'
    TechnologyLesson: 'TechnologyLesson'
    TechnologyLessonUser: 'TechnologyLessonUser'
    Template: 'Template'
    Test: 'Test'
    Timer: 'Timer'
    Tournament: 'Tournament'
    TournamentGroup: 'TournamentGroup'
    Tourney: 'Tourney'
    TourneyPlayer: 'TourneyPlayer'
    other_User: 'User'
    UserTechnology: 'UserTechnology'
    Vote: 'Vote'
    World: 'World'
    ChatRoom_ChatRoomsMembers: 'ChatRoom'
    Game_GameUsers: 'Game'
    Position_PositionUsers: 'Position'
    Project_PrismaProjectUsers: 'Project'
    UserGroup: 'UserGroup'
    NotificationType_UserNotificationTypes: 'NotificationType'
    Tokens: 'Token'
  }
  Token: {
    id: 'String'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    userId: 'String'
    User: 'User'
  }
  File: {
    id: 'String'
    path: 'String'
    name: 'String'
    filename: 'String'
    mimetype: 'String'
    encoding: 'String'
    hash: 'String'
    size: 'Decimal'
    ImageResource: 'String'
    CreatedBy: 'String'
    rank: 'Int'
    Gallery: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
    Gallery_FileToGallery: 'Gallery'
    Resource: 'Resource'
    Project: 'Project'
  }
  Block: {
    id: 'String'
    representation: 'String'
    type: 'Int'
    x: 'Int'
    y: 'Int'
    z: 'Int'
    world: 'String'
    World: 'World'
  }
  CallRequest: {
    id: 'String'
    called_descriptions: 'Json'
    caller_descriptions: 'Json'
    status: 'CallRequestStatus'
    startedAt: 'DateTime'
    endedAt: 'DateTime'
    Room: 'String'
    Called: 'String'
    Caller: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User_CallRequest_CalledToUser: 'User'
    User_CallRequest_CallerToUser: 'User'
    ChatRoom: 'ChatRoom'
  }
  Career: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'String'
    start_date: 'DateTime'
    CreatedBy: 'String'
    User: 'User'
  }
  ChatMessage: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    content: 'Json'
    contentText: 'String'
    CreatedBy: 'String'
    Room: 'String'
    User: 'User'
    ChatRoom: 'ChatRoom'
    ChatMessageReaded: 'ChatMessageReaded'
    Notice: 'Notice'
  }
  ChatMessageReaded: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Message: 'String'
    User: 'String'
    ChatMessage: 'ChatMessage'
    User_ChatMessageReadedToUser: 'User'
  }
  ChatRoom: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'String'
    image: 'String'
    code: 'String'
    isPublic: 'Boolean'
    CreatedBy: 'String'
    allowAnonymous: 'Boolean'
    sandbox: 'Boolean'
    User_ChatRoomToUser: 'User'
    CallRequest: 'CallRequest'
    ChatMessage: 'ChatMessage'
    ChatRoomInvitation: 'ChatRoomInvitation'
    Project: 'Project'
    Task: 'Task'
    User_ChatRoomsMembers: 'User'
  }
  ChatRoomInvitation: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'String'
    CreatedBy: 'String'
    ChatRoom: 'String'
    Notice: 'String'
    ChatRoom_ChatRoomToChatRoomInvitation: 'ChatRoom'
    User_ChatRoomInvitation_CreatedByToUser: 'User'
    Notice_ChatRoomInvitationToNotice: 'Notice'
    User_ChatRoomInvitation_UserToUser: 'User'
  }
  CodeChallenge: {
    id: 'String'
    externalKey: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    dashedName: 'String'
    localeTitle: 'String'
    description: 'String'
    challengeType: 'Int'
    forumTopicId: 'Int'
    translations: 'Json'
    tests: 'Json'
    solutions: 'Json'
    instructions: 'String'
    files: 'Json'
    videoUrl: 'String'
    order: 'Int'
    superOrder: 'Int'
    challengeOrder: 'Int'
    required: 'Json'
    isRequired: 'Boolean'
    isPrivate: 'Boolean'
    isBeta: 'Boolean'
    template: 'String'
    time: 'String'
    rank: 'Int'
    Block: 'String'
    CreatedBy: 'String'
    Topic: 'String'
    CodeChallengeBlock: 'CodeChallengeBlock'
    User: 'User'
    Resource: 'Resource'
    CodeChallengeCompletion: 'CodeChallengeCompletion'
  }
  CodeChallengeBlock: {
    id: 'String'
    externalKey: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    rank: 'Int'
    CreatedBy: 'String'
    Parent: 'String'
    User: 'User'
    CodeChallengeBlock: 'CodeChallengeBlock'
    CodeChallenge: 'CodeChallenge'
    other_CodeChallengeBlock: 'CodeChallengeBlock'
  }
  CodeChallengeCompletion: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Task: 'String'
    CreatedBy: 'String'
    CodeChallenge: 'String'
    content: 'String'
    success: 'Boolean'
    CodeChallenge_CodeChallengeToCodeChallengeCompletion: 'CodeChallenge'
    User: 'User'
    Task_CodeChallengeCompletionToTask: 'Task'
  }
  Comment: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    components: 'String'
    contentText: 'String'
    CreatedBy: 'String'
    TechnologyLesson: 'String'
    User: 'User'
    TechnologyLesson_CommentToTechnologyLesson: 'TechnologyLesson'
  }
  EthAccount: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'Json'
    address: 'String'
    type: 'EthAccountType'
    source: 'String'
    bytecode: 'String'
    abi: 'Json'
    ContractSource: 'String'
    Project: 'String'
    CreatedBy: 'String'
    EthContractSource: 'EthContractSource'
    User_EthAccount_CreatedByToUser: 'User'
    Project_EthAccountToProject: 'Project'
    EthBlock: 'EthBlock'
    EthTransaction_EthAccountToEthTransaction_Account: 'EthTransaction'
    EthTransaction_EthAccountToEthTransaction_Receiver: 'EthTransaction'
    EthTransaction_EthAccountToEthTransaction_Sender: 'EthTransaction'
    Resource: 'Resource'
    User_EthAccountToUser_EthAccountAuthed: 'User'
  }
  EthBlock: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    hash: 'String'
    number: 'Int'
    difficulty: 'Decimal'
    totalDifficulty: 'Decimal'
    extraData: 'String'
    gasLimit: 'Decimal'
    gasUsed: 'Decimal'
    mixHash: 'String'
    nonce: 'String'
    parentHash: 'String'
    receiptsRoot: 'String'
    sha3Uncles: 'String'
    size: 'Int'
    stateRoot: 'String'
    date: 'DateTime'
    transactionsRoot: 'String'
    transactions_count: 'Int'
    Miner: 'String'
    EthAccount: 'EthAccount'
    EthTransaction: 'EthTransaction'
    EthBlock_B: 'EthBlock'
    EthBlock_A: 'EthBlock'
  }
  EthContractSource: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'Json'
    source: 'String'
    CreatedBy: 'String'
    User: 'User'
    EthAccount: 'EthAccount'
  }
  EthTransaction: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    chainId: 'Int'
    amount: 'Decimal'
    input: 'String'
    index: 'Int'
    address: 'String'
    type: 'EthTransactionType'
    v: 'String'
    r: 'String'
    s: 'String'
    Sender: 'String'
    Block: 'String'
    Receiver: 'String'
    Account: 'String'
    EthAccount_EthAccountToEthTransaction_Account: 'EthAccount'
    EthBlock: 'EthBlock'
    EthAccount_EthAccountToEthTransaction_Receiver: 'EthAccount'
    EthAccount_EthAccountToEthTransaction_Sender: 'EthAccount'
  }
  Gallery: {
    id: 'String'
    name: 'String'
    CreatedBy: 'String'
    Resource: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
    Resource_GalleryToResource: 'Resource'
    File: 'File'
  }
  Game: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    start_date: 'DateTime'
    end_date: 'DateTime'
    sequence: 'Int'
    Parent: 'String'
    CreatedBy: 'String'
    Tourney: 'String'
    User_GameToUser: 'User'
    Game: 'Game'
    Tourney_GameToTourney: 'Tourney'
    other_Game: 'Game'
    GameResult: 'GameResult'
    Team: 'Team'
    User_GameUsers: 'User'
  }
  GameResult: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    date: 'DateTime'
    name: 'String'
    value: 'Decimal'
    CreatedBy: 'String'
    Team: 'String'
    Game: 'String'
    User: 'String'
    User_GameResult_CreatedByToUser: 'User'
    Game_GameToGameResult: 'Game'
    Team_GameResultToTeam: 'Team'
    User_GameResult_UserToUser: 'User'
  }
  Import: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    status: 'ImportStatus'
    CreatedBy: 'String'
    User: 'User'
    Log: 'Log'
  }
  Inventory: {
    id: 'String'
    cursor: 'Int'
    data: 'String'
    Player: 'Player'
  }
  LetsadsSmsMessageStatus: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'LetsadsSmsMessageStatusEnum'
    description: 'String'
    errorCode: 'LetsadsSmsMessageStatusErrorCodeEnum'
    LetsadsSmsMessageStatusItem: 'LetsadsSmsMessageStatusItem'
    SmsMessage: 'SmsMessage'
  }
  LetsadsSmsMessageStatusItem: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    sms_id: 'Int'
    Status: 'String'
    LetsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
  }
  LogedIn: {
    id: 'String'
    createdAt: 'DateTime'
    fake: 'Boolean'
    updatedAt: 'DateTime'
    User: 'String'
    User_LogedInToUser: 'User'
  }
  Message: {
    id: 'String'
    type: 'MessageType'
    sender: 'String'
    body: 'String'
    world: 'String'
    World: 'World'
  }
  Notice: {
    id: 'String'
    createdAt: 'DateTime'
    type: 'NoticeType'
    updatedAt: 'DateTime'
    ChatMessage: 'String'
    User: 'String'
    CreatedBy: 'String'
    ChatMessage_ChatMessageToNotice: 'ChatMessage'
    User_Notice_CreatedByToUser: 'User'
    User_Notice_UserToUser: 'User'
    ChatRoomInvitation: 'ChatRoomInvitation'
  }
  NotificationType: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    code: 'String'
    comment: 'String'
    oldID: 'Int'
    CreatedBy: 'String'
    User_NotificationTypeToUser: 'User'
    User_UserNotificationTypes: 'User'
  }
  Player: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    isAdmin: 'Boolean'
    gamemode: 'Gamemode'
    lastLogin: 'DateTime'
    x: 'Decimal'
    y: 'Decimal'
    z: 'Decimal'
    dirx: 'Decimal'
    diry: 'Decimal'
    world: 'String'
    inventory: 'String'
    user: 'String'
    Inventory: 'Inventory'
    User: 'User'
    World: 'World'
  }
  Position: {
    id: 'String'
    code: 'String'
    name: 'String'
    CreatedBy: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User_PositionToUser: 'User'
    User_PositionUsers: 'User'
  }
  Project: {
    id: 'String'
    name: 'String'
    domain: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    description: 'String'
    url: 'String'
    sequence: 'Int'
    content: 'Json'
    contentText: 'String'
    status: 'ProjectStatus'
    public: 'Boolean'
    oldID: 'Int'
    CreatedBy: 'String'
    Image: 'String'
    ChatRoom: 'String'
    Team: 'String'
    Resource: 'String'
    type: 'ProjectType'
    ChatRoom_ChatRoomToProject: 'ChatRoom'
    User_ProjectToUser: 'User'
    File: 'File'
    Resource_Project_ResourceToResource: 'Resource'
    Team_ProjectToTeam: 'Team'
    EthAccount: 'EthAccount'
    ProjectMember: 'ProjectMember'
    ProjectTask: 'ProjectTask'
    Resource_ProjectToResource_PrismaProject: 'Resource'
    Template_ProjectToTemplate_PrismaProject: 'Template'
    Template_ProjectToTemplate_Project: 'Template'
    User_PrismaProjectUsers: 'User'
    Team_ProjectCustomers: 'Team'
  }
  ProjectMember: {
    id: 'String'
    status: 'ProjectMemberStatus'
    User: 'String'
    CreatedBy: 'String'
    Project: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User_ProjectMember_CreatedByToUser: 'User'
    Project_ProjectToProjectMember: 'Project'
    User_ProjectMember_UserToUser: 'User'
    Service: 'Service'
  }
  ProjectTask: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Project: 'String'
    Task: 'String'
    CreatedBy: 'String'
    User: 'User'
    Project_ProjectToProjectTask: 'Project'
    Task_ProjectTaskToTask: 'Task'
  }
  ResetPassword: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    code: 'String'
    password: 'String'
    validTill: 'DateTime'
    User: 'String'
    User_ResetPasswordToUser: 'User'
  }
  Resource: {
    id: 'String'
    code: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    type: 'ResourceType'
    name: 'String'
    longtitle: 'String'
    content: 'Json'
    contentText: 'String'
    published: 'Boolean'
    deleted: 'Boolean'
    hidemenu: 'Boolean'
    searchable: 'Boolean'
    uri: 'String'
    isfolder: 'Boolean'
    rating: 'Decimal'
    positiveVotesCount: 'Int'
    negativeVotesCount: 'Int'
    neutralVotesCount: 'Int'
    oldID: 'Int'
    commentOldID: 'Int'
    class_key: 'String'
    template: 'Int'
    mockUpdate: 'DateTime'
    components: 'Json'
    Parent: 'String'
    Team: 'String'
    Service: 'String'
    EthAccount: 'String'
    PrismaProject: 'String'
    CreatedBy: 'String'
    Topic: 'String'
    Blog: 'String'
    Task: 'String'
    Resource_ResourceToResource_Blog: 'Resource'
    User: 'User'
    EthAccount_EthAccountToResource: 'EthAccount'
    Resource_ResourceToResource_Parent: 'Resource'
    Project_ProjectToResource_PrismaProject: 'Project'
    Service_ResourceToService: 'Service'
    Task_ResourceToTask: 'Task'
    Team_ResourceToTeam: 'Team'
    Resource_ResourceToResource_Topic: 'Resource'
    CodeChallenge: 'CodeChallenge'
    File: 'File'
    Gallery: 'Gallery'
    Project_Project_ResourceToResource: 'Project'
    other_Resource_ResourceToResource_Blog: 'Resource'
    other_Resource_ResourceToResource_Parent: 'Resource'
    other_Resource_ResourceToResource_Topic: 'Resource'
    ResourceTag: 'ResourceTag'
    Vote: 'Vote'
  }
  ResourceTag: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    status: 'String'
    CreatedBy: 'String'
    Resource: 'String'
    Tag: 'String'
    User: 'User'
    Resource_ResourceToResourceTag: 'Resource'
    Tag_ResourceTagToTag: 'Tag'
  }
  Route: {
    id: 'String'
    name: 'String'
    path: 'String'
    exact: 'Boolean'
    component: 'String'
    CreatedBy: 'String'
    Parent: 'String'
    User: 'User'
    Route: 'Route'
    other_Route: 'Route'
  }
  Service: {
    id: 'String'
    name: 'String'
    description: 'String'
    code: 'String'
    rank: 'Int'
    oldID: 'Int'
    Category: 'String'
    Parent: 'String'
    CreatedBy: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    ServiceCategory: 'ServiceCategory'
    User: 'User'
    Service: 'Service'
    Resource: 'Resource'
    other_Service: 'Service'
    ProjectMember: 'ProjectMember'
  }
  ServiceCategory: {
    id: 'String'
    name: 'String'
    description: 'String'
    code: 'String'
    Parent: 'String'
    CreatedBy: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
    ServiceCategory: 'ServiceCategory'
    Service: 'Service'
    other_ServiceCategory: 'ServiceCategory'
  }
  Settings: {
    id: 'String'
    renderDistance: 'Int'
    User: 'String'
    User_SettingsToUser: 'User'
  }
  SmsMessage: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    from: 'String'
    text: 'String'
    deletOnSend: 'Boolean'
    Status: 'String'
    CreatedBy: 'String'
    Provider: 'String'
    User: 'User'
    SmsProvider: 'SmsProvider'
    LetsadsSmsMessageStatus: 'LetsadsSmsMessageStatus'
    SmsMessage_recipients: 'SmsMessage_recipients'
  }
  SmsMessage_recipients: {
    nodeId: 'String'
    position: 'Int'
    value: 'String'
    SmsMessage: 'SmsMessage'
  }
  SmsProvider: {
    id: 'String'
    name: 'String'
    credentials: 'Json'
    CreatedBy: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
    SmsMessage: 'SmsMessage'
  }
  Tag: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    status: 'TagStatus'
    CreatedBy: 'String'
    User: 'User'
    ResourceTag: 'ResourceTag'
  }
  Task: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'String'
    content: 'Json'
    status: 'TaskStatus'
    startDatePlaning: 'DateTime'
    endDatePlaning: 'DateTime'
    startDate: 'DateTime'
    endDate: 'DateTime'
    CreatedBy: 'String'
    Parent: 'String'
    ChatRoom: 'String'
    needHelp: 'Boolean'
    ChatRoom_ChatRoomToTask: 'ChatRoom'
    User: 'User'
    Task: 'Task'
    CodeChallengeCompletion: 'CodeChallengeCompletion'
    ProjectTask: 'ProjectTask'
    Resource: 'Resource'
    other_Task: 'Task'
    TaskMember: 'TaskMember'
    TaskReaction: 'TaskReaction'
    TaskTechnology: 'TaskTechnology'
    Timer: 'Timer'
    Task_B: 'Task'
    Task_A: 'Task'
  }
  TaskMember: {
    id: 'String'
    status: 'TaskMemberStatus'
    Task: 'String'
    User: 'String'
    CreatedBy: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User_TaskMember_CreatedByToUser: 'User'
    Task_TaskToTaskMember: 'Task'
    User_TaskMember_UserToUser: 'User'
  }
  TaskReaction: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    type: 'TaskReactionType'
    Task: 'String'
    CreatedBy: 'String'
    User: 'User'
    Task_TaskToTaskReaction: 'Task'
  }
  TaskTechnology: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    level: 'Int'
    Technology: 'String'
    Task: 'String'
    CreatedBy: 'String'
    User: 'User'
    Task_TaskToTaskTechnology: 'Task'
    Technology_TaskTechnologyToTechnology: 'Technology'
  }
  Team: {
    id: 'String'
    name: 'String'
    status: 'TeamStatus'
    oldID: 'Int'
    address: 'String'
    website: 'String'
    email: 'String'
    phone: 'String'
    CreatedBy: 'String'
    Parent: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
    Team: 'Team'
    GameResult: 'GameResult'
    Project_ProjectToTeam: 'Project'
    Resource: 'Resource'
    other_Team: 'Team'
    TeamMember: 'TeamMember'
    Game: 'Game'
    Project_ProjectCustomers: 'Project'
  }
  TeamMember: {
    id: 'String'
    status: 'TeamMemberStatus'
    User: 'String'
    Team: 'String'
    CreatedBy: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User_TeamMember_CreatedByToUser: 'User'
    Team_TeamToTeamMember: 'Team'
    User_TeamMember_UserToUser: 'User'
  }
  Technology: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    components: 'Json'
    contentText: 'String'
    site_url: 'String'
    CreatedBy: 'String'
    User: 'User'
    TaskTechnology: 'TaskTechnology'
    TechnologyLesson: 'TechnologyLesson'
    UserTechnology: 'UserTechnology'
  }
  TechnologyLesson: {
    id: 'String'
    name: 'String'
    components: 'Json'
    contentText: 'String'
    Technology: 'String'
    CreatedBy: 'String'
    User: 'User'
    Technology_TechnologyToTechnologyLesson: 'Technology'
    Comment: 'Comment'
    TechnologyLessonUser: 'TechnologyLessonUser'
  }
  TechnologyLessonUser: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    status: 'TechnologyLessonUserStatus'
    completedAt: 'DateTime'
    Lesson: 'String'
    CreatedBy: 'String'
    User: 'User'
    TechnologyLesson: 'TechnologyLesson'
  }
  Template: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    externalKey: 'String'
    name: 'String'
    description: 'String'
    component: 'String'
    props: 'Json'
    components: 'Json'
    vars: 'Json'
    rank: 'Int'
    PrismaProject: 'String'
    Project: 'String'
    Parent: 'String'
    CreatedBy: 'String'
    User: 'User'
    Template: 'Template'
    Project_ProjectToTemplate_PrismaProject: 'Project'
    Project_ProjectToTemplate_Project: 'Project'
    other_Template: 'Template'
  }
  Test: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    text: 'String'
    quantity: 'Decimal'
    date: 'DateTime'
    CreatedBy: 'String'
    User: 'User'
  }
  Timer: {
    id: 'String'
    createdAt: 'DateTime'
    stopedAt: 'DateTime'
    updatedAt: 'DateTime'
    Task: 'String'
    CreatedBy: 'String'
    User: 'User'
    Task_TaskToTimer: 'Task'
  }
  Tournament: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    code: 'String'
    CreatedBy: 'String'
    Group: 'String'
    User: 'User'
    TournamentGroup: 'TournamentGroup'
    Tourney: 'Tourney'
  }
  TournamentGroup: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    code: 'String'
    CreatedBy: 'String'
    User: 'User'
    Tournament: 'Tournament'
  }
  Tourney: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    code: 'String'
    date: 'DateTime'
    date_till: 'DateTime'
    Tournament: 'String'
    CreatedBy: 'String'
    User: 'User'
    Tournament_TournamentToTourney: 'Tournament'
    Game: 'Game'
    TourneyPlayer: 'TourneyPlayer'
  }
  TourneyPlayer: {
    id: 'String'
    User: 'String'
    Tourney: 'String'
    Tourney_TourneyToTourneyPlayer: 'Tourney'
    User_TourneyPlayerToUser: 'User'
  }
  UserGroup: {
    id: 'String'
    name: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
  }
  UserTechnology: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    components: 'Json'
    date_from: 'DateTime'
    date_till: 'DateTime'
    status: 'UserTechnologyStatus'
    CreatedBy: 'String'
    Technology: 'String'
    level: 'Int'
    User: 'User'
    Technology_TechnologyToUserTechnology: 'Technology'
  }
  Vote: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    value: 'Decimal'
    Resource: 'String'
    User: 'String'
    Resource_ResourceToVote: 'Resource'
    User_UserToVote: 'User'
  }
  World: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    seed: 'String'
    type: 'WorldType'
    time: 'Decimal'
    timeChanger: 'Decimal'
    days: 'Int'
    lastPlayed: 'DateTime'
    CreatedBy: 'String'
    User: 'User'
    Block: 'Block'
    Message: 'Message'
    Player: 'Player'
  }
  Letter: {
    id: 'String'
    email: 'String'
    subject: 'String'
    message: 'String'
    status: 'LetterStatus'
    errorMessage: 'String'
    rank: 'Int'
    deleteOnSend: 'Boolean'
    replyTo: 'String'
    returnTo: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'String'
    User_LetterToUser: 'User'
  }
  Log: {
    id: 'String'
    level: 'LogLevel'
    objectType: 'String'
    message: 'String'
    stack: 'String'
    Import: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Import_ImportToLog: 'Import'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  File: Typegen.NexusPrismaFields<'File'>
  Block: Typegen.NexusPrismaFields<'Block'>
  CallRequest: Typegen.NexusPrismaFields<'CallRequest'>
  Career: Typegen.NexusPrismaFields<'Career'>
  ChatMessage: Typegen.NexusPrismaFields<'ChatMessage'>
  ChatMessageReaded: Typegen.NexusPrismaFields<'ChatMessageReaded'>
  ChatRoom: Typegen.NexusPrismaFields<'ChatRoom'>
  ChatRoomInvitation: Typegen.NexusPrismaFields<'ChatRoomInvitation'>
  CodeChallenge: Typegen.NexusPrismaFields<'CodeChallenge'>
  CodeChallengeBlock: Typegen.NexusPrismaFields<'CodeChallengeBlock'>
  CodeChallengeCompletion: Typegen.NexusPrismaFields<'CodeChallengeCompletion'>
  Comment: Typegen.NexusPrismaFields<'Comment'>
  EthAccount: Typegen.NexusPrismaFields<'EthAccount'>
  EthBlock: Typegen.NexusPrismaFields<'EthBlock'>
  EthContractSource: Typegen.NexusPrismaFields<'EthContractSource'>
  EthTransaction: Typegen.NexusPrismaFields<'EthTransaction'>
  Gallery: Typegen.NexusPrismaFields<'Gallery'>
  Game: Typegen.NexusPrismaFields<'Game'>
  GameResult: Typegen.NexusPrismaFields<'GameResult'>
  Import: Typegen.NexusPrismaFields<'Import'>
  Inventory: Typegen.NexusPrismaFields<'Inventory'>
  LetsadsSmsMessageStatus: Typegen.NexusPrismaFields<'LetsadsSmsMessageStatus'>
  LetsadsSmsMessageStatusItem: Typegen.NexusPrismaFields<'LetsadsSmsMessageStatusItem'>
  LogedIn: Typegen.NexusPrismaFields<'LogedIn'>
  Message: Typegen.NexusPrismaFields<'Message'>
  Notice: Typegen.NexusPrismaFields<'Notice'>
  NotificationType: Typegen.NexusPrismaFields<'NotificationType'>
  Player: Typegen.NexusPrismaFields<'Player'>
  Position: Typegen.NexusPrismaFields<'Position'>
  Project: Typegen.NexusPrismaFields<'Project'>
  ProjectMember: Typegen.NexusPrismaFields<'ProjectMember'>
  ProjectTask: Typegen.NexusPrismaFields<'ProjectTask'>
  ResetPassword: Typegen.NexusPrismaFields<'ResetPassword'>
  Resource: Typegen.NexusPrismaFields<'Resource'>
  ResourceTag: Typegen.NexusPrismaFields<'ResourceTag'>
  Route: Typegen.NexusPrismaFields<'Route'>
  Service: Typegen.NexusPrismaFields<'Service'>
  ServiceCategory: Typegen.NexusPrismaFields<'ServiceCategory'>
  Settings: Typegen.NexusPrismaFields<'Settings'>
  SmsMessage: Typegen.NexusPrismaFields<'SmsMessage'>
  SmsMessage_recipients: Typegen.NexusPrismaFields<'SmsMessage_recipients'>
  SmsProvider: Typegen.NexusPrismaFields<'SmsProvider'>
  Tag: Typegen.NexusPrismaFields<'Tag'>
  Task: Typegen.NexusPrismaFields<'Task'>
  TaskMember: Typegen.NexusPrismaFields<'TaskMember'>
  TaskReaction: Typegen.NexusPrismaFields<'TaskReaction'>
  TaskTechnology: Typegen.NexusPrismaFields<'TaskTechnology'>
  Team: Typegen.NexusPrismaFields<'Team'>
  TeamMember: Typegen.NexusPrismaFields<'TeamMember'>
  Technology: Typegen.NexusPrismaFields<'Technology'>
  TechnologyLesson: Typegen.NexusPrismaFields<'TechnologyLesson'>
  TechnologyLessonUser: Typegen.NexusPrismaFields<'TechnologyLessonUser'>
  Template: Typegen.NexusPrismaFields<'Template'>
  Test: Typegen.NexusPrismaFields<'Test'>
  Timer: Typegen.NexusPrismaFields<'Timer'>
  Tournament: Typegen.NexusPrismaFields<'Tournament'>
  TournamentGroup: Typegen.NexusPrismaFields<'TournamentGroup'>
  Tourney: Typegen.NexusPrismaFields<'Tourney'>
  TourneyPlayer: Typegen.NexusPrismaFields<'TourneyPlayer'>
  UserGroup: Typegen.NexusPrismaFields<'UserGroup'>
  UserTechnology: Typegen.NexusPrismaFields<'UserTechnology'>
  Vote: Typegen.NexusPrismaFields<'Vote'>
  World: Typegen.NexusPrismaFields<'World'>
  Letter: Typegen.NexusPrismaFields<'Letter'>
  Log: Typegen.NexusPrismaFields<'Log'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  