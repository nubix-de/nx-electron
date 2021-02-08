import { ExecutorContext } from '@nrwl/devkit';

export async function getSourceRoot(context: ExecutorContext) {
    const workspace = context.workspace;

    if (workspace.projects[context.projectName].sourceRoot) {
      return workspace.projects[context.projectName].sourceRoot;
    } else {
      context.reportStatus('Error');
      const message = `${context.projectName} does not have a sourceRoot. Please define one.`;
      context.logger.error(message);
      throw new Error(message);
    }
}
