import React from 'react';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

const MdImage = (props) => {
  // @ts-ignore
  const ImageElement = <Image {...props} objectFit="cover" width={1600} height={900} layout={'responsive'}/>; //eslint-disable-line
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const title = props.title as string;
  return (
    <div className={'markdown-image'}>
      {ImageElement}
      <figcaption dangerouslySetInnerHTML={{ __html: title }}></figcaption>
    </div>
  );
};

// Remove paragraphs from around images so we can add elements that shouldn't be in <p> tags below.
const UnParagraphImages: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (children[0]?.type?.name === 'MdImage') return <>{children}</>;
  return <p>{children}</p>;
};

export function MarkdownRenderer(rawMarkdown: string) {
  // Inject NextJS Images into bodies
  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: MdImage,
          },
          p: {
            component: UnParagraphImages,
          },
        },
      }}
    >
      {rawMarkdown}
    </Markdown>
  );
}
