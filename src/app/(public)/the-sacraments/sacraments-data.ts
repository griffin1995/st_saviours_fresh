/**
 * SACRAMENTS DATA
 * Centralized data for all 7 Catholic sacraments
 *
 * Following Essential_Boilerplate.txt rules:
 * - All content hardcoded inline (no CMS)
 * - TypeScript interfaces for type safety
 * - One data source for all sacrament pages
 */

import type { LucideIcon } from 'lucide-react';
import {
  Droplet,
  Heart,
  Users,
  BookOpen,
  CheckCircle,
  Check,
  Cross,
  Plus,
  Sparkles,
  Phone,
  Hand,
  GraduationCap,
  Shield
} from 'lucide-react';

// TypeScript Interfaces
export interface SacramentHero {
  title: string;
  description: string;
  backgroundImage: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface SacramentMainInfo {
  sectionLabel: string;
  heading: string;
  paragraphs: string[];
}

export interface KeyAspect {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface ScriptureQuote {
  icon: LucideIcon;
  quote: string;
  reference: string;
}

export interface EffectCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface RequirementCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  requirements: string[];
}

export interface SacramentData {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  hero: SacramentHero;
  mainInfo: SacramentMainInfo;
  keyAspects: KeyAspect[];
  scripture: ScriptureQuote;
  effects: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    cards: EffectCard[];
  };
  requirements: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    categories: RequirementCategory[];
  };
  callToAction: {
    sectionLabel: string;
    heading: string;
    subheading: string;
  };
}

// All 7 Sacraments Data
export const sacramentsData: Record<string, SacramentData> = {
  baptism: {
    slug: 'baptism',
    title: 'Baptism - The Sacrament of New Life',
    shortTitle: 'Baptism',
    metaDescription: 'Learn about the sacrament of Baptism at St Saviour\'s Catholic Church. Information on infant baptism, adult baptism, RCIA, and preparation classes in Lewisham.',
    hero: {
      title: 'Baptism',
      description: 'The first and chief sacrament of forgiveness of sins. Through Baptism we are freed from sin, reborn as children of God, and welcomed into the Church.',
      backgroundImage: '/images/baptism-hero.jpg',
      primaryButton: {
        text: 'Begin Preparation',
        href: '#contact'
      },
      secondaryButton: {
        text: 'Learn More',
        href: '#baptism-info'
      }
    },
    mainInfo: {
      sectionLabel: 'The Sacrament of New Life',
      heading: 'Born Again in Water and the Spirit',
      paragraphs: [
        'Baptism is **the first and chief sacrament of forgiveness of sins** because it unites us with Christ, who died for our sins and rose for our justification. Through Baptism we are freed from sin and reborn as children of God.',
        'In this sacrament, we are **cleansed of original sin**, become members of the Church, and are called to live as disciples of Jesus Christ. Baptism is **necessary for salvation** and is the foundation of our Christian life.',
        'At St Saviour\'s, we joyfully celebrate baptisms for both **infants and adults**. We provide comprehensive preparation programs to help families and individuals understand and prepare for this **sacred moment** of entering into God\'s family.'
      ]
    },
    keyAspects: [
      { icon: Cross, title: 'Signs of Grace', text: 'Water, words, and holy oils' },
      { icon: Heart, title: 'Christ\'s Presence', text: 'Christ baptizes through the minister' },
      { icon: Sparkles, title: 'Church Community', text: 'Welcome into God\'s family' }
    ],
    scripture: {
      icon: Droplet,
      quote: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit',
      reference: 'Matthew 28:19'
    },
    effects: {
      sectionLabel: 'Spiritual Transformation',
      heading: 'The Sacred Effects of Baptism',
      subheading: 'Through Baptism, God works powerful changes in our souls, transforming us into new creations in Christ.',
      cards: [
        {
          icon: Heart,
          title: 'Forgiveness of Sin',
          description: 'Original sin and all personal sins are completely washed away, giving us a fresh start in Christ.'
        },
        {
          icon: Users,
          title: 'Becomes Child of God',
          description: 'We are adopted as children of God and heirs to eternal life through divine grace.'
        },
        {
          icon: BookOpen,
          title: 'Member of the Church',
          description: 'Incorporated into the Body of Christ and the Catholic Church as full members.'
        },
        {
          icon: Droplet,
          title: 'Receives Grace',
          description: 'Sanctifying grace fills the soul and makes us temples of the Holy Spirit.'
        },
        {
          icon: CheckCircle,
          title: 'Marked Forever',
          description: 'An indelible spiritual mark is placed on the soul that lasts for eternity.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Preparation Guide',
      heading: 'Requirements for Baptism Preparation',
      subheading: 'Whether preparing for infant or adult baptism, here\'s what you need to know to begin your journey.',
      categories: [
        {
          title: 'Infant Baptism',
          icon: Heart,
          description: 'For parents wishing to baptize their children',
          requirements: [
            'Parents must be registered parishioners',
            'Complete baptism preparation course',
            'Provide child\'s birth certificate',
            'Choose suitable godparents',
            'Schedule baptism appointment'
          ]
        },
        {
          title: 'Adult Baptism (RCIA)',
          icon: BookOpen,
          description: 'For adults seeking to enter the Catholic Church',
          requirements: [
            'Complete RCIA program',
            'Attend weekly sessions for 6-12 months',
            'Choose a sponsor/godparent',
            'Participate in scrutinies during Lent',
            'Receive sacraments at Easter Vigil'
          ]
        },
        {
          title: 'Godparent Requirements',
          icon: Users,
          description: 'Requirements for those serving as godparents',
          requirements: [
            'Must be a practicing Catholic',
            'At least 16 years of age',
            'Have received Confirmation',
            'Not the parent of the child',
            'Live an exemplary Catholic life'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'Begin Your Journey of Faith',
      subheading: 'Ready to take the next step? Contact us to begin your **baptism preparation** or to schedule an **infant baptism**. We\'re here to guide you through this sacred journey.'
    }
  },

  confirmation: {
    slug: 'confirmation',
    title: 'Confirmation - The Sacrament of Strengthening',
    shortTitle: 'Confirmation',
    metaDescription: 'Learn about the sacrament of Confirmation at St Saviour\'s Catholic Church. Strengthened by the Holy Spirit to be witnesses for Christ in the world.',
    hero: {
      title: 'Confirmation',
      description: 'Strengthened by the Holy Spirit, Confirmation completes Christian initiation and empowers us with the gifts of the Spirit to be witnesses for Christ in the world.',
      backgroundImage: '/images/hands-up-praising.jpg',
      primaryButton: {
        text: 'Learn About Confirmation',
        href: '#confirmation-info'
      },
      secondaryButton: {
        text: 'View Requirements',
        href: '#requirements'
      }
    },
    mainInfo: {
      sectionLabel: 'The Sacrament of Strengthening',
      heading: 'Sealed with the Gifts of the Holy Spirit',
      paragraphs: [
        'Confirmation is **a sacrament of initiation** that completes what was begun in Baptism. It strengthens us with the **seven gifts of the Holy Spirit** and deepens our relationship with Christ and the Church.',
        'Through Confirmation, we receive **the fullness of the Holy Spirit** and are called to be witnesses to Christ in the world. This sacrament gives us the **grace and strength** we need to live as mature Christians and to spread and defend the faith.',
        'At St Saviour\'s, we offer **comprehensive preparation programs** for both young people and adults. Our youth program prepares candidates through classes and retreats, while our RCIA process welcomes adults seeking to complete their **Christian initiation**.'
      ]
    },
    keyAspects: [
      { icon: Cross, title: 'Signs of Grace', text: 'Sacred chrism and laying on of hands' },
      { icon: Heart, title: 'Christ\'s Presence', text: 'Strengthened by the Holy Spirit' },
      { icon: Sparkles, title: 'Church Community', text: 'Full membership in the Church' }
    ],
    scripture: {
      icon: Sparkles,
      quote: 'But you will receive power when the Holy Spirit comes upon you; and you will be my witnesses',
      reference: 'Acts 1:8'
    },
    effects: {
      sectionLabel: 'Spiritual Empowerment',
      heading: 'The Seven Gifts of the Holy Spirit',
      subheading: 'Through Confirmation, God bestows these seven sacred gifts to strengthen us in living the Christian life.',
      cards: [
        {
          icon: Sparkles,
          title: 'Wisdom',
          description: 'The grace to see the world through God\'s eyes and to desire what is truly good and eternal.'
        },
        {
          icon: BookOpen,
          title: 'Understanding',
          description: 'The ability to comprehend the truths of faith and grasp their deeper meaning in our lives.'
        },
        {
          icon: Heart,
          title: 'Counsel',
          description: 'Divine guidance to make right choices and decisions in accordance with God\'s will.'
        },
        {
          icon: CheckCircle,
          title: 'Fortitude',
          description: 'Spiritual courage and strength to overcome obstacles and witness boldly to the faith.'
        },
        {
          icon: BookOpen,
          title: 'Knowledge',
          description: 'Recognition of God\'s presence in all things and understanding of His plan for our lives.'
        },
        {
          icon: Heart,
          title: 'Piety',
          description: 'A deep reverence for God and a loving devotion to worship and service.'
        },
        {
          icon: Sparkles,
          title: 'Fear of the Lord',
          description: 'Profound respect and awe for God\'s majesty that keeps us from sin and leads us to holiness.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Preparation Guide',
      heading: 'Requirements for Confirmation Preparation',
      subheading: 'Whether preparing for youth or adult confirmation, here\'s what you need to know to begin your journey.',
      categories: [
        {
          title: 'Youth Confirmation',
          icon: Users,
          description: 'For young people in Year 9 and above',
          requirements: [
            'Must be baptized Catholic',
            'Complete 2-year preparation program',
            'Attend weekly classes',
            'Choose confirmation name and sponsor',
            'Participate in retreat and service'
          ]
        },
        {
          title: 'Adult Confirmation (RCIA)',
          icon: BookOpen,
          description: 'For adults seeking to complete initiation',
          requirements: [
            'Have received Baptism',
            'Complete RCIA program',
            'Attend weekly sessions',
            'Choose a sponsor/godparent',
            'Receive at Easter Vigil'
          ]
        },
        {
          title: 'Sponsor Requirements',
          icon: Heart,
          description: 'Requirements for confirmation sponsors',
          requirements: [
            'Must be a confirmed Catholic',
            'At least 16 years of age',
            'Live an exemplary Catholic life',
            'Not the parent of candidate',
            'Support candidate\'s faith journey'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'Begin Your Journey of Faith',
      subheading: 'Ready to take the next step? Contact us to begin your **confirmation preparation**. We\'re here to guide you through this sacred journey.'
    }
  },

  'the-eucharist': {
    slug: 'the-eucharist',
    title: 'The Eucharist - The Blessed Sacrament',
    shortTitle: 'The Eucharist',
    metaDescription: 'Learn about the Eucharist, the source and summit of Catholic life at St Saviour\'s Catholic Church. Information on Holy Communion, First Communion, and Mass times in Lewisham.',
    hero: {
      title: 'The Eucharist',
      description: 'The source and summit of Christian life. In the Eucharist, Jesus Christ is truly present—Body, Blood, Soul, and Divinity—under the appearances of bread and wine.',
      backgroundImage: '/images/hands-up-praising.jpg',
      primaryButton: {
        text: 'Learn About the Eucharist',
        href: '#eucharist-info'
      },
      secondaryButton: {
        text: 'View Requirements',
        href: '#requirements'
      }
    },
    mainInfo: {
      sectionLabel: 'The Blessed Sacrament',
      heading: 'The Body and Blood of Christ',
      paragraphs: [
        'The Eucharist is **the source and summit of the Christian life**. In this most blessed sacrament, Jesus Christ is truly present—Body, Blood, Soul, and Divinity—under the appearances of bread and wine.',
        'Through the Eucharist, we are **intimately united with Christ** and nourished for our journey of faith. It is both a sacrifice and a sacred meal, making present the one sacrifice of Christ on Calvary and feeding us with the **Bread of Life**.',
        'At St Saviour\'s, we celebrate the Mass daily, where the mystery of the Eucharist is renewed. We welcome all baptized Catholics in the state of grace to receive Holy Communion, and offer **comprehensive preparation programs** for children and adults preparing to receive their First Holy Communion.'
      ]
    },
    keyAspects: [
      { icon: Cross, title: 'Signs of Grace', text: 'Bread and wine become Body and Blood' },
      { icon: Heart, title: 'Christ\'s Presence', text: 'Real presence in the Eucharist' },
      { icon: Sparkles, title: 'Church Community', text: 'United at the Lord\'s table' }
    ],
    scripture: {
      icon: Sparkles,
      quote: 'Whoever eats my flesh and drinks my blood has eternal life, and I will raise them up at the last day',
      reference: 'John 6:54'
    },
    effects: {
      sectionLabel: 'Spiritual Nourishment',
      heading: 'Graces Received in Holy Communion',
      subheading: 'Through the Eucharist, God works profound changes in our souls, uniting us intimately with Christ and nourishing us for eternal life.',
      cards: [
        {
          icon: Heart,
          title: 'Union with Christ',
          description: 'We become one with Jesus in the most intimate way possible, sharing in His divine life.'
        },
        {
          icon: Sparkles,
          title: 'Spiritual Nourishment',
          description: 'Our souls are fed with the true food that leads to eternal life and strengthens our faith.'
        },
        {
          icon: BookOpen,
          title: 'Forgiveness of Venial Sins',
          description: 'Daily faults are cleansed and we are strengthened against temptation and sin.'
        },
        {
          icon: Users,
          title: 'Unity with the Church',
          description: 'We are bound together as one Body in Christ with all believers throughout the world.'
        },
        {
          icon: CheckCircle,
          title: 'Pledge of Glory',
          description: 'We receive a foretaste of the heavenly banquet and promise of eternal life.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Preparation Guide',
      heading: 'Requirements for Receiving Holy Communion',
      subheading: 'Whether preparing for First Communion or ongoing reception, here\'s what you need to know to receive the Body and Blood of Christ worthily.',
      categories: [
        {
          title: 'First Holy Communion',
          icon: Heart,
          description: 'For children preparing to receive Jesus for the first time',
          requirements: [
            'Must be baptized Catholic',
            'Usually around age 7-8',
            'Complete 2-year preparation program',
            'Understand the Real Presence of Christ',
            'Receive First Confession beforehand'
          ]
        },
        {
          title: 'State of Grace',
          icon: Sparkles,
          description: 'Required spiritual disposition for all communicants',
          requirements: [
            'Free from mortal sin',
            'Receive Confession if needed',
            'Proper intention and reverence',
            'Faith in the Real Presence',
            'Sincere desire to receive Christ'
          ]
        },
        {
          title: 'Eucharistic Fast',
          icon: BookOpen,
          description: 'Physical preparation before receiving Communion',
          requirements: [
            'One hour fast from food and drink',
            'Water and medicine are permitted',
            'Shorter fast for elderly and sick',
            'Spiritual preparation recommended',
            'Arrive early for quiet prayer'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'Begin Your Journey of Faith',
      subheading: 'Ready to take the next step? Contact us to begin your **First Communion preparation** or to learn more about receiving the **Holy Eucharist**. We\'re here to guide you through this sacred journey.'
    }
  },

  confession: {
    slug: 'confession',
    title: 'Confession - The Sacrament of Mercy',
    shortTitle: 'Confession',
    metaDescription: 'Learn about the sacrament of Confession (Reconciliation) at St Saviour\'s Catholic Church. Experience God\'s mercy, forgiveness, and healing in Lewisham.',
    hero: {
      title: 'Confession',
      description: 'God\'s infinite mercy and forgiveness awaits you in the Sacrament of Reconciliation. Through Confession we experience healing, peace, and restoration to grace.',
      backgroundImage: '/images/hands-up-praising.jpg',
      primaryButton: {
        text: 'Learn About Confession',
        href: '#confession-info'
      },
      secondaryButton: {
        text: 'View Requirements',
        href: '#requirements'
      }
    },
    mainInfo: {
      sectionLabel: 'The Sacrament of Mercy',
      heading: 'Reconciliation and God\'s Forgiveness',
      paragraphs: [
        'The Sacrament of Confession, also known as **Reconciliation or Penance**, is God\'s beautiful gift of forgiveness and healing. Through this sacrament, we experience **complete forgiveness** of our sins and are restored to full communion with God and the Church.',
        'Christ gave the apostles the power to forgive sins, saying **"Whose sins you forgive are forgiven"**, and this authority continues in the Church today through ordained priests. **No sin is too great** for God\'s infinite mercy and love.',
        'At St Saviour\'s, we offer regular times for confession and welcome all who seek **God\'s mercy**. This sacrament brings peace to the soul, strength to resist temptation, and the grace necessary for **spiritual growth and healing**.'
      ]
    },
    keyAspects: [
      { icon: Cross, title: 'Signs of Grace', text: 'Words of absolution and penance' },
      { icon: Heart, title: 'Christ\'s Presence', text: 'Christ forgives through the priest' },
      { icon: Sparkles, title: 'Church Community', text: 'Reconciled with God and Church' }
    ],
    scripture: {
      icon: Heart,
      quote: 'Receive the Holy Spirit. Whose sins you forgive are forgiven them, and whose sins you retain are retained',
      reference: 'John 20:22-23'
    },
    effects: {
      sectionLabel: 'Healing and Restoration',
      heading: 'Graces Received in Confession',
      subheading: 'Through the Sacrament of Reconciliation, God pours out His mercy and grace, healing our souls and restoring us to friendship with Him.',
      cards: [
        {
          icon: Heart,
          title: 'Complete Forgiveness',
          description: 'All sins confessed with sincere contrition are completely forgiven through God\'s infinite mercy.'
        },
        {
          icon: Sparkles,
          title: 'Peace of Conscience',
          description: 'Experience profound inner peace knowing you are forgiven and reconciled with God.'
        },
        {
          icon: BookOpen,
          title: 'Spiritual Healing',
          description: 'Receive healing for the spiritual wounds caused by sin and restoration of grace.'
        },
        {
          icon: Users,
          title: 'Reconciliation',
          description: 'Restore your relationship with God, the Church community, and those you may have harmed.'
        },
        {
          icon: CheckCircle,
          title: 'Strength and Grace',
          description: 'Receive actual grace to resist future temptations and live a virtuous life.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Preparation Guide',
      heading: 'How to Prepare for Confession',
      subheading: 'Follow these steps to prepare well for the Sacrament of Reconciliation and receive God\'s mercy.',
      categories: [
        {
          title: 'Examination of Conscience',
          icon: Sparkles,
          description: 'Reflect honestly on your sins since last confession',
          requirements: [
            'Review the Ten Commandments',
            'Reflect on thoughts, words, and actions',
            'Consider sins of omission',
            'Ask the Holy Spirit for guidance',
            'Be honest with yourself about failings'
          ]
        },
        {
          title: 'Sincere Contrition',
          icon: Heart,
          description: 'Feel genuine sorrow and resolve to change',
          requirements: [
            'Feel true sorrow for your sins',
            'Understand you have offended God',
            'Resolve to avoid sin in future',
            'Desire to make amends if possible',
            'Trust in God\'s mercy and love'
          ]
        },
        {
          title: 'Confession & Penance',
          icon: BookOpen,
          description: 'Confess your sins and complete your penance',
          requirements: [
            'Confess all mortal sins completely',
            'State time since last confession',
            'Listen to priest\'s counsel',
            'Receive absolution with faith',
            'Complete assigned penance promptly'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'Experience God\'s Mercy Today',
      subheading: 'Ready to take the next step? Contact us to learn about **confession times** or to schedule an appointment. We\'re here to guide you through this sacred journey of **healing and forgiveness**.'
    }
  },

  // MATRIMONY - Real content from old site
  matrimony: {
    slug: 'matrimony',
    title: 'Matrimony',
    shortTitle: 'Matrimony',
    metaDescription: 'Learn about the sacrament of Matrimony at St Saviour\'s Catholic Church. Information on marriage preparation, Pre-Cana, and celebrating your sacred covenant in Lewisham.',
    hero: {
      title: 'Matrimony',
      description: 'A sacred covenant of love between a man and woman, blessed by God and witnessed by the Church. Through Marriage we are united in faithful love and receive grace to support each other through life.',
      backgroundImage: '/images/wedding-rings.jpg',
      primaryButton: {
        text: 'Learn About Marriage',
        href: '#matrimony-info'
      },
      secondaryButton: {
        text: 'View Requirements',
        href: '#requirements'
      }
    },
    mainInfo: {
      sectionLabel: 'The Sacrament of Unity',
      heading: 'United in the Love of Christ',
      paragraphs: [
        'Matrimony is **a sacred covenant** between a man and woman, reflecting the unconditional love between Christ and the Church. Through this sacrament, couples receive grace to love each other faithfully and to be united as one in Christ.',
        'In this sacrament, husband and wife are **sealed in permanent unity**, called to support each other through life\'s joys and challenges. Marriage is **lifelong and exclusive**, open to the gift of children, and rooted in the love of God.',
        'At St Saviour\'s, we joyfully celebrate marriages and provide **comprehensive preparation programs** to help couples build a strong foundation for their life together, ensuring they understand the sacred nature of their commitment and the graces available to them.'
      ]
    },
    keyAspects: [
      {
        icon: Plus,
        title: 'Signs of Grace',
        text: 'Wedding vows and rings exchanged'
      },
      {
        icon: Heart,
        title: 'Christ\'s Presence',
        text: 'Christ blesses the union'
      },
      {
        icon: Sparkles,
        title: 'Church Community',
        text: 'New family in the Church'
      }
    ],
    scripture: {
      icon: Heart,
      quote: 'For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. This mystery is profound',
      reference: 'Ephesians 5:31-32'
    },
    effects: {
      sectionLabel: 'Sacramental Graces',
      heading: 'The Sacred Effects of Matrimony',
      subheading: 'Through Matrimony, God works powerful graces in the souls of husband and wife, transforming them into a living image of Christ\'s love.',
      cards: [
        {
          icon: Heart,
          title: 'Sacramental Grace',
          description: 'Special graces to love faithfully and support each other through all of life\'s joys and challenges.'
        },
        {
          icon: Sparkles,
          title: 'Unity in Christ',
          description: 'Two become one flesh, united in love and purpose under God\'s eternal covenant.'
        },
        {
          icon: Users,
          title: 'Family Foundation',
          description: 'Called to welcome and raise children in the Catholic faith as a domestic church.'
        },
        {
          icon: BookOpen,
          title: 'Mutual Sanctification',
          description: 'Husband and wife help each other grow in holiness and virtue throughout their lives.'
        },
        {
          icon: Check,
          title: 'Permanent Bond',
          description: 'An indissoluble bond sealed by God that lasts until death, reflecting Christ\'s eternal love.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Preparation Guide',
      heading: 'Requirements for Marriage Preparation',
      subheading: 'Whether preparing for a Catholic wedding or a mixed marriage, here\'s what you need to know to begin your journey.',
      categories: [
        {
          icon: Heart,
          title: 'Catholic Couples',
          description: 'For couples where both parties are Catholic',
          requirements: [
            'Both parties baptized Catholic',
            'Free to marry in the Church',
            'Complete Pre-Cana preparation program',
            'Six months advance notice preferred',
            'Recent baptismal and confirmation certificates'
          ]
        },
        {
          icon: BookOpen,
          title: 'Mixed Marriages',
          description: 'For couples where one party is Catholic',
          requirements: [
            'One party must be Catholic',
            'Dispensation required from Bishop',
            'Catholic party promises to raise children Catholic',
            'Non-Catholic party informed of promises',
            'Additional preparation may be required'
          ]
        },
        {
          icon: Users,
          title: 'Documentation Needed',
          description: 'Required documents for marriage preparation',
          requirements: [
            'Recent baptismal certificates',
            'Confirmation certificates',
            'Civil marriage license',
            'Proof of freedom to marry',
            'Pre-nuptial investigation forms'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'Begin Your Journey Together',
      subheading: 'Ready to take the next step? Contact us to begin your **marriage preparation** or to schedule your **wedding ceremony**. We\'re here to guide you through this sacred journey.'
    }
  },

  // HOLY ORDERS - Real content from old site
  'holy-orders': {
    slug: 'holy-orders',
    title: 'Holy Orders',
    shortTitle: 'Holy Orders',
    metaDescription: 'Learn about the sacrament of Holy Orders at St Saviour\'s Catholic Church. Information on priesthood, diaconate, vocations, and discernment in Lewisham.',
    hero: {
      title: 'Holy Orders',
      description: 'The sacrament of apostolic ministry through which men are consecrated to shepherd God\'s people as bishops, priests, and deacons, continuing the mission entrusted by Christ to his apostles.',
      backgroundImage: '/images/hands-up-praising.jpg',
      primaryButton: {
        text: 'Learn About Holy Orders',
        href: '#orders-info'
      },
      secondaryButton: {
        text: 'View Requirements',
        href: '#requirements'
      }
    },
    mainInfo: {
      sectionLabel: 'The Sacrament of Apostolic Ministry',
      heading: 'Called to Shepherd God\'s People',
      paragraphs: [
        'Holy Orders is **the sacrament through which the mission entrusted by Christ to his apostles** continues to be exercised in the Church. It includes three degrees: bishops, priests, and deacons, each called to serve God\'s people with humility and love.',
        'This sacrament confers **a sacred power for the service of the faithful**. Those who receive Holy Orders are consecrated in Christ\'s name to feed the Church with the Word and grace of God, becoming shepherds, teachers, and sanctifiers of the people.',
        'The call to Holy Orders is **a divine vocation** requiring careful discernment, extensive seminary formation, and a lifelong commitment to serving God\'s people. We pray for vocations and support those discerning this sacred calling.'
      ]
    },
    keyAspects: [
      {
        icon: Plus,
        title: 'Signs of Grace',
        text: 'Laying on of hands and prayer'
      },
      {
        icon: Heart,
        title: 'Christ\'s Presence',
        text: 'Configured to Christ the priest'
      },
      {
        icon: Sparkles,
        title: 'Church Community',
        text: 'Ordained to serve God\'s people'
      }
    ],
    scripture: {
      icon: Hand,
      quote: 'It was not you who chose me, but I who chose you and appointed you to go and bear fruit that will remain',
      reference: 'John 15:16'
    },
    effects: {
      sectionLabel: 'Spiritual Transformation',
      heading: 'The Sacred Effects of Holy Orders',
      subheading: 'Through Holy Orders, God consecrates men to act in the person of Christ, giving them authority to celebrate sacraments and shepherd his people.',
      cards: [
        {
          icon: Hand,
          title: 'Sacred Character',
          description: 'Imprints an indelible spiritual character that configures the man to Christ the priest forever.'
        },
        {
          icon: Heart,
          title: 'Sacred Power',
          description: 'Confers the power to celebrate sacraments and shepherd God\'s people with authority.'
        },
        {
          icon: BookOpen,
          title: 'Grace of State',
          description: 'Provides special graces needed to fulfill the duties of ordained ministry faithfully.'
        },
        {
          icon: GraduationCap,
          title: 'Configuration to Christ',
          description: 'The ordained person acts in the person of Christ the head of the Church.'
        },
        {
          icon: Check,
          title: 'Pastoral Care',
          description: 'Called to serve the Church with humility, following Christ\'s example of servant leadership.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Formation Guide',
      heading: 'Requirements for Holy Orders',
      subheading: 'The journey to priesthood or diaconate requires careful discernment, seminary formation, and preparation in service to God\'s people.',
      categories: [
        {
          icon: Heart,
          title: 'Vocational Discernment',
          description: 'For those sensing a call to priesthood or diaconate',
          requirements: [
            'Clear sense of calling from God to serve',
            'Discernment through prayer and spiritual direction',
            'Recognition by the Church community',
            'Acceptance by the bishop after evaluation',
            'Internal conviction of being chosen'
          ]
        },
        {
          icon: GraduationCap,
          title: 'Seminary Formation',
          description: 'For candidates preparing for priesthood',
          requirements: [
            'Seminary education (6-8 years for priests)',
            'Academic studies in theology and philosophy',
            'Spiritual formation and prayer life',
            'Pastoral training and field experience',
            'Human development and maturity'
          ]
        },
        {
          icon: BookOpen,
          title: 'Personal Qualifications',
          description: 'Requirements for ordination candidates',
          requirements: [
            'Baptized Catholic male in good standing',
            'Sound physical and mental health',
            'Good moral character and reputation',
            'Commitment to celibacy (for priests)',
            'Ability to relate well to people'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'Discern Your Vocation',
      subheading: 'If you feel called to explore a vocation to the priesthood or diaconate, we invite you to begin a journey of **prayerful discernment** and contact your **diocesan vocations director** for guidance.'
    }
  },

  // ANOINTING OF THE SICK - Real content from old site
  'anointing-of-the-sick': {
    slug: 'anointing-of-the-sick',
    title: 'Anointing of the Sick',
    shortTitle: 'Anointing',
    metaDescription: 'Learn about the sacrament of Anointing of the Sick at St Saviour\'s Catholic Church. Information on spiritual healing, comfort, strength in illness, and preparation for eternal life in Lewisham.',
    hero: {
      title: 'Anointing of the Sick',
      description: 'The sacrament of healing and comfort for those facing serious illness or the frailty of old age. Through this sacrament, we receive God\'s grace, strength, and preparation for eternal life.',
      backgroundImage: '/images/hands-up-praising.jpg',
      primaryButton: {
        text: 'Learn About Anointing',
        href: '#anointing-info'
      },
      secondaryButton: {
        text: 'View Requirements',
        href: '#requirements'
      }
    },
    mainInfo: {
      sectionLabel: 'The Sacrament of Healing',
      heading: 'Christ\'s Healing Touch in Times of Illness',
      paragraphs: [
        'The Anointing of the Sick is **a sacrament of healing, comfort, and strength** for those facing serious illness, surgery, or the frailty of old age. It continues Christ\'s healing ministry in the Church, bringing God\'s grace and peace to those who suffer.',
        'This sacrament is **not only for those at the point of death**, but for anyone experiencing serious illness or preparing for major surgery. It can be received **multiple times** during different illnesses, bringing God\'s healing grace and spiritual comfort.',
        'At St Saviour\'s, we are **available 24/7** to bring this sacrament to those in need. We provide **compassionate pastoral care** to both the sick and their families, offering **hope and dignity** in God\'s loving presence.'
      ]
    },
    keyAspects: [
      {
        icon: Plus,
        title: 'Signs of Grace',
        text: 'Holy oil and prayers for healing'
      },
      {
        icon: Heart,
        title: 'Christ\'s Presence',
        text: 'Christ heals through the sacrament'
      },
      {
        icon: Sparkles,
        title: 'Church Community',
        text: 'Supported by Church prayers'
      }
    ],
    scripture: {
      icon: Heart,
      quote: 'Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord',
      reference: 'James 5:14-15'
    },
    effects: {
      sectionLabel: 'Spiritual Healing',
      heading: 'The Sacred Effects of Anointing',
      subheading: 'Through Anointing, God brings healing grace, comfort, and strength to face illness with faith and hope.',
      cards: [
        {
          icon: Heart,
          title: 'Spiritual Comfort',
          description: 'Brings peace, courage, and strength to face illness with faith and hope in God\'s healing love.'
        },
        {
          icon: Shield,
          title: 'Forgiveness of Sins',
          description: 'Forgives sins if the person is unable to receive confession due to their condition.'
        },
        {
          icon: Sparkles,
          title: 'Grace for Healing',
          description: 'Brings the grace needed for possible physical healing according to God\'s will.'
        },
        {
          icon: Users,
          title: 'Union with Christ',
          description: 'Unites the sick person\'s suffering with Christ\'s passion for salvation.'
        },
        {
          icon: BookOpen,
          title: 'Preparation for Eternity',
          description: 'If it is God\'s will, prepares the soul for the journey to eternal life.'
        }
      ]
    },
    requirements: {
      sectionLabel: 'Receiving the Sacrament',
      heading: 'Requirements for Anointing of the Sick',
      subheading: 'Who can receive this sacrament and how to request it in times of serious illness or emergency.',
      categories: [
        {
          icon: Heart,
          title: 'Who Can Receive',
          description: 'Those who may receive this sacrament',
          requirements: [
            'Any baptized Catholic who is seriously ill',
            'Those preparing for major surgery',
            'Elderly persons weakened by age',
            'Children who have reached the age of reason',
            'Can be received multiple times'
          ]
        },
        {
          icon: BookOpen,
          title: 'When to Request',
          description: 'Appropriate times to request anointing',
          requirements: [
            'As soon as serious illness begins',
            'Before major surgery or procedures',
            'During times of great physical weakness',
            'When facing life-threatening conditions',
            'Don\'t wait until the last moment'
          ]
        },
        {
          icon: Phone,
          title: 'How to Request',
          description: 'Steps to receive this sacrament',
          requirements: [
            'Call parish office: 020 8852 7411',
            'Available 24/7 for emergencies',
            'Speak with priest after Mass',
            'Hospital chaplain services available',
            'Family may request on behalf of patient'
          ]
        }
      ]
    },
    callToAction: {
      sectionLabel: 'Next Steps',
      heading: 'You Are Not Alone in Your Suffering',
      subheading: 'The Church is here to provide **spiritual comfort and healing** through this beautiful sacrament. Contact us anytime for **pastoral care** and **the anointing of the sick**.'
    }
  }
};

// Helper function to get sacrament data
export function getSacramentData(slug: string): SacramentData | undefined {
  return sacramentsData[slug];
}

// Helper function to get all sacrament slugs
export function getAllSacramentSlugs(): string[] {
  return Object.keys(sacramentsData);
}

// Helper function to get all sacraments for overview page
export function getAllSacraments(): SacramentData[] {
  return Object.values(sacramentsData);
}
