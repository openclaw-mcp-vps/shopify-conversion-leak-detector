export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Shopify Stores · $10k+ Monthly Revenue
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Where Customers<br />
          <span className="text-[#58a6ff]">Abandon Your Funnel</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Plug into your Shopify store in minutes. See exactly which checkout step loses the most revenue — and get AI-powered fixes to stop the bleeding.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <p className="text-2xl font-bold text-white">+23%</p>
            <p className="text-xs text-[#8b949e] mt-1">Avg. conversion lift</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5 min</p>
            <p className="text-xs text-[#8b949e] mt-1">Setup time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$0</p>
            <p className="text-xs text-[#8b949e] mt-1">Dev work needed</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Growth</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Shopify webhook + Admin API integration",
              "Real-time checkout funnel dashboard",
              "AI drop-off analysis & fix recommendations",
              "Email alerts when conversion dips",
              "Up to 50,000 sessions/month",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "You install a lightweight Shopify app that registers webhooks and grants read-only Admin API access. No code changes to your theme are required."
            },
            {
              q: "Will it slow down my storefront?",
              a: "No. All tracking happens server-side via webhooks. There is zero JavaScript injected into your storefront pages."
            },
            {
              q: "What if I want to cancel?",
              a: "Cancel anytime from your billing dashboard. You will not be charged again and your data is deleted within 30 days."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Conversion Leak Detector. All rights reserved.
      </footer>
    </main>
  );
}
