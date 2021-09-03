import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { MetaData } from 'lib/types';

const ArticlesDirPath = path.join(process.cwd(), 'managed-content/articles');

const allArticleFilenames = fs.readdirSync(ArticlesDirPath);

// TODO - Ensure that these load one time only
export const allArticleSlugs = allArticleFilenames.map((filename) =>
  filename.replace('.md', ''),
);

// TODO - This will only check articles on startup, which is the only
//   currently planned way for articles to be added (restarting a new instance)
//   If I get fancier with live updates, will have to make this parse on read.
export const allArticleMetadata = allArticleFilenames.map((filename) => {
  const fullPath = path.join(ArticlesDirPath, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data } = matter(fileContents);
  const metaData = data as MetaData;
  return {
    ...metaData,
    path: '/articles/' + filename.replace('.md', ''),
  };
});

/**
 * Just get html parsed from md in a particular file
 * @param fileName
 * @param subdirectory
 */
export function parseManagedMdFile(fileName: string, subdirectory?: string) {
  // Filter out potentially undefined subdirectory
  const pathSegments = [
    process.cwd(),
    'managed-content',
    subdirectory,
    `${fileName}.md`,
  ].filter((segment) => segment);
  const absolutePath = path.join(...pathSegments);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('File not found at ' + absolutePath);
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

export function getArticleBySlug(slug: string) {
  return parseManagedMdFile(slug, 'articles');
}

export function getMostRecentArticles(count: number) {
  return allArticleMetadata
    .filter((article) => article.published)
    .sort((a, b) => {
      // @ts-ignore
      return new Date(a.date) - new Date(b.date);
    })
    .slice(0, count);
}
