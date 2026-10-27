import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';

export const metadata = {
 title: 'Building a Cross-Brand Growth Operating System | Siddharth Bhattacharjee',
 description: 'A first-hand look at structuring growth leadership across paid media, lifecycle, ecommerce, analytics and experimentation, including measurement lessons and practical decision frameworks.',
 alternates: {canonical: '/case-studies/growth-operating-system'},
};

export default function GrowthOperatingSystemCase() {
 return <main className="surface-pearl commercial-page">
  <section className="commercial-hero"><div className="container">
   <p className="label">First-hand experience · Growth operations</p>
   <h1 className="display h-xl">Building a growth operating system across brands.</h1>
   <p className="commercial-lead">Paid media performance matters, but durable growth requires better decisions about measurement, acquisition economics, customer journeys and execution. This is an account of work in progress, not a claim of final client outcomes.</p>
  </div></section>
  <section className="container section">
   <h2 className="display h-lg">The challenge</h2>
   <p>When multiple brands run across Meta, Google, ecommerce and lifecycle platforms, teams can produce more reports than decisions. Conversion definitions vary; channel reports may not reflect backend outcomes; and teams can react to rising acquisition costs without knowing whether the cause is creative, audience mix, the landing page or the purchase journey.</p>
   <h2>My role</h2>
   <p>In growth and performance marketing leadership, I have been developing a shared operating approach: business-level objectives, channel and product guardrails, experiment design, creative requirements, measurement checks and a consistent review cadence. This work spans consumer ecommerce and regulated healthcare acquisition, with the details of individual client accounts kept confidential.</p>
   <h2>Four practical workstreams</h2>
   <h3>1. Acquisition economics and experiment discipline</h3>
   <p>Segment performance by campaign, ad set, audience, creative and SKU. Compare CPA and ROAS with business targets, then isolate whether deterioration occurs before the click or after it. Run controlled audience and creative tests instead of changing several variables at once.</p>
   <h3>2. Measurement and conversion integrity</h3>
   <p>Trace the journey from advertising click to registration, appointment or purchase. Review click identifiers, event delivery paths, timing, duplication risk and consistency between ad platforms and operational records. A platform-reported conversion is not automatically a verified business outcome.</p>
   <h3>3. Ecommerce journey analysis</h3>
   <p>Test product pages and cart flows as a customer would. Record each observed issue with reproduction steps and its potential impact on conversion. A landing-page audit should make the next action obvious to design, engineering and marketing teams.</p>
   <h3>4. Reporting infrastructure and automation</h3>
   <p>Design unified dashboards with daily, weekly and monthly views; channel, campaign and product breakdowns; and clear commercial guardrails. Standardised inputs and repeatable reporting help reduce manual spreadsheet work and make changes easier to evaluate.</p>
   <h2 className="display h-lg">What the work has taught me</h2>
   <p>Efficiency is a system property. Better creative cannot fully compensate for a broken checkout. An accurate event count does not guarantee accurate attribution. A lower CPA is less meaningful if customer quality deteriorates. Good growth leadership keeps these distinctions visible and translates them into prioritised decisions.</p>
   <h2>Evidence and limitations</h2>
   <p>The workstreams described here are drawn from first-hand activities. They do not imply that every experiment succeeded, that attribution gaps have been resolved, or that any confidential client result is publicly verified. Financial results and campaign-level client data will be added only when approved and substantiated.</p>
   <p><Link className="button" href="/#booking">Discuss your growth problem <ArrowUpRight size={16}/></Link></p>
  </section>
 </main>;
}
