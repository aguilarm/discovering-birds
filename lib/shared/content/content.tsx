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

export function MarkdownRenderer(rawMarkdown: string) {
  // Inject NextJS Images into bodies
  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: MdImage,
            props: {
              className: 'foo',
              lazyBoundary: '800px',
            },
          },
        },
      }}
    >
      {rawMarkdown}
    </Markdown>
  );
}
