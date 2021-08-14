/* eslint-disable prefer-const */
import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'

import Translit from 'translit'
import TranslitRussian from 'translit-russian'
import URI from 'urijs'

function addSuffix(uri: URI) {
  uri.suffix('html')
}

function translit(word: string) {
  const translit = Translit(TranslitRussian)
  return translit(word)
}

function escapeUri(uri: string) {
  return uri ? uri.replace(/[/?% ]+/g, '-').replace(/-+/g, '-') : ''
}

export function prepareName(args: Prisma.ResourceCreateArgs) {
  let {
    data: { name },
  } = args

  if (name !== undefined) {
    name = (name && name.trim()) || null

    if (!name) {
      // this.addFieldError("name", "Не заполнено название");
      throw new Error('Не заполнено название')
    }
  }

  return name
}

export const prepareUri = async (
  args: Prisma.ResourceCreateArgs,
  cycles = 10,
  ctx: PrismaContext
): Promise<{
  name: string
  uri: string
  isfolder: boolean
}> => {
  let {
    data: { name, uri: uriProps, isfolder = true, Parent },
  } = args

  // console.log(chalk.green("prepareUri uri"), uri);

  name = prepareName(args)

  if (!name) {
    throw new Error('Не заполнено название')
  }

  let uri: URI | string | undefined = uriProps || undefined

  /**
   * Если нет УРИ, генерируем из родителя и алиаса.
   * При этом надо проверять на уникальность
   */
  if (!uri) {
    uri = new URI(escapeUri(name))

    if (Parent) {
      let parent = await ctx.prisma.resource.findUnique({
        where: {
          id: Parent,
        },
      })

      if (parent) {
        let parentUri = new URI(parent.uri)

        // let parentDirname;

        // let parentFilename = parentUri.filename();

        // if(parentFilename){
        //   parentDirname
        // }

        // this.addFieldError("test parentFilename", parentFilename);

        parentUri.suffix('')

        // this.addFieldError("test parentUri", parentUri.path());

        uri.directory(parentUri.path())

        // this.addFieldError("test uri", uri.toString());
      } else {
        throw new Error('Can not get parent resource')
      }
    }

    uri = uri.toString()
  }

  if (uri !== undefined) {
    uri = translit(uri.trim())
      .replace(/[?# ]+/g, '-')
      .toLowerCase()

    uri = new URI(uri)

    // console.log(chalk.green("URL"), uri);

    let segment = uri.segment()

    // console.log(chalk.green("segment"), segment);

    segment = segment
      .map((n) =>
        escapeUri(n)
          .replace(/^-+|-+$/g, '')
          .trim()
      )
      .filter((n) => n)

    // console.log(chalk.green("segment 2"), segment);

    uri.segment(segment)

    let pathname = uri.pathname()

    if (!pathname.startsWith('/')) {
      pathname = `/${pathname}`
    }

    if (!isfolder) {
      let suffix = uri.suffix()

      if (!suffix) {
        addSuffix(uri)
      }
    } else {
      if (!pathname.endsWith('/')) {
        pathname = `${pathname}/`
      }
    }

    uri.pathname(pathname)

    // Проверяем на уникальность
    // const exists = await db.exists.Resource({
    const exists = await ctx.prisma.resource.findFirst({
      where: {
        uri: uri.toString(),
      },
    })

    if (exists) {
      if (cycles === 0) {
        // this.addFieldError("uri", "Ошибка генерации уникального УРЛ. Превышено количество попыток.");
        throw new Error(
          'Ошибка генерации уникального УРЛ. Превышено количество попыток.'
        )
        // return;
      }

      // console.log(chalk.green("exists uri"), uri);

      // this.addFieldError("uri", "test");

      // return this.prepareUri(args);
      let filename = uri.filename()

      if (!filename) {
        // this.addFieldError("uri", "Ошибка генерации уникального УРЛ");
        throw new Error('Ошибка генерации уникального УРЛ')
      } else {
        let suffix = uri.suffix()

        if (suffix) {
          uri.suffix('')

          filename = uri.filename()

          // console.log(chalk.green("Resulted filename 2"), filename);
        }
        // console.log(chalk.green("Resulted match"), match);

        let reg = /(-(\d+)|)$/

        let match = filename.match(reg)

        let index = (match && parseInt(match[2])) || 0

        filename = filename.replace(reg, `-${index + 1}`)

        uri.filename(filename)

        Object.assign(args.data, {
          uri: uri.toString(),
        })

        return prepareUri(args, cycles > 0 ? cycles-- : cycles, ctx)
      }
    }

    uri = URI.decode(uri.toString())
  }

  // console.log(chalk.green("Resulted uri"), uri);

  return {
    name,
    uri,
    isfolder,
  }
}
