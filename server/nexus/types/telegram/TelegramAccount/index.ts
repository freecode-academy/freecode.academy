import { objectType } from 'nexus'

export const TelegramAccount = objectType({
  name: 'TelegramAccount',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.string('photo_url')
    t.nonNull.id('userId')
  },
})

// model TelegramAccount {
//   id        String   @id @default(cuid()) @db.VarChar(32)
//   createdAt DateTime @default(now()) @db.Timestamp(3)
//   updatedAt DateTime @default(now()) @updatedAt @db.Timestamp(3)

//   externalKey String    @unique
//   first_name  String?
//   last_name   String?
//   username    String?
//   photo_url   String?
//   auth_date   DateTime? @db.Timestamp(0)

//   userId String @unique @db.VarChar(32)
//   User   User   @relation(fields: [userId], references: [id])
// }
