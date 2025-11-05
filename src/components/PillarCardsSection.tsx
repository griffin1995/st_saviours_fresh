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

export default function PillarCardsSection() {
  return (
    <section className="py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <PillarCard
            image="/images/praising-black-white-hands-up.jpg"
            alt="Daily Masses & Services"
            title={<>Daily Masses<br />& Services</>}
            description="Join us for daily Mass at 10am and evening services throughout the week. Experience the beauty of traditional Catholic liturgy in our historic Victorian church, with opportunities for confession, adoration, and special feast day celebrations."
            href="/mass"
          />

          <PillarCard
            image="/images/hands-up-praising.jpg"
            alt="Prayer Hub"
            title="Prayer Hub"
            description="Discover resources for deepening your spiritual life through prayer. From guided meditation sessions to devotional materials, rosary groups, and quiet spaces for personal reflection, find the support you need for your prayer journey."
            href="/prayer-hub"
          />

          <PillarCard
            image="/images/priest-hand-raised.jpg"
            alt="Learning Hub"
            title="Learning Hub"
            description="Explore your faith through our adult education programmes, Bible study groups, and catechesis classes. Whether you're new to Catholicism or seeking to deepen your understanding, our learning community welcomes all levels of spiritual curiosity."
            href="/learning-hub"
          />
        </div>
      </div>
    </section>
  );
}
