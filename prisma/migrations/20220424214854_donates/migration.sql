-- CreateTable
CREATE TABLE `Donate` (
    `id` VARCHAR(32) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date` DATETIME(3) NOT NULL,
    `sum` DOUBLE NOT NULL,
    `title` VARCHAR(191),
    `donatorId` VARCHAR(32),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Donate` ADD FOREIGN KEY (`donatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;