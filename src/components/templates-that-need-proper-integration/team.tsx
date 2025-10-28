import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface TeamProps {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team = ({
  heading = "Meet Our Parish Team",
  description = "Our dedicated team of clergy, staff, and volunteers work together to serve our parish community and help everyone grow in faith and fellowship.",
  members = [
    {
      id: "member-1",
      name: "Fr. Michael Johnson",
      role: "Parish Priest",
      avatar: "",
    },
    {
      id: "member-2",
      name: "Deacon Robert Smith",
      role: "Permanent Deacon",
      avatar: "",
    },
    {
      id: "member-3",
      name: "Margaret O'Brien",
      role: "Parish Secretary",
      avatar: "",
    },
    {
      id: "member-4",
      name: "David Williams",
      role: "Music Director",
      avatar: "",
    },
    {
      id: "member-5",
      name: "Sarah Thompson",
      role: "Youth Ministry Coordinator",
      avatar: "",
    },
    {
      id: "member-6",
      name: "John Murphy",
      role: "Safeguarding Officer",
      avatar: "",
    },
  ],
}: TeamProps) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h2
          className="my-6 text-pretty text-2xl font-bold lg:text-4xl"
          style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#0f172a",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.025em",
            lineHeight: "2.5rem",
            margin: "1.5rem 0",
            textAlign: "center"
          }}
        >
          {heading}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>
                {member.name
                  .split(' ')
                  .map(name => name.charAt(0))
                  .join('')
                  .toUpperCase()
                }
              </AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{member.name}</p>
            <p className="text-muted-foreground text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team };
