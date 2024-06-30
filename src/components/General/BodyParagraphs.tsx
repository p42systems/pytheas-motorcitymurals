import {
  AboutParagraph,
  HomeParagraph,
  StaticcontentButtonButton,
  StaticheaderBackgroundButton,
  StatictourButtonButton,
} from "../styled_components";

function BodyParagraphs(props: {
  body: string[] | null;
  view: string;
  links: [key: string] | null;
}) {
  const { body, view, links } = props;

  if (!body) {
    return null;
  } else {
    return (
      <>
        {body.map((paragraph: string, index: number) => {
          const paragraphArray = paragraph.split(
            /(?=\*\*)|(?:\*\*)|{{|}}|<a>/g
          );
          const paragraphContent = paragraphArray.map((content, index) => {
            if (
              paragraphArray[index - 1] === "**" &&
              paragraphArray[index + 1] === "**"
            ) {
              return <strong key={index}>{content}</strong>;
            } else if (content === "**") {
              return null;
            } else if (content === "takeTour") {
              return (
                <StatictourButtonButton key={index}>
                  Take Tour
                </StatictourButtonButton>
              );
            } else if (content === "completed") {
              return (
                <StaticheaderBackgroundButton key={index}>
                  Mark as completed
                </StaticheaderBackgroundButton>
              );
            } else if (content === "content") {
              return (
                <StaticcontentButtonButton key={index}>
                  Content
                </StaticcontentButtonButton>
              );
            } else if (
              links &&
              Object.keys(links).some((match) => content.includes(match))
            ) {
              
              const match = Object.keys(links)
                .filter((match) => content.includes(match))
                .join("");
              const parts = content.split(match);
              return (
                <>
                  {parts[0]}
                  <a href={links[match as any]} key={index}>
                    {match}
                  </a>
                  {parts[1]}
                </>
              );
            } else {
              return content;
            }
          });
          if (view === "home") {
            return (
              <HomeParagraph key={index}>{paragraphContent}</HomeParagraph>
            );
          } else if (view === "introduction") {
            return (
              <AboutParagraph key={index}>{paragraphContent}</AboutParagraph>
            );
          }
        })}
      </>
    );
  }
}

export default BodyParagraphs;
