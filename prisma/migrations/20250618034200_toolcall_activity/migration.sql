-- AlterTable
ALTER TABLE `Activity` MODIFY `type` ENUM('UserCreated', 'UrlChanged', 'SendMessaged', 'MindLog', 'ToolCall') NOT NULL,
    MODIFY `data` TEXT NULL;
