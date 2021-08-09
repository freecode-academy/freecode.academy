/*
  Warnings:

  - The primary key for the `File` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdById` on the `File` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `File` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `Char(25)`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `showFullname` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `Char(25)`.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[oldID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `File` DROP FOREIGN KEY `File_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Token` DROP FOREIGN KEY `Token_ibfk_1`;

-- DropIndex
DROP INDEX `User.email_unique` ON `User`;

-- DropIndex
DROP INDEX `User.username_unique` ON `User`;

-- AlterTable
ALTER TABLE `File` DROP PRIMARY KEY,
    DROP COLUMN `createdById`,
    ADD COLUMN `CreatedBy` CHAR(25),
    ADD COLUMN `Gallery` CHAR(25),
    ADD COLUMN `ImageResource` CHAR(25),
    ADD COLUMN `hash` MEDIUMTEXT,
    MODIFY `id` CHAR(25) NOT NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `filename` MEDIUMTEXT,
    MODIFY `name` MEDIUMTEXT,
    MODIFY `mimetype` MEDIUMTEXT NOT NULL,
    MODIFY `encoding` MEDIUMTEXT NOT NULL,
    MODIFY `size` DECIMAL(65, 30),
    MODIFY `rank` INTEGER,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `showFullname`,
    ADD COLUMN `CreatedBy` CHAR(25),
    ADD COLUMN `EthAccountAuthed` CHAR(25),
    ADD COLUMN `acceptChatMessageAnonymous` BOOLEAN,
    ADD COLUMN `acceptNewChatRoom` BOOLEAN,
    ADD COLUMN `acceptNewChatRoomAnonymous` BOOLEAN,
    ADD COLUMN `activated` BOOLEAN,
    ADD COLUMN `address` MEDIUMTEXT,
    ADD COLUMN `deleted` BOOLEAN,
    ADD COLUMN `hidden` BOOLEAN,
    ADD COLUMN `marketplaceToken` MEDIUMTEXT,
    ADD COLUMN `oldID` INTEGER,
    ADD COLUMN `phone` MEDIUMTEXT,
    ADD COLUMN `showPhone` BOOLEAN,
    MODIFY `id` CHAR(25) NOT NULL,
    MODIFY `username` MEDIUMTEXT,
    MODIFY `email` MEDIUMTEXT,
    MODIFY `fullname` MEDIUMTEXT,
    MODIFY `password` MEDIUMTEXT,
    MODIFY `active` BOOLEAN,
    MODIFY `sudo` BOOLEAN,
    MODIFY `createdAt` DATETIME(3) NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `showEmail` BOOLEAN,
    MODIFY `image` MEDIUMTEXT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Token`;

-- CreateTable
CREATE TABLE `Block` (
    `id` CHAR(25) NOT NULL,
    `representation` MEDIUMTEXT NOT NULL,
    `type` INTEGER NOT NULL,
    `x` INTEGER NOT NULL,
    `y` INTEGER NOT NULL,
    `z` INTEGER NOT NULL,
    `world` CHAR(25),

    INDEX `world`(`world`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CallRequest` (
    `id` CHAR(25) NOT NULL,
    `called_descriptions` MEDIUMTEXT NOT NULL,
    `caller_descriptions` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191),
    `startedAt` DATETIME(3),
    `endedAt` DATETIME(3),
    `Room` CHAR(25),
    `Called` CHAR(25),
    `Caller` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Called`(`Called`),
    INDEX `Caller`(`Caller`),
    INDEX `Room`(`Room`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Career` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `start_date` DATETIME(3),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessage` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `content` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `CreatedBy` CHAR(25),
    `Room` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Room`(`Room`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessageReaded` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `Message` CHAR(25),
    `User` CHAR(25),

    INDEX `Message`(`Message`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatRoom` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `image` MEDIUMTEXT,
    `code` CHAR(25),
    `isPublic` BOOLEAN,
    `CreatedBy` CHAR(25),
    `allowAnonymous` BOOLEAN,
    `sandbox` BOOLEAN,

    UNIQUE INDEX `ChatRoom.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatRoomInvitation` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `User` CHAR(25),
    `CreatedBy` CHAR(25),
    `ChatRoom` CHAR(25),
    `Notice` CHAR(25),

    INDEX `ChatRoom`(`ChatRoom`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Notice`(`Notice`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeChallenge` (
    `id` CHAR(25) NOT NULL,
    `externalKey` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
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
    `Block` CHAR(25),
    `CreatedBy` CHAR(25),
    `Topic` CHAR(25),

    UNIQUE INDEX `CodeChallenge.externalKey_unique`(`externalKey`),
    INDEX `Block`(`Block`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Topic`(`Topic`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeChallengeBlock` (
    `id` CHAR(25) NOT NULL,
    `externalKey` MEDIUMTEXT,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `rank` INTEGER,
    `CreatedBy` CHAR(25),
    `Parent` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeChallengeCompletion` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `Task` CHAR(25),
    `CreatedBy` CHAR(25),
    `CodeChallenge` CHAR(25),
    `content` MEDIUMTEXT,
    `success` BOOLEAN,

    INDEX `CodeChallenge`(`CodeChallenge`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `components` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `CreatedBy` CHAR(25),
    `TechnologyLesson` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `TechnologyLesson`(`TechnologyLesson`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthAccount` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `address` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(191),
    `source` MEDIUMTEXT,
    `bytecode` MEDIUMTEXT,
    `abi` MEDIUMTEXT,
    `ContractSource` CHAR(25),
    `Project` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `ContractSource`(`ContractSource`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Project`(`Project`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthBlock` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
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
    `Miner` CHAR(25),

    UNIQUE INDEX `EthBlock.number_unique`(`number`),
    INDEX `Miner`(`Miner`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthContractSource` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `source` MEDIUMTEXT,
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthTransaction` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `chainId` INTEGER NOT NULL,
    `amount` DECIMAL(65, 30),
    `input` MEDIUMTEXT,
    `index` INTEGER,
    `address` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(191),
    `v` MEDIUMTEXT,
    `r` MEDIUMTEXT,
    `s` MEDIUMTEXT,
    `Sender` CHAR(25),
    `Block` CHAR(25),
    `Receiver` CHAR(25),
    `Account` CHAR(25),

    INDEX `Account`(`Account`),
    INDEX `Block`(`Block`),
    INDEX `Receiver`(`Receiver`),
    INDEX `Sender`(`Sender`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallery` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT,
    `CreatedBy` CHAR(25),
    `Resource` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Resource`(`Resource`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `start_date` DATETIME(3),
    `end_date` DATETIME(3),
    `sequence` INTEGER,
    `Parent` CHAR(25),
    `CreatedBy` CHAR(25),
    `Tourney` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    INDEX `Tourney`(`Tourney`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GameResult` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `date` DATETIME(3),
    `name` MEDIUMTEXT,
    `value` DECIMAL(65, 30),
    `CreatedBy` CHAR(25),
    `Team` CHAR(25),
    `Game` CHAR(25),
    `User` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Game`(`Game`),
    INDEX `Team`(`Team`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Import` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventory` (
    `id` CHAR(25) NOT NULL,
    `cursor` INTEGER NOT NULL,
    `data` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LetsadsSmsMessageStatus` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191),
    `description` MEDIUMTEXT,
    `errorCode` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LetsadsSmsMessageStatusItem` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `sms_id` INTEGER NOT NULL,
    `Status` CHAR(25),

    UNIQUE INDEX `LetsadsSmsMessageStatusItem.sms_id_unique`(`sms_id`),
    INDEX `Status`(`Status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Letter` (
    `id` CHAR(25) NOT NULL,
    `email` MEDIUMTEXT NOT NULL,
    `subject` MEDIUMTEXT NOT NULL,
    `message` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `rank` INTEGER,
    `deleteOnSend` BOOLEAN,
    `replyTo` MEDIUMTEXT,
    `returnTo` MEDIUMTEXT,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `User` CHAR(25),

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` CHAR(25) NOT NULL,
    `level` VARCHAR(191) NOT NULL,
    `objectType` CHAR(25),
    `message` MEDIUMTEXT NOT NULL,
    `stack` MEDIUMTEXT,
    `Import` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Import`(`Import`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LogedIn` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `fake` BOOLEAN,
    `updatedAt` DATETIME(3) NOT NULL,
    `User` CHAR(25),

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` CHAR(25) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `sender` MEDIUMTEXT,
    `body` MEDIUMTEXT NOT NULL,
    `world` CHAR(25),

    INDEX `world`(`world`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notice` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ChatMessage` CHAR(25),
    `User` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `ChatMessage`(`ChatMessage`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationType` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `code` CHAR(25),
    `comment` MEDIUMTEXT,
    `oldID` INTEGER,
    `CreatedBy` CHAR(25),

    UNIQUE INDEX `NotificationType.code_unique`(`code`),
    UNIQUE INDEX `NotificationType.oldID_unique`(`oldID`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,
    `gamemode` VARCHAR(191) NOT NULL,
    `lastLogin` DATETIME(3),
    `x` DECIMAL(65, 30) NOT NULL,
    `y` DECIMAL(65, 30) NOT NULL,
    `z` DECIMAL(65, 30) NOT NULL,
    `dirx` DECIMAL(65, 30) NOT NULL,
    `diry` DECIMAL(65, 30) NOT NULL,
    `world` CHAR(25),
    `inventory` CHAR(25),
    `user` CHAR(25),

    INDEX `inventory`(`inventory`),
    INDEX `user`(`user`),
    INDEX `world`(`world`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Position` (
    `id` CHAR(25) NOT NULL,
    `code` CHAR(25),
    `name` MEDIUMTEXT NOT NULL,
    `CreatedBy` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Position.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `domain` MEDIUMTEXT,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `description` MEDIUMTEXT,
    `url` MEDIUMTEXT,
    `sequence` INTEGER,
    `content` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `status` VARCHAR(191),
    `public` BOOLEAN,
    `oldID` INTEGER,
    `CreatedBy` CHAR(25),
    `Image` CHAR(25),
    `ChatRoom` CHAR(25),
    `Team` CHAR(25),
    `Resource` CHAR(25),
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
    `id` CHAR(25) NOT NULL,
    `status` VARCHAR(191),
    `User` CHAR(25),
    `CreatedBy` CHAR(25),
    `Project` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Project`(`Project`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectTask` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `Project` CHAR(25),
    `Task` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Project`(`Project`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResetPassword` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `code` CHAR(25),
    `password` MEDIUMTEXT,
    `validTill` DATETIME(3),
    `User` CHAR(25),

    UNIQUE INDEX `ResetPassword.code_unique`(`code`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resource` (
    `id` CHAR(25) NOT NULL,
    `code` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `type` VARCHAR(191),
    `name` MEDIUMTEXT,
    `longtitle` MEDIUMTEXT,
    `content` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `published` BOOLEAN NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `hidemenu` BOOLEAN NOT NULL,
    `searchable` BOOLEAN NOT NULL,
    `uri` MEDIUMTEXT,
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
    `Parent` CHAR(25),
    `Team` CHAR(25),
    `Service` CHAR(25),
    `EthAccount` CHAR(25),
    `PrismaProject` CHAR(25),
    `CreatedBy` CHAR(25),
    `Topic` CHAR(25),
    `Blog` CHAR(25),
    `Task` CHAR(25),

    UNIQUE INDEX `Resource.code_unique`(`code`),
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
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `CreatedBy` CHAR(25),
    `Resource` CHAR(25),
    `Tag` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Resource`(`Resource`),
    INDEX `Tag`(`Tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Route` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT,
    `path` MEDIUMTEXT NOT NULL,
    `exact` BOOLEAN NOT NULL,
    `component` MEDIUMTEXT NOT NULL,
    `CreatedBy` CHAR(25),
    `Parent` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `code` CHAR(25),
    `rank` INTEGER,
    `oldID` INTEGER,
    `Category` CHAR(25),
    `Parent` CHAR(25),
    `CreatedBy` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Service.code_unique`(`code`),
    UNIQUE INDEX `Service.oldID_unique`(`oldID`),
    INDEX `Category`(`Category`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceCategory` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `code` CHAR(25),
    `Parent` CHAR(25),
    `CreatedBy` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ServiceCategory.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` CHAR(25) NOT NULL,
    `renderDistance` INTEGER NOT NULL,
    `User` CHAR(25),

    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SmsMessage` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `from` MEDIUMTEXT NOT NULL,
    `text` MEDIUMTEXT NOT NULL,
    `deletOnSend` BOOLEAN,
    `Status` CHAR(25),
    `CreatedBy` CHAR(25),
    `Provider` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Provider`(`Provider`),
    INDEX `Status`(`Status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SmsMessage_recipients` (
    `nodeId` CHAR(25) NOT NULL,
    `position` INTEGER NOT NULL,
    `value` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`nodeId`, `position`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SmsProvider` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `credentials` MEDIUMTEXT,
    `CreatedBy` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `description` MEDIUMTEXT,
    `content` MEDIUMTEXT,
    `status` VARCHAR(191) NOT NULL,
    `startDatePlaning` DATETIME(3),
    `endDatePlaning` DATETIME(3),
    `startDate` DATETIME(3),
    `endDate` DATETIME(3),
    `CreatedBy` CHAR(25),
    `Parent` CHAR(25),
    `ChatRoom` CHAR(25),
    `needHelp` BOOLEAN,

    INDEX `ChatRoom`(`ChatRoom`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskMember` (
    `id` CHAR(25) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `Task` CHAR(25),
    `User` CHAR(25),
    `CreatedBy` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskReaction` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `type` VARCHAR(191),
    `Task` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskTechnology` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `level` INTEGER,
    `Technology` CHAR(25),
    `Task` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    INDEX `Technology`(`Technology`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `oldID` INTEGER,
    `address` MEDIUMTEXT,
    `website` MEDIUMTEXT,
    `email` MEDIUMTEXT,
    `phone` MEDIUMTEXT,
    `CreatedBy` CHAR(25),
    `Parent` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Team.oldID_unique`(`oldID`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeamMember` (
    `id` CHAR(25) NOT NULL,
    `status` VARCHAR(191),
    `User` CHAR(25),
    `Team` CHAR(25),
    `CreatedBy` CHAR(25),
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Team`(`Team`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Technology` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `components` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `site_url` MEDIUMTEXT,
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TechnologyLesson` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT,
    `components` MEDIUMTEXT,
    `contentText` MEDIUMTEXT,
    `Technology` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Technology`(`Technology`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TechnologyLessonUser` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `status` VARCHAR(191),
    `completedAt` DATETIME(3),
    `Lesson` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Lesson`(`Lesson`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Template` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `externalKey` CHAR(25),
    `name` MEDIUMTEXT,
    `description` MEDIUMTEXT,
    `component` MEDIUMTEXT,
    `props` MEDIUMTEXT,
    `components` MEDIUMTEXT,
    `vars` MEDIUMTEXT,
    `rank` INTEGER,
    `PrismaProject` CHAR(25),
    `Project` CHAR(25),
    `Parent` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Parent`(`Parent`),
    INDEX `PrismaProject`(`PrismaProject`),
    INDEX `Project`(`Project`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `text` MEDIUMTEXT,
    `quantity` DECIMAL(65, 30),
    `date` DATETIME(3),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timer` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `stopedAt` DATETIME(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `Task` CHAR(25),
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Task`(`Task`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tournament` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `code` CHAR(25),
    `CreatedBy` CHAR(25),
    `Group` CHAR(25),

    UNIQUE INDEX `Tournament.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Group`(`Group`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TournamentGroup` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `code` CHAR(25),
    `CreatedBy` CHAR(25),

    UNIQUE INDEX `TournamentGroup.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tourney` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT,
    `code` CHAR(25),
    `date` DATETIME(3),
    `date_till` DATETIME(3),
    `Tournament` CHAR(25),
    `CreatedBy` CHAR(25),

    UNIQUE INDEX `Tourney.code_unique`(`code`),
    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Tournament`(`Tournament`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TourneyPlayer` (
    `id` CHAR(25) NOT NULL,
    `User` CHAR(25),
    `Tourney` CHAR(25),

    INDEX `Tourney`(`Tourney`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserGroup` (
    `id` CHAR(25) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserTechnology` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `components` MEDIUMTEXT,
    `date_from` DATETIME(3),
    `date_till` DATETIME(3),
    `status` VARCHAR(191),
    `CreatedBy` CHAR(25),
    `Technology` CHAR(25),
    `level` INTEGER,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Technology`(`Technology`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vote` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL,
    `Resource` CHAR(25),
    `User` CHAR(25),

    INDEX `Resource`(`Resource`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `World` (
    `id` CHAR(25) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `name` MEDIUMTEXT NOT NULL,
    `seed` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `time` DECIMAL(65, 30) NOT NULL,
    `timeChanger` DECIMAL(65, 30),
    `days` INTEGER NOT NULL,
    `lastPlayed` DATETIME(3) NOT NULL,
    `CreatedBy` CHAR(25),

    INDEX `CreatedBy`(`CreatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ChatRoomsMembers` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_ChatRoomsMembers_AB_unique`(`A`, `B`),
    INDEX `_ChatRoomsMembers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GameUsers` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_GameUsers_AB_unique`(`A`, `B`),
    INDEX `_GameUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PositionUsers` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_PositionUsers_AB_unique`(`A`, `B`),
    INDEX `_PositionUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PrismaProjectUsers` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_PrismaProjectUsers_AB_unique`(`A`, `B`),
    INDEX `_PrismaProjectUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserGroups` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_UserGroups_AB_unique`(`A`, `B`),
    INDEX `_UserGroups_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserNotificationTypes` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_UserNotificationTypes_AB_unique`(`A`, `B`),
    INDEX `_UserNotificationTypes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EthBlockToEthBlock` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_EthBlockToEthBlock_AB_unique`(`A`, `B`),
    INDEX `_EthBlockToEthBlock_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GameToTeam` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_GameToTeam_AB_unique`(`A`, `B`),
    INDEX `_GameToTeam_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectCustomers` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_ProjectCustomers_AB_unique`(`A`, `B`),
    INDEX `_ProjectCustomers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectMemberServices` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

    UNIQUE INDEX `_ProjectMemberServices_AB_unique`(`A`, `B`),
    INDEX `_ProjectMemberServices_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RelatedTasks` (
    `A` CHAR(25) NOT NULL,
    `B` CHAR(25) NOT NULL,

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
