/*
  Warnings:

  - You are about to drop the column `ChatMessage` on the `Notice` table. All the data in the column will be lost.
  - The values [ChatMessage] on the enum `Notice_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `acceptChatMessageAnonymous` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ChatMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatMessageReaded` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ChatMessage` DROP FOREIGN KEY `ChatMessage_CreatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessage` DROP FOREIGN KEY `ChatMessage_Room_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessage` DROP FOREIGN KEY `ChatMessage_toUser_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessageReaded` DROP FOREIGN KEY `ChatMessageReaded_Message_fkey`;

-- DropForeignKey
ALTER TABLE `ChatMessageReaded` DROP FOREIGN KEY `ChatMessageReaded_User_fkey`;

-- DropForeignKey
ALTER TABLE `Notice` DROP FOREIGN KEY `Notice_ChatMessage_fkey`;

-- AlterTable
ALTER TABLE `Notice` DROP COLUMN `ChatMessage`,
    ADD COLUMN `ChatMessageOld` VARCHAR(32) NULL,
    MODIFY `type` ENUM('ChatMessageOld', 'Call', 'CallRequest', 'ChatRoomInvitation') NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `acceptChatMessageAnonymous`,
    ADD COLUMN `acceptChatMessageOldAnonymous` BOOLEAN NULL;

-- DropTable
DROP TABLE `ChatMessage`;

-- DropTable
DROP TABLE `ChatMessageReaded`;

-- CreateTable
CREATE TABLE `ChatMessageOld` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `content` JSON NULL,
    `contentText` MEDIUMTEXT NULL,
    `CreatedBy` VARCHAR(32) NULL,
    `Room` VARCHAR(32) NULL,
    `toUser` VARCHAR(32) NULL,

    INDEX `CreatedBy`(`CreatedBy`),
    INDEX `Room`(`Room`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessageOldReaded` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Message` VARCHAR(32) NULL,
    `User` VARCHAR(32) NULL,

    INDEX `Message`(`Message`),
    INDEX `User`(`User`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `ChatMessageOld` ON `Notice`(`ChatMessageOld`);

-- AddForeignKey
ALTER TABLE `ChatMessageOld` ADD CONSTRAINT `ChatMessageOld_CreatedBy_fkey` FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessageOld` ADD CONSTRAINT `ChatMessageOld_Room_fkey` FOREIGN KEY (`Room`) REFERENCES `ChatRoom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessageOld` ADD CONSTRAINT `ChatMessageOld_toUser_fkey` FOREIGN KEY (`toUser`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessageOldReaded` ADD CONSTRAINT `ChatMessageOldReaded_Message_fkey` FOREIGN KEY (`Message`) REFERENCES `ChatMessageOld`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessageOldReaded` ADD CONSTRAINT `ChatMessageOldReaded_User_fkey` FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notice` ADD CONSTRAINT `Notice_ChatMessageOld_fkey` FOREIGN KEY (`ChatMessageOld`) REFERENCES `ChatMessageOld`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
