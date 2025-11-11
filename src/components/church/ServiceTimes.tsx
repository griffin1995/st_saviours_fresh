import { ClockIcon as Clock, CalendarDaysIcon as Calendar, MapPinIcon as MapPin } from '@heroicons/react/24/solid'
import { m } from 'framer-motion'

import { Card, Heading, Text } from '@/components/ui'
import { cn } from '@/lib/utils'

interface Service {
  time: string
  type: string
  description?: string
  location?: string
}

interface ServiceDay {
  day: string
  services: Service[]
}

interface ServiceTimesProps {
  /**
   * Array of service days with their respective services
   */
  serviceTimes: ServiceDay[]

  /**
   * Whether to highlight today's services
   */
  highlightToday?: boolean

  /**
   * Layout style for the service times
   */
  layout?: 'grid' | 'list' | 'compact'

  /**
   * Additional CSS classes
   */
  className?: string | undefined
}

/**
 * ServiceTimes component for displaying Mass times and church services
 *
 * @example
 * <ServiceTimes
 *   serviceTimes={massTimesData}
 *   highlightToday={true}
 *   layout="grid"
 * />
 */
export default function ServiceTimes({
  serviceTimes,
  highlightToday = false,
  layout = 'grid',
  className
}: ServiceTimesProps) {
  // Get current day for highlighting
  const today = new Date().getDay()
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currentDay = dayNames[today]

  // For grid layout, separate weekend and weekdays
  const weekendDays = serviceTimes.filter(day => day.day === 'Saturday' || day.day === 'Sunday')
  const weekdayDays = serviceTimes.filter(day => !['Saturday', 'Sunday'].includes(day.day))

  const renderServiceCard = (dayData: ServiceDay, index: number, isWeekend: boolean = false) => {
    const isToday = highlightToday && dayData.day === currentDay

    return (
      <m.div
        key={dayData.day}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card
          className={cn(
            'h-full transition-all duration-300 bg-slate-50 border border-gray-200 hover:border-gold-500 hover:shadow-lg',
            'p-4 sm:p-5 md:p-6',
            isToday && 'ring-2 ring-gold-500 border-gold-500 bg-white shadow-lg'
          )}
        >
          <div className="space-y-3 sm:space-y-4">
            {/* Day Header */}
            <div className="flex items-center justify-between">
              <Heading
                level="h3"
                className={cn(
                  "font-bold text-slate-900",
                  isWeekend ? "text-xl sm:text-2xl md:text-3xl" : "text-base sm:text-lg md:text-xl"
                )}
              >
                {dayData.day}
              </Heading>
              {isToday && (
                isWeekend ? (
                  // Full badge for weekend cards (larger)
                  <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 bg-gold-500/10 rounded-full text-xs sm:text-sm font-semibold text-gold-700">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    Today
                  </div>
                ) : (
                  // Compact indicator for weekday cards (smaller)
                  <div className="w-3 h-3 bg-gold-500 rounded-full flex items-center justify-center" title="Today">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                )
              )}
            </div>

            {/* Services */}
            <div className="space-y-2 sm:space-y-3">
              {dayData.services.length > 0 ? (
                dayData.services.map((service, serviceIndex) => (
                  <m.div
                    key={serviceIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (serviceIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="p-3 sm:p-4 border transition-colors bg-white border-gray-200 hover:border-gold-400 hover:shadow-md rounded-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gold-600" />
                          <Text
                            className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900"
                          >
                            {service.time}
                          </Text>
                        </div>

                        <Text
                          className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold"
                        >
                          {service.type}
                        </Text>

                        {service.description && (
                          <Text
                            size="sm"
                            className="italic text-gray-600"
                          >
                            {service.description}
                          </Text>
                        )}

                        {service.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gold-600" />
                            <Text size="sm" className="text-gray-600">
                              {service.location}
                            </Text>
                          </div>
                        )}
                      </div>
                    </div>
                  </m.div>
                ))
              ) : (
                <div className="p-3 sm:p-4 text-center bg-white border border-gray-200 rounded-lg">
                  <Text className="italic text-gray-600">
                    No services scheduled
                  </Text>
                </div>
              )}
            </div>
          </div>
        </Card>
      </m.div>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {layout === 'grid' ? (
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Weekend Row - Saturday & Sunday */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {weekendDays.map((dayData, index) => renderServiceCard(dayData, index, true))}
          </div>

          {/* Weekdays Row */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {weekdayDays.map((dayData, index) => renderServiceCard(dayData, index + 2, false))}
          </div>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {serviceTimes.map((dayData, index) => renderServiceCard(dayData, index, false))}
        </div>
      )}
    </div>
  )
}

/**
 * TodaysServices component - shows only today's services
 */
export function TodaysServices({ serviceTimes, className }: Pick<ServiceTimesProps, 'serviceTimes' | 'className'>) {
  const today = new Date().getDay()
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currentDay = dayNames[today]

  const todaysServices = serviceTimes.find(day => day.day === currentDay)

  if (!todaysServices || todaysServices.services.length === 0) {
    return (
      <Card className={cn(className, "bg-slate-50 border border-gray-200 p-4 sm:p-5 md:p-6")}>
        <div className="text-center space-y-3 sm:space-y-4">
          <Heading level="h3" className="text-lg sm:text-xl md:text-2xl text-slate-900">
            {currentDay}'s Services
          </Heading>
          <Text className="text-gray-600">
            No services scheduled for today
          </Text>
        </div>
      </Card>
    )
  }

  return (
    <ServiceTimes
      serviceTimes={[todaysServices]}
      highlightToday={true}
      layout="list"
      className={className}
    />
  )
}

/**
 * WeeklyServices component - compact weekly overview
 */
export function WeeklyServices({ serviceTimes, className }: Pick<ServiceTimesProps, 'serviceTimes' | 'className'>) {
  return (
    <ServiceTimes
      serviceTimes={serviceTimes}
      highlightToday={true}
      layout="compact"
      className={className}
    />
  )
}