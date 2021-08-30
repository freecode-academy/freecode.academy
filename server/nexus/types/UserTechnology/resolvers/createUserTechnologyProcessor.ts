import { Prisma } from '@prisma/client'
// import moment from "moment";
import { FieldResolver } from 'nexus'

export const createUserTechnologyProcessor: FieldResolver<
  'Mutation',
  'createUserTechnologyProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const {
    Technology,
    // date_from,
    // date_till,
    // level,
    // components,
    // hiring_status,
    // status,
  } = args.data

  const Technology_TechnologyToUserTechnology =
    Technology as Prisma.TechnologyCreateNestedOneWithoutUserTechnologyInput

  const createData: Prisma.UserTechnologyCreateInput = {
    // date_from,
    // date_till,
    // level,
    // components,
    // hiring_status,
    // status,
    User: {
      connect: {
        id: currentUserId,
      },
    },
    Technology_TechnologyToUserTechnology,
  }

  // console.log("userTechnology_old", userTechnology_old);

  // if (Technology.connect) {

  /**
   * Проверяем, чтобы у пользователя была только одна запись на одну технологию
   */
  // if (Technology.connect) {

  //   const Technology_TechnologyToUserTechnologyWhere

  //   const exist = await ctx.prisma.userTechnology.findFirst({
  //     where: {
  //       Technology_TechnologyToUserTechnology: {
  //         ...Technology.connect,
  //       },
  //       CreatedBy: {
  //         id: currentUserId,
  //       },
  //     },
  //   });

  //   // console.log("currentUserId", currentUserId);
  //   // console.log("exist", exist);

  //   if (exist) {
  //     this.addError("Данная технология уже указана у пользователя");
  //   }

  // }

  // }

  // if (date_from !== undefined || date_till !== undefined) {

  //   // const {
  //   //   date_from: date_from_old = null,
  //   //   date_till: date_till_old = null,
  //   // } = userTechnology_old || {};

  //   // const date_from_value = date_from !== undefined ? date_from : date_from_old;
  //   // const date_till_value = date_till !== undefined ? date_till : date_till_old;

  //   const date_from_value = date_from !== undefined ? date_from : null;
  //   const date_till_value = date_till !== undefined ? date_till : null;

  //   // console.log("date_from_value", date_from_value);
  //   // console.log("date_till_value", date_till_value);

  //   if (date_from && moment(new Date(date_from)) > moment()) {

  //     // this.addFieldError("date_from", "Дата С не может быть больше текущей даты");
  //     throw new Error("Дата С не может быть больше текущей даты");

  //   }

  //   if (date_till && moment(new Date(date_till)) > moment()) {

  //     // this.addFieldError("date_till", "Дата До не может быть больше текущей даты");
  //     throw new Error("Дата До не может быть больше текущей даты");

  //   }

  //   if (date_from_value && date_till_value && moment(new Date(date_from_value)) > moment(new Date(date_till_value))) {

  //     // this.addFieldError("date_from", "Дата С не может быть больше даты До");
  //     throw new Error("Дата С не может быть больше даты До");
  //     // this.addFieldError("date_till", "Дата С не может быть больше даты До");

  //   }
  //   else if (date_till && !date_from_value) {
  //     // this.addFieldError("date_till", "Не заполнена дата С");
  //     throw new Error("Не заполнена дата С");
  //     // this.addFieldError("date_from", "Не заполнена дата С");
  //   }

  // }

  // Object.assign(data, {
  //   Technology,
  //   date_from,
  //   date_till,
  //   level,
  // });

  // args.data = data;

  const result = await ctx.prisma.userTechnology.create({
    data: createData,
  })

  return {
    success: !!result,
    message: '',
    errors: [],
    data: result,
  }
}
