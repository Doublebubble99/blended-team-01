import { Comments, Hero, Loader, Section } from "../components";
import { useGetCommentsQuery } from "../redux/commentApi";

export const Home = () => {
  const { isLoading, isSuccess } = useGetCommentsQuery();
  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        {isSuccess && !isLoading && <Comments />}
      </Section>
    </>
  );
};
