import FeatureContentButton from "./contentBtn";
import ContentCard from "./contentCard";
import { BtnProps } from "./demoData";
import { FeaturedEventsProps } from "./demoData";

type ContentProps = {
  featuredContentData: FeaturedEventsProps;
};

const FeatureContent = ({ featuredContentData }: ContentProps) => {
  const buttonData = BtnProps;
  const showHost = false;
  const maxCardsToShow = 4;
  const displayedContent = featuredContentData.slice(0, maxCardsToShow);
  return (
    <div
      style={{
        background: "var(--light-color-base-tertiary-normal, #EDEEF1)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="flex justify-center p-8 sm:p-12"
    >
      <section className="w-full text-center">
        <div
          id="content-buttons"
          className="w-full flex flex-col sm:flex-row content-center items-center gap-5 sm:gap-[1%]
           justify-between pt-4 pb-16"
        >
          {buttonData.map((button, index) => (
            <FeatureContentButton
              key={index}
              btnAddress={button.btnAddress}
              btnName={button.btnName}
            />
          ))}
        </div>

        <div id="cards" className="gap-1">
          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {displayedContent.map((content) => (
              <ContentCard
                img={content.img}
                category={content.category}
                eventDate={content.eventDate}
                title={content.title}
                details={content.details}
                id={content.id}
                showHost={showHost}
                hostTitle={content.hostTitle}
                hostName={content.hostName}
                hostImage={content.hostImage}
                key={content.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureContent;
