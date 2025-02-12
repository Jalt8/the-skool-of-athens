import Image from 'next/image';

export default function Booking() {
  return (
    <section id="schedule" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-2xl bg-dark-100 p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/andro-koen.jpg"
                alt="Andro Koen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl">The Skool of Athens Consultation Call</h3>
              <p className="text-sm text-gray-400">45 min</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-4 text-sm text-gray-400">
              Ready to join The Skool of Athens to start, or scale your SMMA? If 'yes' then book a call below.
            </p>
            <p className="mb-4 text-sm text-gray-400">
              On this call, we'll discuss what you need help with & any questions, so by the end, you'll be ready to decide whether working with Andro & Quinton is right for you.
            </p>
            <p className="text-sm text-gray-400">
              If it's a 'yes', you'll gain full access to the Skool of Athens modules, 1:1 VIP access to Andro & Quinton, plus two extra weekly calls designed to help you grow & scale your SMMA to six or even multiple six figures a year.
            </p>
          </div>

          <div className="rounded-xl bg-dark p-6">
            <div className="mb-4">
              <div className="text-sm font-medium">Select a Date & Time</div>
              <div className="text-xs text-gray-400">
                Web conferencing details provided upon confirmation.
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr,auto]">
              <div className="rounded-lg bg-dark-100 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <button className="text-primary hover:underline">
                    &lt; Previous
                  </button>
                  <div className="font-medium">February 2025</div>
                  <button className="text-primary hover:underline">Next &gt;</button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="p-2 text-gray-400">Sun</div>
                  <div className="p-2 text-gray-400">Mon</div>
                  <div className="p-2 text-gray-400">Tue</div>
                  <div className="p-2 text-gray-400">Wed</div>
                  <div className="p-2 text-gray-400">Thu</div>
                  <div className="p-2 text-gray-400">Fri</div>
                  <div className="p-2 text-gray-400">Sat</div>
                  {[...Array(31)].map((_, i) => (
                    <button
                      key={i}
                      className={`rounded-lg p-2 hover:bg-primary/10 ${
                        i + 1 === 14 ? 'bg-primary text-white' : ''
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Available Times</div>
                {['10:00', '11:00', '12:00', '13:00', '18:00'].map((time) => (
                  <button
                    key={time}
                    className="block w-full rounded-lg bg-dark-100 px-4 py-2 text-left text-sm hover:bg-primary/10"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 