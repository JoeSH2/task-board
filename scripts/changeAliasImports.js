import { Project } from 'ts-morph';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: ts-node <script> <search-string> <replace-string>');
  process.exit(1);
}

const [searchString, replaceString] = args;

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*{.ts,.tsx}');

const files = project.getSourceFiles();

files.forEach((file) => {
  file.getImportStringLiterals().forEach((item) => {
    const importStringLiterals = item.getLiteralValue();
    if (importStringLiterals.startsWith('src')) {
      const updatedImportString = importStringLiterals.replace(
        searchString,
        replaceString
      );
      item.setLiteralValue(updatedImportString);
    }
  });
});

project.saveSync();
