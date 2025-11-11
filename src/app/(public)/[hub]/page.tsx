import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UnifiedHubLayout, type UnifiedHubLayoutProps } from '@/components/hub/UnifiedHubLayout';
import {
  isValidHub,
  HUB_CONFIGS,
  getTopLevelCategories,
  type HubSlug
} from '@/lib/cms/unified-hub-cms';

interface HubPageProps {
  params: Promise<{
    hub: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { hub: 'learning-hub' },
    { hub: 'prayer-hub' },
    { hub: 'spiritual-reflections' }
  ];
}

export async function generateMetadata({ params }: HubPageProps): Promise<Metadata> {
  const { hub } = await params;

  if (!isValidHub(hub)) {
    return {
      title: 'Hub Not Found'
    };
  }

  const config = HUB_CONFIGS[hub];

  return {
    title: `${config.title} | St Saviour's Catholic Church`,
    description: config.description,
    keywords: `Catholic ${hub}, faith resources, Catholic education, St Saviour's Church`
  };
}

export default async function HubLandingPage({ params }: HubPageProps) {
  const { hub } = await params;

  // Validate hub
  if (!isValidHub(hub)) {
    notFound();
  }

  const config = HUB_CONFIGS[hub];
  const categories = getTopLevelCategories(hub);

  // Hub-specific content based on which hub we're rendering
  const hubContent = getHubSpecificContent(hub);

  // Transform to UnifiedHubLayout props
  const layoutProps: UnifiedHubLayoutProps = {
    hero: {
      title: config.title,
      description: config.description,
      backgroundImage: config.heroImage,
      primaryButton: {
        text: 'Explore Topics',
        href: '#categories'
      },
      ...(hubContent.secondaryButton && { secondaryButton: hubContent.secondaryButton })
    },
    ...(hubContent.introduction && { introduction: hubContent.introduction }),
    categories: {
      sectionLabel: 'Explore Topics',
      sectionTitle: hubContent.categoriesTitle,
      description: hubContent.categoriesDescription,
      cards: categories.map(category => ({
        title: category.title,
        description: category.description || '',
        imageUrl: category.imageUrl || config.heroImage,
        url: `${config.baseRoute}/${category.fullSlug}`
      }))
    },
    cta: {
      title: hubContent.ctaTitle,
      description: hubContent.ctaDescription,
      primaryButton: {
        text: 'Explore Topics',
        href: '#categories'
      },
      secondaryButton: {
        text: 'Contact Us',
        href: '/contact-us'
      }
    }
  };

  return <UnifiedHubLayout {...layoutProps} />;
}

// Hub-specific content configuration
function getHubSpecificContent(hub: HubSlug) {
  switch (hub) {
    case 'learning-hub':
      return {
        introduction: {
          label: 'About the Hub',
          title: 'Your Journey of',
          subtitle: 'Faith & Knowledge',
          paragraphs: [
            {
              text: "Welcome to St Saviour's Learning Hub, your go-to resource for information and analysis on a range of religious topics and leading theologians. Our hope is that the Hub will provide you with an engaging and easy to understand introduction to some of the history and the theological ideas that have powered the Catholic Church over the centuries.",
              emphasized: false
            },
            {
              text: "Whether you're a student, a parishioner, or you are a visitor with a curious mind, the Learning Hub is designed to start your own, more in-depth research into and understanding of our faith.",
              emphasized: false
            },
            {
              text: 'At the Learning Hub, we believe that learning should be a continuous and enjoyable journey. Each article is meticulously researched and written to ensure that you receive the most reliable information available.',
              emphasized: false
            },
            {
              text: 'Even so, some of these articles are not an easy read, either because they are long, or they cover complex subjects. If you want further explanation of some of the concepts covered, please feel free to talk to the parish priests, who will be happy to take you through some of the finer points that are covered in various articles.',
              emphasized: true
            }
          ]
        },
        categoriesTitle: 'Learning',
        categoriesDescription: 'Dive deep into Catholic theology, history, and spirituality through our carefully curated categories.',
        ctaTitle: 'Start Your Learning Journey',
        ctaDescription: 'We are committed to fostering a community of lifelong learners. By exploring the Learning Hub, you become part of a vibrant community that values curiosity, critical thinking, and the pursuit of knowledge.',
        secondaryButton: {
          text: 'Our Resources',
          href: '#resources'
        }
      };

    case 'prayer-hub':
      return {
        introduction: {
          label: 'About Prayer',
          title: 'A Life of',
          subtitle: 'Prayer & Devotion',
          paragraphs: [
            {
              text: "Welcome to St Saviour's Prayer Hub, your comprehensive resource for Catholic prayers, devotions, and liturgical resources. Here you'll find everything from daily prayers to seasonal devotions, helping you grow closer to God through the rich prayer traditions of the Church.",
              emphasized: false
            },
            {
              text: 'Prayer is the foundation of our relationship with God. Whether you are seeking traditional prayers, Marian devotions, or liturgical resources, the Prayer Hub offers guidance for every aspect of your spiritual life.',
              emphasized: false
            },
            {
              text: 'From the Holy Rosary to Novenas, from morning prayers to seasonal devotions, discover the treasures of Catholic prayer that have sustained the faithful for centuries.',
              emphasized: true
            }
          ]
        },
        categoriesTitle: 'Prayer',
        categoriesDescription: 'Explore our collection of Catholic prayers, devotions, and liturgical resources organized by type and occasion.',
        ctaTitle: 'Begin Your Prayer Journey',
        ctaDescription: 'Let prayer transform your life and draw you closer to God. Explore our collection and discover new ways to communicate with our loving Father.',
        secondaryButton: {
          text: 'Submit Prayer Request',
          href: '/prayer-hub/request'
        }
      };

    case 'spiritual-reflections':
      return {
        introduction: {
          label: 'Spiritual Growth',
          title: 'Reflections on',
          subtitle: 'Faith & Life',
          paragraphs: [
            {
              text: "Welcome to Spiritual Reflections, where you'll find homilies, meditations, and spiritual writings to nourish your soul and deepen your faith journey.",
              emphasized: false
            },
            {
              text: "Our priests and parish team share insights on Scripture, the liturgical seasons, and how to live out our Catholic faith in daily life. These reflections are meant to inspire, challenge, and encourage you in your walk with Christ.",
              emphasized: false
            },
            {
              text: 'Regular spiritual reflection helps us stay rooted in Christ and responsive to the movement of the Holy Spirit in our lives.',
              emphasized: true
            }
          ]
        },
        categoriesTitle: 'Spiritual',
        categoriesDescription: 'Browse homilies, meditations, and spiritual writings organized by liturgical season and theme.',
        ctaTitle: 'Grow in Your Faith',
        ctaDescription: 'Let these reflections guide you deeper into the heart of Christ and the beauty of our Catholic faith.',
        secondaryButton: undefined
      };

    default:
      return {
        introduction: undefined,
        categoriesTitle: 'Content',
        categoriesDescription: 'Explore our collection of resources.',
        ctaTitle: 'Discover More',
        ctaDescription: 'Start exploring our resources today.',
        secondaryButton: undefined
      };
  }
}
