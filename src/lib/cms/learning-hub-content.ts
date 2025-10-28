export interface ArticleContent {
	hero: string;
	intro: string;
	title: string;
	mainText: string;
	author?: string;
	readingTime?: number;
	publishedDate?: string;
	category?: string;
	socialStats?: {
		reddit?: number;
		twitter?: number;
		facebook?: number;
	};
	relatedArticles?: string[];
	previousArticle?: {
		slug: string;
		title: string;
	};
	nextArticle?: {
		slug: string;
		title: string;
	};
	sources?: Array<{
		title: string;
		url: string;
	}>;
}

export interface ContentItem {
	id: string;
	slug: string;
	title: string;
	description: string;
	imageUrl?: string;
	children?: ContentItem[];
	timeline?: {
		start: string;
		end: string;
	};
	isArticle?: boolean;
	articleContent?: ArticleContent;
}

export const mainCategories: ContentItem[] = [
	{
		id: 'theology',
		slug: 'theology-and-theologians',
		title: 'Theology and Theologians',
		description:
			'Study of theology and notable theologians throughout Church history',
		imageUrl: '/images/learning-hub/theology.jpg',
		children: [
			{
				id: 'early-church',
				slug: 'early-church',
				title: 'The Early Church',
				description: 'Early Christian theology and development (30 CE – 300 CE)',
				imageUrl: '/images/learning-hub/early-church.jpg',
				timeline: {
					start: '30 CE',
					end: '300 CE',
				},
			},
			{
				id: 'spread-christianity',
				slug: 'spread-christianity',
				title: 'The Spread of Christianity',
				description: 'Growth and development of the Church (300 CE – 600 CE)',
				imageUrl: '/images/learning-hub/spread-christianity.jpg',
				timeline: {
					start: '300 CE',
					end: '600 CE',
				},
				children: [
					{
						id: 'augustine',
						slug: 'augustine-of-hippo',
						title: 'Augustine of Hippo',
						description: 'Life and teachings of St. Augustine, Doctor of Grace',
						imageUrl: '/images/learning-hub/augustine.jpg',
					},
				],
			},
			{
				id: 'monasticism-scholasticism',
				slug: 'monasticism-scholasticism',
				title: 'Monasticism and Scholasticism',
				description:
					'Monastic movements and theological developments (600 CE – 1100 CE)',
				imageUrl: '/images/learning-hub/monasticism.jpg',
				timeline: {
					start: '600 CE',
					end: '1100 CE',
				},
				children: [
					{
						id: 'bernard',
						slug: 'bernard-of-clairvaux',
						title: 'Bernard of Clairvaux',
						description: 'The Mellifluous Doctor and Cistercian reformer',
						imageUrl: '/images/learning-hub/bernard.jpg',
					},
					{
						id: 'gregory',
						slug: 'pope-gregory',
						title: 'Pope Gregory',
						description: 'Pope Gregory I and his theological contributions',
						imageUrl: '/images/learning-hub/gregory.jpg',
					},
					{
						id: 'abelard',
						slug: 'peter-abelard',
						title: 'Peter Abelard',
						description: 'Medieval philosopher and theologian',
						imageUrl: '/images/learning-hub/abelard.jpg',
					},
				],
			},
			{
				id: 'mysticism-middle-ages',
				slug: 'mysticism-middle-ages',
				title: 'Mysticism and the Middle Ages',
				description:
					'Mystical theology and medieval developments (1100 CE – 1500 CE)',
				imageUrl: '/images/learning-hub/mysticism.jpg',
				timeline: {
					start: '1100 CE',
					end: '1500 CE',
				},
				children: [
					{
						id: '12th-century-timeline',
						slug: '12th-century-church-history',
						title:
							'The Catholic Church In The 12th Century: a timeline of key events',
						description:
							'Comprehensive timeline covering the apogee of the High Middle Ages, influential popes, scholasticism, and major events from 1200-1300 CE',
						imageUrl: '/images/learning-hub/image1.png',
						timeline: {
							start: '1100 CE',
							end: '1200 CE',
						},
						isArticle: true,
						articleContent: {
							hero: `The Catholic Church In The 12th Century: a timeline of key events`,
							intro: 'The end of the 11th century and the start of the 12th century was a watershed for the Catholic Church. Major changes in the European and Near Eastern political landscape had far-reaching implications for Catholics of the period. Below is a timeline highlighting some of the highlights of the period, which affected the Catholic Church and the principal theologians and popes of the day. They are and will be covered in more detail in subsequent articles and discussions.',
							title:
								'A Timeline of Key Events in 13th Century Catholic Church History',
							mainText: `
                <div class="space-y-6 mb-12">
                  <p>
                    The 13th century saw a succession of influential popes, including Innocent III, Gregory IX, and Boniface VIII.
                    These popes played significant roles in shaping the Church and its relationship with secular powers during
                    a period of change and conflict.
                  </p>

                  <p>
                    Monasticism, the rise of university cities across Europe and axial relationships with religious and
                    educational institutions in Persia, Spain and Egypt, resulted in a fruitful flow of advancements in
                    mathematics, logic, philosophy and theology.
                  </p>

                  <p>
                    Scholasticism is a method of theological inquiry that emphasises logical reasoning and the use of
                    dialectic to resolve theological questions. The method led to the development of organised and
                    comprehensive theological systems, often beginning with arguments for the existence of God.
                  </p>
                </div>

                <div class="border-t border-slate-300 pt-8">
                  <h3 class="text-2xl font-bold text-slate-900 mb-6">Timeline of Key Events</h3>

                  <div class="space-y-8">
                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1200</h4>
                      <p>
                        <strong>Albertus Magnus (1200-1280) is born.</strong> He would become, in turn, a Dominican friar,
                        the teacher of Thomas Aquinas, and a prolific writer on various subjects, including theology and natural science.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1202-1204</h4>
                      <p>
                        <strong>The catastrophic Fourth Crusade gets underway.</strong> It was supposed to recapture Jerusalem,
                        what it did was fatally weaken the Byzantine Empire, as the crusading army sacked Constantinople and stayed there.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1215</h4>
                      <p>
                        <strong>The Magna Carta was signed.</strong> A beautifully written copy of the Magna Carta can be seen
                        in a glass case at Salisbury Cathedral. The tightly written charter is a document that outlines the
                        protection of church rights and the protection of the barons from illegal imprisonment.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1215</h4>
                      <p>
                        <strong>The Fourth Lateran Council, convened by Pope Innocent III, defined key doctrines.</strong>
                        The council addressed a number of issues, including the sacraments, the role of the laity, the treatment
                        of Jews and heretics, and the organisation of the church.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1225</h4>
                      <p>
                        <strong>Thomas Aquinas (1225–1274) was born.</strong> He would grow up to become one of the most famous
                        doctors of the Church and influencer in the Medieval period. His stature as an intellectual helped to
                        soften the image of the Dominicans.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1277</h4>
                      <p>
                        <strong>The Condemnation of 1277.</strong> The Bishop of Paris, Étienne Tempier, issued a treatise,
                        attacking some 219 propositions stemming from Aristotelian thought that was influencing theological
                        debate at the University of Paris.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-12 p-6 bg-slate-50 rounded-lg">
                  <h3 class="text-xl font-bold text-slate-900 mb-4">Key Figures of the 13th Century</h3>
                  <ul class="space-y-2">
                    <li><strong>Pope Innocent III (1198-1216)</strong> - Most powerful Pope of the Middle Ages</li>
                    <li><strong>Thomas Aquinas (1225-1274)</strong> - Dominican theologian and Doctor of the Church</li>
                    <li><strong>Bonaventure (1221-1274)</strong> - Franciscan theologian and mystic</li>
                    <li><strong>Albertus Magnus (1200-1280)</strong> - Dominican friar and teacher of Aquinas</li>
                    <li><strong>St. Francis of Assisi (c.1181-1226)</strong> - Founder of the Franciscan Order</li>
                  </ul>
                </div>
              `,
							author: 'Parish Learning Team',
							readingTime: 25,
							publishedDate: '2025-01-15',
							category: 'Church History',
							sources: [
								{
									title: 'Getty Open Content Program',
									url: 'https://www.getty.edu/about/whatwedo/opencontent.html',
								},
							],
						},
					},
					{
						id: '13th-century-timeline',
						slug: '13th-century-church-history',
						title: 'A Timeline of Key Events in 13th Century Catholic Church History',
						description:
							'Comprehensive timeline covering the apogee of the High Middle Ages, influential popes, scholasticism, and major events from 1200-1300 CE',
						imageUrl: '/images/learning-hub/IMAGE FOR THE 13TH CENTURY TIMELINE.jpg',
						timeline: {
							start: '1200 CE',
							end: '1300 CE',
						},
						isArticle: true,
						articleContent: {
							hero: `A page from a 12th century Bestiary. Bestiaries, collections of moralising descriptions of animals both real and legendary, were among the most popular books of the 1100s and 1200s. Source: Getty Open Content Program, 2025`,
							intro: `In some respects, the 13th century is thought by historians to be the apogee of the High Middle Ages. In reality it was a mixed bag for the ordinary man. The Crusades were in full flow, and they helped build the sea powers of Venice and Genoa, and fuelled the early days of the Reconquista in Spain, but the Crusades had begun to lose steam in the Middle East. The papacy was at the height of its political and financial influence, with figures such as Innocent III wielding considerable religious power, often to the detriment of protestant groups, such as the Waldensians and new cults, such as the Cathars.`,
							title:
								'A Timeline of Key Events in 13th Century Catholic Church History',
							mainText: `
                <div class="space-y-6 mb-12">
                  <p>
                    The 13th century saw a succession of influential popes, including Innocent III, Gregory IX, and Boniface VIII.
                    These popes played significant roles in shaping the Church and its relationship with secular powers during
                    a period of change and conflict.
                  </p>

                  <p>
                    Monasticism, the rise of university cities across Europe and axial relationships with religious and
                    educational institutions in Persia, Spain and Egypt, resulted in a fruitful flow of advancements in
                    mathematics, logic, philosophy and theology.
                  </p>

                  <p>
                    Scholasticism is a method of theological inquiry that emphasises logical reasoning and the use of
                    dialectic to resolve theological questions. The method led to the development of organised and
                    comprehensive theological systems, often beginning with arguments for the existence of God.
                  </p>
                </div>

                <div class="border-t border-slate-300 pt-8">
                  <h3 class="text-2xl font-bold text-slate-900 mb-6">Timeline of Key Events</h3>

                  <div class="space-y-8">
                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1200</h4>
                      <p>
                        <strong>Albertus Magnus (1200-1280) is born.</strong> He would become, in turn, a Dominican friar,
                        the teacher of Thomas Aquinas, and a prolific writer on various subjects, including theology and natural science.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1202-1204</h4>
                      <p>
                        <strong>The catastrophic Fourth Crusade gets underway.</strong> It was supposed to recapture Jerusalem,
                        what it did was fatally weaken the Byzantine Empire, as the crusading army sacked Constantinople and stayed there.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1215</h4>
                      <p>
                        <strong>The Magna Carta was signed.</strong> A beautifully written copy of the Magna Carta can be seen
                        in a glass case at Salisbury Cathedral. The tightly written charter is a document that outlines the
                        protection of church rights and the protection of the barons from illegal imprisonment.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1215</h4>
                      <p>
                        <strong>The Fourth Lateran Council, convened by Pope Innocent III, defined key doctrines.</strong>
                        The council addressed a number of issues, including the sacraments, the role of the laity, the treatment
                        of Jews and heretics, and the organisation of the church.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1225</h4>
                      <p>
                        <strong>Thomas Aquinas (1225–1274) was born.</strong> He would grow up to become one of the most famous
                        doctors of the Church and influencer in the Medieval period. His stature as an intellectual helped to
                        soften the image of the Dominicans.
                      </p>
                    </div>

                    <div class="border-l-4 border-gold-500 pl-6">
                      <h4 class="text-xl font-bold text-slate-900 mb-2">1277</h4>
                      <p>
                        <strong>The Condemnation of 1277.</strong> The Bishop of Paris, Étienne Tempier, issued a treatise,
                        attacking some 219 propositions stemming from Aristotelian thought that was influencing theological
                        debate at the University of Paris.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-12 p-6 bg-slate-50 rounded-lg">
                  <h3 class="text-xl font-bold text-slate-900 mb-4">Key Figures of the 13th Century</h3>
                  <ul class="space-y-2">
                    <li><strong>Pope Innocent III (1198-1216)</strong> - Most powerful Pope of the Middle Ages</li>
                    <li><strong>Thomas Aquinas (1225-1274)</strong> - Dominican theologian and Doctor of the Church</li>
                    <li><strong>Bonaventure (1221-1274)</strong> - Franciscan theologian and mystic</li>
                    <li><strong>Albertus Magnus (1200-1280)</strong> - Dominican friar and teacher of Aquinas</li>
                    <li><strong>St. Francis of Assisi (c.1181-1226)</strong> - Founder of the Franciscan Order</li>
                  </ul>
                </div>
              `,
							author: 'Parish Learning Team',
							readingTime: 25,
							publishedDate: '2025-01-15',
							category: 'Church History',
							sources: [
								{
									title: 'Getty Open Content Program',
									url: 'https://www.getty.edu/about/whatwedo/opencontent.html',
								},
							],
						},
					},
				],
			},
			{
				id: 'reformation-enlightenment',
				slug: 'reformation-enlightenment',
				title: 'Reformation to the Enlightenment',
				description: 'Theological developments in modern times (1500 CE – 1800 CE)',
				imageUrl: '/images/learning-hub/reformation.jpg',
				timeline: {
					start: '1500 CE',
					end: '1800 CE',
				},
			},
		],
	},
	{
		id: 'popes',
		slug: 'popes',
		title: 'Popes',
		description: 'History of the papacy through the ages',
		imageUrl: '/images/learning-hub/popes.jpg',
		children: [
			{
				id: 'early-popes',
				slug: 'early-church-fathers',
				title: 'Early Church Fathers',
				description: 'Early popes and Church leadership (30 CE – 300 CE)',
				imageUrl: '/images/learning-hub/early-popes.jpg',
				timeline: {
					start: '30 CE',
					end: '300 CE',
				},
			},
			{
				id: 'missions-councils',
				slug: 'missions-and-councils',
				title: 'Missions and Councils',
				description:
					'Papal leadership in evangelization and doctrine (300 CE – 600 CE)',
				imageUrl: '/images/learning-hub/missions-councils.jpg',
				timeline: {
					start: '300 CE',
					end: '600 CE',
				},
			},
			{
				id: 'reform-crusades',
				slug: 'church-reform-and-crusades',
				title: 'Church Reform and the Crusades',
				description: 'Papal leadership in Church reform (600 CE – 1100 CE)',
				imageUrl: '/images/learning-hub/reform-crusades.jpg',
				timeline: {
					start: '600 CE',
					end: '1100 CE',
				},
			},
			{
				id: 'medieval-popes',
				slug: 'popes-and-politics',
				title: 'Popes and Politics',
				description: 'The papacy in medieval Europe (1100 CE – 1500 CE)',
				imageUrl: '/images/learning-hub/medieval-popes.jpg',
				timeline: {
					start: '1100 CE',
					end: '1500 CE',
				},
				children: [
					{
						id: 'avignon',
						slug: 'avignon-popes',
						title: 'The Avignon Popes',
						description: 'The Avignon Papacy and its impact',
						imageUrl: '/images/learning-hub/avignon.jpg',
					},
					{
						id: 'schism',
						slug: 'western-schism',
						title: 'The Western Schism',
						description: 'The Great Western Schism and its resolution',
						imageUrl: '/images/learning-hub/schism.jpg',
					},
				],
			},
			{
				id: 'modern-popes',
				slug: 'renaissance-reformation-enlightenment',
				title: 'Renaissance, Reformation, and Enlightenment',
				description: 'Papal responses to modern challenges (1500 CE – 1800 CE)',
				imageUrl: '/images/learning-hub/modern-popes.jpg',
				timeline: {
					start: '1500 CE',
					end: '1800 CE',
				},
			},
		],
	},
	{
		id: 'timeline',
		slug: 'church-history-timeline',
		title: 'Timelines of Church History',
		description: 'Chronological overview of Church history by century',
		imageUrl: '/images/learning-hub/timeline.jpg',
		children: [
			{
				id: 'early-timeline',
				slug: 'early-church',
				title: 'The Early Church',
				description: 'The first centuries of Christianity (30 CE – 300 CE)',
				imageUrl: '/images/learning-hub/early-timeline.jpg',
				timeline: {
					start: '30 CE',
					end: '300 CE',
				},
			},
			{
				id: 'spread-timeline',
				slug: 'spread-of-christianity',
				title: 'The Spread of Christianity',
				description: 'Christian expansion and development (300 CE – 600 CE)',
				imageUrl: '/images/learning-hub/spread-timeline.jpg',
				timeline: {
					start: '300 CE',
					end: '600 CE',
				},
			},
			{
				id: 'monasticism-timeline',
				slug: 'monasticism-and-crusades',
				title: 'Monasticism and the Crusades',
				description: 'The medieval Church (600 CE – 1100 CE)',
				imageUrl: '/images/learning-hub/monasticism-timeline.jpg',
				timeline: {
					start: '600 CE',
					end: '1100 CE',
				},
				children: [
					{
						id: '9th-century',
						slug: '9th-century',
						title: 'The 9th Century',
						description: 'Key events and developments',
						imageUrl: '/images/learning-hub/9th-century.jpg',
					},
					{
						id: '10th-century',
						slug: '10th-century',
						title: 'The 10th Century',
						description: 'Key events and developments',
						imageUrl: '/images/learning-hub/10th-century.jpg',
					},
					{
						id: '11th-century',
						slug: '11th-century',
						title: 'The 11th Century',
						description: 'Key events and developments',
						imageUrl: '/images/learning-hub/11th-century.jpg',
					},
					{
						id: '12th-century',
						slug: '12th-century',
						title: 'The 12th Century',
						description: 'Key events and developments',
						imageUrl: '/images/learning-hub/12th-century.jpg',
					},
				],
			},
			{
				id: 'power-politics',
				slug: 'power-politics',
				title: 'Power Politics of the Western Church',
				description: 'Church and state relations (1100 CE – 1500 CE)',
				imageUrl: '/images/learning-hub/power-politics.jpg',
				timeline: {
					start: '1100 CE',
					end: '1500 CE',
				},
			},
			{
				id: 'reformation-timeline',
				slug: 'reformation-enlightenment',
				title: 'Reformation to the Enlightenment',
				description: 'The Church in modern times (1500 CE – 1800 CE)',
				imageUrl: '/images/learning-hub/reformation-timeline.jpg',
				timeline: {
					start: '1500 CE',
					end: '1800 CE',
				},
			},
		],
	},
	{
		id: 'directory',
		slug: 'directory-of-terms',
		title: 'Directory of Terms',
		description: 'Comprehensive reference of Catholic terminology and leadership',
		imageUrl: '/images/learning-hub/directory.jpg',
		children: [
			{
				id: 'holy-spirit',
				slug: 'gifts-of-holy-spirit',
				title: 'The Gifts of the Holy Spirit',
				description: 'Understanding the seven gifts of the Holy Spirit',
				imageUrl: '/images/learning-hub/holy-spirit.jpg',
			},
			{
				id: 'sacraments',
				slug: 'sacraments-meaning',
				title: 'The Sacraments and Their Meaning',
				description: 'Deep dive into the seven sacraments',
				imageUrl: '/images/learning-hub/sacraments.jpg',
			},
			{
				id: 'lexicon',
				slug: 'catholic-lexicon',
				title: 'Directory of Terms in the Catholic Lexicon',
				description: 'Comprehensive glossary of Catholic terminology',
				imageUrl: '/images/learning-hub/lexicon.jpg',
			},
			{
				id: 'pope-directory',
				slug: 'catholic-popes',
				title: 'Directory of Catholic Popes',
				description: 'Complete listing of popes through history',
				imageUrl: '/images/learning-hub/pope-directory.jpg',
			},
			{
				id: 'southwark',
				slug: 'southwark-contacts',
				title: 'Southwark Diocese Contacts',
				description: 'Directory of diocesan leadership and contacts',
				imageUrl: '/images/learning-hub/southwark.jpg',
			},
		],
	},
	{
		id: 'saints',
		slug: 'lives-of-saints',
		title: 'The Lives of the Saints',
		description: 'Biographies of saints through Church history',
		imageUrl: '/images/learning-hub/saints.jpg',
		children: [
			{
				id: 'early-saints',
				slug: 'martyrs-and-fathers',
				title: 'Martyrs and Early Church Fathers',
				description: 'Saints of the early Church (30 CE – 300 CE)',
				imageUrl: '/images/learning-hub/early-saints.jpg',
				timeline: {
					start: '30 CE',
					end: '300 CE',
				},
				children: [
					{
						id: 'st-paul',
						slug: 'saint-paul',
						title: 'St Paul',
						description: 'The Apostle to the Gentiles',
						imageUrl: '/images/learning-hub/st-paul.jpg',
					},
					{
						id: 'evangelists',
						slug: 'evangelists',
						title: 'The Evangelists',
						description: 'Writers of the four Gospels',
						imageUrl: '/images/learning-hub/evangelists.jpg',
						children: [
							{
								id: 'st-john',
								slug: 'saint-john',
								title: 'St John',
								description: 'The Beloved Disciple and Author of the Fourth Gospel',
								imageUrl: '/images/learning-hub/st-john.jpg',
								isArticle: true,
								articleContent: {
									hero: `St. John the Evangelist, often called the Beloved Disciple, holds a unique place among the twelve apostles of Jesus Christ. His intimate relationship with our Lord and his profound theological insights shaped the early Church in ways that continue to influence Christianity today.`,
									intro: `As the son of Zebedee and brother of James, John left his life as a fisherman to follow Jesus, becoming one of the closest disciples to our Lord. Throughout the Gospel that bears his name, John refers to himself as "the disciple whom Jesus loved," a testament to the special bond he shared with Christ.`,
									title: 'St. John the Evangelist: The Beloved Disciple',
									mainText: `
                    <h3>The Beloved Disciple</h3>
                    <p>This special relationship with Christ is evident at several key moments in the Gospel narrative:</p>
                    <ul>
                      <li>He reclined next to Jesus at the Last Supper</li>
                      <li>He was the only apostle present at the Crucifixion</li>
                      <li>Jesus entrusted his mother Mary to John's care</li>
                      <li>He was the first apostle to reach the empty tomb</li>
                    </ul>

                    <h3>The Fourth Gospel</h3>
                    <p>John's Gospel differs significantly from the Synoptic Gospels (Matthew, Mark, and Luke). While the Synoptics focus primarily on Christ's ministry in Galilee and his teachings through parables, John's Gospel:</p>
                    <ul>
                      <li>Emphasizes Jesus' divine nature</li>
                      <li>Contains long discourses on theological themes</li>
                      <li>Includes unique stories not found in other Gospels</li>
                      <li>Begins with the profound "In the beginning was the Word" prologue</li>
                    </ul>

                    <h3>Later Life and Legacy</h3>
                    <p>According to tradition, after the Assumption of Mary, John moved to Ephesus where he wrote his Gospel, three epistles, and the Book of Revelation. He was the only apostle to die a natural death, likely around 100 AD.</p>

                    <p>His theological influence on the early Church was profound, particularly in developing the understanding of:</p>
                    <ul>
                      <li>Christ's divine nature</li>
                      <li>The role of love in Christian life</li>
                      <li>The relationship between faith and eternal life</li>
                      <li>The presence of the Holy Spirit in the Church</li>
                    </ul>

                    <h3>Feast Day and Patronage</h3>
                    <p>St. John's feast day is celebrated on December 27th in the Western Church. He is the patron saint of love, loyalty, friendships, authors, theologians, and the Church in Asia Minor.</p>
                  `,
									author: 'Fr Krisz Katona',
									readingTime: 12,
									publishedDate: '2025-01-10',
									category: 'Saints',
									sources: [
										{
											title: 'Catholic Encyclopedia: St. John the Evangelist',
											url: 'https://www.catholic.org/saints/saint.php?saint_id=67',
										},
										{
											title: 'The Gospel of John: Introduction and Overview',
											url: 'https://biblehub.com/john/',
										},
										{
											title: 'Early Church Fathers on St. John',
											url: 'https://www.newadvent.org/fathers/',
										},
									],
									previousArticle: {
										slug: 'saint-matthew',
										title: 'St Matthew',
									},
									nextArticle: {
										slug: 'saint-luke',
										title: 'St Luke',
									},
								},
							},
							{
								id: 'st-mark',
								slug: 'saint-mark',
								title: 'St Mark',
								description: 'The Evangelist',
								imageUrl: '/images/learning-hub/st-mark.jpg',
							},
							{
								id: 'st-matthew',
								slug: 'saint-matthew',
								title: 'St Matthew',
								description: 'The Tax Collector',
								imageUrl: '/images/learning-hub/st-matthew.jpg',
							},
							{
								id: 'st-luke',
								slug: 'saint-luke',
								title: 'St Luke',
								description: 'The Physician',
								imageUrl: '/images/learning-hub/st-luke.jpg',
							},
						],
					},
				],
			},
			{
				id: 'missionary-saints',
				slug: 'missionaries',
				title: 'The Missionaries',
				description: 'Saints who spread the faith (300 CE – 600 CE)',
				imageUrl: '/images/learning-hub/missionary-saints.jpg',
				timeline: {
					start: '300 CE',
					end: '600 CE',
				},
			},
			{
				id: 'monastic-saints',
				slug: 'rise-of-monasticism',
				title: 'The Rise of Monasticism',
				description: 'Monastic saints and founders (600 CE – 1100 CE)',
				imageUrl: '/images/learning-hub/monastic-saints.jpg',
				timeline: {
					start: '600 CE',
					end: '1100 CE',
				},
			},
			{
				id: 'medieval-saints',
				slug: 'reformers-and-mystics',
				title: 'Reformers and Mystics',
				description: 'Medieval saints and mystics (1100 CE – 1500 CE)',
				imageUrl: '/images/learning-hub/medieval-saints.jpg',
				timeline: {
					start: '1100 CE',
					end: '1500 CE',
				},
			},
			{
				id: 'modern-saints',
				slug: 'martyrs-and-missionaries',
				title: 'Martyrs and Missionaries of Change',
				description: 'Saints of the modern era (1500 CE – 1800 CE)',
				imageUrl: '/images/learning-hub/modern-saints.jpg',
				timeline: {
					start: '1500 CE',
					end: '1800 CE',
				},
			},
			{
				id: 'contemporary-saints',
				slug: 'modern-day-saints',
				title: 'Modern-Day Saints',
				description: 'Contemporary saints and blesseds (1800 CE – Present)',
				imageUrl: '/images/learning-hub/contemporary-saints.jpg',
				timeline: {
					start: '1800 CE',
					end: 'Present',
				},
			},
		],
	},
];
