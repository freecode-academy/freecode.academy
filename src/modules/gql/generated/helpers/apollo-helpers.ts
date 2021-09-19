import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AuthPayloadKeySpecifier = ('data' | 'errors' | 'message' | 'success' | 'token' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageKeySpecifier = ('CreatedBy' | 'Room' | 'content' | 'contentText' | 'createdAt' | 'id' | 'updatedAt' | ChatMessageKeySpecifier)[];
export type ChatMessageFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Room?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | ChatMessageResponseKeySpecifier)[];
export type ChatMessageResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomKeySpecifier = ('CreatedBy' | 'Invitations' | 'Members' | 'Messages' | 'code' | 'createdAt' | 'description' | 'id' | 'image' | 'isPublic' | 'name' | 'updatedAt' | ChatRoomKeySpecifier)[];
export type ChatRoomFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Invitations?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	Messages?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationKeySpecifier = ('ChatRoom' | 'CreatedBy' | 'User' | 'createdAt' | 'id' | 'updatedAt' | ChatRoomInvitationKeySpecifier)[];
export type ChatRoomInvitationFieldPolicy = {
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeKeySpecifier = ('Block' | 'CodeChallengeCompletions' | 'CreatedBy' | 'Topic' | 'challengeOrder' | 'challengeType' | 'createdAt' | 'dashedName' | 'description' | 'externalKey' | 'files' | 'forumTopicId' | 'id' | 'instructions' | 'isBeta' | 'isPrivate' | 'isRequired' | 'localeTitle' | 'name' | 'order' | 'rank' | 'required' | 'solutions' | 'superOrder' | 'template' | 'tests' | 'time' | 'translations' | 'updatedAt' | 'videoUrl' | CodeChallengeKeySpecifier)[];
export type CodeChallengeFieldPolicy = {
	Block?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Topic?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeType?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dashedName?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	forumTopicId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instructions?: FieldPolicy<any> | FieldReadFunction<any>,
	isBeta?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	localeTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	solutions?: FieldPolicy<any> | FieldReadFunction<any>,
	superOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	tests?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	translations?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	videoUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockKeySpecifier = ('Challenges' | 'Children' | 'Parent' | 'createdAt' | 'id' | 'name' | 'updatedAt' | CodeChallengeBlockKeySpecifier)[];
export type CodeChallengeBlockFieldPolicy = {
	Challenges?: FieldPolicy<any> | FieldReadFunction<any>,
	Children?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeCompletionKeySpecifier = ('CodeChallenge' | 'CreatedBy' | 'Task' | 'content' | 'createdAt' | 'id' | 'success' | 'updatedAt' | CodeChallengeCompletionKeySpecifier)[];
export type CodeChallengeCompletionFieldPolicy = {
	CodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeCompletionResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | CodeChallengeCompletionResponseKeySpecifier)[];
export type CodeChallengeCompletionResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountKeySpecifier = ('abi' | 'address' | 'balance' | 'bytecode' | 'createdAt' | 'description' | 'id' | 'name' | 'source' | 'type' | 'updatedAt' | EthAccountKeySpecifier)[];
export type EthAccountFieldPolicy = {
	abi?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	bytecode?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('createdAt' | 'encoding' | 'filename' | 'id' | 'mimetype' | 'name' | 'path' | 'rank' | 'size' | 'updatedAt' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LearnStrategyKeySpecifier = ('CreatedBy' | 'LearnStrategyStages' | 'UserLearnStrategies' | 'createdAt' | 'createdById' | 'description' | 'id' | 'level' | 'name' | 'updatedAt' | LearnStrategyKeySpecifier)[];
export type LearnStrategyFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategyStages?: FieldPolicy<any> | FieldReadFunction<any>,
	UserLearnStrategies?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdById?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LearnStrategyStageKeySpecifier = ('LearnStrategy' | 'LearnStrategyTarget' | 'Technology' | 'createdAt' | 'id' | 'learnStrategyId' | 'learnStrategyTargetId' | 'level' | 'technologyId' | 'updatedAt' | LearnStrategyStageKeySpecifier)[];
export type LearnStrategyStageFieldPolicy = {
	LearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategyTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyId?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyTargetId?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MentorMenteeKeySpecifier = ('Mentee' | 'Mentor' | 'createdAt' | 'id' | 'menteeId' | 'mentorId' | 'status' | 'updatedAt' | MentorMenteeKeySpecifier)[];
export type MentorMenteeFieldPolicy = {
	Mentee?: FieldPolicy<any> | FieldReadFunction<any>,
	Mentor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	menteeId?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createBlogProcessor' | 'createChatMessageProcessor' | 'createCodeChallengeCompletionProcessor' | 'createCommentProcessor' | 'createLearnStrategy' | 'createLearnStrategyStage' | 'createMentorMentee' | 'createProjectProcessor' | 'createResetPasswordProcessor' | 'createTaskProcessor' | 'createTaskTechnologyProcessor' | 'createTechnology' | 'createTimerProcessor' | 'createTopicProcessor' | 'createUserLearnStrategy' | 'createUserTechnologyProcessor' | 'deleteLearnStrategyStage' | 'deleteNotice' | 'resetPasswordProcessor' | 'signin' | 'signup' | 'singleUpload' | 'updateBlogProcessor' | 'updateCodeChallengeCompletionProcessor' | 'updateCommentProcessor' | 'updateLearnStrategy' | 'updateProjectProcessor' | 'updateTaskProcessor' | 'updateTaskTechnologyProcessor' | 'updateTechnology' | 'updateTimerProcessor' | 'updateTopicProcessor' | 'updateUserProcessor' | 'updateUserTechnologyProcessor' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createBlogProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createCodeChallengeCompletionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	createLearnStrategyStage?: FieldPolicy<any> | FieldReadFunction<any>,
	createMentorMentee?: FieldPolicy<any> | FieldReadFunction<any>,
	createProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLearnStrategyStage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotice?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBlogProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeChallengeCompletionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeKeySpecifier = ('ChatMessage' | 'ChatRoomInvitation' | 'CreatedBy' | 'User' | 'createdAt' | 'id' | 'type' | 'updatedAt' | NoticeKeySpecifier)[];
export type NoticeFieldPolicy = {
	ChatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoomInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeKeySpecifier = ('code' | 'comment' | 'createdAt' | 'id' | 'name' | 'oldID' | 'updatedAt' | NotificationTypeKeySpecifier)[];
export type NotificationTypeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('CreatedBy' | 'Members' | 'ProjectTasks' | 'Resource' | 'content' | 'contentText' | 'createdAt' | 'description' | 'domain' | 'id' | 'name' | 'oldID' | 'public' | 'sequence' | 'status' | 'type' | 'updatedAt' | 'url' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectTasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberKeySpecifier = ('Project' | 'User' | 'createdAt' | 'id' | 'status' | 'updatedAt' | ProjectMemberKeySpecifier)[];
export type ProjectMemberFieldPolicy = {
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | ProjectResponseKeySpecifier)[];
export type ProjectResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectTaskKeySpecifier = ('CreatedBy' | 'Project' | 'Task' | 'createdAt' | 'id' | 'updatedAt' | ProjectTaskKeySpecifier)[];
export type ProjectTaskFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('chatMessage' | 'chatMessages' | 'chatMessagesCount' | 'chatRoom' | 'chatRooms' | 'chatRoomsCount' | 'codeChallenge' | 'codeChallengeBlock' | 'codeChallengeBlocks' | 'codeChallengeBlocksCount' | 'codeChallengeCompletion' | 'codeChallengeCompletions' | 'codeChallenges' | 'file' | 'files' | 'filesCount' | 'learnStrategies' | 'learnStrategiesCount' | 'learnStrategy' | 'learnStrategyStage' | 'learnStrategyStages' | 'learnStrategyStagesCount' | 'me' | 'mentorMentee' | 'mentorMentees' | 'mentorMenteesCount' | 'notice' | 'notices' | 'noticesCount' | 'notificationTypes' | 'notificationTypesCount' | 'project' | 'projectTasks' | 'projects' | 'projectsCount' | 'resource' | 'resources' | 'resourcesCount' | 'tag' | 'tags' | 'tagsCount' | 'task' | 'taskTechnologies' | 'taskTechnology' | 'taskTechnologysCount' | 'tasks' | 'tasksCount' | 'technologies' | 'technologiesCount' | 'technology' | 'timer' | 'timers' | 'timersCount' | 'user' | 'userLearnStrategies' | 'userLearnStrategiesCount' | 'userLearnStrategy' | 'userTechnologies' | 'userTechnology' | 'userTechnologysCount' | 'users' | 'usersCount' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	chatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRooms?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoomsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlocksCount?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenges?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	filesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategies?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyStage?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyStages?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyStagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorMentee?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorMentees?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorMenteesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	notice?: FieldPolicy<any> | FieldReadFunction<any>,
	notices?: FieldPolicy<any> | FieldReadFunction<any>,
	noticesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectTasks?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tagsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	taskTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	taskTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	taskTechnologysCount?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tasksCount?: FieldPolicy<any> | FieldReadFunction<any>,
	technologies?: FieldPolicy<any> | FieldReadFunction<any>,
	technologiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	technology?: FieldPolicy<any> | FieldReadFunction<any>,
	timer?: FieldPolicy<any> | FieldReadFunction<any>,
	timers?: FieldPolicy<any> | FieldReadFunction<any>,
	timersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLearnStrategies?: FieldPolicy<any> | FieldReadFunction<any>,
	userLearnStrategiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	userLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnologysCount?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestErrorKeySpecifier = ('key' | 'message' | RequestErrorKeySpecifier)[];
export type RequestErrorFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordKeySpecifier = ('foo' | 'id' | ResetPasswordKeySpecifier)[];
export type ResetPasswordFieldPolicy = {
	foo?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | ResetPasswordResponseKeySpecifier)[];
export type ResetPasswordResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('Blog' | 'CodeChallenge' | 'Comments' | 'CreatedBy' | 'Image' | 'Tags' | 'Task' | 'Topic' | 'class_key' | 'commentOldID' | 'components' | 'content' | 'contentText' | 'createdAt' | 'deleted' | 'hidemenu' | 'id' | 'isfolder' | 'longtitle' | 'mockUpdate' | 'name' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'positiveVotesCount' | 'published' | 'rating' | 'searchable' | 'template' | 'type' | 'updatedAt' | 'uri' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	Blog?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Image?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	Topic?: FieldPolicy<any> | FieldReadFunction<any>,
	class_key?: FieldPolicy<any> | FieldReadFunction<any>,
	commentOldID?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidemenu?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isfolder?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	mockUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	negativeVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	neutralVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	positiveVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | ResourceResponseKeySpecifier)[];
export type ResourceResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagKeySpecifier = ('CreatedBy' | 'Resource' | 'Tag' | 'createdAt' | 'id' | 'status' | 'updatedAt' | ResourceTagKeySpecifier)[];
export type ResourceTagFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	Tag?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('CreatedBy' | 'Resources' | 'createdAt' | 'id' | 'name' | 'updatedAt' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskKeySpecifier = ('CodeChallengeCompletion' | 'Comments' | 'CreatedBy' | 'Parent' | 'TaskProjects' | 'TaskTechnologies' | 'Timers' | 'content' | 'createdAt' | 'description' | 'endDate' | 'endDatePlaning' | 'id' | 'name' | 'needHelp' | 'startDate' | 'startDatePlaning' | 'status' | 'updatedAt' | TaskKeySpecifier)[];
export type TaskFieldPolicy = {
	CodeChallengeCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	Timers?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	needHelp?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	startDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionKeySpecifier = ('createdAt' | 'id' | 'type' | 'updatedAt' | TaskReactionKeySpecifier)[];
export type TaskReactionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | TaskResponseKeySpecifier)[];
export type TaskResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskTechnologyKeySpecifier = ('CreatedBy' | 'Task' | 'Technology' | 'createdAt' | 'id' | 'level' | 'updatedAt' | TaskTechnologyKeySpecifier)[];
export type TaskTechnologyFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskTechnologyResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | TaskTechnologyResponseKeySpecifier)[];
export type TaskTechnologyResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyKeySpecifier = ('CreatedBy' | 'UserTechnologies' | 'components' | 'contentText' | 'createdAt' | 'description' | 'id' | 'level1hours' | 'level2hours' | 'level3hours' | 'level4hours' | 'level5hours' | 'name' | 'site_url' | 'updatedAt' | TechnologyKeySpecifier)[];
export type TechnologyFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	UserTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level1hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level2hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level3hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level4hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level5hours?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	site_url?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerKeySpecifier = ('CreatedBy' | 'Task' | 'createdAt' | 'id' | 'stopedAt' | 'updatedAt' | TimerKeySpecifier)[];
export type TimerFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stopedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | TimerResponseKeySpecifier)[];
export type TimerResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('CodeChallengeCompletions' | 'EthAccounts' | 'MentorMenteeMentees' | 'MentorMenteeMentors' | 'NotificationTypes' | 'Projects' | 'ProjectsCreated' | 'Timers' | 'UserTechnologies' | 'about' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoom' | 'acceptNewChatRoomAnonymous' | 'activated' | 'active' | 'address' | 'createdAt' | 'deleted' | 'email' | 'fullname' | 'hasEmail' | 'hasPhone' | 'id' | 'image' | 'isMentor' | 'phone' | 'showEmail' | 'showPhone' | 'sudo' | 'technologyLevel' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	CodeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
	EthAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	MentorMenteeMentees?: FieldPolicy<any> | FieldReadFunction<any>,
	MentorMenteeMentors?: FieldPolicy<any> | FieldReadFunction<any>,
	NotificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	Timers?: FieldPolicy<any> | FieldReadFunction<any>,
	UserTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptChatMessageAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptNewChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptNewChatRoomAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	activated?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	isMentor?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLearnStrategyKeySpecifier = ('CreatedBy' | 'LearnStrategy' | 'createdAt' | 'createdById' | 'id' | 'learnStrategyId' | 'updatedAt' | UserLearnStrategyKeySpecifier)[];
export type UserLearnStrategyFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdById?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | UserResponseKeySpecifier)[];
export type UserResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyKeySpecifier = ('CreatedBy' | 'Technology' | 'components' | 'createdAt' | 'date_from' | 'date_till' | 'hiring_status' | 'id' | 'isMentor' | 'level' | 'status' | 'technologyId' | 'updatedAt' | UserTechnologyKeySpecifier)[];
export type UserTechnologyFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date_from?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>,
	hiring_status?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMentor?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyResponseKeySpecifier = ('data' | 'errors' | 'message' | 'success' | UserTechnologyResponseKeySpecifier)[];
export type UserTechnologyResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	ChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageKeySpecifier | (() => undefined | ChatMessageKeySpecifier),
		fields?: ChatMessageFieldPolicy,
	},
	ChatMessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageResponseKeySpecifier | (() => undefined | ChatMessageResponseKeySpecifier),
		fields?: ChatMessageResponseFieldPolicy,
	},
	ChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomKeySpecifier | (() => undefined | ChatRoomKeySpecifier),
		fields?: ChatRoomFieldPolicy,
	},
	ChatRoomInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationKeySpecifier | (() => undefined | ChatRoomInvitationKeySpecifier),
		fields?: ChatRoomInvitationFieldPolicy,
	},
	CodeChallenge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeKeySpecifier | (() => undefined | CodeChallengeKeySpecifier),
		fields?: CodeChallengeFieldPolicy,
	},
	CodeChallengeBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockKeySpecifier | (() => undefined | CodeChallengeBlockKeySpecifier),
		fields?: CodeChallengeBlockFieldPolicy,
	},
	CodeChallengeCompletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionKeySpecifier | (() => undefined | CodeChallengeCompletionKeySpecifier),
		fields?: CodeChallengeCompletionFieldPolicy,
	},
	CodeChallengeCompletionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionResponseKeySpecifier | (() => undefined | CodeChallengeCompletionResponseKeySpecifier),
		fields?: CodeChallengeCompletionResponseFieldPolicy,
	},
	EthAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountKeySpecifier | (() => undefined | EthAccountKeySpecifier),
		fields?: EthAccountFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	LearnStrategy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LearnStrategyKeySpecifier | (() => undefined | LearnStrategyKeySpecifier),
		fields?: LearnStrategyFieldPolicy,
	},
	LearnStrategyStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LearnStrategyStageKeySpecifier | (() => undefined | LearnStrategyStageKeySpecifier),
		fields?: LearnStrategyStageFieldPolicy,
	},
	MentorMentee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MentorMenteeKeySpecifier | (() => undefined | MentorMenteeKeySpecifier),
		fields?: MentorMenteeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Notice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeKeySpecifier | (() => undefined | NoticeKeySpecifier),
		fields?: NoticeFieldPolicy,
	},
	NotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeKeySpecifier | (() => undefined | NotificationTypeKeySpecifier),
		fields?: NotificationTypeFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberKeySpecifier | (() => undefined | ProjectMemberKeySpecifier),
		fields?: ProjectMemberFieldPolicy,
	},
	ProjectResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectResponseKeySpecifier | (() => undefined | ProjectResponseKeySpecifier),
		fields?: ProjectResponseFieldPolicy,
	},
	ProjectTask?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskKeySpecifier | (() => undefined | ProjectTaskKeySpecifier),
		fields?: ProjectTaskFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RequestError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestErrorKeySpecifier | (() => undefined | RequestErrorKeySpecifier),
		fields?: RequestErrorFieldPolicy,
	},
	ResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordKeySpecifier | (() => undefined | ResetPasswordKeySpecifier),
		fields?: ResetPasswordFieldPolicy,
	},
	ResetPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		fields?: ResetPasswordResponseFieldPolicy,
	},
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	ResourceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceResponseKeySpecifier | (() => undefined | ResourceResponseKeySpecifier),
		fields?: ResourceResponseFieldPolicy,
	},
	ResourceTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagKeySpecifier | (() => undefined | ResourceTagKeySpecifier),
		fields?: ResourceTagFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	Task?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskKeySpecifier | (() => undefined | TaskKeySpecifier),
		fields?: TaskFieldPolicy,
	},
	TaskReaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionKeySpecifier | (() => undefined | TaskReactionKeySpecifier),
		fields?: TaskReactionFieldPolicy,
	},
	TaskResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskResponseKeySpecifier | (() => undefined | TaskResponseKeySpecifier),
		fields?: TaskResponseFieldPolicy,
	},
	TaskTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskTechnologyKeySpecifier | (() => undefined | TaskTechnologyKeySpecifier),
		fields?: TaskTechnologyFieldPolicy,
	},
	TaskTechnologyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskTechnologyResponseKeySpecifier | (() => undefined | TaskTechnologyResponseKeySpecifier),
		fields?: TaskTechnologyResponseFieldPolicy,
	},
	Technology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyKeySpecifier | (() => undefined | TechnologyKeySpecifier),
		fields?: TechnologyFieldPolicy,
	},
	Timer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerKeySpecifier | (() => undefined | TimerKeySpecifier),
		fields?: TimerFieldPolicy,
	},
	TimerResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerResponseKeySpecifier | (() => undefined | TimerResponseKeySpecifier),
		fields?: TimerResponseFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserLearnStrategy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserLearnStrategyKeySpecifier | (() => undefined | UserLearnStrategyKeySpecifier),
		fields?: UserLearnStrategyFieldPolicy,
	},
	UserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserResponseKeySpecifier | (() => undefined | UserResponseKeySpecifier),
		fields?: UserResponseFieldPolicy,
	},
	UserTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyKeySpecifier | (() => undefined | UserTechnologyKeySpecifier),
		fields?: UserTechnologyFieldPolicy,
	},
	UserTechnologyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyResponseKeySpecifier | (() => undefined | UserTechnologyResponseKeySpecifier),
		fields?: UserTechnologyResponseFieldPolicy,
	}
};