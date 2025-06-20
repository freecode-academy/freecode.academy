/*
  Warnings:

  - You are about to drop the column `allowAnonymous` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `sandbox` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `Import` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `oldID` on the `NotificationType` table. All the data in the column will be lost.
  - You are about to drop the column `ChatRoom` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `oldID` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `sequence` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `about` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `acceptChatMessageOldAnonymous` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `acceptNewChatRoom` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `acceptNewChatRoomAnonymous` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `marketplaceToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `oldID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AiAgent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Block` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CallRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatMessageOldReaded` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatRoomInvitation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Donate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EthAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EthBlock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EthContractSource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EthTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GameResult` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Import` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LetsadsSmsMessageStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LetsadsSmsMessageStatusItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LogedIn` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Route` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SmsMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SmsMessage_recipients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SmsProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tournament` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TournamentGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tourney` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TourneyPlayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `World` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChatRoomsMembers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EthBlockToEthBlock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GameToTeam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GameUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserGroups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserNotificationTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `AiAgent` DROP FOREIGN KEY `AiAgent_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Block` DROP FOREIGN KEY `Block_world_fkey`;

-- DropForeignKey
ALTER TABLE `CallRequest` DROP FOREIGN KEY `CallRequest_Called_fkey`;

-- DropForeignKey
ALTER TABLE `CallRequest` DROP FOREIGN KEY `CallRequest_Caller_fkey`;

-- DropForeignKey
ALTER TABLE `CallRequest` DROP FOREIGN KEY `CallRequest_Room_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessageOld` DROP FOREIGN KEY `ChatMessageOld_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessageOld` DROP FOREIGN KEY `ChatMessageOld_toUser_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessageOldReaded` DROP FOREIGN KEY `ChatMessageOldReaded_Message_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessageOldReaded` DROP FOREIGN KEY `ChatMessageOldReaded_User_fkey`;

-- DropForeignKey
ALTER TABLE `ChatRoom` DROP FOREIGN KEY `ChatRoom_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `ChatRoomInvitation` DROP FOREIGN KEY `ChatRoomInvitation_ChatRoom_fkey`;

-- DropForeignKey
ALTER TABLE `ChatRoomInvitation` DROP FOREIGN KEY `ChatRoomInvitation_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `ChatRoomInvitation` DROP FOREIGN KEY `ChatRoomInvitation_Notice_fkey`;

-- DropForeignKey
ALTER TABLE `ChatRoomInvitation` DROP FOREIGN KEY `ChatRoomInvitation_User_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_TechnologyLesson_fkey`;

-- DropForeignKey
ALTER TABLE `Donate` DROP FOREIGN KEY `Donate_donatorId_fkey`;

-- DropForeignKey
ALTER TABLE `EthAccount` DROP FOREIGN KEY `EthAccount_ContractSource_fkey`;

-- DropForeignKey
ALTER TABLE `EthAccount` DROP FOREIGN KEY `EthAccount_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `EthAccount` DROP FOREIGN KEY `EthAccount_Project_fkey`;

-- DropForeignKey
ALTER TABLE `EthBlock` DROP FOREIGN KEY `EthBlock_Miner_fkey`;

-- DropForeignKey
ALTER TABLE `EthContractSource` DROP FOREIGN KEY `EthContractSource_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `EthTransaction` DROP FOREIGN KEY `EthTransaction_Account_fkey`;

-- DropForeignKey
ALTER TABLE `EthTransaction` DROP FOREIGN KEY `EthTransaction_Block_fkey`;

-- DropForeignKey
ALTER TABLE `EthTransaction` DROP FOREIGN KEY `EthTransaction_Receiver_fkey`;

-- DropForeignKey
ALTER TABLE `EthTransaction` DROP FOREIGN KEY `EthTransaction_Sender_fkey`;

-- DropForeignKey
ALTER TABLE `File` DROP FOREIGN KEY `File_Gallery_fkey`;

-- DropForeignKey
ALTER TABLE `Gallery` DROP FOREIGN KEY `Gallery_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Gallery` DROP FOREIGN KEY `Gallery_Resource_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_Parent_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_Tourney_fkey`;

-- DropForeignKey
ALTER TABLE `GameResult` DROP FOREIGN KEY `GameResult_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `GameResult` DROP FOREIGN KEY `GameResult_Game_fkey`;

-- DropForeignKey
ALTER TABLE `GameResult` DROP FOREIGN KEY `GameResult_Team_fkey`;

-- DropForeignKey
ALTER TABLE `GameResult` DROP FOREIGN KEY `GameResult_User_fkey`;

-- DropForeignKey
ALTER TABLE `Import` DROP FOREIGN KEY `Import_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `LetsadsSmsMessageStatusItem` DROP FOREIGN KEY `LetsadsSmsMessageStatusItem_Status_fkey`;

-- DropForeignKey
ALTER TABLE `Letter` DROP FOREIGN KEY `Letter_User_fkey`;

-- DropForeignKey
ALTER TABLE `Log` DROP FOREIGN KEY `Log_Import_fkey`;

-- DropForeignKey
ALTER TABLE `LogedIn` DROP FOREIGN KEY `LogedIn_User_fkey`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_world_fkey`;

-- DropForeignKey
ALTER TABLE `Notice` DROP FOREIGN KEY `Notice_ChatMessageOld_fkey`;

-- DropForeignKey
ALTER TABLE `Notice` DROP FOREIGN KEY `Notice_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Notice` DROP FOREIGN KEY `Notice_User_fkey`;

-- DropForeignKey
ALTER TABLE `NotificationType` DROP FOREIGN KEY `NotificationType_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Player` DROP FOREIGN KEY `Player_inventory_fkey`;

-- DropForeignKey
ALTER TABLE `Player` DROP FOREIGN KEY `Player_user_fkey`;

-- DropForeignKey
ALTER TABLE `Player` DROP FOREIGN KEY `Player_world_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_ChatRoom_fkey`;

-- DropForeignKey
ALTER TABLE `Resource` DROP FOREIGN KEY `Resource_EthAccount_fkey`;

-- DropForeignKey
ALTER TABLE `Route` DROP FOREIGN KEY `Route_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Route` DROP FOREIGN KEY `Route_Parent_fkey`;

-- DropForeignKey
ALTER TABLE `Service` DROP FOREIGN KEY `Service_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `ServiceCategory` DROP FOREIGN KEY `ServiceCategory_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Settings` DROP FOREIGN KEY `Settings_User_fkey`;

-- DropForeignKey
ALTER TABLE `SmsMessage` DROP FOREIGN KEY `SmsMessage_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `SmsMessage` DROP FOREIGN KEY `SmsMessage_Provider_fkey`;

-- DropForeignKey
ALTER TABLE `SmsMessage` DROP FOREIGN KEY `SmsMessage_Status_fkey`;

-- DropForeignKey
ALTER TABLE `SmsMessage_recipients` DROP FOREIGN KEY `SmsMessage_recipients_nodeId_fkey`;

-- DropForeignKey
ALTER TABLE `SmsProvider` DROP FOREIGN KEY `SmsProvider_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Template` DROP FOREIGN KEY `Template_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Template` DROP FOREIGN KEY `Template_Parent_fkey`;

-- DropForeignKey
ALTER TABLE `Template` DROP FOREIGN KEY `Template_PrismaProject_fkey`;

-- DropForeignKey
ALTER TABLE `Template` DROP FOREIGN KEY `Template_Project_fkey`;

-- DropForeignKey
ALTER TABLE `Tournament` DROP FOREIGN KEY `Tournament_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Tournament` DROP FOREIGN KEY `Tournament_Group_fkey`;

-- DropForeignKey
ALTER TABLE `TournamentGroup` DROP FOREIGN KEY `TournamentGroup_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Tourney` DROP FOREIGN KEY `Tourney_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Tourney` DROP FOREIGN KEY `Tourney_Tournament_fkey`;

-- DropForeignKey
ALTER TABLE `TourneyPlayer` DROP FOREIGN KEY `TourneyPlayer_Tourney_fkey`;

-- DropForeignKey
ALTER TABLE `TourneyPlayer` DROP FOREIGN KEY `TourneyPlayer_User_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_EthAccountAuthed_fkey`;

-- DropForeignKey
ALTER TABLE `Vote` DROP FOREIGN KEY `Vote_User_fkey`;

-- DropForeignKey
ALTER TABLE `World` DROP FOREIGN KEY `World_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `_ChatRoomsMembers` DROP FOREIGN KEY `_ChatRoomsMembers_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_ChatRoomsMembers` DROP FOREIGN KEY `_ChatRoomsMembers_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_EthBlockToEthBlock` DROP FOREIGN KEY `_EthBlockToEthBlock_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_EthBlockToEthBlock` DROP FOREIGN KEY `_EthBlockToEthBlock_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_GameToTeam` DROP FOREIGN KEY `_GameToTeam_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_GameToTeam` DROP FOREIGN KEY `_GameToTeam_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_GameUsers` DROP FOREIGN KEY `_GameUsers_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_GameUsers` DROP FOREIGN KEY `_GameUsers_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_UserGroups` DROP FOREIGN KEY `_UserGroups_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_UserGroups` DROP FOREIGN KEY `_UserGroups_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_UserNotificationTypes` DROP FOREIGN KEY `_UserNotificationTypes_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_UserNotificationTypes` DROP FOREIGN KEY `_UserNotificationTypes_ibfk_2`;

-- DropIndex
DROP INDEX `NotificationType_oldID_key` ON `NotificationType`;

-- DropIndex
DROP INDEX `Project_oldID_key` ON `Project`;

-- DropIndex
DROP INDEX `Project_sequence_key` ON `Project`;

-- DropIndex
DROP INDEX `User_oldID_key` ON `User`;

-- AlterTable
ALTER TABLE `ChatRoom` DROP COLUMN `allowAnonymous`,
    DROP COLUMN `sandbox`;

-- AlterTable
ALTER TABLE `Log` DROP COLUMN `Import`;

-- AlterTable
ALTER TABLE `NotificationType` DROP COLUMN `oldID`;

-- AlterTable
ALTER TABLE `Project` DROP COLUMN `ChatRoom`,
    DROP COLUMN `oldID`,
    DROP COLUMN `sequence`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `about`,
    DROP COLUMN `acceptChatMessageOldAnonymous`,
    DROP COLUMN `acceptNewChatRoom`,
    DROP COLUMN `acceptNewChatRoomAnonymous`,
    DROP COLUMN `marketplaceToken`,
    DROP COLUMN `oldID`,
    MODIFY `content` MEDIUMTEXT NOT NULL DEFAULT '',
    MODIFY `intro` TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `AiAgent`;

-- DropTable
DROP TABLE `Block`;

-- DropTable
DROP TABLE `CallRequest`;

-- DropTable
DROP TABLE `ChatMessageOldReaded`;

-- DropTable
DROP TABLE `ChatRoomInvitation`;

-- DropTable
DROP TABLE `Comment`;

-- DropTable
DROP TABLE `Donate`;

-- DropTable
DROP TABLE `EthAccount`;

-- DropTable
DROP TABLE `EthBlock`;

-- DropTable
DROP TABLE `EthContractSource`;

-- DropTable
DROP TABLE `EthTransaction`;

-- DropTable
DROP TABLE `Gallery`;

-- DropTable
DROP TABLE `Game`;

-- DropTable
DROP TABLE `GameResult`;

-- DropTable
DROP TABLE `Import`;

-- DropTable
DROP TABLE `Inventory`;

-- DropTable
DROP TABLE `LetsadsSmsMessageStatus`;

-- DropTable
DROP TABLE `LetsadsSmsMessageStatusItem`;

-- DropTable
DROP TABLE `LogedIn`;

-- DropTable
DROP TABLE `Message`;

-- DropTable
DROP TABLE `Notice`;

-- DropTable
DROP TABLE `Player`;

-- DropTable
DROP TABLE `Route`;

-- DropTable
DROP TABLE `Settings`;

-- DropTable
DROP TABLE `SmsMessage`;

-- DropTable
DROP TABLE `SmsMessage_recipients`;

-- DropTable
DROP TABLE `SmsProvider`;

-- DropTable
DROP TABLE `Template`;

-- DropTable
DROP TABLE `Tournament`;

-- DropTable
DROP TABLE `TournamentGroup`;

-- DropTable
DROP TABLE `Tourney`;

-- DropTable
DROP TABLE `TourneyPlayer`;

-- DropTable
DROP TABLE `UserGroup`;

-- DropTable
DROP TABLE `World`;

-- DropTable
DROP TABLE `_ChatRoomsMembers`;

-- DropTable
DROP TABLE `_EthBlockToEthBlock`;

-- DropTable
DROP TABLE `_GameToTeam`;

-- DropTable
DROP TABLE `_GameUsers`;

-- DropTable
DROP TABLE `_UserGroups`;

-- DropTable
DROP TABLE `_UserNotificationTypes`;
