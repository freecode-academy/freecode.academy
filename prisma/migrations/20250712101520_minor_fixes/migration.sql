-- AlterTable
ALTER TABLE `MindLog` ADD COLUMN `relatedToUserId` VARCHAR(36) NULL,
    MODIFY `type` ENUM('Stimulus', 'Reaction', 'Action', 'Error', 'Result', 'Conclusion', 'Evaluation', 'Correction', 'Knowledge') NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `content` MEDIUMTEXT NULL,
    MODIFY `intro` TEXT NULL;

-- CreateIndex
CREATE INDEX `MindLog_type_idx` ON `MindLog`(`type`);

-- CreateIndex
CREATE INDEX `MindLog_relatedToUserId_idx` ON `MindLog`(`relatedToUserId`);
