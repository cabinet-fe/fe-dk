import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import url from 'url'
const msgPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../.git/COMMIT_EDITMSG'
)

const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|build|init|daily|chore)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(chalk.red('Git提交格式错误'))
  process.exit(1)
}
