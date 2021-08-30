/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-namespace */

import * as chai from 'chai'
import {
  CodeChallengeContext,
  TestResult,
} from 'src/pages/learn/CodeChallenge/Context'
import { ChallengeTestIFrameElement } from '../../../View/Preview/interfaces'
import buildJSChallenge from './buildFunctions/buildJSChallenge'

// @ts-ignore
// eslint-disable-next-line
let previewTask: any

export type executeChallengeProps = {
  context: NonNullable<CodeChallengeContext>
  jquery: any
  document: HTMLDocument | null
}

export default async function* executeCancellableChallengeSaga(
  this: ChallengeTestIFrameElement['contentWindow'],
  props: executeChallengeProps
): AsyncGenerator<TestResult | Error, void, unknown> {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const React = this?.React
  // const { default: React } = await import('react');

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const ReactDOM = this?.ReactDOM
  // const { default: ReactDOM } = await import('react-dom');

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const assert = chai.assert

  /**
   * Внимание! Важно, чтобы в целом на сайте был установлен React-16
   */
  const { default: Enzyme } = await import('enzyme')
  const { default: Adapter16 } = await import('enzyme-adapter-react-16')
  /* eslint-disable no-inline-comments */

  // [{ default: Enzyme }, { default: Adapter16 }] = await Promise.all([
  //   import(/* webpackChunkName: "enzyme" */ 'enzyme'),
  //   import(/* webpackChunkName: "enzyme-adapter" */ 'enzyme-adapter-react-16')
  // ]);
  /* eslint-enable no-inline-comments */

  Enzyme.configure({ adapter: new Adapter16() })
  // }

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const $ = props.jquery

  const context = props.context

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const document = props.document

  const challengeData = context.challengeData

  // console.log('challengeData', challengeData);

  const buildData = await buildJSChallenge(challengeData, true).catch(
    (error: Error[]) => {
      console.error(error)

      // throw new Error ("sdfsdf");
      return error
    }
  )

  if (Array.isArray(buildData)) {
    yield buildData[0]
    return
  }

  const code = challengeData.file.contents
  const build = buildData?.build
  // const code = challengeData.file.contents;

  // console.log('code', code);
  // console.log('build', build);

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var getUserInput = () => code

  const tests = context.challenge.tests?.slice()

  while (tests && tests.length) {
    const test = tests.shift()

    if (test) {
      const { testString } = test

      let result: TestResult | undefined

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let testResult: any

      if (this) {
        // eslint-disable-next-line prefer-const
        this.__userCodeWasExecuted = false
        this.assert = assert
        this.code = code
        this.Enzyme = Enzyme
      }

      try {
        /* eslint-disable no-eval */
        try {
          /**
           * // TODO Здесь надо учитывать тип теста, потому что с HTML возникает логичная ошибка
           */
          const completeCode = `
            ${build}
            __userCodeWasExecuted = true;
            // __utils.toggleProxyLogger(true);
            ${testString}
          `

          // console.log('completeCode', completeCode);

          testResult = this?.window
            ? this?.window.eval(completeCode)
            : eval(completeCode)
        } catch (err) {
          // For debug
          console.error(err)

          if (this?.__userCodeWasExecuted) {
            // rethrow error, since test failed.
            throw err
          }
          // log build errors
          // __utils.log(err);
          // the tests may not require working code, so they are evaluated even if
          // the user code does not get executed.

          testResult = this?.window
            ? this?.window.eval(testString)
            : eval(testString)
        }

        if (typeof testResult === 'function') {
          await testResult(getUserInput)
        }

        result = { pass: true }
        yield result
      } catch (error) {
        const err = error as Error

        if (!(err instanceof chai.AssertionError)) {
          console.error(err)
        }

        result = {
          pass: false,
          err: {
            message: err.message,
            stack: err.stack,
            code,
            file: context.challengeData.file,
          },
        }

        yield result
      }
    }
  }
}
