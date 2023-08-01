import fs from 'fs';
import { promisify } from 'util';
import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';

const statPromisified = promisify(fs.stat);
const appendPromisified = promisify(fs.appendFile);
const readFilePromisified = promisify(fs.readFile);
const writeFilePromisified = promisify(fs.writeFile);

interface LibError {
  message?: string;
  code: any;
  error: Error;
}

export const toLibError = (e: any): LibError => {
  return {
    code: 'LibError',
    error: e,
  };
};

export const toLibErrorWithMessage = (message: string) => (e: any) => {
  const libError = toLibError(e);
  libError.message = message;
  return libError;
};

const tryOrError = <T>(action: () => Promise<T>, errorMessage: string) =>
  TE.tryCatch(action, toLibErrorWithMessage(errorMessage));

export const getFilesInFolder = (path: string) =>
  tryOrError(() => promisify(fs.readdir)(path), 'failed to get files in folder');

export const readFileAsJson = <T>(filePath: string) =>
  pipe(
    readFileAsString(filePath),
    TE.map(string => JSON.parse(string) as T),
  );

export const getFileStat = (filePath: string) => tryOrError(() => statPromisified(filePath), 'failed to get stat');

export const readFileAsString = (filePath: string) =>
  tryOrError(() => readFilePromisified(filePath, 'utf8'), 'failed to read file');

export const appendToFile = (filePath: string) => (line: string) =>
  tryOrError(() => appendPromisified(filePath, line), 'failed to append to file');

export const writeToFileString = (filePath: string) => (data: string) =>
  tryOrError(() => writeFilePromisified(filePath, data, 'utf8'), 'failed to read file');
