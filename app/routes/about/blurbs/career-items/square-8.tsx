import { Blockquote, Paragraph } from '~/common/ui-elements';

export const Square8 = () => {
  return (
    <div>
      <Paragraph>
        In April of 2021, I joined Square 8 as a fullstack engineer and shortly
        after became the lead fullstack engineer.
      </Paragraph>

      <Paragraph>
        This opportunity has allowed me to grow my leadership, mentorship, and
        planning skills. Aside from IC work on both the frontend and backend, I
        contribute to architecture, design, DevOps, and anywhere I can deliver
        value.
      </Paragraph>

      <Blockquote author={null}>
        If there's an area I'm unfamiliar with and believe there's value I can
        deliver in that area, I seek the knowledge to do so.
      </Blockquote>

      <Paragraph>
        I've had the opportunity to plan/build out several cool projects, like:
      </Paragraph>

      <ul className='list-disc mb-4'>
        <li>
          Researching and developing a plan to <strong>incrementally</strong>
          {' '}
          migrate our Elixir GraphQL server to a Go based one via Apollo
          Federation for maintainability and performance benefits
        </li>
        <li>
          Building a design system to standardize UI/UX and development patterns
        </li>
        <li>
          Taking ownership of testing infrastructure and CI across the stack and
          building out several workflows to ensure code quality and testing
        </li>
      </ul>

      <Paragraph>
        However, one of my favorite projects was building a Gitlab/Slack bot
        written in Go that would trigger a webhook based on merge request (MR)
        events to tighten feedback loops resulting in MR's being reviewed and
        merged quicker.
      </Paragraph>
    </div>
  );
};
