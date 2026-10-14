import Animated from "../components/Animated";
import { bookingSteps, bookingTestimonial } from "../data/data";
import { Star } from "lucide-react";



const BookingProcess = () => {
  return (
    <section
      id="booking-process"
      className="mt-44 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col text-center md:text-left">

          <Animated delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-4">
              Table Reservation Process
            </p>
          </Animated>

          <Animated delay={0.3}>
            <h2 className="text-4xl md:text-5xl mb-16">
              Reserve your table in three simple steps
            </h2>
          </Animated>

          {/* Rating */}
          <Animated
            delay={0.4}
            className="flex gap-0.5 mb-6 justify-center md:justify-start"
          >
            {[...Array(bookingTestimonial.rating)].map((_, index) => (
              <Star
                key={index}
                className="size-4 fill-orange-500 text-orange-500"
              />
            ))}
          </Animated>

          {/* Testimonial */}
          <Animated delay={0.5}>
            <p className="text-zinc-600 max-w-xs mx-auto md:mx-0 mb-4">
              "{bookingTestimonial.quote}"
            </p>
          </Animated>

          {/* Author */}
          <Animated
            delay={0.6}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <img
              src={bookingTestimonial.authorImg}
              alt={bookingTestimonial.authorName}
              className="size-12 rounded-full object-cover"
            />

            <span className="font-medium">
              {bookingTestimonial.authorName}
            </span>
          </Animated>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-14 text-left">

          {bookingSteps.map((step, index) => (
            <Animated
              key={index}
              y={150}
              delay={index * 0.15}
              className="flex items-start gap-9"
            >
              {/* Number */}
              <span className="text-orange-500 font-medium text-lg shrink-0">
                {step.number}
              </span>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-xl mb-5 font-medium">
                  {step.title}
                </h3>

                <p className="text-zinc-600">
                  {step.description}
                </p>
              </div>
            </Animated>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BookingProcess;