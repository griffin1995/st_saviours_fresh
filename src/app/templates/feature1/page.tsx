import { Feature } from '@/components/templates-that-need-proper-integration/feature';

export default function FeaturePage() {
  return (
    <Feature
      title="Our Parish Ministries"
      description="Discover the various ways to grow in faith and serve our community through these meaningful ministries and programs at St Saviour's Catholic Church."
      feature1={{
        title: "Liturgical Ministry",
        description: "Serve at the heart of our worship through roles as readers, altar servers, extraordinary ministers of Holy Communion, and welcomers.",
        image: "/images/inside-church-aisle.jpg"
      }}
      feature2={{
        title: "Sacred Music Ministry",
        description: "Enhance our liturgical celebrations through beautiful sacred music, from traditional hymns to contemporary worship songs.",
        image: "/images/open-bible-rosary.jpg"
      }}
      feature3={{
        title: "Youth & Family Ministry",
        description: "Building faith and friendships among young people through social events, faith discussions, retreats, and service projects.",
        image: "/images/hands-up-praising.jpg"
      }}
      feature4={{
        title: "Outreach & Service",
        description: "Living out the Gospel through practical charity, providing assistance to families facing hardship in our local community.",
        image: "/images/praising-black-white-hands-up.jpg"
      }}
    />
  );
}