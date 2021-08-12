/*
  Warnings:

  - The primary key for the `File` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdById` on the `File` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `File` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `Char(25)`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `Char(25)`.
  - A unique constraint covering the columns `[oldID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `File` DROP FOREIGN KEY `File_ibfk_1`;


-- AlterTable
ALTER TABLE `File` DROP PRIMARY KEY,
    DROP COLUMN `createdById`,
    ADD COLUMN `CreatedBy` VARCHAR(32),
    ADD COLUMN `Gallery` VARCHAR(32),
    ADD COLUMN `ImageResource` VARCHAR(32),
    ADD COLUMN `hash` MEDIUMTEXT,
    MODIFY `id` VARCHAR(32) NOT NULL,
    MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `filename` MEDIUMTEXT,
    MODIFY `name` MEDIUMTEXT,
    MODIFY `mimetype` MEDIUMTEXT NOT NULL,
    MODIFY `encoding` MEDIUMTEXT NOT NULL,
    MODIFY `size` DECIMAL(65, 30),
    MODIFY `rank` INTEGER,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    ADD COLUMN `CreatedBy` VARCHAR(32),
    ADD COLUMN `EthAccountAuthed` VARCHAR(32),
    ADD COLUMN `acceptChatMessageAnonymous` BOOLEAN,
    ADD COLUMN `acceptNewChatRoom` BOOLEAN,
    ADD COLUMN `acceptNewChatRoomAnonymous` BOOLEAN,
    ADD COLUMN `activated` BOOLEAN,
    ADD COLUMN `address` TEXT,
    ADD COLUMN `deleted` BOOLEAN,
    ADD COLUMN `hidden` BOOLEAN,
    ADD COLUMN `marketplaceToken` VARCHAR(191),
    ADD COLUMN `oldID` INTEGER,
    ADD COLUMN `phone` VARCHAR(191),
    ADD COLUMN `showPhone` BOOLEAN  NOT NULL DEFAULT false,
    MODIFY `active` BOOLEAN,
    MODIFY `sudo` BOOLEAN,
    MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Block` (
    `id` VARCHAR(32) NOT NULL,
    `representation` MEDIUMTEXT NOT NULL,
    `type` INTEGER NOT NULL,
    `x` INTEGER NOT NULL,
    `y` INTEGER NOT NULL,
    `z` INTEGER NOT NULL,
    `world` VARCHAR(32),

    INDEX `world`(`world`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CallRequest` (
    `id` VARCHAR(32) NOT NULL,
    `called_descriptions` MEDIUMTEXT NOT NULL,
    `caller_descriptions` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191),
    `startedAt` DATETIME(3),
    `endedAt` DATETIME(3),
    `Room` VARCHAR(32),
    `Called` VARCHAR(32),
    `Caller` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `Called`(`Called`),
    INDEX `Caller`(`Caller`),
    INDEX `Room`(`Room`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Career` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `start_date` DATETIME(3),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessage` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `content` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),
    `Room` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Room`(`Room`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessageReaded` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Message` VARCHAR(32),
    `User` VARCHAR(32),

    INDEX `Message`(`Message`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatRoom` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `image` MEDIUMTEXT,
    `code` VARCHAR(32),
    `isPublic` BOOLEAN,
    `CreatedBy` VARCHAR(32),
    `allowAnonymous` BOOLEAN,
    `sandbox` BOOLEAN,

    UNIQUE INDEX `ChatRoom.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatRoomInvitation` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `User` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `ChatRoom` VARCHAR(32),
    `Notice` VARCHAR(32),

    INDEX `ChatRoom`(`ChatRoom`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Notice`(`Notice`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeChallenge` (
    `id` VARCHAR(32) NOT NULL,
    `externalKey` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `dashedName` MEDIUMTEXT,
    `localeTitle` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `challengeType` INTEGER,
    `forumTopicId` INTEGER,
    `translations` MEDIUMTEXT,
    `tests` MEDIUMTEXT,
    `solutions` MEDIUMTEXT,
    `instructions` MEDIUMTEXT,
    `files` MEDIUMTEXT,
    `videoUrl` MEDIUMTEXT,
    `order` INTEGER,
    `superOrder` INTEGER,
    `challengeOrder` INTEGER,
    `required` MEDIUMTEXT,
    `isRequired` BOOLEAN,
    `isPrivate` BOOLEAN,
    `isBeta` BOOLEAN,
    `template` MEDIUMTEXT,
    `time` MEDIUMTEXT,
    `rank` INTEGER,
    `Block` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `Topic` VARCHAR(32),

    UNIQUE INDEX `CodeChallenge.externalKey_unique`(`externalKey`),
    INDEX `Block`(`Block`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Topic`(`Topic`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeChallengeBlock` (
    `id` VARCHAR(32) NOT NULL,
    `externalKey` MEDIUMTEXT,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `rank` INTEGER,
    `CreatedBy` VARCHAR(32),
    `Parent` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeChallengeCompletion` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Task` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `CodeChallenge` VARCHAR(32),
    `content` MEDIUMTEXT,
    `success` BOOLEAN,

    INDEX `CodeChallenge`(`CodeChallenge`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `components` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),
    `TechnologyLesson` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `TechnologyLesson`(`TechnologyLesson`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthAccount` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `address` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(191),
    `source` MEDIUMTEXT,
    `bytecode` MEDIUMTEXT,
    `abi` MEDIUMTEXT,
    `ContractSource` VARCHAR(32),
    `Project` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `ContractSource`(`ContractSource`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Project`(`Project`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthBlock` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `hash` MEDIUMTEXT NOT NULL,
    `number` INTEGER NOT NULL,
    `difficulty` DECIMAL(65, 30),
    `totalDifficulty` DECIMAL(65, 30),
    `extraData` MEDIUMTEXT,
    `gasLimit` DECIMAL(65, 30),
    `gasUsed` DECIMAL(65, 30),
    `mixHash` MEDIUMTEXT,
    `nonce` MEDIUMTEXT,
    `parentHash` MEDIUMTEXT,
    `receiptsRoot` MEDIUMTEXT,
    `sha3Uncles` MEDIUMTEXT,
    `size` INTEGER,
    `stateRoot` MEDIUMTEXT,
    `date` DATETIME(3),
    `transactionsRoot` MEDIUMTEXT,
    `transactions_count` INTEGER,
    `Miner` VARCHAR(32),

    UNIQUE INDEX `EthBlock.number_unique`(`number`),
    INDEX `Miner`(`Miner`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthContractSource` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `source` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthTransaction` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `chainId` INTEGER NOT NULL,
    `amount` DECIMAL(65, 30),
    `input` MEDIUMTEXT,
    `index` INTEGER,
    `address` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(191),
    `v` MEDIUMTEXT,
    `r` MEDIUMTEXT,
    `s` MEDIUMTEXT,
    `Sender` VARCHAR(32),
    `Block` VARCHAR(32),
    `Receiver` VARCHAR(32),
    `Account` VARCHAR(32),

    INDEX `Account`(`Account`),
    INDEX `Block`(`Block`),
    INDEX `Receiver`(`Receiver`),
    INDEX `Sender`(`Sender`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallery` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),
    `Resource` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Resource`(`Resource`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `start_date` DATETIME(3),
    `end_date` DATETIME(3),
    `sequence` INTEGER,
    `Parent` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `Tourney` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    INDEX `Tourney`(`Tourney`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameResult` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date` DATETIME(3),
    `name` MEDIUMTEXT,
    `value` DECIMAL(65, 30),
    `CreatedBy` VARCHAR(32),
    `Team` VARCHAR(32),
    `Game` VARCHAR(32),
    `User` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Game`(`Game`),
    INDEX `Team`(`Team`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Import` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventory` (
    `id` VARCHAR(32) NOT NULL,
    `cursor` INTEGER NOT NULL,
    `data` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LetsadsSmsMessageStatus` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(191),
    `description` MEDIUMTEXT,
    `errorCode` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LetsadsSmsMessageStatusItem` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `sms_id` INTEGER NOT NULL,
    `Status` VARCHAR(32),

    UNIQUE INDEX `LetsadsSmsMessageStatusItem.sms_id_unique`(`sms_id`),
    INDEX `Status`(`Status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Letter` (
    `id` VARCHAR(32) NOT NULL,
    `email` MEDIUMTEXT NOT NULL,
    `subject` MEDIUMTEXT NOT NULL,
    `message` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `rank` INTEGER,
    `deleteOnSend` BOOLEAN,
    `replyTo` MEDIUMTEXT,
    `returnTo` MEDIUMTEXT,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `User` VARCHAR(32),

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` VARCHAR(32) NOT NULL,
    `level` VARCHAR(191) NOT NULL,
    `objectType` VARCHAR(32),
    `message` MEDIUMTEXT NOT NULL,
    `stack` MEDIUMTEXT,
    `Import` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `Import`(`Import`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LogedIn` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fake` BOOLEAN,
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `User` VARCHAR(32),

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` VARCHAR(32) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `sender` MEDIUMTEXT,
    `body` MEDIUMTEXT NOT NULL,
    `world` VARCHAR(32),

    INDEX `world`(`world`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notice` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `type` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ChatMessage` VARCHAR(32),
    `User` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `ChatMessage`(`ChatMessage`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationType` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT NOT NULL,
    `code` VARCHAR(32),
    `comment` MEDIUMTEXT,
    `oldID` INTEGER,
    `CreatedBy` VARCHAR(32),

    UNIQUE INDEX `NotificationType.code_unique`(`code`),
    UNIQUE INDEX `NotificationType.oldID_unique`(`oldID`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isAdmin` BOOLEAN NOT NULL,
    `gamemode` VARCHAR(191) NOT NULL,
    `lastLogin` DATETIME(3),
    `x` DECIMAL(65, 30) NOT NULL,
    `y` DECIMAL(65, 30) NOT NULL,
    `z` DECIMAL(65, 30) NOT NULL,
    `dirx` DECIMAL(65, 30) NOT NULL,
    `diry` DECIMAL(65, 30) NOT NULL,
    `world` VARCHAR(32),
    `inventory` VARCHAR(32),
    `user` VARCHAR(32),

    INDEX `inventory`(`inventory`),
    INDEX `user`(`user`),
    INDEX `world`(`world`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Position` (
    `id` VARCHAR(32) NOT NULL,
    `code` VARCHAR(32),
    `name` MEDIUMTEXT NOT NULL,
    `CreatedBy` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Position.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `domain` MEDIUMTEXT,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `description` MEDIUMTEXT,
    `url` MEDIUMTEXT,
    `sequence` INTEGER,
    `content` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `status` VARCHAR(191),
    `public` BOOLEAN,
    `oldID` INTEGER,
    `CreatedBy` VARCHAR(32),
    `Image` VARCHAR(32),
    `ChatRoom` VARCHAR(32),
    `Team` VARCHAR(32),
    `Resource` VARCHAR(32),
    `type` VARCHAR(191),

    UNIQUE INDEX `Project.sequence_unique`(`sequence`),
    UNIQUE INDEX `Project.oldID_unique`(`oldID`),
    INDEX `ChatRoom`(`ChatRoom`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Image`(`Image`),
    INDEX `Resource`(`Resource`),
    INDEX `Team`(`Team`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectMember` (
    `id` VARCHAR(32) NOT NULL,
    `status` VARCHAR(191),
    `User` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `Project` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Project`(`Project`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectTask` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Project` VARCHAR(32),
    `Task` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Project`(`Project`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResetPassword` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `code` VARCHAR(32),
    `password` MEDIUMTEXT,
    `validTill` DATETIME(3),
    `User` VARCHAR(32),

    UNIQUE INDEX `ResetPassword.code_unique`(`code`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resource` (
    `id` VARCHAR(32) NOT NULL,
    `code` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `type` VARCHAR(191),
    `name` MEDIUMTEXT,
    `longtitle` MEDIUMTEXT,
    `content` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `published` BOOLEAN NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `hidemenu` BOOLEAN NOT NULL,
    `searchable` BOOLEAN NOT NULL,
    `uri` VARCHAR(191) NOT NULL,
    `isfolder` BOOLEAN NOT NULL,
    `rating` DECIMAL(65, 30),
    `positiveVotesCount` INTEGER,
    `negativeVotesCount` INTEGER,
    `neutralVotesCount` INTEGER,
    `oldID` INTEGER,
    `commentOldID` INTEGER,
    `class_key` MEDIUMTEXT,
    `template` INTEGER,
    `mockUpdate` DATETIME(3),
    `components` MEDIUMTEXT,
    `Parent` VARCHAR(32),
    `Team` VARCHAR(32),
    `Service` VARCHAR(32),
    `EthAccount` VARCHAR(32),
    `PrismaProject` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `Topic` VARCHAR(32),
    `Blog` VARCHAR(32),
    `Task` VARCHAR(32),

    UNIQUE INDEX `Resource.code_unique`(`code`),
    UNIQUE INDEX `Resource.uri_unique`(`uri`),
    UNIQUE INDEX `Resource.oldID_unique`(`oldID`),
    UNIQUE INDEX `Resource.commentOldID_unique`(`commentOldID`),
    INDEX `Blog`(`Blog`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `EthAccount`(`EthAccount`),
    INDEX `Parent`(`Parent`),
    INDEX `PrismaProject`(`PrismaProject`),
    INDEX `Service`(`Service`),
    INDEX `Task`(`Task`),
    INDEX `Team`(`Team`),
    INDEX `Topic`(`Topic`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResourceTag` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` VARCHAR(191) NOT NULL,
    `CreatedBy` VARCHAR(32),
    `Resource` VARCHAR(32),
    `Tag` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Resource`(`Resource`),
    INDEX `Tag`(`Tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Route` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT,
    `path` MEDIUMTEXT NOT NULL,
    `exact` BOOLEAN NOT NULL,
    `component` MEDIUMTEXT NOT NULL,
    `CreatedBy` VARCHAR(32),
    `Parent` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `code` VARCHAR(32),
    `rank` INTEGER,
    `oldID` INTEGER,
    `Category` VARCHAR(32),
    `Parent` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Service.code_unique`(`code`),
    UNIQUE INDEX `Service.oldID_unique`(`oldID`),
    INDEX `Category`(`Category`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceCategory` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `code` VARCHAR(32),
    `Parent` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `ServiceCategory.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` VARCHAR(32) NOT NULL,
    `renderDistance` INTEGER NOT NULL,
    `User` VARCHAR(32),

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SmsMessage` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `from` MEDIUMTEXT NOT NULL,
    `text` MEDIUMTEXT NOT NULL,
    `deletOnSend` BOOLEAN,
    `Status` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `Provider` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Provider`(`Provider`),
    INDEX `Status`(`Status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SmsMessage_recipients` (
    `nodeId` VARCHAR(32) NOT NULL,
    `position` INTEGER NOT NULL,
    `value` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`nodeId`, `position`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SmsProvider` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `credentials` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `CreatedBy` VARCHAR(32),

    UNIQUE INDEX `Tag.name_unique`(`name`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `content` MEDIUMTEXT,
    `status` VARCHAR(191) NOT NULL,
    `startDatePlaning` DATETIME(3),
    `endDatePlaning` DATETIME(3),
    `startDate` DATETIME(3),
    `endDate` DATETIME(3),
    `CreatedBy` VARCHAR(32),
    `Parent` VARCHAR(32),
    `ChatRoom` VARCHAR(32),
    `needHelp` BOOLEAN,

    INDEX `ChatRoom`(`ChatRoom`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskMember` (
    `id` VARCHAR(32) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `Task` VARCHAR(32),
    `User` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskReaction` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `type` VARCHAR(191),
    `Task` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskTechnology` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `level` INTEGER,
    `Technology` VARCHAR(32),
    `Task` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    INDEX `Technology`(`Technology`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `oldID` INTEGER,
    `address` MEDIUMTEXT,
    `website` MEDIUMTEXT,
    `email` MEDIUMTEXT,
    `phone` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),
    `Parent` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Team.oldID_unique`(`oldID`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeamMember` (
    `id` VARCHAR(32) NOT NULL,
    `status` VARCHAR(191),
    `User` VARCHAR(32),
    `Team` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Team`(`Team`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Technology` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `components` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `site_url` MEDIUMTEXT,
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TechnologyLesson` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT,
    `components` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `Technology` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Technology`(`Technology`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TechnologyLessonUser` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` VARCHAR(191),
    `completedAt` DATETIME(3),
    `Lesson` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Lesson`(`Lesson`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Template` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `externalKey` VARCHAR(32),
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `component` MEDIUMTEXT,
    `props` MEDIUMTEXT,
    `components` MEDIUMTEXT,
    `vars` MEDIUMTEXT,
    `rank` INTEGER,
    `PrismaProject` VARCHAR(32),
    `Project` VARCHAR(32),
    `Parent` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    INDEX `PrismaProject`(`PrismaProject`),
    INDEX `Project`(`Project`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `text` MEDIUMTEXT,
    `quantity` DECIMAL(65, 30),
    `date` DATETIME(3),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timer` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `stopedAt` DATETIME(3),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Task` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tournament` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `code` VARCHAR(32),
    `CreatedBy` VARCHAR(32),
    `Group` VARCHAR(32),

    UNIQUE INDEX `Tournament.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Group`(`Group`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TournamentGroup` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `code` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    UNIQUE INDEX `TournamentGroup.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tourney` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT,
    `code` VARCHAR(32),
    `date` DATETIME(3),
    `date_till` DATETIME(3),
    `Tournament` VARCHAR(32),
    `CreatedBy` VARCHAR(32),

    UNIQUE INDEX `Tourney.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Tournament`(`Tournament`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TourneyPlayer` (
    `id` VARCHAR(32) NOT NULL,
    `User` VARCHAR(32),
    `Tourney` VARCHAR(32),

    INDEX `Tourney`(`Tourney`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserGroup` (
    `id` VARCHAR(32) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserTechnology` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `components` MEDIUMTEXT,
    `date_from` DATETIME(3),
    `date_till` DATETIME(3),
    `status` VARCHAR(191),
    `CreatedBy` VARCHAR(32),
    `Technology` VARCHAR(32),
    `level` INTEGER,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Technology`(`Technology`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vote` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `value` DECIMAL(65, 30) NOT NULL,
    `Resource` VARCHAR(32),
    `User` VARCHAR(32),

    INDEX `Resource`(`Resource`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `World` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` MEDIUMTEXT NOT NULL,
    `seed` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `time` DECIMAL(65, 30) NOT NULL,
    `timeChanger` DECIMAL(65, 30),
    `days` INTEGER NOT NULL,
    `lastPlayed` DATETIME(3) NOT NULL,
    `CreatedBy` VARCHAR(32),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ChatRoomsMembers` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_ChatRoomsMembers_AB_unique`(`A`, `B`),
    INDEX `_ChatRoomsMembers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GameUsers` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_GameUsers_AB_unique`(`A`, `B`),
    INDEX `_GameUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PositionUsers` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_PositionUsers_AB_unique`(`A`, `B`),
    INDEX `_PositionUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PrismaProjectUsers` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_PrismaProjectUsers_AB_unique`(`A`, `B`),
    INDEX `_PrismaProjectUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserGroups` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_UserGroups_AB_unique`(`A`, `B`),
    INDEX `_UserGroups_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserNotificationTypes` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_UserNotificationTypes_AB_unique`(`A`, `B`),
    INDEX `_UserNotificationTypes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EthBlockToEthBlock` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_EthBlockToEthBlock_AB_unique`(`A`, `B`),
    INDEX `_EthBlockToEthBlock_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GameToTeam` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_GameToTeam_AB_unique`(`A`, `B`),
    INDEX `_GameToTeam_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectCustomers` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_ProjectCustomers_AB_unique`(`A`, `B`),
    INDEX `_ProjectCustomers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectMemberServices` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_ProjectMemberServices_AB_unique`(`A`, `B`),
    INDEX `_ProjectMemberServices_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RelatedTasks` (
    `A` VARCHAR(32) NOT NULL,
    `B` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `_RelatedTasks_AB_unique`(`A`, `B`),
    INDEX `_RelatedTasks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `CreatedBy` ON `File`(`CreatedBy`);

-- CreateIndex
CREATE INDEX `Gallery` ON `File`(`Gallery`);

-- CreateIndex
CREATE INDEX `ImageResource` ON `File`(`ImageResource`);

-- CreateIndex
CREATE UNIQUE INDEX `User.oldID_unique` ON `User`(`oldID`);

-- CreateIndex
CREATE INDEX `CreatedBy` ON `User`(`CreatedBy`);

-- CreateIndex
CREATE INDEX `EthAccountAuthed` ON `User`(`EthAccountAuthed`);

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`EthAccountAuthed`) REFERENCES `EthAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD FOREIGN KEY (`Gallery`) REFERENCES `Gallery`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD FOREIGN KEY (`ImageResource`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Block` ADD FOREIGN KEY (`world`) REFERENCES `World`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CallRequest` ADD FOREIGN KEY (`Called`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CallRequest` ADD FOREIGN KEY (`Caller`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CallRequest` ADD FOREIGN KEY (`Room`) REFERENCES `ChatRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Career` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD FOREIGN KEY (`Room`) REFERENCES `ChatRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessageReaded` ADD FOREIGN KEY (`Message`) REFERENCES `ChatMessage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessageReaded` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoom` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomInvitation` ADD FOREIGN KEY (`ChatRoom`) REFERENCES `ChatRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomInvitation` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomInvitation` ADD FOREIGN KEY (`Notice`) REFERENCES `Notice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoomInvitation` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallenge` ADD FOREIGN KEY (`Block`) REFERENCES `CodeChallengeBlock`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallenge` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallenge` ADD FOREIGN KEY (`Topic`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallengeBlock` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallengeBlock` ADD FOREIGN KEY (`Parent`) REFERENCES `CodeChallengeBlock`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallengeCompletion` ADD FOREIGN KEY (`CodeChallenge`) REFERENCES `CodeChallenge`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallengeCompletion` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeChallengeCompletion` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD FOREIGN KEY (`TechnologyLesson`) REFERENCES `TechnologyLesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthAccount` ADD FOREIGN KEY (`ContractSource`) REFERENCES `EthContractSource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthAccount` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthAccount` ADD FOREIGN KEY (`Project`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthBlock` ADD FOREIGN KEY (`Miner`) REFERENCES `EthAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthContractSource` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthTransaction` ADD FOREIGN KEY (`Account`) REFERENCES `EthAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthTransaction` ADD FOREIGN KEY (`Block`) REFERENCES `EthBlock`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthTransaction` ADD FOREIGN KEY (`Receiver`) REFERENCES `EthAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EthTransaction` ADD FOREIGN KEY (`Sender`) REFERENCES `EthAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gallery` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gallery` ADD FOREIGN KEY (`Resource`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Game` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Game` ADD FOREIGN KEY (`Parent`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Game` ADD FOREIGN KEY (`Tourney`) REFERENCES `Tourney`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameResult` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameResult` ADD FOREIGN KEY (`Game`) REFERENCES `Game`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameResult` ADD FOREIGN KEY (`Team`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameResult` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Import` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LetsadsSmsMessageStatusItem` ADD FOREIGN KEY (`Status`) REFERENCES `LetsadsSmsMessageStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Letter` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Log` ADD FOREIGN KEY (`Import`) REFERENCES `Import`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LogedIn` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD FOREIGN KEY (`world`) REFERENCES `World`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notice` ADD FOREIGN KEY (`ChatMessage`) REFERENCES `ChatMessage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notice` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notice` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotificationType` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Player` ADD FOREIGN KEY (`inventory`) REFERENCES `Inventory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Player` ADD FOREIGN KEY (`user`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Player` ADD FOREIGN KEY (`world`) REFERENCES `World`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Position` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`ChatRoom`) REFERENCES `ChatRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`Image`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`Resource`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`Team`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectMember` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectMember` ADD FOREIGN KEY (`Project`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectMember` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTask` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTask` ADD FOREIGN KEY (`Project`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTask` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResetPassword` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`Blog`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`EthAccount`) REFERENCES `EthAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`Parent`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`PrismaProject`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`Service`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`Team`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resource` ADD FOREIGN KEY (`Topic`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResourceTag` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResourceTag` ADD FOREIGN KEY (`Resource`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResourceTag` ADD FOREIGN KEY (`Tag`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Route` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Route` ADD FOREIGN KEY (`Parent`) REFERENCES `Route`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD FOREIGN KEY (`Category`) REFERENCES `ServiceCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD FOREIGN KEY (`Parent`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceCategory` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceCategory` ADD FOREIGN KEY (`Parent`) REFERENCES `ServiceCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Settings` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SmsMessage` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SmsMessage` ADD FOREIGN KEY (`Provider`) REFERENCES `SmsProvider`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SmsMessage` ADD FOREIGN KEY (`Status`) REFERENCES `LetsadsSmsMessageStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SmsMessage_recipients` ADD FOREIGN KEY (`nodeId`) REFERENCES `SmsMessage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SmsProvider` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD FOREIGN KEY (`ChatRoom`) REFERENCES `ChatRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD FOREIGN KEY (`Parent`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskMember` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskMember` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskMember` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskReaction` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskReaction` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTechnology` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTechnology` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTechnology` ADD FOREIGN KEY (`Technology`) REFERENCES `Technology`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD FOREIGN KEY (`Parent`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD FOREIGN KEY (`Team`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Technology` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLesson` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLesson` ADD FOREIGN KEY (`Technology`) REFERENCES `Technology`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLessonUser` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLessonUser` ADD FOREIGN KEY (`Lesson`) REFERENCES `TechnologyLesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD FOREIGN KEY (`Parent`) REFERENCES `Template`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD FOREIGN KEY (`PrismaProject`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD FOREIGN KEY (`Project`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Test` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Timer` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Timer` ADD FOREIGN KEY (`Task`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tournament` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tournament` ADD FOREIGN KEY (`Group`) REFERENCES `TournamentGroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TournamentGroup` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tourney` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tourney` ADD FOREIGN KEY (`Tournament`) REFERENCES `Tournament`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TourneyPlayer` ADD FOREIGN KEY (`Tourney`) REFERENCES `Tourney`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TourneyPlayer` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTechnology` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTechnology` ADD FOREIGN KEY (`Technology`) REFERENCES `Technology`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD FOREIGN KEY (`Resource`) REFERENCES `Resource`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `World` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ChatRoomsMembers` ADD FOREIGN KEY (`A`) REFERENCES `ChatRoom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ChatRoomsMembers` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameUsers` ADD FOREIGN KEY (`A`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameUsers` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PositionUsers` ADD FOREIGN KEY (`A`) REFERENCES `Position`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PositionUsers` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PrismaProjectUsers` ADD FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PrismaProjectUsers` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserGroups` ADD FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserGroups` ADD FOREIGN KEY (`B`) REFERENCES `UserGroup`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserNotificationTypes` ADD FOREIGN KEY (`A`) REFERENCES `NotificationType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserNotificationTypes` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EthBlockToEthBlock` ADD FOREIGN KEY (`A`) REFERENCES `EthBlock`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EthBlockToEthBlock` ADD FOREIGN KEY (`B`) REFERENCES `EthBlock`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameToTeam` ADD FOREIGN KEY (`A`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GameToTeam` ADD FOREIGN KEY (`B`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectCustomers` ADD FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectCustomers` ADD FOREIGN KEY (`B`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectMemberServices` ADD FOREIGN KEY (`A`) REFERENCES `ProjectMember`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectMemberServices` ADD FOREIGN KEY (`B`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RelatedTasks` ADD FOREIGN KEY (`A`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RelatedTasks` ADD FOREIGN KEY (`B`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
