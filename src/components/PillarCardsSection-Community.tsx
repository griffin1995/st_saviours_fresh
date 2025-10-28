import PillarCard from '@/components/PillarCard';

/**
 * PILLAR CARDS SECTION COMPONENT
 * Displays three key parish pillars in card format
 *
 * Shows:
 * - Daily Masses & Services
 * - Prayer Hub
 * - Learning Hub
 *
 * Features:
 * - Dark background section
 * - Responsive 3-column grid (stacks on mobile)
 * - Server Component with hardcoded content
 */

export default function PillarCardsSectionCommunity() {
  return (
    <><section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <PillarCard
            image="/images/praising-black-white-hands-up.jpg"
            alt="Evangelisation Groups"
            title='Evangelisation Groups'
            description="Our evangelisation groups share the joy of the Gospel through Alpha courses, young adult ministry, and community witness programmes. We help parishioners discover their unique calling to spread Christ's love in their daily lives." />

          <PillarCard
            image="/images/hands-up-praising.jpg"
            alt="Parish Social Groups"
            title="Parish Social Groups"
            description="Our vibrant social groups create warm, welcoming spaces where friendships flourish and faith grows stronger. From coffee mornings to quiz nights, monthly lunches to seasonal celebrations, there's something for everyone." />

          <PillarCard
            image="/images/priest-hand-raised.jpg"
            alt="Sacred Music Ministry"
            title="Sacred Music Ministry"
            description="Our choir and musicians enhance our liturgical celebrations with beautiful sacred music, from traditional hymns to contemporary worship songs. Join our welcoming music ministry and use your talents to glorify God and inspire the faithful." />
        </div>
      </div>
    </section>
   <section className="pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 justify-center">
        <div className="w-full md:w-[calc((100%-4rem)/3)]">
          <PillarCard
            image="/images/praising-black-white-hands-up.jpg"
            alt="Safeguarding"
            title='Safeguarding'
            description="Creating a safe environment for all is our absolute priority. Our comprehensive safeguarding policies and trained volunteers ensure that children, young people, 
  and vulnerable adults are protected and can flourish in our parish community." />
        </div>

        <div className="w-full md:w-[calc((100%-4rem)/3)]">
          <PillarCard
            image="/images/hands-up-praising.jpg"
            alt="Liturgical Ministry"
            title="Liturgical Ministry"
            description="Serve at the heart of our worship through roles as readers, altar servers, extraordinary ministers of Holy Communion, and welcomers. These ministries offer 
  meaningful ways to participate actively in our liturgical celebrations." />
        </div>
      </div>
    </div>
  </section>

</>
  );
}
