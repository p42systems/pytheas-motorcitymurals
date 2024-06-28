import { useAtomValue } from "jotai";
import {
  HomeSubHeader,
  SponsorPartnerContainer,
  SponsorPartnerImg,
} from "../../styled_components";
import { sponsorsCopyQueryAtom } from "../../../atoms";
import BodyParagraphs from "../../General/BodyParagraphs";

function SponsorPartner() {
  const { header, body, links } = useAtomValue(sponsorsCopyQueryAtom);

  return (
    <>
      <HomeSubHeader id="sponsor-partners">{header}</HomeSubHeader>
      <BodyParagraphs body={body} view={"home"} links={links} />
      <SponsorPartnerContainer>
        <SponsorPartnerImg
          large={false}
          src="/logos/p42_logo.png"
          alt="Parallel 42 Systems"
        />
        <SponsorPartnerImg
          large={false}
          src="/logos/hackforge_logo.png"
          alt="Hackforge"
        />
        <SponsorPartnerImg
          large={false}
          src="/logos/windsoreats-logo.png"
          alt="WindsorEats"
        />
        <SponsorPartnerImg
          large={false}
          src="/logos/mcc_logo.png"
          alt="Multicultural Council of Windsor/Essex County"
        />
      </SponsorPartnerContainer>
    </>
  );
}

export default SponsorPartner;
