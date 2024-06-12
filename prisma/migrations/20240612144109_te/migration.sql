-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER NOT NULL,
    `Title` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `BodyPart` VARCHAR(191) NOT NULL,
    `Equipment` VARCHAR(191) NOT NULL,
    `Level` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `video` (
    `id` INTEGER NOT NULL,
    `name_exercise` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `name_equipment` VARCHAR(191) NOT NULL,
    `bodypart` VARCHAR(191) NOT NULL,
    `url_video` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `library` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vidId` INTEGER NOT NULL,
    `name_exercise` VARCHAR(191) NULL,
    `url_video` VARCHAR(191) NULL,
    `bodypart` VARCHAR(191) NULL,
    `name_equipment` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutrition` (
    `id` INTEGER NOT NULL,
    `calories` INTEGER NOT NULL,
    `proteins` DOUBLE NOT NULL,
    `fat` DOUBLE NOT NULL,
    `carbohydrate` DOUBLE NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `library` ADD CONSTRAINT `library_vidId_fkey` FOREIGN KEY (`vidId`) REFERENCES `video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
