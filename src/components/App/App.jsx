import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import article from 'data/article.json';
import data from 'data/data.json';
import items from 'data/forbes.json';
import transactions from 'data/transactions.json';
export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="my title" stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList items={items} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
// poster,
//   tag,
//   title,
//   description,
//   name,
//   avatar,
//   postedAt,
