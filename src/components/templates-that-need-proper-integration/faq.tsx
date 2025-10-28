import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = "Parish Frequently Asked Questions",
  items = [
    {
      id: "faq-1",
      question: "What time are Sunday Masses?",
      answer:
        "Sunday Masses are celebrated at 8:30 AM, 10:00 AM (Family Mass), 11:30 AM (Main celebration), and 5:30 PM. We also offer Spanish Mass on the 1st and 3rd Sundays at 2:00 PM.",
    },
    {
      id: "faq-2",
      question: "How do I register as a parishioner?",
      answer:
        "You can register by visiting the parish office during office hours, calling us, or filling out our online registration form. We welcome all who wish to join our faith community.",
    },
    {
      id: "faq-3",
      question: "Do you offer sacramental preparation programs?",
      answer:
        "Yes, we offer preparation programs for Baptism, First Holy Communion, Confirmation, and Marriage. Contact the parish office to learn about upcoming sessions and requirements.",
    },
    {
      id: "faq-4",
      question: "How can I get involved in parish ministries?",
      answer:
        "We have many ministries including the choir, St Vincent de Paul Society, Bible study groups, and youth fellowship. Visit our ministries page or speak with Fr. Johnson after Mass to learn more.",
    },
    {
      id: "faq-5",
      question: "Is there parking available at the church?",
      answer:
        "Yes, we have a parish car park behind the church. Street parking is also available on surrounding roads. Please be considerate of our neighbours when parking.",
    },
    {
      id: "faq-6",
      question: "Do you have facilities for children and families?",
      answer:
        "Yes, we have a children's liturgy during the 10:00 AM Family Mass, a baby changing area, and family-friendly facilities. Children are always welcome at all our services.",
    },
    {
      id: "faq-7",
      question: "How can I request prayers or spiritual support?",
      answer:
        "You can submit prayer requests through our parish office, speak with Fr. Johnson directly, or add intentions to our prayer book in the church. We also offer pastoral visits for those who are sick or housebound.",
    },
  ],
}: FaqProps) => {
  return (
    <section className="py-32">
      <div className="container max-w-3xl">
        <h1
          className="mb-4 font-semibold"
          style={{
            fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
            fontWeight: "600",
            color: "#0f172a",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.025em",
            lineHeight: "1.1",
            marginBottom: "1rem"
          }}
        >
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className="font-semibold hover:no-underline"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#0f172a",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.75rem"
                }}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-muted-foreground"
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#64748b",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  lineHeight: "1.5rem"
                }}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq };
