/*
  Warnings:

  - The values [Reasoning,Intention,Progress,Confirmation,Refutation,Suggestion,OptimizedMemory,ForgottenMemory,ChunkedKnowledge,ReinforcedAction,Mentoring,Guidance,ProcessSummary] on the enum `MindLog_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_userId_fkey`;

-- DropIndex
DROP INDEX `ChatMessageOld_toUser_fkey` ON `ChatMessageOld`;

-- AlterTable
ALTER TABLE `ChatMessage` ADD COLUMN `usage` JSON NULL;

-- AlterTable
ALTER TABLE `MindLog` MODIFY `type` ENUM('Stimulus', 'Reaction', 'Action', 'Result', 'Conclusion', 'Evaluation', 'Correction', 'Knowledge') NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `content` MEDIUMTEXT NOT NULL DEFAULT '',
    MODIFY `intro` TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `Activity`;
