import {
	ArrowRight,
	Calendar,
	Clock,
	MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import Hero from '@/components/Hero-Homepage';
import LiveStreamBanner from '@/components/LiveStreamBanner';
import PillarCardsSection from '@/components/PillarCardsSection';
import InitiativesSection from '@/components/InitiativesSection';
import PillarCardsSectionCommunity from '@/components/PillarCardsSection-Community';
import { Gallery6Homepage } from '@/components/templates-that-need-proper-integration/gallery6-homepage';

/**
 * HOMEPAGE - St Saviour's Catholic Church
 *
 * This is a massive single file with all content hardcoded inline.
 * Visual 1:1 replica of the old site using Next.js 15 App Router patterns.
 *
 * Only external components: Navigation (from layout) and Footer (from layout)
 * Everything else is inline JSX with hardcoded content.
 *
 * Sections (matching old site exactly):
 * 1. Live Stream Banner (10vh - homepage only)
 * 2. Hero with background image (90vh)
 * 3. Welcome section (2/3 content + 1/3 today's services sidebar)
 * 4. Three Pillar Cards (2:3 aspect ratio with overlays)
 * 5. Podcast section
 * 6. Initiatives section (50/50 image/text cards with coloured backgrounds)
 * 7. Community section (50/50 layouts with images)
 * 8. Live stream section
 * 9. Community news blocks (3 cards grid)
 * 10. Church groups blocks (6 cards grid)
 * 11. Coming up events blocks (6 cards grid)
 */

export default function HomePage() {


	return (
		<main>
			{/* HERO SECTION - Full viewport (100vh) */}
			<Hero
				backgroundImage='/images/inside-church-aisle.jpg'
				title="Welcome to St Saviour's Catholic Church"
				description="For over 150 years, our vibrant parish community has been a beacon of faith, hope, and love in Lewisham. All are welcome in God's house to grow in relationship with Christ and one another."
				badge={{
					text: 'Join us for daily Mass and prayer services.',
					linkText: 'Watch Live',
					linkHref: '#live-stream-section',
				}}
				primaryButton={{
					text: 'Discover Our Community',
					href: '#welcome',
				}}
				secondaryButton={{
					text: 'Our Initiatives',
					href: '#initiatives',
				}}
			/>

			{/* LIVE STREAM BANNER - Positioned below hero (dismissible announcement) */}
			<LiveStreamBanner />

			{/* WELCOME SECTION - 2/3 Content + 1/3 Today's Services Sidebar */}
			{/* <section id="welcome" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8"> */}
			{/* Left Column - 2/3 Welcome Content */}
			{/* <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-gold-500" />
                  <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">
                    Our Parish
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                  A Community of Faith in Lewisham
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Welcome to St Saviour&apos;s Catholic Church, a vibrant parish community in the heart of Lewisham.
                    For over 130 years, we have been a place of worship, fellowship, and service to our local community.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Our parish is home to over 500 families representing dozens of nationalities, united in our Catholic
                    faith and commitment to living the Gospel. Whether you&apos;re a long-time parishioner or visiting for
                    the first time, you&apos;ll find a warm welcome here.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    We offer daily Mass, the sacraments, spiritual formation programs, and numerous opportunities for
                    prayer, fellowship, and service. All are welcome to join us on the journey of faith.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/about-us"
                      className="inline-flex items-center px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 font-semibold  transition-colors duration-300"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center px-6 py-3 bg-gold-600 text-white hover:bg-gold-500 font-semibold  transition-colors duration-300"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </div>
                </div>
            </div> */}

			{/* Right Column - 1/3 Today's Services Sidebar */}
			{/* <div className="lg:col-span-1">
              <div
                className="bg-slate-900  p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Today&apos;s Services
                </h3>
                <div className="space-y-4">
                  {todaysServices.map((service, index) => (
                    <div key={index} className="border-l-4 border-gold-500 pl-4 py-2">
                      <div className="flex items-center text-gold-400 text-sm mb-1">
                        <Clock className="mr-1 h-4 w-4" />
                        {service.time}
                      </div>
                      <div className="text-white font-semibold">{service.type}</div>
                      <div className="text-gray-400 text-sm">{service.description}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/mass"
                  className="mt-6 inline-flex items-center w-full justify-center px-4 py-2 bg-gold-600 text-white hover:bg-gold-500 font-semibold  transition-colors duration-300"
                >
                  View All Mass Times
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

			{/* THREE PILLAR CARDS SECTION */}
			<PillarCardsSection />

			 {/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */} 

			{/* LIVE STREAM SECTION */}
			<section
				id='live-stream-section'
				className='py-16 bg-slate-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 gap-6 lg:gap-8'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-gold-500' />
								<span className='text-primary-900 font-bold text-sm uppercase tracking-wider'>
									Live Streaming
								</span>
							</div>
							<h2 className='text-4xl lg:text-5xl font-light text-primary-900'>
								Join Us Online
							</h2>
							<p className='text-lg text-slate-700 max-w-3xl'>
								Can&apos;t make it to church? Join us for Mass and prayer services
								streamed live from St Saviour&apos;s, wherever you are in the world.
							</p>
						</div>

						<Link
							href='/streaming'
							className='inline-flex items-center px-6 py-3 bg-primary-900 text-white hover:bg-primary-800 font-semibold transition-colors duration-300'>
							Watch Live
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</div>

					<div className='max-w-7xl mx-auto'>
						<div className='relative w-full' style={{ paddingBottom: '68%' }}>
							<iframe
								src='https://mcn.live/iframe/da81d33b-1d66-445e-821b-fa34a9cf2db4'
								allowFullScreen
								frameBorder='0'
								scrolling='no'
								title="St Saviour's Church Live Stream"
								className='absolute top-0 left-0 w-full h-full border-0'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */}

			{/* INITIATIVES SECTION - 50/50 Image/Text Cards with brand gold background */}
			<InitiativesSection
				initiatives={[
					{
						image: '/images/hands-up-praising.jpg',
						alt: 'Jubilee 2025: Pilgrims of Hope',
						title: 'Jubilee 2025: Pilgrims of Hope',
						description:
							"Join us in preparing for this extraordinary Holy Year of Hope proclaimed by Pope Francis. Throughout 2025, we'll journey together through special liturgies, pilgrimages, prayer services, and acts of mercy that open our hearts to God's transforming grace. This is our time to deepen our faith, strengthen our community bonds, and become beacons of hope in our world.",
						linkText: 'Begin Your Journey',
						linkHref: '#jubilee-2025',
						imagePosition: 'left',
					},
					{
						image: '/images/hands-up-praising.jpg',
						alt: 'Spiritual Reflection: Embracing Hope',
						title: 'Spiritual Thoughts: Embracing Hope',
						description:
							"Take a moment to reflect on the presence of God in your life. Let these spiritual thoughts guide you to inner peace, inspire acts of compassion, and strengthen your connection to faith. Each reflection invites you to open your heart to God's love and carry that light into your daily life.",
						linkText: 'Reflect Now',
						linkHref: '#spiritual-thoughts',
						imagePosition: 'left',
						color: 'primary-700'
					},
				]}
			/>

			{/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */}

			{/* COMMUNITY SECTION - 50/50 Layouts */}
			<section
				id='meet-our-community'
				className='bg-slate-100 py-16'>
				{/* Heading Container - Keep at max-w-7xl for visual hierarchy */}
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 gap-6 lg:gap-8'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-gold-500' />
								<span className='text-primary-900 font-bold text-sm uppercase tracking-wider'>
									Parish Community
								</span>
							</div>
							<h2 className='text-4xl lg:text-5xl font-light text-primary-900'>
								Meet Our Community
							</h2>
							<p className='text-lg text-slate-700 max-w-3xl'>
								Discover the vibrant ministries, groups, and opportunities that make St
								Saviour&apos;s a true home for faith, fellowship, and service.
							</p>
						</div>

						<Link
							href='/community'
							className='inline-flex items-center px-6 py-3 bg-primary-900 text-white hover:bg-primary-800 font-semibold transition-colors duration-300'>
							Join Us
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</div>
				</div>

				{/* Cards Component - Now free to use max-w-screen-2xl */}
				<PillarCardsSectionCommunity />
				{/* Evangelisation Groups - 50/50 */}
				{/* <div className='mb-12'>
					<div className='grid lg:grid-cols-2 gap-0 items-stretch'>
						<div className='relative h-96 lg:h-auto'>
							<Image
								src='/images/outside-church-flowers-foreground.jpg'
								alt='Evangelisation Groups'
								fill
								className='object-cover'
								sizes='(max-width: 1024px) 100vw, 50vw'
							/>
						</div>
						<div className='bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md px-8 lg:px-16 py-12 lg:py-16 flex flex-col justify-center'>
							<div className='max-w-xl text-right p-8 border-r-4 border-gray-300 hover:border-gray-400'>
								<h3 className='text-xl font-semibold text-slate-900 pb-2 mb-3 border-b border-gray-300'>
									Evangelisation Groups
								</h3>
								<p className='text-gray-700 leading-relaxed mb-6'>
									Our evangelisation groups share the joy of the Gospel through Alpha
									courses, young adult ministry, and community witness programmes. We
									help parishioners discover their unique calling to spread
									Christ&apos;s love in their daily lives.
								</p>
								<h4 className='text-lg font-medium text-slate-900 mb-3'>
									Witness & Service
								</h4>
								<p className='text-gray-700 leading-relaxed'>
									Through prayer, study, and action, our groups equip members to be
									confident witnesses of their faith, bringing hope and healing to our
									wider Lewisham community.
								</p>
							</div>
						</div>
					</div>
				</div> */}

				{/* Parish Social Groups - 50/50 Reversed */}
				{/* <div className='mb-12'>
					<div className='grid lg:grid-cols-2 gap-0 items-stretch'>
						<div className='bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md px-8 lg:px-16 py-12 lg:py-16 flex flex-col justify-center'>
							<div className='max-w-xl text-left p-8 border-l-4 border-gray-300 hover:border-gray-400'>
								<h3 className='text-xl font-semibold text-slate-900 pb-2 mb-3 border-b border-gray-300'>
									Parish Social Groups
								</h3>
								<p className='text-gray-700 leading-relaxed mb-6'>
									Our vibrant social groups create warm, welcoming spaces where
									friendships flourish and faith grows stronger. From coffee mornings to
									quiz nights, monthly lunches to seasonal celebrations, there&apos;s
									something for everyone.
								</p>
								<h4 className='text-lg font-medium text-slate-900 mb-3'>
									Building Community
								</h4>
								<p className='text-gray-700 leading-relaxed'>
									Whether you&apos;re new to the parish or a long-standing member, our
									social groups offer the perfect opportunity to connect with fellow
									parishioners, share experiences, and build lasting friendships rooted
									in faith.
								</p>
							</div>
						</div>
						<div className='relative h-96 lg:h-auto'>
							<Image
								src='/images/st_saviours_interior_1939_archive_photo.jpeg'
								alt='Parish Social Groups'
								fill
								className='object-cover'
								sizes='(max-width: 1024px) 100vw, 50vw'
							/>
						</div>
					</div>
				</div> */}

				{/* Three Ministry Cards */}
				{/* <div className='grid gap-8 md:grid-cols-3'> */}
				{/* Card 1 - Sacred Music */}
				{/* <div className='group relative overflow-hidden '>
						<AspectRatio.Root ratio={2 / 3}>
							<div className='relative w-full h-full'>
								<Image
									src='/images/open-bible-rosary.jpg'
									alt='Sacred Music Ministry'
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
								<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
									<h3 className='text-2xl font-bold mb-3'>Sacred Music Ministry</h3>
									<p className='text-gray-200 text-sm leading-relaxed'>
										Our choir and musicians enhance our liturgical celebrations with
										beautiful sacred music, from traditional hymns to contemporary
										worship songs. Join our welcoming music ministry and use your talents
										to glorify God and inspire the faithful.
									</p>
								</div>
							</div>
						</AspectRatio.Root>
					</div> */}

				{/* Card 2 - Safeguarding */}
				{/* <div className='group relative overflow-hidden '>
						<AspectRatio.Root ratio={2 / 3}>
							<div className='relative w-full h-full'>
								<Image
									src='/images/mid-mass-priest-and-community.jpg'
									alt='Safeguarding'
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
								<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
									<h3 className='text-2xl font-bold mb-3'>Safeguarding</h3>
									<p className='text-gray-200 text-sm leading-relaxed'>
										Creating a safe environment for all is our absolute priority. Our
										comprehensive safeguarding policies and trained volunteers ensure
										that children, young people, and vulnerable adults are protected and
										can flourish in our parish community.
									</p>
								</div>
							</div>
						</AspectRatio.Root>
					</div> */}

				{/* Card 3 - Liturgical Ministry */}
				{/* <div className='group relative overflow-hidden '>
						<AspectRatio.Root ratio={2 / 3}>
							<div className='relative w-full h-full'>
								<Image
									src='/images/inside-church-aisle.jpg'
									alt='Liturgical Ministry'
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
								<div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
									<h3 className='text-2xl font-bold mb-3'>Liturgical Ministry</h3>
									<p className='text-gray-200 text-sm leading-relaxed'>
										Serve at the heart of our worship through roles as readers, altar
										servers, extraordinary ministers of Holy Communion, and welcomers.
										These ministries offer meaningful ways to participate actively in our
										liturgical celebrations.
									</p>
								</div>
							</div>
						</AspectRatio.Root>
					</div>
				</div>*/}
			</section>

			{/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */}

			{/* COMMUNITY NEWS BLOCKS */}
			<section
				id='community-news'
				className='py-16 bg-slate-300'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col mb-12 gap-6'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-gold-500' />
								<span className='text-primary-900 font-bold text-sm uppercase tracking-wider'>
									Parish Updates
								</span>
							</div>
							<h2 className='text-4xl lg:text-5xl font-light text-primary-900'>
								Community News
							</h2>
							<p className='text-lg text-slate-700 max-w-3xl'>
								Stay connected with the latest happenings in our vibrant parish
								community. From liturgical celebrations to outreach programs, discover
								what&apos;s new at St Saviour&apos;s.
							</p>
						</div>
					</div>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{/* News Article 1 */}
						<article className='group bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>
							<div className='relative h-56 overflow-hidden'>
								<Image
									src='/images/praising-black-white-hands-up.jpg'
									alt='First Holy Communions 2025'
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
								<div className='absolute top-4 left-4 z-10'>
									<span className='inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase tracking-wide '>
										Sacraments
									</span>
								</div>
							</div>
							<div className='p-6'>
								<div className='flex items-center space-x-4 mb-3 text-sm text-slate-600'>
									<div className='flex items-center space-x-1'>
										<Calendar className='h-4 w-4' />
										<time dateTime='2025-01-15'>15 January 2025</time>
									</div>
									<div className='flex items-center space-x-1'>
										<Clock className='h-4 w-4' />
										<span className='font-semibold'>5 min read</span>
									</div>
								</div>
								<h3 className='text-xl font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors'>
									First Holy Communions 2025
								</h3>
								<p className='text-slate-700 leading-relaxed mb-4 line-clamp-3'>
									Congratulations to all the children who received their First Holy
									Communion this year. It was a beautiful celebration of faith and
									community.
								</p>
								<Link
									href='/news/1'
									className='inline-flex items-center text-primary-700 hover:text-primary-600 font-bold transition-colors group/link'>
									<span>Read Full Story</span>
									<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
								</Link>
							</div>
						</article>

						{/* News Article 2 */}
						<article className='group bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>
							<div className='relative h-56 overflow-hidden'>
								<Image
									src='/images/hands-up-praising.jpg'
									alt='Parish Lenten Programme'
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
								<div className='absolute top-4 left-4 z-10'>
									<span className='inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase tracking-wide '>
										Liturgical Season
									</span>
								</div>
							</div>
							<div className='p-6'>
								<div className='flex items-center space-x-4 mb-3 text-sm text-slate-600'>
									<div className='flex items-center space-x-1'>
										<Calendar className='h-4 w-4' />
										<time dateTime='2025-01-10'>10 January 2025</time>
									</div>
									<div className='flex items-center space-x-1'>
										<Clock className='h-4 w-4' />
										<span className='font-semibold'>7 min read</span>
									</div>
								</div>
								<h3 className='text-xl font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors'>
									Parish Lenten Programme
								</h3>
								<p className='text-slate-700 leading-relaxed mb-4 line-clamp-3'>
									Join us for our Lenten journey with special services, stations of the
									cross, and opportunities for prayer and reflection throughout the
									season.
								</p>
								<Link
									href='/news/2'
									className='inline-flex items-center text-primary-700 hover:text-primary-600 font-bold transition-colors group/link'>
									<span>Read Full Story</span>
									<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
								</Link>
							</div>
						</article>

						{/* News Article 3 */}
						<article className='group bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'>
							<div className='relative h-56 overflow-hidden'>
								<Image
									src='/images/open-bible-rosary.jpg'
									alt='St Vincent de Paul Society Update'
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
									sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
								/>
								<div className='absolute top-4 left-4 z-10'>
									<span className='inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold uppercase tracking-wide '>
										Parish Groups
									</span>
								</div>
							</div>
							<div className='p-6'>
								<div className='flex items-center space-x-4 mb-3 text-sm text-slate-600'>
									<div className='flex items-center space-x-1'>
										<Calendar className='h-4 w-4' />
										<time dateTime='2025-01-05'>5 January 2025</time>
									</div>
									<div className='flex items-center space-x-1'>
										<Clock className='h-4 w-4' />
										<span className='font-semibold'>6 min read</span>
									</div>
								</div>
								<h3 className='text-xl font-bold text-primary-900 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors'>
									St Vincent de Paul Society Update
								</h3>
								<p className='text-slate-700 leading-relaxed mb-4 line-clamp-3'>
									Our SVP continues to serve families in need. Learn how you can support
									this vital ministry in our community.
								</p>
								<Link
									href='/news/3'
									className='inline-flex items-center text-primary-700 hover:text-primary-600 font-bold transition-colors group/link'>
									<span>Read Full Story</span>
									<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
								</Link>
							</div>
						</article>
					</div>

					<div className='mt-12 text-center'>
						<Link
							href='/news'
							className='inline-flex items-center px-8 py-4 bg-primary-900 text-white hover:bg-primary-800 font-bold  transition-colors duration-300 text-lg'>
							View All Parish News
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</div>
				</div>
			</section>

			{/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */}

			{/* CHURCH GROUPS BLOCKS */}
			<section
				id='church-groups'
				className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col mb-12 gap-6'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-gold-500' />
								<span className='text-primary-900 font-bold text-sm uppercase tracking-wider'>
									Get Involved
								</span>
							</div>
							<h2 className='text-4xl lg:text-5xl font-light text-primary-900'>
								Church Groups
							</h2>
							<p className='text-lg text-slate-700 max-w-3xl'>
								Join one of our vibrant parish groups and find your place in our faith
								community. From prayer groups to service ministries, there&apos;s a place
								for everyone to grow in faith and fellowship.
							</p>
						</div>
					</div>
{/* GALLERY6 TEMPLATE SECTION - CHURCH GROUPS */}
					<Gallery6Homepage
						items={[
							{
								id: "item-1",
								title: "St Bakhita Group",
								summary: "A welcoming community for migrants and all parishioners, rooted in prayer and fellowship. Monthly meetings after Mass with Scripture readings, reflection, and intercessions.",
								url: "/parish-groups",
								image: "/images/hands-up-praising.jpg"
							},
							{
								id: "item-2",
								title: "Parish Choir",
								summary: "Enhance our liturgical celebrations through sacred music. From traditional hymns to contemporary worship, our choir welcomes singers of all abilities.",
								url: "/parish-groups",
								image: "/images/open-bible-rosary.jpg"
							},
							{
								id: "item-3",
								title: "SVP - St Vincent de Paul Society",
								summary: "Living out the Gospel through practical charity. Providing food assistance, clothing, furniture, and friendship to families facing hardship in our local community.",
								url: "/parish-groups",
								image: "/images/praising-black-white-hands-up.jpg"
							},
							{
								id: "item-4",
								title: "Legion of Mary",
								summary: "Dedicated to prayer, evangelisation, and service under the patronage of Our Lady. Members engage in parish visiting, prayer groups, and outreach ministries.",
								url: "/parish-groups",
								image: "/images/hands-up-praising.jpg"
							}
						]}
					/>
					{/* OLD CARD LAYOUT - COMMENTED OUT */}
					{/* <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						<article className='group bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
							<div className='flex items-start space-x-4 mb-4'>
								<div className='w-14 h-14  bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
									<Users className='h-7 w-7 text-white' />
								</div>
								<div className='flex-1'>
									<h3 className='text-xl font-bold text-slate-900 mb-1'>
										St Bakhita Group
									</h3>
									<p className='text-sm font-semibold text-gold-600'>
										All parishioners, especially migrants
									</p>
								</div>
							</div>
							<p className='text-slate-700 leading-relaxed mb-4'>
								A welcoming community for migrants and all parishioners, rooted in
								prayer and fellowship. Monthly meetings after Mass with Scripture
								readings, reflection, and intercessions.
							</p>
							<div className='mb-4 pb-4 border-b border-gray-200'>
								<p className='text-sm font-bold text-slate-900 mb-1'>Meeting Time</p>
								<p className='text-sm text-slate-600'>
									First Wednesday of each month, after 10am Mass
								</p>
							</div>
							<Link
								href='/parish-groups'
								className='inline-flex items-center text-slate-900  hover:text-gold-700 font-bold transition-colors group/link'>
								<span>Learn More</span>
								<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</article>

						<article className='group bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
							<div className='flex items-start space-x-4 mb-4'>
								<div className='w-14 h-14  bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
									<Music className='h-7 w-7 text-white' />
								</div>
								<div className='flex-1'>
									<h3 className='text-xl font-bold text-slate-900 mb-1'>Parish Choir</h3>
									<p className='text-sm font-semibold text-gold-600'>
										All ages and abilities
									</p>
								</div>
							</div>
							<p className='text-slate-700 leading-relaxed mb-4'>
								Enhance our liturgical celebrations through sacred music. From
								traditional hymns to contemporary worship, our choir welcomes singers of
								all abilities.
							</p>
							<div className='mb-4 pb-4 border-b border-gray-200'>
								<p className='text-sm font-bold text-slate-900 mb-1'>Meeting Time</p>
								<p className='text-sm text-slate-600'>Thursday evenings, 7:00 PM</p>
							</div>
							<Link
								href='/parish-groups'
								className='inline-flex items-center text-slate-900  hover:text-gold-700 font-bold transition-colors group/link'>
								<span>Learn More</span>
								<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</article>

						<article className='group bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
							<div className='flex items-start space-x-4 mb-4'>
								<div className='w-14 h-14  bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
									<Heart className='h-7 w-7 text-white' />
								</div>
								<div className='flex-1'>
									<h3 className='text-xl font-bold text-slate-900 mb-1'>
										SVP - St Vincent de Paul Society
									</h3>
									<p className='text-sm font-semibold text-gold-600'>
										Adults seeking to serve the poor
									</p>
								</div>
							</div>
							<p className='text-slate-700 leading-relaxed mb-4'>
								Living out the Gospel through practical charity. Providing food
								assistance, clothing, furniture, and friendship to families facing
								hardship in our local community.
							</p>
							<div className='mb-4 pb-4 border-b border-gray-200'>
								<p className='text-sm font-bold text-slate-900 mb-1'>Meeting Time</p>
								<p className='text-sm text-slate-600'>Fortnightly meetings</p>
							</div>
							<Link
								href='/parish-groups'
								className='inline-flex items-center text-slate-900  hover:text-gold-700 font-bold transition-colors group/link'>
								<span>Learn More</span>
								<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</article>

						<article className='group bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
							<div className='flex items-start space-x-4 mb-4'>
								<div className='w-14 h-14  bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
									<BookOpen className='h-7 w-7 text-white' />
								</div>
								<div className='flex-1'>
									<h3 className='text-xl font-bold text-slate-900 mb-1'>
										Bible Study Group
									</h3>
									<p className='text-sm font-semibold text-gold-600'>All adults</p>
								</div>
							</div>
							<p className='text-slate-700 leading-relaxed mb-4'>
								Deepen your understanding of Scripture through guided study and
								discussion. Explore the Word of God in a supportive community setting.
							</p>
							<div className='mb-4 pb-4 border-b border-gray-200'>
								<p className='text-sm font-bold text-slate-900 mb-1'>Meeting Time</p>
								<p className='text-sm text-slate-600'>Wednesday evenings, 7:30 PM</p>
							</div>
							<Link
								href='/parish-groups'
								className='inline-flex items-center text-slate-900  hover:text-gold-700 font-bold transition-colors group/link'>
								<span>Learn More</span>
								<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</article>

						<article className='group bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
							<div className='flex items-start space-x-4 mb-4'>
								<div className='w-14 h-14  bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
									<Crown className='h-7 w-7 text-white' />
								</div>
								<div className='flex-1'>
									<h3 className='text-xl font-bold text-slate-900 mb-1'>
										Legion of Mary
									</h3>
									<p className='text-sm font-semibold text-gold-600'>All parishioners</p>
								</div>
							</div>
							<p className='text-slate-700 leading-relaxed mb-4'>
								Dedicated to prayer, evangelisation, and service under the patronage of
								Our Lady. Members engage in parish visiting, prayer groups, and outreach
								ministries.
							</p>
							<div className='mb-4 pb-4 border-b border-gray-200'>
								<p className='text-sm font-bold text-slate-900 mb-1'>Meeting Time</p>
								<p className='text-sm text-slate-600'>Tuesday evenings, 7:00 PM</p>
							</div>
							<Link
								href='/parish-groups'
								className='inline-flex items-center text-slate-900  hover:text-gold-700 font-bold transition-colors group/link'>
								<span>Learn More</span>
								<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</article>

						<article className='group bg-white border border-gray-200  p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
							<div className='flex items-start space-x-4 mb-4'>
								<div className='w-14 h-14  bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
									<Heart className='h-7 w-7 text-white' />
								</div>
								<div className='flex-1'>
									<h3 className='text-xl font-bold text-slate-900 mb-1'>
										Youth Fellowship
									</h3>
									<p className='text-sm font-semibold text-gold-600'>Ages 13-25</p>
								</div>
							</div>
							<p className='text-slate-700 leading-relaxed mb-4'>
								Building faith and friendships among young people. Social events, faith
								discussions, retreats, and service projects create a vibrant community
								for youth.
							</p>
							<div className='mb-4 pb-4 border-b border-gray-200'>
								<p className='text-sm font-bold text-slate-900 mb-1'>Meeting Time</p>
								<p className='text-sm text-slate-600'>Sunday evenings, 6:00 PM</p>
							</div>
							<Link
								href='/parish-groups'
								className='inline-flex items-center text-slate-900  hover:text-gold-700 font-bold transition-colors group/link'>
								<span>Learn More</span>
								<ArrowRight className='ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</article>
					</div>

					<div className='mt-12 text-center'>
						<Link
							href='/parish-groups'
							className='inline-flex items-center px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 font-bold  transition-colors duration-300 text-lg'>
							Explore All Parish Groups
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</div> */}

					
				</div>
			</section>


			{/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */}

			{/* COMING UP EVENTS BLOCKS */}
			<section
				id='coming-up'
				className='py-16 bg-slate-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col mb-12 gap-6'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-gold-500' />
								<span className='text-primary-900 font-bold text-sm uppercase tracking-wider'>
									What&apos;s Happening
								</span>
							</div>
							<h2 className='text-4xl lg:text-5xl font-light text-primary-900'>
								Coming Up
							</h2>
							<p className='text-lg text-slate-700 max-w-3xl'>
								Mark your calendar for these upcoming parish events and activities. Join
								us for worship, fellowship, and spiritual growth throughout the
								liturgical year.
							</p>
						</div>
					</div>

					<div className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{/* Event 1 */}
						<article className='group'>
							<AspectRatio.Root ratio={7 / 8}>
								<div className='relative w-full h-full bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col'>
									{/* Fixed Height Gradient Header */}
									<div className='h-10 sm:h-12 md:h-14 bg-gradient-to-r from-primary-700 to-primary-800 px-4 sm:px-6 flex items-center flex-shrink-0'>
										<span className='text-white text-xs font-bold uppercase tracking-wide'>
											Liturgical Celebration
										</span>
									</div>
									{/* Flex Body Container */}
									<div className='flex-1 flex flex-col p-4 sm:p-6 overflow-hidden'>
										{/* Fixed Height Title Container */}
										<div className='h-9 sm:h-10 md:h-11 lg:h-12 flex items-center mb-2'>
											<h3 className='text-lg sm:text-xl font-bold text-primary-900 leading-tight'>
												Ash Wednesday Mass
											</h3>
										</div>
										{/* Separator */}
										<Separator.Root className='h-px bg-slate-200 my-2 sm:my-3' decorative />
										{/* Fixed Height Description (3 lines) */}
										<div className='h-16 sm:h-18 md:h-20 lg:h-24 overflow-hidden mb-3 sm:mb-4'>
											<p className='text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3'>
												Begin the Lenten season with Mass and the distribution of ashes.
												Multiple Mass times available.
											</p>
										</div>
										{/* Fixed Height Details Container (3 icon rows) */}
										<div className='h-20 sm:h-22 md:h-24 overflow-hidden mb-3 sm:mb-4 flex flex-col justify-end'>
											<div className='space-y-2 sm:space-y-3'>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<Calendar className='h-4 w-4 text-gold-600' />
													<time className='font-semibold'>Wednesday, 5 March 2025</time>
												</div>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<Clock className='h-4 w-4 text-gold-600' />
													<span className='font-semibold'>10:00 AM, 12:00 PM, 6:30 PM</span>
												</div>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<MapPin className='h-4 w-4 text-gold-600' />
													<span>St Saviour&apos;s Church</span>
												</div>
											</div>
										</div>
										{/* Footer - Pushed to Bottom with mt-auto */}
										<div className='h-12 sm:h-14 pt-3 sm:pt-4 border-t border-gray-200 flex items-center mt-auto flex-shrink-0'>
											<Link
												href='/events'
												className='inline-flex items-center text-sm sm:text-base text-primary-700 hover:text-primary-600 font-bold'>
												View Details <ArrowRight className='ml-2 h-4 w-4' />
											</Link>
										</div>
									</div>
								</div>
							</AspectRatio.Root>
						</article>

						{/* Event 2 */}
						<article className='group'>
							<AspectRatio.Root ratio={7 / 8}>
								<div className='relative w-full h-full bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col'>
									{/* Fixed Height Gradient Header */}
									<div className='h-10 sm:h-12 md:h-14 bg-gradient-to-r from-primary-700 to-primary-800 px-4 sm:px-6 flex items-center flex-shrink-0'>
										<span className='text-white text-xs font-bold uppercase tracking-wide'>
											Sacramental Preparation
										</span>
									</div>
									{/* Flex Body Container */}
									<div className='flex-1 flex flex-col p-4 sm:p-6 overflow-hidden'>
										{/* Fixed Height Title Container */}
										<div className='h-9 sm:h-10 md:h-11 lg:h-12 flex items-center mb-2'>
											<h3 className='text-lg sm:text-xl font-bold text-primary-900 leading-tight'>
												Confirmation Preparation Sessions
											</h3>
										</div>
										{/* Separator */}
										<Separator.Root className='h-px bg-slate-200 my-2 sm:my-3' decorative />
										{/* Fixed Height Description (3 lines) */}
										<div className='h-16 sm:h-18 md:h-20 lg:h-24 overflow-hidden mb-3 sm:mb-4'>
											<p className='text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3'>
												Young people preparing for Confirmation are invited to attend our
												weekly preparation sessions.
											</p>
										</div>
										{/* Fixed Height Details Container (3 icon rows) */}
										<div className='h-20 sm:h-22 md:h-24 overflow-hidden mb-3 sm:mb-4 flex flex-col justify-end'>
											<div className='space-y-2 sm:space-y-3'>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<Calendar className='h-4 w-4 text-gold-600' />
													<time className='font-semibold'>Saturday, 15 February 2025</time>
												</div>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<Clock className='h-4 w-4 text-gold-600' />
													<span className='font-semibold'>6:00 PM - 7:30 PM</span>
												</div>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<MapPin className='h-4 w-4 text-gold-600' />
													<span>Parish Hall</span>
												</div>
											</div>
										</div>
										{/* Footer - Pushed to Bottom with mt-auto */}
										<div className='h-12 sm:h-14 pt-3 sm:pt-4 border-t border-gray-200 flex items-center mt-auto flex-shrink-0'>
											<Link
												href='/events'
												className='inline-flex items-center text-sm sm:text-base text-primary-700 hover:text-primary-600 font-bold'>
												View Details <ArrowRight className='ml-2 h-4 w-4' />
											</Link>
										</div>
									</div>
								</div>
							</AspectRatio.Root>
						</article>

						{/* Event 3 */}
						<article className='group'>
							<AspectRatio.Root ratio={7 / 8}>
								<div className='relative w-full h-full bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col'>
									{/* Fixed Height Gradient Header */}
									<div className='h-10 sm:h-12 md:h-14 bg-gradient-to-r from-primary-700 to-primary-800 px-4 sm:px-6 flex items-center flex-shrink-0'>
										<span className='text-white text-xs font-bold uppercase tracking-wide'>
											Social Events
										</span>
									</div>
									{/* Flex Body Container */}
									<div className='flex-1 flex flex-col p-4 sm:p-6 overflow-hidden'>
										{/* Fixed Height Title Container */}
										<div className='h-9 sm:h-10 md:h-11 lg:h-12 flex items-center mb-2'>
											<h3 className='text-lg sm:text-xl font-bold text-primary-900 leading-tight'>
												Parish Quiz Night
											</h3>
										</div>
										{/* Separator */}
										<Separator.Root className='h-px bg-slate-200 my-2 sm:my-3' decorative />
										{/* Fixed Height Description (3 lines) */}
										<div className='h-16 sm:h-18 md:h-20 lg:h-24 overflow-hidden mb-3 sm:mb-4'>
											<p className='text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3'>
												Join us for a fun evening of trivia, fellowship, and light
												refreshments. All ages welcome!
											</p>
										</div>
										{/* Fixed Height Details Container (3 icon rows) */}
										<div className='h-20 sm:h-22 md:h-24 overflow-hidden mb-3 sm:mb-4 flex flex-col justify-end'>
											<div className='space-y-2 sm:space-y-3'>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<Calendar className='h-4 w-4 text-gold-600' />
													<time className='font-semibold'>Thursday, 20 February 2025</time>
												</div>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<Clock className='h-4 w-4 text-gold-600' />
													<span className='font-semibold'>7:00 PM</span>
												</div>
												<div className='flex items-center space-x-2 text-xs sm:text-sm'>
													<MapPin className='h-4 w-4 text-gold-600' />
													<span>Parish Hall</span>
												</div>
											</div>
										</div>
										{/* Footer - Pushed to Bottom with mt-auto */}
										<div className='h-12 sm:h-14 pt-3 sm:pt-4 border-t border-gray-200 flex items-center mt-auto flex-shrink-0'>
											<Link
												href='/events'
												className='inline-flex items-center text-sm sm:text-base text-primary-700 hover:text-primary-600 font-bold'>
												View Details <ArrowRight className='ml-2 h-4 w-4' />
											</Link>
										</div>
									</div>
								</div>
							</AspectRatio.Root>
						</article>
					</div>

					<div className='mt-12 text-center'>
						<Link
							href='/events'
							className='inline-flex items-center px-8 py-4 bg-primary-900 text-white hover:bg-primary-800 font-bold  transition-colors duration-300 text-lg'>
							View Full Calendar
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</div>
				</div>
			</section>

			{/* <Separator.Root
				decorative
				className='my-8 h-px bg-slate-400 max-w-screen-xl mx-auto scale-x-[1.2] origin-center'
			/> */}

			{/* PODCAST SECTION */}
			<section
				id='priest'
				className='bg-white py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 gap-6 lg:gap-8'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-gold-500' />
								<span className='text-primary-900 font-bold text-sm uppercase tracking-wider'>
									Spiritual Guidance
								</span>
							</div>
							<h2 className='text-4xl lg:text-5xl font-light text-primary-900'>
								Listen to Our Podcast Series
							</h2>
							<p className='text-lg text-slate-700 max-w-3xl'>
								Join our parish priest and community members as they share spiritual
								insights, homilies, and discussions about faith in everyday life.
							</p>
						</div>

						<Link
							href='/podcasts'
							className='inline-flex items-center px-6 py-3 bg-primary-900 text-white hover:bg-primary-800 font-semibold transition-colors duration-300'>
							All Episodes
							<ArrowRight className='ml-2 h-5 w-5' />
						</Link>
					</div>

					<div className='max-w-4xl'>
						<div className='w-full h-96 md:h-80'>
							<iframe
								src='https://www.buzzsprout.com/2535881?client_source=large_player&iframe=true'
								loading='lazy'
								width='100%'
								height='100%'
								frameBorder='0'
								scrolling='no'
								title="St Saviour's Podcast"
								className='w-full h-full '
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
