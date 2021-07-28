import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

const ArticlesDirPath = path.join(process.cwd(), 'managed-content/articles');

const allArticleFilenames = fs.readdirSync(ArticlesDirPath);

// TODO - Ensure that these load one time only
export const allArticleSlugs = allArticleFilenames.map((filename) =>
  filename.replace('.md', ''),
);
export const allArticleMetadata = allArticleFilenames.map((filename) => {
  const fullPath = path.join(ArticlesDirPath, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data: metaData } = matter(fileContents);
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
    `${fileName}.md`
  ].filter(segment => segment);
  const absolutePath = path.join(...pathSegments);
  if (!fs.existsSync(absolutePath)) {
    console.warn('File not found at ' + absolutePath + '! Returning null.');
    return null;
  }

  const fileContents = fs.readFileSync(absolutePath, 'utf8');
  const { data: metaData, content: rawMarkdown} = matter(fileContents);
  const htmlBody = marked(rawMarkdown);

  return {
    metaData,
    htmlBody
  }
}

export function getArticleBySlug(slug: string) {
  return parseManagedMdFile(slug, 'articles');
}

export function getMostRecentArticles(count: number) {
  return allArticleMetadata
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .slice(0, count);
}
