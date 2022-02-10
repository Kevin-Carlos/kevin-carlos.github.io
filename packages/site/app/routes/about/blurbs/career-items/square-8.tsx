import { type FC } from 'react';

const Paragraph: FC = ({ children }) => {
  return <p className="mb-2">{children}</p>;
};

export const Square8 = () => {
  return (
    <div>
      <Paragraph>
        In April of 2021, I joined a Stealth Startup as the Lead Frontend
        Engineer.
      </Paragraph>

      <Paragraph>
        My responsibilites range from mentorship, code-reviews, planning
        milestones and sprints, to architecting app-wide scaleable solutions.
      </Paragraph>

      <Paragraph>
        {`It's my goal to ensure everyone on my team has the tools to succeed and
        grow!`}
      </Paragraph>
    </div>
  );
};
