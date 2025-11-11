/**
 * Custom content for specific categories.
 *
 * This file defines rich introductions and CTAs for key categories instead of generic defaults.
 * Key format: '{hub}/{category-slug}'
 *
 * If a category is not in this map, the getCategoryLayoutContent() function
 * will generate default content automatically.
 */

import type { CategoryIntroduction, CategoryCategoriesConfig, CategoryCTAConfig } from './unified-hub-cms';

export const CATEGORY_CUSTOM_CONTENT: Record<string, {
  introduction?: CategoryIntroduction;
  categoriesConfig?: CategoryCategoriesConfig;
  ctaConfig?: CategoryCTAConfig;
}> = {
  // Learning Hub - Church History
  'learning-hub/church-history': {
    introduction: {
      label: 'Journey Through Time',
      title: 'Exploring',
      subtitle: 'Church History',
      paragraphs: [
        {
          text: 'The Catholic Church stands as one of the oldest institutions in human history, spanning over two millennia of profound spiritual, cultural, and intellectual development. From the apostolic age through the medieval period and into the modern era, the Church has been both witness to and participant in the great events that have shaped Western civilization.',
          emphasized: false
        },
        {
          text: 'This rich tapestry of history encompasses pivotal moments such as the ecumenical councils that defined core doctrines, the rise and flourishing of monasticism, the Crusades and their lasting impact, and the theological debates that refined our understanding of faith. Each century brought new challenges, new saints, and new insights into the mysteries of God.',
          emphasized: true
        },
        {
          text: 'Through exploring Church history, we gain not only knowledge of past events but a deeper appreciation for how the Holy Spirit has guided the Church through triumph and trial, reformation and renewal, always preserving the apostolic faith while responding to the needs of each age.',
          emphasized: false
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Historical Periods',
      sectionTitle: 'Discover Key Eras in Church History',
      description: 'Journey through the centuries of Catholic history, from the early Church through the medieval period and beyond. Each era offers unique insights into the development of doctrine, practice, and the lived faith of our ancestors.'
    },
    ctaConfig: {
      title: 'Deepen Your Understanding of Our Faith',
      description: 'The story of the Catholic Church is the story of God\'s love acting through history. Explore timelines, discover influential figures, and understand the events that shaped our faith community across the ages.',
      primaryButton: {
        text: 'Browse Historical Timelines',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Return to Learning Hub',
        href: '/learning-hub'
      }
    }
  },

  // Learning Hub - Theology and Theologians
  'learning-hub/theology-and-theologians': {
    introduction: {
      label: 'Faith Seeking Understanding',
      title: 'Exploring',
      subtitle: 'Theology and Theologians',
      paragraphs: [
        {
          text: 'Catholic theology represents centuries of profound reflection on divine revelation, guided by the Holy Spirit and enriched by brilliant minds across the ages. From the patristic fathers who defended the faith against early heresies to the scholastic doctors who synthesized reason and revelation, theologians have illuminated the depths of Christian truth.',
          emphasized: false
        },
        {
          text: 'The great thinkers of the Church—Augustine, Aquinas, Bonaventure, Teresa of Avila, and countless others—engaged in the sacred task of faith seeking understanding. Through rigorous philosophical inquiry, mystical contemplation, and careful scriptural exegesis, they explored the mysteries of the Trinity, the Incarnation, grace, and salvation.',
          emphasized: true
        },
        {
          text: 'Their writings continue to shape Catholic thought today, offering wisdom that speaks across the centuries. Whether through systematic theology, spiritual writings, or biblical commentary, these theologians invite us into a deeper relationship with God and a fuller understanding of our faith.',
          emphasized: false
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Great Theological Traditions',
      sectionTitle: 'Meet the Theologians Who Shaped Our Faith',
      description: 'Discover the brilliant minds who have explored the depths of Catholic doctrine across the centuries, from the Church Fathers through the scholastics and into the modern period.'
    },
    ctaConfig: {
      title: 'Study the Treasures of Catholic Thought',
      description: 'Engage with the theological heritage of the Church through the writings and insights of her greatest thinkers. Let their wisdom guide you to a deeper understanding of divine truth.',
      primaryButton: {
        text: 'Explore Theologians',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Return to Learning Hub',
        href: '/learning-hub'
      }
    }
  },

  // Learning Hub - Saints
  'learning-hub/saints': {
    introduction: {
      label: 'Witnesses to Holiness',
      title: 'Exploring',
      subtitle: 'The Lives of the Saints',
      paragraphs: [
        {
          text: 'The saints are the living proof of God\'s transforming grace, ordinary men and women who responded to Christ\'s call with extraordinary faith, hope, and love. Their lives span every century, culture, and continent, offering diverse models of holiness for every vocation and circumstance.',
          emphasized: true
        },
        {
          text: 'From martyrs who gave their lives for the faith to contemplatives who plumbed the depths of prayer, from scholars who illuminated doctrine to servants who cared for the poorest of the poor, the saints show us countless paths to sanctity. Their stories inspire us, their intercession supports us, and their example challenges us to grow in holiness.',
          emphasized: false
        },
        {
          text: 'By studying the lives of the saints, we encounter not distant figures of legend but real people who struggled, doubted, fell, and rose again—always trusting in God\'s mercy and striving to love as Christ loved.',
          emphasized: false
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Companions on the Journey',
      sectionTitle: 'Discover Saints Who Inspire',
      description: 'Meet the holy men and women whose lives witness to the power of God\'s grace. Learn from their virtues, be inspired by their courage, and seek their prayers.'
    },
    ctaConfig: {
      title: 'Walk with the Saints',
      description: 'Let the communion of saints be your companions on the journey to holiness. Discover their stories, learn from their wisdom, and ask for their intercession.',
      primaryButton: {
        text: 'Explore Saints\' Lives',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Return to Learning Hub',
        href: '/learning-hub'
      }
    }
  },

  // Prayer Hub - Novenas
  'prayer-hub/novenas': {
    introduction: {
      label: 'Nine Days of Prayer',
      title: 'Exploring',
      subtitle: 'Novenas',
      paragraphs: [
        {
          text: 'A novena is a powerful form of prayer in the Catholic tradition, consisting of nine consecutive days of devotion to seek a special intention, honor a saint, or prepare for a liturgical feast. The practice finds its roots in the nine days the Apostles and Mary spent in prayer between Christ\'s Ascension and the coming of the Holy Spirit at Pentecost.',
          emphasized: true
        },
        {
          text: 'Through persistent, faithful prayer over nine days, we unite our hearts with the Church in heaven and on earth, trusting in God\'s providence and timing. Novenas can focus on the Sacred Heart of Jesus, the Holy Spirit, Our Lady under various titles, or particular saints, each offering unique graces and insights into the spiritual life.',
          emphasized: false
        },
        {
          text: 'Whether praying for healing, guidance, conversion, or simply to deepen your relationship with God, novenas provide a structured rhythm of devotion that strengthens faith and opens the soul to divine grace.',
          emphasized: false
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Traditional Novenas',
      sectionTitle: 'Begin Your Novena Journey',
      description: 'Choose from our collection of time-honored novenas to the Sacred Heart, the Holy Spirit, Our Lady, and beloved saints. Each provides daily prayers and reflections for nine days of focused devotion.'
    },
    ctaConfig: {
      title: 'Commit to Nine Days of Prayer',
      description: 'Start a novena today and experience the grace that comes from persistent, faithful prayer. Whether seeking intercession for a specific need or deepening your devotion, novenas open the heart to God\'s transforming love.',
      primaryButton: {
        text: 'Choose a Novena',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Return to Prayer Hub',
        href: '/prayer-hub'
      }
    }
  },

  // Prayer Hub - Litanies
  'prayer-hub/litanies': {
    introduction: {
      label: 'Ancient Prayers of the Church',
      title: 'Exploring',
      subtitle: 'Litanies',
      paragraphs: [
        {
          text: 'Litanies are among the most ancient and venerable forms of prayer in the Catholic Church, characterized by a beautiful responsive pattern where a leader invokes various titles and attributes, and the congregation responds with a repeated phrase of petition or praise.',
          emphasized: false
        },
        {
          text: 'This call-and-response structure creates a powerful rhythm of prayer that engages both mind and heart. Through litanies, we honor Our Lord, Our Lady, and the saints by invoking their many titles and seeking their intercession. The repetition deepens our meditation while the variety of invocations expands our understanding of divine attributes and saintly virtues.',
          emphasized: true
        },
        {
          text: 'From the Litany of the Sacred Heart to the Litany of Loreto honoring Our Lady, these prayers have echoed through churches and homes for centuries, uniting generations of the faithful in common devotion and heartfelt supplication.',
          emphasized: false
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Traditional Litanies',
      sectionTitle: 'Pray the Litanies of the Church',
      description: 'Discover the rich tradition of litany prayers, each offering a profound meditation on the attributes of Christ, the virtues of Mary, or the holiness of the saints through rhythmic, responsive prayer.'
    },
    ctaConfig: {
      title: 'Join Your Voice to Centuries of Prayer',
      description: 'Experience the beauty and depth of litanies, where ancient words carry timeless truths and the rhythm of prayer draws the soul into contemplation and praise.',
      primaryButton: {
        text: 'Explore Litanies',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Return to Prayer Hub',
        href: '/prayer-hub'
      }
    }
  },

  // Prayer Hub - Devotional Prayers
  'prayer-hub/devotional-prayers': {
    introduction: {
      label: 'About Devotional Prayers',
      title: 'Deepening Your',
      subtitle: 'Relationship with Christ and Mary',
      paragraphs: [
        {
          text: 'Devotional prayers are intimate, heartfelt expressions of love and veneration directed to specific aspects of Our Lord\'s divine person or particular titles and mysteries of Our Lady. Unlike formal liturgical prayers, devotions allow for personal, affective prayer that nurtures a deeper spiritual relationship with Jesus and Mary.',
          emphasized: false
        },
        {
          text: 'The Sacred Heart of Jesus, Our Lady of the Assumption, and Our Lady of Sorrows represent profound mysteries of Catholic faith. Through devotional prayers to these sacred mysteries, we enter more fully into Christ\'s burning love for humanity, Mary\'s glorious entrance into heaven, and the compassionate suffering she endured at the foot of the Cross. Each devotion opens unique channels of grace and understanding.',
          emphasized: true
        },
        {
          text: 'These time-honored devotions have sustained countless souls through joy and sorrow, offering comfort in trials and deeper intimacy with God. By incorporating devotional prayers into your spiritual life, you join a living tradition that spans centuries, drawing closer to the Sacred Heart that loves us without measure and to Our Lady who leads us always to her Son.',
          emphasized: false
        }
      ]
    },
    categoriesConfig: {
      sectionLabel: 'Browse Devotional Prayers',
      sectionTitle: 'Devotional Prayers',
      description: 'Explore traditional Catholic devotions to the Sacred Heart of Jesus and various titles of Our Lady, each offering unique graces and pathways to deeper prayer and spiritual intimacy.'
    },
    ctaConfig: {
      title: 'Begin Your Devotional Journey',
      description: 'Develop a rich personal prayer life through these beautiful devotions. Let the Sacred Heart of Jesus and the loving intercession of Our Lady transform your relationship with God.',
      primaryButton: {
        text: 'Explore Devotions',
        href: '#topics'
      },
      secondaryButton: {
        text: 'Submit Prayer Request',
        href: '/prayer-request'
      }
    }
  }
};
