/*
  Warnings:

  - You are about to alter the column `level` on the `TaskTechnology` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedTinyInt`.
  - You are about to alter the column `level` on the `UserTechnology` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedTinyInt`.

*/
-- AlterTable
ALTER TABLE `TaskTechnology` MODIFY `level` TINYINT UNSIGNED;

-- AlterTable
ALTER TABLE `Technology` ADD COLUMN `level1hours` INTEGER UNSIGNED,
    ADD COLUMN `level2hours` INTEGER UNSIGNED,
    ADD COLUMN `level3hours` INTEGER UNSIGNED,
    ADD COLUMN `level4hours` INTEGER UNSIGNED,
    ADD COLUMN `level5hours` INTEGER UNSIGNED;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `technologyLevel` TINYINT UNSIGNED;

-- AlterTable
ALTER TABLE `UserTechnology` MODIFY `level` TINYINT UNSIGNED;

-- CreateTable
CREATE TABLE `LearnStrategy` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191),
    `level` TINYINT UNSIGNED NOT NULL,
    `createdById` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LearnStrategyStage` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `learnStrategyId` VARCHAR(32) NOT NULL,
    `learnStrategyTargetId` VARCHAR(32),
    `technologyId` VARCHAR(32),
    `level` TINYINT UNSIGNED,

    UNIQUE INDEX `LearnStrategyStage.learnStrategyId_learnStrategyTargetId_unique`(`learnStrategyId`, `learnStrategyTargetId`),
    UNIQUE INDEX `LearnStrategyStage.learnStrategyId_technologyId_unique`(`learnStrategyId`, `technologyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLearnStrategy` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdById` VARCHAR(32) NOT NULL,
    `learnStrategyId` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `UserLearnStrategy.createdById_learnStrategyId_unique`(`createdById`, `learnStrategyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LearnStrategy` ADD FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LearnStrategyStage` ADD FOREIGN KEY (`learnStrategyId`) REFERENCES `LearnStrategy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LearnStrategyStage` ADD FOREIGN KEY (`learnStrategyTargetId`) REFERENCES `LearnStrategy`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LearnStrategyStage` ADD FOREIGN KEY (`technologyId`) REFERENCES `Technology`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserLearnStrategy` ADD FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserLearnStrategy` ADD FOREIGN KEY (`learnStrategyId`) REFERENCES `LearnStrategy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
