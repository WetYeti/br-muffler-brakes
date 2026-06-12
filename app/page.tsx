import Link from 'next/link';
import { ArrowRight, Phone, Star, MapPin, Clock, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center bg-yellow-400 rounded-full px-8 py-4 shadow-lg">
                <Star className="w-8 h-8 mr-3 fill-current" />
                <div className="text-left">
                  <p className="font-bold text-2xl">5.0★ PERFECT RATING</p>
                  <p className="text-sm">(9 verified customer reviews)</p>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">B&amp;R MUFFLER &amp; BRAKES</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Carthage&apos;s Trusted Exhaust &amp; Brake Specialists Since 1985
            </p>
            <p className="text-lg text-blue-200 mb-10">
              From custom exhaust fabrication to complete brake system service—let your truck sound right again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:9036924644"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (903) 692-4644
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                221 E Sabine St, Carthage, TX 75633
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Fri: 8am-5pm | Sat: By Appointment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Badge Bar */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center items-center">
            <div className="md:col-span-2">
              <p className="text-2xl font-bold">⭐⭐⭐⭐⭐</p>
              <p className="text-lg">Perfect 5-Star Rating Across All Reviews</p>
            </div>
            <div>
              <p className="font-bold text-lg">Exhaust Specialists</p>
              <p className="text-sm">Not just general auto</p>
            </div>
            <div>
              <p className="font-bold text-lg">Family Owned</p>
              <p className="text-sm">Locally trusted since 1985</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Exhaust & Brake Solutions</h2>
            <p className="text-xl text-slate-600">Specialists in what matters most—your safety and your ride&apos;s sound</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Exhaust Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🔊</span>
                <h3 className="text-2xl font-bold text-slate-900">Exhaust System Services</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><span className="text-orange-500 mr-3 mt-1">✓</span><span>Muffler replacement & repair</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 mt-1">✓</span><span>Complete exhaust systems</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 mt-1">✓</span><span>Pipe fabrication & welding</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 mt-1">✓</span><span>Cat converter installation</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 mt-1">✓</span><span>Sensors (O2/Air-Fuel)</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 mt-1">✓</span><span>Custom exhaust builds</span></li>
              </ul>
            </div>

            {/* Brake Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🛑</span>
                <h3 className="text-2xl font-bold text-slate-900">Brake System Services</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✓</span><span>Brake pad/ shoe replacement</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✓</span><span>Rotor resurfacing & replacement</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✓</span><span>Caliper & wheel cylinder service</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✓</span><span>Master cylinder repair</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✓</span><span>ABS system diagnostics</span></li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✓</span><span>Complete brake inspections</span></li>
              </ul>
            </div>
            
            {/* Additional Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🔧</span>
                <h3 className="text-2xl font-bold text-slate-900">Also Offering...</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-600">
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>Air Conditioning</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>Diagnostics & Scan Tool</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>Tire Service</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>State Inspections</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>Oil Changes</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>Battery Testing</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>Belts & Hoses</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span>General Auto Repair</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Carthage Trusts B&amp;R Muffler</h2>
              <p className="text-lg text-slate-600 mb-6">
                We&apos;re not just another mechanic shop—we specialize in exhaust and brakes, which means we do these jobs better than anyone in Panola County. When something sounds off under your hood or your brakes feel soft, you want specialists who know exactly what to look for.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Same location also houses <strong>All Auto Repair</strong> for any other vehicle needs. One call covers everything.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-0.5 fill-current" />
                  <span className="text-slate-700"><strong>Perfect 5-Star Track Record</strong> — No complaints, just satisfied customers</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-0.5 fill-current" />
                  <span className="text-slate-700"><strong>Custom Fabrication</strong> — Can&apos;t find the part? We&apos;ll build it</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-0.5 fill-current" />
                  <span className="text-slate-700"><strong>Same-Day Service</strong> — Most muffler & brake jobs done while you wait</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 h-80 rounded-xl flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-5xl mb-2">🚙✨</p>
                <p className="text-slate-800 font-semibold text-xl">&quot;Let Your Truck Sound Right&quot;</p>
                <p className="text-slate-600 mt-2">From stock quiet to performance roar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Real Customer Reviews</h2>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center bg-yellow-50 rounded-full px-8 py-4">
                <span className="text-4xl mr-4">⭐⭐⭐⭐⭐</span>
                <div className="text-left">
                  <p className="font-bold text-2xl text-slate-900">5.0 out of 5</p>
                  <p className="text-sm text-slate-600">Based on 9+ verified reviews</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Fixed my exhaust leak same day. Fair price and sounded great after! Highly recommend.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Local Truck Owner</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Best brakes I&apos;ve had in years. Smooth stop, no noise, and they explained everything.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Satisfied Customer</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Honest guys who don&apos;t overcharge. Been taking my vehicles here for 10+ years.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Long-Time Customer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Got Noise? Or Trouble Stopping?</h2>
          <p className="text-xl mb-8">We fix both—fast, fair, and right the first time</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg"
            >
              View Services
            </a>
            <a 
              href="tel:9036924644"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (903) 692-4644
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center text-blue-200">
            <Clock className="w-5 h-5 mr-2" />
            Mon-Fri: 8am-5pm | Sat by Appt | Sun: Closed
          </div>
        </div>
      </section>
    </div>
  );
}
