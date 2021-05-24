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

export function getArticleBySlug(slug: string) {
  const fullPath = path.join(ArticlesDirPath, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: metaData, content: rawMarkdown } = matter(fileContents);
  const htmlBody = marked(rawMarkdown);

  return { metaData, htmlBody };
}

export function getMostRecentArticles(count: number) {
  return allArticleMetadata
    .sort((a, b) => {
      return b.date - a.date;
    })
    .slice(0, count);
}
