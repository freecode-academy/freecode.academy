import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime' | 'Json' | 'Decimal'

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
  LearnStrategy: Prisma.LearnStrategy
  LearnStrategyStage: Prisma.LearnStrategyStage
  UserLearnStrategy: Prisma.UserLearnStrategy
  MentorMentee: Prisma.MentorMentee
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Projects'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'User' | 'ChatRoom' | 'ChatMessagesReaded' | 'Notices'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room'
    }
    chatMessageReadeds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User' | 'ChatMessage' | 'User_ChatMessageReadedToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User'
    }
    chatRooms: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox' | 'User_ChatRoomToUser' | 'CallRequests' | 'ChatMessages' | 'ChatRoomInvitations' | 'Projects' | 'Tasks' | 'User_ChatRoomsMembers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox'
    }
    chatRoomInvitations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    codeChallenges: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletions'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt' | 'User' | 'Resource_GalleryToResource' | 'Files'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitations'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    projectMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Services'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    resourceTags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
    routes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent' | 'User' | 'Route' | 'other_Routes'
      ordering: 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent'
    }
    services: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resources' | 'other_Services' | 'ProjectMembers'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    serviceCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'ServiceCategory' | 'Services' | 'other_ServiceCategories'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'SmsMessages'
      ordering: 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    tags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'ResourceTags'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    tasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletions' | 'ProjectTasks' | 'Resources' | 'other_Tasks' | 'TaskMembers' | 'TaskReactions' | 'TaskTechnologies' | 'Timers' | 'Tasks_B' | 'Tasks_A'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'Team' | 'GameResults' | 'Projects_ProjectToTeam' | 'Resources' | 'other_Teams' | 'TeamMembers' | 'Games' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy'
    }
    teamMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    technologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'components' | 'contentText' | 'site_url' | 'level1hours' | 'level2hours' | 'level3hours' | 'level4hours' | 'level5hours' | 'CreatedBy' | 'User' | 'TaskTechnologies' | 'TechnologyLessons' | 'UserTechnologies' | 'LearnStrategyStages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'components' | 'contentText' | 'site_url' | 'level1hours' | 'level2hours' | 'level3hours' | 'level4hours' | 'level5hours' | 'CreatedBy'
    }
    technologyLessons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'components' | 'contentText' | 'CreatedBy' | 'User' | 'Technology' | 'Technology_TechnologyToTechnologyLesson' | 'Comments' | 'TechnologyLessonUsers'
      ordering: 'id' | 'name' | 'components' | 'contentText' | 'CreatedBy' | 'Technology'
    }
    technologyLessonUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'CreatedBy' | 'User' | 'Lesson' | 'TechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'CreatedBy' | 'Lesson'
    }
    templates: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Templates'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    timers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTimer'
      ordering: 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy'
    }
    tournaments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Group' | 'TournamentGroup' | 'Tourneys'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group'
    }
    tournamentGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Tournaments'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy'
    }
    tourneys: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'User' | 'Tournament' | 'Tournament_TournamentToTourney' | 'Games' | 'TourneyPlayers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'Tournament'
    }
    tourneyPlayers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'User' | 'Tourney' | 'Tourney_TourneyToTourneyPlayer' | 'User_TourneyPlayerToUser'
      ordering: 'id' | 'User' | 'Tourney'
    }
    userGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'createdAt' | 'updatedAt' | 'Users'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt'
    }
    userTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'isMentor' | 'CreatedBy' | 'User' | 'Technology' | 'Technology_TechnologyToUserTechnology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'isMentor' | 'CreatedBy' | 'Technology' | 'level'
    }
    votes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User' | 'User_UserToVote' | 'Resource_ResourceToVote'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User'
    }
    worlds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy' | 'User' | 'Blocks' | 'Messages' | 'Players'
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
    learnStrategies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'level' | 'createdById' | 'CreatedBy' | 'LearnStrategyStages' | 'LearnStrategyStagesTargets' | 'UserLearnStrategies'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'level' | 'createdById'
    }
    learnStrategyStages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'LearnStrategy' | 'learnStrategyTargetId' | 'LearnStrategyTarget' | 'technologyId' | 'Technology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'learnStrategyTargetId' | 'technologyId' | 'level'
    }
    userLearnStrategies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'CreatedBy' | 'learnStrategyId' | 'LearnStrategy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'learnStrategyId'
    }
    mentorMentees: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'Mentor' | 'menteeId' | 'Mentee'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'menteeId'
    }
  },
  User: {
    CallRequests_CallRequest_CalledToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    CallRequests_CallRequest_CallerToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    Careers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | 'CreatedBy' | 'User'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | 'CreatedBy'
    }
    ChatMessages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'User' | 'ChatRoom' | 'ChatMessagesReaded' | 'Notices'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room'
    }
    ChatMessagesReaded: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User' | 'ChatMessage' | 'User_ChatMessageReadedToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User'
    }
    ChatRooms_ChatRoomToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox' | 'User_ChatRoomToUser' | 'CallRequests' | 'ChatMessages' | 'ChatRoomInvitations' | 'Projects' | 'Tasks' | 'User_ChatRoomsMembers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox'
    }
    ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    ChatRoomInvitations_ChatRoomInvitation_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    CodeChallenges: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletions'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic'
    }
    CodeChallengeBlocks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent' | 'User' | 'CodeChallengeBlock' | 'CodeChallenge' | 'other_CodeChallengeBlock'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'CreatedBy' | 'Parent'
    }
    CodeChallengeCompletions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
    Comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson' | 'User' | 'TechnologyLesson_CommentToTechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson'
    }
    EthAccounts_EthAccount_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy' | 'EthContractSource' | 'User_EthAccount_CreatedByToUser' | 'Project_EthAccountToProject' | 'EthBlock' | 'EthTransaction_EthAccountToEthTransaction_Account' | 'EthTransaction_EthAccountToEthTransaction_Receiver' | 'EthTransaction_EthAccountToEthTransaction_Sender' | 'Resource' | 'User_EthAccountToUser_EthAccountAuthed'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy'
    }
    EthContractSources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy' | 'User' | 'EthAccount'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy'
    }
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Projects'
      ordering: 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt'
    }
    Galleries: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt' | 'User' | 'Resource_GalleryToResource' | 'Files'
      ordering: 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt'
    }
    Games_GameToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    GameResults_GameResult_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    GameResults_GameResult_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    Imports: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'Log'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    Letters: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdAt' | 'updatedAt' | 'User' | 'User_LetterToUser'
      ordering: 'id' | 'email' | 'subject' | 'message' | 'status' | 'errorMessage' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'createdAt' | 'updatedAt' | 'User'
    }
    LogedIns: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'fake' | 'updatedAt' | 'User' | 'User_LogedInToUser'
      ordering: 'id' | 'createdAt' | 'fake' | 'updatedAt' | 'User'
    }
    Notices_Notice_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitations'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
    Notices_Notice_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitations'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
    NotificationTypes_NotificationTypeToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy' | 'User_NotificationTypeToUser' | 'User_UserNotificationTypes'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy'
    }
    Players: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user' | 'Inventory' | 'User' | 'World'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user'
    }
    Positions_PositionToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_PositionToUser' | 'User_PositionUsers'
      ordering: 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Projects_ProjectToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    ProjectMembers_ProjectMember_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Services'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    ProjectMembers_ProjectMember_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Services'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    ProjectTasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    ResetPasswords: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | 'User_ResetPasswordToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User'
    }
    Resources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    ResourceTags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
    Routes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent' | 'User' | 'Route' | 'other_Routes'
      ordering: 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent'
    }
    Services: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resources' | 'other_Services' | 'ProjectMembers'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    ServiceCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'ServiceCategory' | 'Services' | 'other_ServiceCategories'
      ordering: 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Settings: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'renderDistance' | 'User' | 'User_SettingsToUser'
      ordering: 'id' | 'renderDistance' | 'User'
    }
    SmsMessages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider' | 'User' | 'SmsProvider' | 'LetsadsSmsMessageStatus' | 'SmsMessage_recipients'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider'
    }
    SmsProviders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'SmsMessages'
      ordering: 'id' | 'name' | 'credentials' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Tags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy' | 'User' | 'ResourceTags'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'CreatedBy'
    }
    Tasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletions' | 'ProjectTasks' | 'Resources' | 'other_Tasks' | 'TaskMembers' | 'TaskReactions' | 'TaskTechnologies' | 'Timers' | 'Tasks_B' | 'Tasks_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    TaskMembers_TaskMember_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TaskMembers_TaskMember_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TaskReactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskReaction'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy'
    }
    TaskTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    Teams: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'Team' | 'GameResults' | 'Projects_ProjectToTeam' | 'Resources' | 'other_Teams' | 'TeamMembers' | 'Games' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy'
    }
    TeamMembers_TeamMember_CreatedByToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TeamMembers_TeamMember_UserToUser: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Technologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'components' | 'contentText' | 'site_url' | 'level1hours' | 'level2hours' | 'level3hours' | 'level4hours' | 'level5hours' | 'CreatedBy' | 'User' | 'TaskTechnologies' | 'TechnologyLessons' | 'UserTechnologies' | 'LearnStrategyStages'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'components' | 'contentText' | 'site_url' | 'level1hours' | 'level2hours' | 'level3hours' | 'level4hours' | 'level5hours' | 'CreatedBy'
    }
    TechnologyLessons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'components' | 'contentText' | 'CreatedBy' | 'User' | 'Technology' | 'Technology_TechnologyToTechnologyLesson' | 'Comments' | 'TechnologyLessonUsers'
      ordering: 'id' | 'name' | 'components' | 'contentText' | 'CreatedBy' | 'Technology'
    }
    TechnologyLessonUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'CreatedBy' | 'User' | 'Lesson' | 'TechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'CreatedBy' | 'Lesson'
    }
    Templates: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Templates'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    Timers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTimer'
      ordering: 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy'
    }
    Tournaments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Group' | 'TournamentGroup' | 'Tourneys'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group'
    }
    TournamentGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Tournaments'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy'
    }
    Tourneys: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'User' | 'Tournament' | 'Tournament_TournamentToTourney' | 'Games' | 'TourneyPlayers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'Tournament'
    }
    TourneyPlayers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'User' | 'Tourney' | 'Tourney_TourneyToTourneyPlayer' | 'User_TourneyPlayerToUser'
      ordering: 'id' | 'User' | 'Tourney'
    }
    other_Users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
    UserTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'isMentor' | 'CreatedBy' | 'User' | 'Technology' | 'Technology_TechnologyToUserTechnology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'isMentor' | 'CreatedBy' | 'Technology' | 'level'
    }
    Votes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User' | 'User_UserToVote' | 'Resource_ResourceToVote'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User'
    }
    Worlds: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy' | 'User' | 'Blocks' | 'Messages' | 'Players'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'CreatedBy'
    }
    ChatRooms_ChatRoomsMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox' | 'User_ChatRoomToUser' | 'CallRequests' | 'ChatMessages' | 'ChatRoomInvitations' | 'Projects' | 'Tasks' | 'User_ChatRoomsMembers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'CreatedBy' | 'allowAnonymous' | 'sandbox'
    }
    Games_GameUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    Positions_PositionUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_PositionToUser' | 'User_PositionUsers'
      ordering: 'id' | 'code' | 'name' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Projects_PrismaProjectUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    UserGroups: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'createdAt' | 'updatedAt' | 'Users'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt'
    }
    NotificationTypes_UserNotificationTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy' | 'User_NotificationTypeToUser' | 'User_UserNotificationTypes'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | 'CreatedBy'
    }
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    LearnStrategies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'level' | 'createdById' | 'CreatedBy' | 'LearnStrategyStages' | 'LearnStrategyStagesTargets' | 'UserLearnStrategies'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'level' | 'createdById'
    }
    UserLearnStrategies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'CreatedBy' | 'learnStrategyId' | 'LearnStrategy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'learnStrategyId'
    }
    MentorMenteeMentors: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'Mentor' | 'menteeId' | 'Mentee'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'menteeId'
    }
    MentorMenteeMentees: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'Mentor' | 'menteeId' | 'Mentee'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'menteeId'
    }
  }
  Token: {

  }
  File: {
    Projects: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
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
    ChatMessagesReaded: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User' | 'ChatMessage' | 'User_ChatMessageReadedToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Message' | 'User'
    }
    Notices: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy' | 'ChatMessage_ChatMessageToNotice' | 'User_Notice_CreatedByToUser' | 'User_Notice_UserToUser' | 'ChatRoomInvitations'
      ordering: 'id' | 'createdAt' | 'type' | 'updatedAt' | 'ChatMessage' | 'User' | 'CreatedBy'
    }
  }
  ChatMessageReaded: {

  }
  ChatRoom: {
    CallRequests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt' | 'User_CallRequest_CalledToUser' | 'User_CallRequest_CallerToUser' | 'ChatRoom'
      ordering: 'id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Room' | 'Called' | 'Caller' | 'createdAt' | 'updatedAt'
    }
    ChatMessages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'User' | 'ChatRoom' | 'ChatMessagesReaded' | 'Notices'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room'
    }
    ChatRoomInvitations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
    Projects: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    Tasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletions' | 'ProjectTasks' | 'Resources' | 'other_Tasks' | 'TaskMembers' | 'TaskReactions' | 'TaskTechnologies' | 'Timers' | 'Tasks_B' | 'Tasks_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    User_ChatRoomsMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
  }
  ChatRoomInvitation: {

  }
  CodeChallenge: {
    CodeChallengeCompletions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
  }
  CodeChallengeBlock: {
    CodeChallenge: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletions'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    User_EthAccountToUser_EthAccountAuthed: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
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
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Projects'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'Team' | 'GameResults' | 'Projects_ProjectToTeam' | 'Resources' | 'other_Teams' | 'TeamMembers' | 'Games' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy'
    }
    User_GameUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
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
    ChatRoomInvitations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice' | 'ChatRoom_ChatRoomToChatRoomInvitation' | 'User_ChatRoomInvitation_CreatedByToUser' | 'Notice_ChatRoomInvitationToNotice' | 'User_ChatRoomInvitation_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | 'Notice'
    }
  }
  NotificationType: {
    User_UserNotificationTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
  }
  Player: {

  }
  Position: {
    User_PositionUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
  }
  Project: {
    EthAccounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy' | 'EthContractSource' | 'User_EthAccount_CreatedByToUser' | 'Project_EthAccountToProject' | 'EthBlock' | 'EthTransaction_EthAccountToEthTransaction_Account' | 'EthTransaction_EthAccountToEthTransaction_Receiver' | 'EthTransaction_EthAccountToEthTransaction_Sender' | 'Resource' | 'User_EthAccountToUser_EthAccountAuthed'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'Project' | 'CreatedBy'
    }
    ProjectMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Services'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
    ProjectTasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    Resources_ProjectToResource_PrismaProject: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    Templates_ProjectToTemplate_PrismaProject: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Templates'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    Templates_ProjectToTemplate_Project: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Templates'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
    User_PrismaProjectUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
    Team_ProjectCustomers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'Team' | 'GameResults' | 'Projects_ProjectToTeam' | 'Resources' | 'other_Teams' | 'TeamMembers' | 'Games' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy'
    }
  }
  ProjectMember: {
    Services: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resources' | 'other_Services' | 'ProjectMembers'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
  }
  ProjectTask: {

  }
  ResetPassword: {

  }
  Resource: {
    CodeChallenges: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic' | 'CodeChallengeBlock' | 'User' | 'Resource' | 'CodeChallengeCompletions'
      ordering: 'id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | 'Block' | 'CreatedBy' | 'Topic'
    }
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt' | 'User' | 'Gallery_FileToGallery' | 'Resource' | 'Projects'
      ordering: 'id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'ImageResource' | 'CreatedBy' | 'rank' | 'Gallery' | 'createdAt' | 'updatedAt'
    }
    Galleries: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt' | 'User' | 'Resource_GalleryToResource' | 'Files'
      ordering: 'id' | 'name' | 'CreatedBy' | 'Resource' | 'createdAt' | 'updatedAt'
    }
    Projects_Project_ResourceToResource: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    other_Resource_ResourceToResource_Blogs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Resource_ResourceToResource_Parents: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Resource_ResourceToResource_Topics: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    ResourceTags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
    Votes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User' | 'User_UserToVote' | 'Resource_ResourceToVote'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'value' | 'Resource' | 'User'
    }
  }
  ResourceTag: {

  }
  Route: {
    other_Routes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent' | 'User' | 'Route' | 'other_Routes'
      ordering: 'id' | 'name' | 'path' | 'exact' | 'component' | 'CreatedBy' | 'Parent'
    }
  }
  Service: {
    Resources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Services: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resources' | 'other_Services' | 'ProjectMembers'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    ProjectMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt' | 'User_ProjectMember_CreatedByToUser' | 'Project_ProjectToProjectMember' | 'User_ProjectMember_UserToUser' | 'Services'
      ordering: 'id' | 'status' | 'User' | 'CreatedBy' | 'Project' | 'createdAt' | 'updatedAt'
    }
  }
  ServiceCategory: {
    Services: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'ServiceCategory' | 'User' | 'Service' | 'Resources' | 'other_Services' | 'ProjectMembers'
      ordering: 'id' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | 'Category' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    other_ServiceCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'code' | 'Parent' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User' | 'ServiceCategory' | 'Services' | 'other_ServiceCategories'
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
    SmsMessages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider' | 'User' | 'SmsProvider' | 'LetsadsSmsMessageStatus' | 'SmsMessage_recipients'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'deletOnSend' | 'Status' | 'CreatedBy' | 'Provider'
    }
  }
  Tag: {
    ResourceTags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | 'User' | 'Resource_ResourceToResourceTag' | 'Tag_ResourceTagToTag'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag'
    }
  }
  Task: {
    CodeChallengeCompletions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success' | 'CodeChallenge_CodeChallengeToCodeChallengeCompletion' | 'User' | 'Task_CodeChallengeCompletionToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'CodeChallenge' | 'content' | 'success'
    }
    ProjectTasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy' | 'User' | 'Project_ProjectToProjectTask' | 'Task_ProjectTaskToTask'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'Project' | 'Task' | 'CreatedBy'
    }
    Resources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Tasks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletions' | 'ProjectTasks' | 'Resources' | 'other_Tasks' | 'TaskMembers' | 'TaskReactions' | 'TaskTechnologies' | 'Timers' | 'Tasks_B' | 'Tasks_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    TaskMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TaskMember_CreatedByToUser' | 'Task_TaskToTaskMember' | 'User_TaskMember_UserToUser'
      ordering: 'id' | 'status' | 'Task' | 'User' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    TaskReactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskReaction'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'type' | 'Task' | 'CreatedBy'
    }
    TaskTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    Timers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTimer'
      ordering: 'id' | 'createdAt' | 'stopedAt' | 'updatedAt' | 'Task' | 'CreatedBy'
    }
    Tasks_B: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletions' | 'ProjectTasks' | 'Resources' | 'other_Tasks' | 'TaskMembers' | 'TaskReactions' | 'TaskTechnologies' | 'Timers' | 'Tasks_B' | 'Tasks_A'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp'
    }
    Tasks_A: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'CreatedBy' | 'Parent' | 'ChatRoom' | 'needHelp' | 'ChatRoom_ChatRoomToTask' | 'User' | 'Task' | 'CodeChallengeCompletions' | 'ProjectTasks' | 'Resources' | 'other_Tasks' | 'TaskMembers' | 'TaskReactions' | 'TaskTechnologies' | 'Timers' | 'Tasks_B' | 'Tasks_A'
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
    GameResults: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User' | 'User_GameResult_CreatedByToUser' | 'Game_GameToGameResult' | 'Team_GameResultToTeam' | 'User_GameResult_UserToUser'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | 'CreatedBy' | 'Team' | 'Game' | 'User'
    }
    Projects_ProjectToTeam: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
    Resources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task' | 'Resource_ResourceToResource_Blog' | 'User' | 'EthAccount_EthAccountToResource' | 'Resource_ResourceToResource_Parent' | 'Project_ProjectToResource_PrismaProject' | 'Service_ResourceToService' | 'Task_ResourceToTask' | 'Team_ResourceToTeam' | 'Resource_ResourceToResource_Topic' | 'CodeChallenges' | 'Files' | 'Galleries' | 'Projects_Project_ResourceToResource' | 'other_Resource_ResourceToResource_Blogs' | 'other_Resource_ResourceToResource_Parents' | 'other_Resource_ResourceToResource_Topics' | 'ResourceTags' | 'Votes'
      ordering: 'id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'class_key' | 'template' | 'mockUpdate' | 'components' | 'Parent' | 'Team' | 'Service' | 'EthAccount' | 'PrismaProject' | 'CreatedBy' | 'Topic' | 'Blog' | 'Task'
    }
    other_Teams: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'Team' | 'GameResults' | 'Projects_ProjectToTeam' | 'Resources' | 'other_Teams' | 'TeamMembers' | 'Games' | 'Project_ProjectCustomers'
      ordering: 'id' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Parent' | 'createdAt' | 'updatedAt' | 'CreatedBy'
    }
    TeamMembers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt' | 'User_TeamMember_CreatedByToUser' | 'Team_TeamToTeamMember' | 'User_TeamMember_UserToUser'
      ordering: 'id' | 'status' | 'User' | 'Team' | 'CreatedBy' | 'createdAt' | 'updatedAt'
    }
    Games: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    Project_ProjectCustomers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type' | 'ChatRoom_ChatRoomToProject' | 'User_ProjectToUser' | 'File' | 'Resource_Project_ResourceToResource' | 'Team_ProjectToTeam' | 'EthAccounts' | 'ProjectMembers' | 'ProjectTasks' | 'Resources_ProjectToResource_PrismaProject' | 'Templates_ProjectToTemplate_PrismaProject' | 'Templates_ProjectToTemplate_Project' | 'User_PrismaProjectUsers' | 'Team_ProjectCustomers'
      ordering: 'id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Image' | 'ChatRoom' | 'Team' | 'Resource' | 'type'
    }
  }
  TeamMember: {

  }
  Technology: {
    TaskTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy' | 'User' | 'Task_TaskToTaskTechnology' | 'Technology_TaskTechnologyToTechnology'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'level' | 'Technology' | 'Task' | 'CreatedBy'
    }
    TechnologyLessons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'components' | 'contentText' | 'CreatedBy' | 'User' | 'Technology' | 'Technology_TechnologyToTechnologyLesson' | 'Comments' | 'TechnologyLessonUsers'
      ordering: 'id' | 'name' | 'components' | 'contentText' | 'CreatedBy' | 'Technology'
    }
    UserTechnologies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'isMentor' | 'CreatedBy' | 'User' | 'Technology' | 'Technology_TechnologyToUserTechnology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'isMentor' | 'CreatedBy' | 'Technology' | 'level'
    }
    LearnStrategyStages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'LearnStrategy' | 'learnStrategyTargetId' | 'LearnStrategyTarget' | 'technologyId' | 'Technology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'learnStrategyTargetId' | 'technologyId' | 'level'
    }
  }
  TechnologyLesson: {
    Comments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson' | 'User' | 'TechnologyLesson_CommentToTechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson'
    }
    TechnologyLessonUsers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'CreatedBy' | 'User' | 'Lesson' | 'TechnologyLesson'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | 'CreatedBy' | 'Lesson'
    }
  }
  TechnologyLessonUser: {

  }
  Template: {
    other_Templates: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy' | 'User' | 'Template' | 'Project_ProjectToTemplate_PrismaProject' | 'Project_ProjectToTemplate_Project' | 'other_Templates'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'PrismaProject' | 'Project' | 'Parent' | 'CreatedBy'
    }
  }
  Timer: {

  }
  Tournament: {
    Tourneys: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'User' | 'Tournament' | 'Tournament_TournamentToTourney' | 'Games' | 'TourneyPlayers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'Tournament'
    }
  }
  TournamentGroup: {
    Tournaments: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'User' | 'Group' | 'TournamentGroup' | 'Tourneys'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Group'
    }
  }
  Tourney: {
    Games: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney' | 'User_GameToUser' | 'Game' | 'Tourney_GameToTourney' | 'other_Game' | 'GameResult' | 'Team' | 'User_GameUsers'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'Parent' | 'CreatedBy' | 'Tourney'
    }
    TourneyPlayers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'User' | 'Tourney' | 'Tourney_TourneyToTourneyPlayer' | 'User_TourneyPlayerToUser'
      ordering: 'id' | 'User' | 'Tourney'
    }
  }
  TourneyPlayer: {

  }
  UserGroup: {
    Users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'User' | 'EthAccount_EthAccountToUser_EthAccountAuthed' | 'CallRequests_CallRequest_CalledToUser' | 'CallRequests_CallRequest_CallerToUser' | 'Careers' | 'ChatMessages' | 'ChatMessagesReaded' | 'ChatRooms_ChatRoomToUser' | 'ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser' | 'ChatRoomInvitations_ChatRoomInvitation_UserToUser' | 'CodeChallenges' | 'CodeChallengeBlocks' | 'CodeChallengeCompletions' | 'Comments' | 'EthAccounts_EthAccount_CreatedByToUser' | 'EthContractSources' | 'Files' | 'Galleries' | 'Games_GameToUser' | 'GameResults_GameResult_CreatedByToUser' | 'GameResults_GameResult_UserToUser' | 'Imports' | 'Letters' | 'LogedIns' | 'Notices_Notice_CreatedByToUser' | 'Notices_Notice_UserToUser' | 'NotificationTypes_NotificationTypeToUser' | 'Players' | 'Positions_PositionToUser' | 'Projects_ProjectToUser' | 'ProjectMembers_ProjectMember_CreatedByToUser' | 'ProjectMembers_ProjectMember_UserToUser' | 'ProjectTasks' | 'ResetPasswords' | 'Resources' | 'ResourceTags' | 'Routes' | 'Services' | 'ServiceCategories' | 'Settings' | 'SmsMessages' | 'SmsProviders' | 'Tags' | 'Tasks' | 'TaskMembers_TaskMember_CreatedByToUser' | 'TaskMembers_TaskMember_UserToUser' | 'TaskReactions' | 'TaskTechnologies' | 'Teams' | 'TeamMembers_TeamMember_CreatedByToUser' | 'TeamMembers_TeamMember_UserToUser' | 'Technologies' | 'TechnologyLessons' | 'TechnologyLessonUsers' | 'Templates' | 'Timers' | 'Tournaments' | 'TournamentGroups' | 'Tourneys' | 'TourneyPlayers' | 'other_Users' | 'UserTechnologies' | 'Votes' | 'Worlds' | 'ChatRooms_ChatRoomsMembers' | 'Games_GameUsers' | 'Positions_PositionUsers' | 'Projects_PrismaProjectUsers' | 'UserGroups' | 'NotificationTypes_UserNotificationTypes' | 'Tokens' | 'LearnStrategies' | 'UserLearnStrategies' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | 'about' | 'telegram'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'showFullname' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'oldID' | 'CreatedBy' | 'EthAccountAuthed' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'technologyLevel' | 'about' | 'telegram'
    }
  }
  UserTechnology: {

  }
  Vote: {

  }
  World: {
    Blocks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'representation' | 'type' | 'x' | 'y' | 'z' | 'world' | 'World'
      ordering: 'id' | 'representation' | 'type' | 'x' | 'y' | 'z' | 'world'
    }
    Messages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'sender' | 'body' | 'world' | 'World'
      ordering: 'id' | 'type' | 'sender' | 'body' | 'world'
    }
    Players: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user' | 'Inventory' | 'User' | 'World'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'world' | 'inventory' | 'user'
    }
  }
  Letter: {

  }
  Log: {

  }
  LearnStrategy: {
    LearnStrategyStages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'LearnStrategy' | 'learnStrategyTargetId' | 'LearnStrategyTarget' | 'technologyId' | 'Technology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'learnStrategyTargetId' | 'technologyId' | 'level'
    }
    LearnStrategyStagesTargets: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'LearnStrategy' | 'learnStrategyTargetId' | 'LearnStrategyTarget' | 'technologyId' | 'Technology' | 'level'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'learnStrategyTargetId' | 'technologyId' | 'level'
    }
    UserLearnStrategies: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'CreatedBy' | 'learnStrategyId' | 'LearnStrategy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'createdById' | 'learnStrategyId'
    }
  }
  LearnStrategyStage: {

  }
  UserLearnStrategy: {

  }
  MentorMentee: {

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
    learnStrategy: 'LearnStrategy'
    learnStrategies: 'LearnStrategy'
    learnStrategyStage: 'LearnStrategyStage'
    learnStrategyStages: 'LearnStrategyStage'
    userLearnStrategy: 'UserLearnStrategy'
    userLearnStrategies: 'UserLearnStrategy'
    mentorMentee: 'MentorMentee'
    mentorMentees: 'MentorMentee'
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
    createOneLearnStrategy: 'LearnStrategy'
    updateOneLearnStrategy: 'LearnStrategy'
    updateManyLearnStrategy: 'AffectedRowsOutput'
    deleteOneLearnStrategy: 'LearnStrategy'
    deleteManyLearnStrategy: 'AffectedRowsOutput'
    upsertOneLearnStrategy: 'LearnStrategy'
    createOneLearnStrategyStage: 'LearnStrategyStage'
    updateOneLearnStrategyStage: 'LearnStrategyStage'
    updateManyLearnStrategyStage: 'AffectedRowsOutput'
    deleteOneLearnStrategyStage: 'LearnStrategyStage'
    deleteManyLearnStrategyStage: 'AffectedRowsOutput'
    upsertOneLearnStrategyStage: 'LearnStrategyStage'
    createOneUserLearnStrategy: 'UserLearnStrategy'
    updateOneUserLearnStrategy: 'UserLearnStrategy'
    updateManyUserLearnStrategy: 'AffectedRowsOutput'
    deleteOneUserLearnStrategy: 'UserLearnStrategy'
    deleteManyUserLearnStrategy: 'AffectedRowsOutput'
    upsertOneUserLearnStrategy: 'UserLearnStrategy'
    createOneMentorMentee: 'MentorMentee'
    updateOneMentorMentee: 'MentorMentee'
    updateManyMentorMentee: 'AffectedRowsOutput'
    deleteOneMentorMentee: 'MentorMentee'
    deleteManyMentorMentee: 'AffectedRowsOutput'
    upsertOneMentorMentee: 'MentorMentee'
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
    isMentor: 'Boolean'
    technologyLevel: 'Int'
    User: 'User'
    EthAccount_EthAccountToUser_EthAccountAuthed: 'EthAccount'
    CallRequests_CallRequest_CalledToUser: 'CallRequest'
    CallRequests_CallRequest_CallerToUser: 'CallRequest'
    Careers: 'Career'
    ChatMessages: 'ChatMessage'
    ChatMessagesReaded: 'ChatMessageReaded'
    ChatRooms_ChatRoomToUser: 'ChatRoom'
    ChatRoomInvitations_ChatRoomInvitation_CreatedByToUser: 'ChatRoomInvitation'
    ChatRoomInvitations_ChatRoomInvitation_UserToUser: 'ChatRoomInvitation'
    CodeChallenges: 'CodeChallenge'
    CodeChallengeBlocks: 'CodeChallengeBlock'
    CodeChallengeCompletions: 'CodeChallengeCompletion'
    Comments: 'Comment'
    EthAccounts_EthAccount_CreatedByToUser: 'EthAccount'
    EthContractSources: 'EthContractSource'
    Files: 'File'
    Galleries: 'Gallery'
    Games_GameToUser: 'Game'
    GameResults_GameResult_CreatedByToUser: 'GameResult'
    GameResults_GameResult_UserToUser: 'GameResult'
    Imports: 'Import'
    Letters: 'Letter'
    LogedIns: 'LogedIn'
    Notices_Notice_CreatedByToUser: 'Notice'
    Notices_Notice_UserToUser: 'Notice'
    NotificationTypes_NotificationTypeToUser: 'NotificationType'
    Players: 'Player'
    Positions_PositionToUser: 'Position'
    Projects_ProjectToUser: 'Project'
    ProjectMembers_ProjectMember_CreatedByToUser: 'ProjectMember'
    ProjectMembers_ProjectMember_UserToUser: 'ProjectMember'
    ProjectTasks: 'ProjectTask'
    ResetPasswords: 'ResetPassword'
    Resources: 'Resource'
    ResourceTags: 'ResourceTag'
    Routes: 'Route'
    Services: 'Service'
    ServiceCategories: 'ServiceCategory'
    Settings: 'Settings'
    SmsMessages: 'SmsMessage'
    SmsProviders: 'SmsProvider'
    Tags: 'Tag'
    Tasks: 'Task'
    TaskMembers_TaskMember_CreatedByToUser: 'TaskMember'
    TaskMembers_TaskMember_UserToUser: 'TaskMember'
    TaskReactions: 'TaskReaction'
    TaskTechnologies: 'TaskTechnology'
    Teams: 'Team'
    TeamMembers_TeamMember_CreatedByToUser: 'TeamMember'
    TeamMembers_TeamMember_UserToUser: 'TeamMember'
    Technologies: 'Technology'
    TechnologyLessons: 'TechnologyLesson'
    TechnologyLessonUsers: 'TechnologyLessonUser'
    Templates: 'Template'
    Timers: 'Timer'
    Tournaments: 'Tournament'
    TournamentGroups: 'TournamentGroup'
    Tourneys: 'Tourney'
    TourneyPlayers: 'TourneyPlayer'
    other_Users: 'User'
    UserTechnologies: 'UserTechnology'
    Votes: 'Vote'
    Worlds: 'World'
    ChatRooms_ChatRoomsMembers: 'ChatRoom'
    Games_GameUsers: 'Game'
    Positions_PositionUsers: 'Position'
    Projects_PrismaProjectUsers: 'Project'
    UserGroups: 'UserGroup'
    NotificationTypes_UserNotificationTypes: 'NotificationType'
    Tokens: 'Token'
    LearnStrategies: 'LearnStrategy'
    UserLearnStrategies: 'UserLearnStrategy'
    MentorMenteeMentors: 'MentorMentee'
    MentorMenteeMentees: 'MentorMentee'
    about: 'Json'
    telegram: 'String'
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
    Projects: 'Project'
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
    ChatMessagesReaded: 'ChatMessageReaded'
    Notices: 'Notice'
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
    CallRequests: 'CallRequest'
    ChatMessages: 'ChatMessage'
    ChatRoomInvitations: 'ChatRoomInvitation'
    Projects: 'Project'
    Tasks: 'Task'
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
    CodeChallengeCompletions: 'CodeChallengeCompletion'
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
    Files: 'File'
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
    ChatRoomInvitations: 'ChatRoomInvitation'
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
    EthAccounts: 'EthAccount'
    ProjectMembers: 'ProjectMember'
    ProjectTasks: 'ProjectTask'
    Resources_ProjectToResource_PrismaProject: 'Resource'
    Templates_ProjectToTemplate_PrismaProject: 'Template'
    Templates_ProjectToTemplate_Project: 'Template'
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
    Services: 'Service'
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
    CodeChallenges: 'CodeChallenge'
    Files: 'File'
    Galleries: 'Gallery'
    Projects_Project_ResourceToResource: 'Project'
    other_Resource_ResourceToResource_Blogs: 'Resource'
    other_Resource_ResourceToResource_Parents: 'Resource'
    other_Resource_ResourceToResource_Topics: 'Resource'
    ResourceTags: 'ResourceTag'
    Votes: 'Vote'
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
    other_Routes: 'Route'
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
    Resources: 'Resource'
    other_Services: 'Service'
    ProjectMembers: 'ProjectMember'
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
    Services: 'Service'
    other_ServiceCategories: 'ServiceCategory'
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
    SmsMessages: 'SmsMessage'
  }
  Tag: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    status: 'TagStatus'
    CreatedBy: 'String'
    User: 'User'
    ResourceTags: 'ResourceTag'
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
    CodeChallengeCompletions: 'CodeChallengeCompletion'
    ProjectTasks: 'ProjectTask'
    Resources: 'Resource'
    other_Tasks: 'Task'
    TaskMembers: 'TaskMember'
    TaskReactions: 'TaskReaction'
    TaskTechnologies: 'TaskTechnology'
    Timers: 'Timer'
    Tasks_B: 'Task'
    Tasks_A: 'Task'
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
    Parent: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    CreatedBy: 'String'
    User: 'User'
    Team: 'Team'
    GameResults: 'GameResult'
    Projects_ProjectToTeam: 'Project'
    Resources: 'Resource'
    other_Teams: 'Team'
    TeamMembers: 'TeamMember'
    Games: 'Game'
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
    description: 'String'
    components: 'Json'
    contentText: 'String'
    site_url: 'String'
    level1hours: 'Int'
    level2hours: 'Int'
    level3hours: 'Int'
    level4hours: 'Int'
    level5hours: 'Int'
    CreatedBy: 'String'
    User: 'User'
    TaskTechnologies: 'TaskTechnology'
    TechnologyLessons: 'TechnologyLesson'
    UserTechnologies: 'UserTechnology'
    LearnStrategyStages: 'LearnStrategyStage'
  }
  TechnologyLesson: {
    id: 'String'
    name: 'String'
    components: 'Json'
    contentText: 'String'
    CreatedBy: 'String'
    User: 'User'
    Technology: 'String'
    Technology_TechnologyToTechnologyLesson: 'Technology'
    Comments: 'Comment'
    TechnologyLessonUsers: 'TechnologyLessonUser'
  }
  TechnologyLessonUser: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    status: 'TechnologyLessonUserStatus'
    completedAt: 'DateTime'
    CreatedBy: 'String'
    User: 'User'
    Lesson: 'String'
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
    other_Templates: 'Template'
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
    User: 'User'
    Group: 'String'
    TournamentGroup: 'TournamentGroup'
    Tourneys: 'Tourney'
  }
  TournamentGroup: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    code: 'String'
    CreatedBy: 'String'
    User: 'User'
    Tournaments: 'Tournament'
  }
  Tourney: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    code: 'String'
    date: 'DateTime'
    date_till: 'DateTime'
    CreatedBy: 'String'
    User: 'User'
    Tournament: 'String'
    Tournament_TournamentToTourney: 'Tournament'
    Games: 'Game'
    TourneyPlayers: 'TourneyPlayer'
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
    Users: 'User'
  }
  UserTechnology: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    components: 'Json'
    date_from: 'DateTime'
    date_till: 'DateTime'
    status: 'UserTechnologyStatus'
    hiring_status: 'UserTechnologyHiringStatus'
    isMentor: 'Boolean'
    CreatedBy: 'String'
    User: 'User'
    Technology: 'String'
    Technology_TechnologyToUserTechnology: 'Technology'
    level: 'Int'
  }
  Vote: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    value: 'Decimal'
    Resource: 'String'
    User: 'String'
    User_UserToVote: 'User'
    Resource_ResourceToVote: 'Resource'
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
    Blocks: 'Block'
    Messages: 'Message'
    Players: 'Player'
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
  LearnStrategy: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'String'
    level: 'Int'
    createdById: 'String'
    CreatedBy: 'User'
    LearnStrategyStages: 'LearnStrategyStage'
    LearnStrategyStagesTargets: 'LearnStrategyStage'
    UserLearnStrategies: 'UserLearnStrategy'
  }
  LearnStrategyStage: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    learnStrategyId: 'String'
    LearnStrategy: 'LearnStrategy'
    learnStrategyTargetId: 'String'
    LearnStrategyTarget: 'LearnStrategy'
    technologyId: 'String'
    Technology: 'Technology'
    level: 'Int'
  }
  UserLearnStrategy: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    createdById: 'String'
    CreatedBy: 'User'
    learnStrategyId: 'String'
    LearnStrategy: 'LearnStrategy'
  }
  MentorMentee: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    status: 'MentorMenteeStatus'
    mentorId: 'String'
    Mentor: 'User'
    menteeId: 'String'
    Mentee: 'User'
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
  LearnStrategy: Typegen.NexusPrismaFields<'LearnStrategy'>
  LearnStrategyStage: Typegen.NexusPrismaFields<'LearnStrategyStage'>
  UserLearnStrategy: Typegen.NexusPrismaFields<'UserLearnStrategy'>
  MentorMentee: Typegen.NexusPrismaFields<'MentorMentee'>
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
  