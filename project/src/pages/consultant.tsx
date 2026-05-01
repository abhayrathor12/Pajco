import SectionHeading from '../components/SectionHeading';

export default function BookConsultation() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-navy-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 right-20 w-56 h-56 bg-white rounded-full" />
                    <div className="absolute bottom-0 left-10 w-36 h-36 bg-white rounded-full" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Book a Consultation"
                        subtitle="Schedule a meeting with our experts at your convenience."
                        light
                    />
                </div>
            </section>

            {/* Calendly Embed */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6">

                        <iframe
                            src="https://calendly.com/workspace00018/30min"
                            width="100%"
                            height="700"
                            frameBorder="0"
                            className="rounded-xl"
                        ></iframe>

                    </div>
                </div>
            </section>
        </>
    );
}