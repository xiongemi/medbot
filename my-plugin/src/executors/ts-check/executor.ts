import { ExecutorContext } from '@nx/devkit';
import path = require('path');
import * as childProcess from 'child_process';
import { TsCheckExecutorSchema } from './schema';

export default async function runExecutor(
  options: TsCheckExecutorSchema,
  context: ExecutorContext
) {
  const systemRoot = context.root;
  const projectConfig =
    context.projectsConfigurations.projects[context.projectName];

  const projectPath = path.join(
    systemRoot,
    projectConfig.root,
    projectConfig.projectType === 'application'
      ? 'tsconfig.app.json'
      : 'tsconfig.lib.json'
  );
  try {
    childProcess.execSync(`tsc --noEmit --project ${projectPath}`);
    return {
      success: true,
    };
  } catch (error) {
    console.log(error.output.toString());
    return {
      success: false,
    };
  }
}
