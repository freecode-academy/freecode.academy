-- AlterTable
ALTER TABLE `User` ADD COLUMN `data` JSON NULL,
    ADD COLUMN `type` ENUM('Human', 'AI') NOT NULL DEFAULT 'Human';

-- CreateTable
CREATE TABLE `MindLog` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('Stimulus', 'Reaction', 'Reasoning', 'Intention', 'Action', 'Progress', 'Conclusion', 'Result', 'Confirmation', 'Refutation', 'Correction', 'Evaluation', 'Suggestion', 'OptimizedMemory', 'ForgottenMemory', 'ChunkedKnowledge', 'ReinforcedAction', 'Mentoring', 'Guidance', 'ProcessSummary') NOT NULL,
    `data` TEXT NOT NULL,
    `quality` DOUBLE NULL,
    `createdById` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessage` (
    `id` VARCHAR(36) NOT NULL,
    `text` TEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `mood` DOUBLE NOT NULL DEFAULT 0,
    `assertiveness` DOUBLE NOT NULL DEFAULT 0,
    `intentTone` DOUBLE NOT NULL DEFAULT 0,
    `socialGoal` VARCHAR(191) NULL,
    `tags` VARCHAR(191) NULL,
    `createdBy` VARCHAR(36) NOT NULL,
    `toUserId` VARCHAR(36) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(36) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('UserCreated', 'UrlChanged', 'SendMessaged', 'MindLog') NOT NULL,
    `userId` VARCHAR(36) NOT NULL,
    `data` JSON NULL,

    INDEX `Activity_type_idx`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MindLog` ADD CONSTRAINT `MindLog_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_toUserId_fkey` FOREIGN KEY (`toUserId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
