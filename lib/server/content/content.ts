import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { MetaData } from 'lib/types';

const ArticlesDir = path.join(process.cwd(), 'managed-content/articles');

const ArticlesDirContents = fs.readdirSync(ArticlesDir);

export const AllArticleSlugs = ArticlesDirContents.map((filename) =>
  filename.replace('.md', ''),
);

const ArticleMdFiles = ArticlesDirContents.map((item) => {
  const fullItemPath = path.join(ArticlesDir, item);
  // If this is a directory, metadata will come from ./index.md
  return fs.lstatSync(fullItemPath).isDirectory()
    ? path.join(fullItemPath, 'index.md')
    : fullItemPath;
});

export const allArticleMetadata = ArticleMdFiles.map((file) => {
  const fileContents = fs.readFileSync(file, 'utf-8');
  const { data } = matter(fileContents);
  const metaData = data as MetaData;
  return {
    ...metaData,
    path: '/articles/' + path.basename(file, path.extname(file)),
  };
});

function parseMdFile(absolutePath: string) {
  if (!fs.existsSync(absolutePath)) {
    throw new Error('ParseMdFile: File not found at ' + absolutePath);
  }
  if (fs.lstatSync(absolutePath).isDirectory()) {
    throw new Error('ParseMdFile: Path is directory! ' + absolutePath);
  }
  const fileContents = fs.readFileSync(absolutePath, 'utf8');
  const { data, content } = matter(fileContents);
  const metaData = data as MetaData;
  const rawMarkdown = content;
  return {
    metaData,
    rawMarkdown,
  };
}

/**
 * Just get html parsed from md in a particular file
 * @param fileName
 * @param filePath
 */
export function parseManagedMdFile(fileName: string, filePath = './') {
  // Filter out potentially undefined subdirectory
  const pathSegments = [
    process.cwd(),
    'managed-content',
    filePath,
    fileName,
  ].filter((segment) => segment);
  const absolutePath = path.join(...pathSegments);
  return parseMdFile(absolutePath);
}

export function getArticleBySlug(slug: string) {
  // TODO - Probably make a map of slug:file ?
  const index = AllArticleSlugs.indexOf(slug);
  const file = ArticleMdFiles[index];
  return parseMdFile(file);
}

export function getMostRecentArticles(count: number) {
  return allArticleMetadata
    .filter((article) => article.published)
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, count);
}
