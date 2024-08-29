import { Project } from 'ts-morph';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*{.ts,.tsx}');

const files = project.getSourceFiles();

files.forEach((file) => {
  console.log(file);
});
