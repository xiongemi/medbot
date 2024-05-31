import { TsCheckExecutorSchema } from './schema';
import executor from './executor';
import { ExecutorContext, ProjectConfiguration } from '@nx/devkit';
import { execSync } from 'child_process';

const options: TsCheckExecutorSchema = {};

const mockedProjectConfiguration: ProjectConfiguration = {
  root: '',
  projectType: 'application',
};

const executionContext: ExecutorContext = {
  cwd: '',
  isVerbose: false,
  projectName: 'project',
  root: '',
  projectsConfigurations: {
    projects: {
      project: mockedProjectConfiguration,
    },
    version: 1.0,
  },
};

jest.mock('child_process');

describe('TsCheck Executor', () => {
  it('can run with positive response ', async () => {
    jest.mocked(execSync).mockReturnValue('');
    const output = await executor(options, executionContext);
    expect(output.success).toBe(true);
  });
});
