import { Prisma } from '@prisma/client'
import moment from 'moment'
import { FieldResolver } from 'nexus'

export const updateUserTechnologyProcessor: FieldResolver<
  'Mutation',
  'updateUserTechnologyProcessor'
> = async (_, args, ctx) => {
  const {
    date_from,
    date_till,
    level,
    components,
    hiring_status,
    status,
    isMentor,
  } = args.data

  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const where = args.where as Prisma.UserTechnologyWhereUniqueInput

  const userTechnologyCurrent = where
    ? await ctx.prisma.userTechnology.findUnique({
        where,
      })
    : null

  if (!userTechnologyCurrent) {
    throw new Error('Не был получен объект')
  }

  if (userTechnologyCurrent.CreatedBy !== currentUserId) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  const updateData: Prisma.UserTechnologyUpdateInput = {
    // date_from: date_from_value,
    // date_till: date_till_value,
    components: components as Prisma.UserTechnologyUpdateInput['components'],
    hiring_status,
    status,
    level,
    isMentor: isMentor !== null ? isMentor : undefined,
  }

  if (date_from !== undefined || date_till !== undefined) {
    const { date_from: date_from_old = null, date_till: date_till_old = null } =
      userTechnologyCurrent || {}

    const date_from_value = date_from !== undefined ? date_from : date_from_old
    const date_till_value = date_till !== undefined ? date_till : date_till_old

    if (date_from && moment(date_from) > moment()) {
      // this.addFieldError("date_from", "Дата С не может быть больше текущей даты");
      throw new Error('Дата С не может быть больше текущей даты')
    }

    if (date_till && moment(date_till) > moment()) {
      // this.addFieldError("date_till", "Дата До не может быть больше текущей даты");
      throw new Error('Дата До не может быть больше текущей даты')
    }

    if (
      date_from_value &&
      date_till_value &&
      moment(date_from_value) > moment(date_till_value)
    ) {
      // this.addFieldError("date_from", "Дата С не может быть больше даты До");
      throw new Error('Дата С не может быть больше даты До')
      // this.addFieldError("date_till", "Дата С не может быть больше даты До");
    } else if (date_till_value && !date_from_value) {
      // this.addFieldError("date_till", "Не заполнена дата С");
      throw new Error('Не заполнена дата С')
      // this.addFieldError("date_from", "Не заполнена дата С");
    }

    if ((!date_from_value && !date_till_value) || date_from_value) {
      updateData.date_from = date_from_value
      updateData.date_till = date_till_value
    }
  }

  const result = await ctx.prisma.userTechnology.update({
    data: updateData,
    where,
  })

  return {
    success: !!result,
    message: '',
    errors: [],
    data: result,
  }
}
