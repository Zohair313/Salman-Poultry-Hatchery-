import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Thermometer,
  Syringe,
  Scale,
  Truck,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [breed, setBreed] = useState('broiler');
  const [chickCount, setChickCount] = useState(5000);
  const [activeAppTab, setActiveAppTab] = useState('booking');
  const [bookingStatus, setBookingStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero slideshow state
  const heroImages = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Gallus_gallus_domesticus_-_Vogelpark_Steinen_03.jpg/1280px-Gallus_gallus_domesticus_-_Vogelpark_Steinen_03.jpg',
      alt: 'Fluffy white day-old chick standing on golden straw',
      caption: 'Fluffy day-old chicks at Chakri incubator pull'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/G._gallus_domesticus%2C_Neuss_%28DE%29_--_2023_--_0062.jpg/1280px-G._gallus_domesticus%2C_Neuss_%28DE%29_--_2023_--_0062.jpg',
      alt: 'White layer hen walking through grass and buttercups',
      caption: 'Novogen Brown layer flock parent stock'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gallus_gallus_domesticus_%28Parque_Quevedo%29.006_-_Leon.jpg/1280px-Gallus_gallus_domesticus_%28Parque_Quevedo%29.006_-_Leon.jpg',
      alt: 'Rooster with red comb and bronze plumage',
      caption: 'Hardy Golden Misri and dual-purpose breeder bloodline'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/D%C3%BClmen%2C_B%C3%B6rnste%2C_Tropfen_am_Gatter_--_2020_--_3592.jpg/1280px-D%C3%BClmen%2C_B%C3%B6rnste%2C_Tropfen_am_Gatter_--_2020_--_3592.jpg',
      alt: 'Farm gate and open fields under Potohar skies',
      caption: 'Chakri Road agricultural dispatch routes and sheds'
    }
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(true);

  // Phone app simulation state
  const [phoneCrates, setPhoneCrates] = useState(50);
  const [phoneBreed, setPhoneBreed] = useState('Broiler Ross 308');

  // Automatic slideshow cycling
  useEffect(() => {
    if (!isSlideshowPlaying) return;
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [isSlideshowPlaying, heroImages.length]);

  const breedData = {
    broiler: { name: 'Broiler DOC (Ross 308)', rateText: 'Market daily rate', cratesPer100: 1, vaccine: 'Marek’s and ND' },
    layer: { name: 'Layer DOC (Novogen Brown)', rateText: 'Weekly scheduled pull', cratesPer100: 1, vaccine: 'Marek’s, ND and IB' },
    golden: { name: 'Golden Misri DOC', rateText: 'Twice-weekly hatch', cratesPer100: 1, vaccine: 'Marek’s' },
    desi: { name: 'Desi Crossbred DOC', rateText: 'Batch reservation', cratesPer100: 1, vaccine: 'Marek’s' }
  };

  const cratesNeeded = Math.ceil(chickCount / 100);
  const selectedBreed = breedData[breed];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('Inquiry noted locally. Please call +92 51 8772000 to confirm crate dispatch.');
  };

  return (
    <div className="page-shell">
      {/* Slab Navigation */}
      <nav className="nav-slab" aria-label="Main Navigation">
        <div className="container nav-slab__inner">
          <a href="#" className="nav-brand">
            <span className="nav-brand__title">Salman Poultry Hatchery</span>
            <span className="nav-brand__tag">Chakri Rawalpindi</span>
          </a>

          <ul className="nav-links">
            <li><a href="#rates" className="nav-link">Chick rates</a></li>
            <li><a href="#breeds" className="nav-link">Breeds</a></li>
            <li><a href="#calculator" className="nav-link">Batch planning</a></li>
            <li><a href="#farmer-app" className="nav-link">Farmer app</a></li>
            <li><a href="#dispatch" className="nav-link">Biosecurity</a></li>
            <li><a href="#contact" className="nav-link">Chakri desk</a></li>
          </ul>

          <div className="nav-action">
            <a href="tel:+92518772000" className="btn btn--primary">
              Call 051 8772000
            </a>

            <button
              type="button"
              className="mobile-nav-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer mobile-drawer--open">
            <ul className="mobile-drawer-links">
              <li><a href="#rates" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>Chick rates</a></li>
              <li><a href="#breeds" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>Breeds</a></li>
              <li><a href="#calculator" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>Batch planning</a></li>
              <li><a href="#farmer-app" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>Farmer mobile app</a></li>
              <li><a href="#dispatch" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>Biosecurity</a></li>
              <li><a href="#contact" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>Chakri desk</a></li>
            </ul>
            <a href="tel:+92518772000" className="btn btn--primary" style={{ width: '100%' }}>
              Call +92 51 8772000
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero: Stage Posture with Multi-Image Changing Showcase */}
        <section className="hero-stage">
          <div className="container hero-stage__grid">
            <div className="hero-stage__content">
              <h1>Day-old chick booking on Chakri Road</h1>
              <p className="lead">
                Rawalpindi commercial flock bookings and live daily hatchery rates by landline.
              </p>
              <div className="hero-actions">
                <a href="#rates" className="btn btn--primary">
                  Check today’s rates
                </a>
                <a href="tel:+92518772000" className="btn btn--secondary">
                  Call +92 51 8772000
                </a>
              </div>
            </div>

            <div className="hero-stage__visual">
              {/* Rotating Showcase with Controls */}
              <div
                className="hero-showcase"
                onMouseEnter={() => setIsSlideshowPlaying(false)}
                onMouseLeave={() => setIsSlideshowPlaying(true)}
              >
                <div className="hero-showcase__frame">
                  {heroImages.map((img, idx) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className={`hero-showcase__img ${idx === currentImgIndex ? 'hero-showcase__img--active' : ''}`}
                    />
                  ))}
                </div>

                <div className="hero-showcase__controls">
                  <span className="hero-showcase__caption">
                    {heroImages[currentImgIndex].caption}
                  </span>

                  <div className="hero-showcase__actions">
                    <button
                      type="button"
                      className="showcase-btn"
                      aria-label="Previous image"
                      onClick={() => setCurrentImgIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      className="showcase-btn"
                      aria-label={isSlideshowPlaying ? 'Pause rotation' : 'Play rotation'}
                      onClick={() => setIsSlideshowPlaying(!isSlideshowPlaying)}
                    >
                      {isSlideshowPlaying ? '❚❚' : '▶'}
                    </button>

                    <button
                      type="button"
                      className="showcase-btn"
                      aria-label="Next image"
                      onClick={() => setCurrentImgIndex((prev) => (prev + 1) % heroImages.length)}
                    >
                      ›
                    </button>

                    <div className="showcase-dots">
                      {heroImages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`showcase-dot ${i === currentImgIndex ? 'showcase-dot--active' : ''}`}
                          aria-label={`Show photo ${i + 1}`}
                          onClick={() => setCurrentImgIndex(i)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-fact-strip">
                <div className="hero-fact">
                  <span className="hero-fact__value num">4.8 / 5</span>
                  <span className="hero-fact__label">Rating on 46 reviews</span>
                </div>
                <div className="hero-fact">
                  <span className="hero-fact__value">Chakri Road</span>
                  <span className="hero-fact__label">Rawalpindi hatchery unit</span>
                </div>
                <div className="hero-fact">
                  <span className="hero-fact__value">PTCL Landline</span>
                  <span className="hero-fact__label">Call only dispatch desk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breed Gallery Section */}
        <section id="breeds" className="section-pad">
          <div className="container">
            <div className="section-head">
              <h2>Commercial day-old chick breeds</h2>
              <p className="lead">
                Selected genetics bred for high feed conversion, hardiness, and Potohar climate resistance.
              </p>
            </div>

            <div className="breed-gallery">
              <div className="breed-card">
                <div className="breed-card__img-wrap">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Gallus_gallus_domesticus_-_Vogelpark_Steinen_03.jpg/1280px-Gallus_gallus_domesticus_-_Vogelpark_Steinen_03.jpg"
                    alt="Day-old white broiler chick"
                    className="breed-card__img"
                  />
                </div>
                <div className="breed-card__body">
                  <h3 className="breed-card__title">Broiler Ross 308</h3>
                  <p className="breed-card__meta">Rapid weight gain and low feed conversion ratio for commercial meat production.</p>
                  <span className="breed-card__badge num">Daily Morning Pull</span>
                </div>
              </div>

              <div className="breed-card">
                <div className="breed-card__img-wrap">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/G._gallus_domesticus%2C_Neuss_%28DE%29_--_2023_--_0062.jpg/1280px-G._gallus_domesticus%2C_Neuss_%28DE%29_--_2023_--_0062.jpg"
                    alt="White layer hen"
                    className="breed-card__img"
                  />
                </div>
                <div className="breed-card__body">
                  <h3 className="breed-card__title">Layer Novogen Brown</h3>
                  <p className="breed-card__meta">High egg output, shell hardness, and calm temperament for table egg poultry houses.</p>
                  <span className="breed-card__badge num">Tuesday and Friday</span>
                </div>
              </div>

              <div className="breed-card">
                <div className="breed-card__img-wrap">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gallus_gallus_domesticus_%28Parque_Quevedo%29.006_-_Leon.jpg/1280px-Gallus_gallus_domesticus_%28Parque_Quevedo%29.006_-_Leon.jpg"
                    alt="Golden rooster"
                    className="breed-card__img"
                  />
                </div>
                <div className="breed-card__body">
                  <h3 className="breed-card__title">Golden Misri</h3>
                  <p className="breed-card__meta">Resilient rural bird with strong natural disease resistance and dual meat and egg output.</p>
                  <span className="breed-card__badge num">Twice Weekly Pull</span>
                </div>
              </div>

              <div className="breed-card">
                <div className="breed-card__img-wrap">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/1280px-Male_and_female_chicken_sitting_together.jpg"
                    alt="Desi native rooster and hen pair"
                    className="breed-card__img"
                  />
                </div>
                <div className="breed-card__body">
                  <h3 className="breed-card__title">Desi Crossbred</h3>
                  <p className="breed-card__meta">Native acclimatized stock favored for free-range shed setups and open country yards.</p>
                  <span className="breed-card__badge num">Weekly Advance Booking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Index / Ledger: Today's Chick Rates & Calculator in Perfectly Aligned Cards */}
        <section id="rates" className="section-pad">
          <div className="container">
            <div className="section-head">
              <h2>Today’s chick rates and hatch dates</h2>
              <p className="lead">
                Current commercial breeds scheduled for incubation and crate dispatch.
              </p>
            </div>

            <div className="rates-grid">
              {/* Left Box: Matching Rate Card */}
              <div className="rates-card">
                <div className="card-header-block">
                  <h3 className="card-panel-title">Batch incubation schedule</h3>
                  <p className="card-panel-desc">Daily morning pulls and standard hatchery vaccinations.</p>
                </div>

                <div className="card-body-block">
                  <div className="table-wrap">
                    <table className="table-ledger">
                      <thead>
                        <tr>
                          <th scope="col">Breed</th>
                          <th scope="col">Hatch cycle</th>
                          <th scope="col">Vaccine at hatch</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Broiler DOC</strong> (Ross 308 / Cobb 500)</td>
                          <td>Daily morning pulls</td>
                          <td>Marek’s and Newcastle</td>
                          <td><span className="status-chip status-chip--in-stock">Available</span></td>
                        </tr>
                        <tr>
                          <td><strong>Layer DOC</strong> (Novogen Brown)</td>
                          <td>Tuesday and Friday pulls</td>
                          <td>Marek’s, ND, and IB</td>
                          <td><span className="status-chip status-chip--scheduled">Booking open</span></td>
                        </tr>
                        <tr>
                          <td><strong>Golden Misri DOC</strong></td>
                          <td>Monday and Thursday pulls</td>
                          <td>Marek’s subcutaneous</td>
                          <td><span className="status-chip status-chip--in-stock">Available</span></td>
                        </tr>
                        <tr>
                          <td><strong>Desi Cross DOC</strong></td>
                          <td>Weekly Friday dispatch</td>
                          <td>Marek’s subcutaneous</td>
                          <td><span className="status-chip status-chip--scheduled">Advance booking</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-summary-strip">
                  <div className="card-summary-row">
                    <span>Ventilated packaging</span>
                    <span className="num">100 chicks per crate</span>
                  </div>
                  <div className="card-summary-row">
                    <span>Minimum shed order</span>
                    <span className="num">500 chicks (5 crates)</span>
                  </div>
                  <div className="card-summary-row">
                    <span>Incubator pull time</span>
                    <span className="num">06:00 AM daily</span>
                  </div>
                  <div className="card-summary-row">
                    <span>Confirmation desk</span>
                    <span>Call +92 51 8772000</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Matching Calculator Card */}
              <div id="calculator" className="calc-card">
                <div className="card-header-block">
                  <h3 className="card-panel-title">Flock crate calculator</h3>
                  <p className="card-panel-desc">Calculate required crates and vaccine units for your shed batch size.</p>
                </div>

                <div className="card-body-block">
                  <div className="calc-field">
                    <label htmlFor="breed-select">Select flock breed</label>
                    <select
                      id="breed-select"
                      className="calc-input"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                    >
                      <option value="broiler">Broiler Ross 308</option>
                      <option value="layer">Layer Novogen Brown</option>
                      <option value="golden">Golden Misri</option>
                      <option value="desi">Desi Cross</option>
                    </select>
                  </div>

                  <div className="calc-field">
                    <label htmlFor="chick-qty">Total chicks required</label>
                    <input
                      id="chick-qty"
                      type="number"
                      min="500"
                      step="500"
                      className="calc-input"
                      value={chickCount}
                      onChange={(e) => setChickCount(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="card-summary-strip">
                  <div className="card-summary-row">
                    <span>Selected breed</span>
                    <span>{selectedBreed.name}</span>
                  </div>
                  <div className="card-summary-row">
                    <span>Ventilated crates (100 per crate)</span>
                    <span className="num">{cratesNeeded} crates</span>
                  </div>
                  <div className="card-summary-row">
                    <span>Standard vaccination</span>
                    <span>{selectedBreed.vaccine}</span>
                  </div>
                  <div className="card-summary-row">
                    <span>Dispatch desk</span>
                    <span>Call +92 51 8772000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Mobile Poultry Farmer Chick-Booking App Simulation (Waived 47b) */}
        <section id="farmer-app" className="section-pad app-section">
          <div className="container">
            <div className="app-grid">
              <div className="app-left-col">
                <div className="section-head">
                  <h2>The poultry farmer chick booking app</h2>
                  <p className="lead">
                    Mobile flock reservations, delivery tracking, and brooding temperatures.
                  </p>
                </div>

                <div className="app-features">
                  <div className="app-feature-row">
                    <h3>Direct shed batch reservation</h3>
                    <p>
                      Farmers book hatch batches directly from their shed schedule without waiting for broker calls.
                    </p>
                  </div>
                  <div className="app-feature-row">
                    <h3>Real-time hatch pull alerts</h3>
                    <p>
                      Receive incubator pull notices and crate loading confirmations before vehicle departure.
                    </p>
                  </div>
                  <div className="app-feature-row">
                    <h3>Chakri brooding temperature protocols</h3>
                    <p>
                      Access daily temperature, ventilation, and electrolyte guides adjusted for Potohar weather.
                    </p>
                  </div>
                </div>
              </div>

              {/* Complete Smartphone Mockup Layout (Waived 47b) */}
              <div className="phone-mock-wrapper">
                <div className="phone-mock" aria-label="Salman Poultry Hatchery Farmer Mobile App">
                  <div className="phone-screen-shell">
                    {/* Phone Top Status Bar */}
                    <div className="phone-status-bar">
                      <span className="phone-time num">09:41</span>
                      <div className="phone-island" aria-hidden="true"></div>
                      <div className="phone-indicators num">
                        <span>5G</span>
                        <span>84%</span>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="phone-app-header">
                      <div className="phone-app-header__title">
                        <span className="phone-app-name">Salman Hatchery</span>
                        <span className="phone-hub-badge">● Chakri Hub Live</span>
                      </div>
                      <span className="status-chip status-chip--in-stock num">Potohar Route</span>
                    </div>

                    {/* App Inner Body */}
                    <div className="phone-app-body">
                      {/* Segmented Switcher */}
                      <div className="phone-tab-bar" role="tablist">
                        <button
                          role="tab"
                          aria-selected={activeAppTab === 'booking'}
                          className={`phone-tab-btn ${activeAppTab === 'booking' ? 'phone-tab-btn--active' : ''}`}
                          onClick={() => setActiveAppTab('booking')}
                        >
                          Book Flock
                        </button>
                        <button
                          role="tab"
                          aria-selected={activeAppTab === 'dispatch'}
                          className={`phone-tab-btn ${activeAppTab === 'dispatch' ? 'phone-tab-btn--active' : ''}`}
                          onClick={() => setActiveAppTab('dispatch')}
                        >
                          Live Delivery
                        </button>
                        <button
                          role="tab"
                          aria-selected={activeAppTab === 'guide'}
                          className={`phone-tab-btn ${activeAppTab === 'guide' ? 'phone-tab-btn--active' : ''}`}
                          onClick={() => setActiveAppTab('guide')}
                        >
                          Brooding Temp
                        </button>
                      </div>

                      {/* Screen 1: Book Batch */}
                      {activeAppTab === 'booking' && (
                        <>
                          <div className="phone-card">
                            <div className="phone-card-title">Reserve Incubator Batch</div>
                            <div className="phone-card-row">
                              <span>Breed</span>
                              <select
                                className="calc-input"
                                style={{ height: '32px', fontSize: '11px', padding: '0 8px' }}
                                value={phoneBreed}
                                onChange={(e) => setPhoneBreed(e.target.value)}
                              >
                                <option value="Broiler Ross 308">Broiler Ross 308</option>
                                <option value="Layer Novogen">Layer Novogen</option>
                                <option value="Golden Misri">Golden Misri</option>
                              </select>
                            </div>
                            <div className="phone-card-row">
                              <span>Crates (100 DOCs each)</span>
                              <div className="phone-stepper">
                                <button
                                  type="button"
                                  className="stepper-btn"
                                  onClick={() => setPhoneCrates(Math.max(10, phoneCrates - 10))}
                                >
                                  -
                                </button>
                                <span className="num" style={{ fontWeight: 600 }}>{phoneCrates}</span>
                                <button
                                  type="button"
                                  className="stepper-btn"
                                  onClick={() => setPhoneCrates(phoneCrates + 10)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="phone-card-row">
                              <span>Total Chicks</span>
                              <span className="num" style={{ fontWeight: 600 }}>{phoneCrates * 100} birds</span>
                            </div>
                            <div className="phone-card-row">
                              <span>Dispatch Day</span>
                              <span style={{ fontWeight: 500 }}>Thursday 06:00 AM</span>
                            </div>
                            <button
                              type="button"
                              className="phone-action-btn"
                              onClick={() => alert('Batch scheduled! Confirm by calling +92 51 8772000.')}
                            >
                              Reserve Flock Batch
                            </button>
                          </div>

                          <div className="phone-card">
                            <div className="phone-card-title">Recent Reservation</div>
                            <div className="phone-card-row">
                              <span>Order #SH-4821</span>
                              <span className="status-chip status-chip--in-stock">Confirmed</span>
                            </div>
                            <div className="phone-card-row">
                              <span>Shed 04 (Fateh Jang)</span>
                              <span className="num">5,000 DOCs</span>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Screen 2: Live Dispatch & GPS */}
                      {activeAppTab === 'dispatch' && (
                        <>
                          <div className="phone-card">
                            <div className="phone-card-title">Van Telemetry (Chakri Rd)</div>
                            <div className="phone-card-row">
                              <span>Vehicle</span>
                              <span>Chakri Van 02</span>
                            </div>
                            <div className="phone-card-row">
                              <span>Chamber Temperature</span>
                              <span className="num" style={{ color: 'var(--color-green)', fontWeight: 600 }}>24.8 C (Normal)</span>
                            </div>
                            <div className="phone-card-row">
                              <span>Circulation Fans</span>
                              <span style={{ color: 'var(--color-green)' }}>Active (98% Flow)</span>
                            </div>
                            <div className="phone-card-row">
                              <span>Route Checkpoint</span>
                              <span>Chakri Interchange M-2</span>
                            </div>
                          </div>

                          <div className="phone-card">
                            <div className="phone-card-title">Driver Dispatcher Contact</div>
                            <div className="phone-card-row">
                              <span>Chakri Operations Desk</span>
                              <a href="tel:+92518772000" className="num" style={{ color: 'var(--color-ink)', fontWeight: 600 }}>051 8772000</a>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Screen 3: Brooding Guide */}
                      {activeAppTab === 'guide' && (
                        <div className="phone-card">
                          <div className="phone-card-title">Target Brooding Heat</div>
                          <div className="phone-card-row">
                            <span>Day 1 to 3</span>
                            <span className="num" style={{ fontWeight: 600 }}>33 to 35 C</span>
                          </div>
                          <div className="phone-card-row">
                            <span>Day 4 to 7</span>
                            <span className="num" style={{ fontWeight: 600 }}>31 to 33 C</span>
                          </div>
                          <div className="phone-card-row">
                            <span>Day 8 to 14</span>
                            <span className="num" style={{ fontWeight: 600 }}>28 to 30 C</span>
                          </div>
                          <div className="phone-card-row">
                            <span>Water Electrolyte</span>
                            <span>Glucose + Vitamin C</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom App Navigation */}
                    <div className="phone-bottom-nav">
                      <div className="phone-nav-item phone-nav-item--active">
                        <span>●</span>
                        <span>Flock</span>
                      </div>
                      <div className="phone-nav-item">
                        <span>■</span>
                        <span>Orders</span>
                      </div>
                      <div className="phone-nav-item">
                        <span>▲</span>
                        <span>Health</span>
                      </div>
                      <div className="phone-nav-item">
                        <span>◆</span>
                        <span>Hotline</span>
                      </div>
                    </div>

                    {/* Home gesture pill */}
                    <div className="phone-home-indicator" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Ledger: Biosecurity and Dispatch Standards */}
        <section id="dispatch" className="section-pad biosecurity-section">
          <div className="container">
            <div className="section-head biosecurity-head">
              <div className="biosecurity-badge">
                <span className="biosecurity-badge__dot" aria-hidden="true"></span>
                <span>Chakri Biosecurity Standard Level-1</span>
              </div>
              <h2>Hatchery biosecurity and chick health protocols</h2>
              <p className="lead">
                Automated multi-stage incubation hygiene, certified Marek’s and ND vaccinations, and climate-controlled aerated transport across Rawalpindi, Islamabad, Punjab, and KPK.
              </p>
            </div>

            <div className="protocol-grid">
              {/* Card 1 */}
              <div className="protocol-card">
                <div>
                  <div className="protocol-card__header">
                    <div className="protocol-card__icon-wrap">
                      <ShieldCheck size={20} strokeWidth={1.8} />
                    </div>
                    <span className="protocol-card__eyebrow">Airflow & Sanitation</span>
                  </div>
                  <h3 className="protocol-card__title">HEPA positive-pressure halls</h3>
                  <p className="protocol-card__desc">
                    Continuous positive-pressure filtered airflow prevents airborne pathogen entry into setter and hatcher halls. Automated ozone egg fumigation upon arrival from parent breeder farms.
                  </p>
                </div>
                <div className="protocol-card__specs">
                  <span className="spec-tag num">0.3μm Filtration</span>
                  <span className="spec-tag num">+35 Pa Pressure</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="protocol-card">
                <div>
                  <div className="protocol-card__header">
                    <div className="protocol-card__icon-wrap">
                      <Thermometer size={20} strokeWidth={1.8} />
                    </div>
                    <span className="protocol-card__eyebrow">Incubation Science</span>
                  </div>
                  <h3 className="protocol-card__title">Automated setter microclimate</h3>
                  <p className="protocol-card__desc">
                    Microprocessor setters maintain exact 37.5°C incubation heat and 55% relative humidity with automated egg tilting every 60 minutes for uniform embryonic vascular development.
                  </p>
                </div>
                <div className="protocol-card__specs">
                  <span className="spec-tag num">37.5°C ±0.1°C</span>
                  <span className="spec-tag num">55% RH Humidity</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="protocol-card">
                <div>
                  <div className="protocol-card__header">
                    <div className="protocol-card__icon-wrap">
                      <Syringe size={20} strokeWidth={1.8} />
                    </div>
                    <span className="protocol-card__eyebrow">Flock Immunization</span>
                  </div>
                  <h3 className="protocol-card__title">Certified day-one vaccination</h3>
                  <p className="protocol-card__desc">
                    Every single day-old chick receives certified Marek’s Disease (HVT strain) subcutaneous injection and Newcastle Disease (ND Clone 30) coarse spray immunization prior to crate packing.
                  </p>
                </div>
                <div className="protocol-card__specs">
                  <span className="spec-tag num">100% Marek’s HVT</span>
                  <span className="spec-tag num">ND Clone 30 Spray</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="protocol-card">
                <div>
                  <div className="protocol-card__header">
                    <div className="protocol-card__icon-wrap">
                      <Scale size={20} strokeWidth={1.8} />
                    </div>
                    <span className="protocol-card__eyebrow">Quality Grading</span>
                  </div>
                  <h3 className="protocol-card__title">Optical & manual DOC grading</h3>
                  <p className="protocol-card__desc">
                    Rigorous inspection table checks ensure dry, completely healed navels, bright alert eyes, clean beaks, and active reflex. Strict 38g to 42g weight threshold for commercial vigor.
                  </p>
                </div>
                <div className="protocol-card__specs">
                  <span className="spec-tag num">Grade A Standard</span>
                  <span className="spec-tag num">38g–42g Uniformity</span>
                </div>
              </div>

              {/* Card 5 */}
              <div className="protocol-card">
                <div>
                  <div className="protocol-card__header">
                    <div className="protocol-card__icon-wrap">
                      <Truck size={20} strokeWidth={1.8} />
                    </div>
                    <span className="protocol-card__eyebrow">Aerated Logistics</span>
                  </div>
                  <h3 className="protocol-card__title">Climate-controlled transport</h3>
                  <p className="protocol-card__desc">
                    Custom-insulated delivery fleet equipped with forced continuous air exchange and auxiliary heating, maintaining 24°C to 26°C crate ambient temperature along Chakri and M-2 motorway routes.
                  </p>
                </div>
                <div className="protocol-card__specs">
                  <span className="spec-tag num">24°C–26°C Cabin</span>
                  <span className="spec-tag num">Forced Fresh Air</span>
                </div>
              </div>

              {/* Card 6 */}
              <div className="protocol-card">
                <div>
                  <div className="protocol-card__header">
                    <div className="protocol-card__icon-wrap">
                      <PhoneCall size={20} strokeWidth={1.8} />
                    </div>
                    <span className="protocol-card__eyebrow">Dispatch Verification</span>
                  </div>
                  <h3 className="protocol-card__title">Shed readiness pre-departure check</h3>
                  <p className="protocol-card__desc">
                    Chakri dispatch desk calls the poultry shed operator via PTCL landline to verify 33°C to 35°C brooding heat, fresh bedding, and glucose-electrolyte water before delivery vehicles depart.
                  </p>
                </div>
                <div className="protocol-card__specs">
                  <span className="spec-tag num">Landline 051 8772000</span>
                  <span className="spec-tag num">33°C Brood Check</span>
                </div>
              </div>
            </div>

            {/* Bottom Biosecurity Assurance Ledger Strip */}
            <div className="biosecurity-assurance-strip">
              <div className="assurance-item">
                <CheckCircle2 size={18} className="assurance-icon" />
                <div>
                  <div className="assurance-title">Sterile Crate Washing</div>
                  <div className="assurance-desc">100% steam sanitized crates between every single hatch pull</div>
                </div>
              </div>
              <div className="assurance-item">
                <CheckCircle2 size={18} className="assurance-icon" />
                <div>
                  <div className="assurance-title">Vehicle Disinfection Dip</div>
                  <div className="assurance-desc">Automated tire wheel dip and misting station at Chakri main gate</div>
                </div>
              </div>
              <div className="assurance-item">
                <CheckCircle2 size={18} className="assurance-icon" />
                <div>
                  <div className="assurance-title">Traceable Pull Records</div>
                  <div className="assurance-desc">Logged incubator hatch pull certificate with unique shed reservation ID</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Direct Landline Desk: Symmetrical Aligned Cards */}
        <section id="contact" className="section-pad">
          <div className="container">
            <div className="section-head">
              <h2>Visit Chakri hatchery or call the landline</h2>
              <p className="lead">
                Place flock bookings and verify morning chick rates directly with our team.
              </p>
            </div>

            <div className="contact-grid">
              {/* Left Box: Symmetrical Contact Details Card */}
              <div className="contact-card">
                <div>
                  <div className="card-header-block">
                    <h3 className="card-panel-title">Chakri facility directory</h3>
                    <p className="card-panel-desc">Direct landline and gate reception for shed operators.</p>
                  </div>

                  <div className="contact-info-panel">
                    <div className="contact-meta-row">
                      <span className="contact-meta-row__title">Hatchery location</span>
                      <span className="contact-meta-row__val">7QH4+77Q, Chakri Rd, Rawalpindi, Punjab</span>
                    </div>

                    <div className="contact-meta-row">
                      <span className="contact-meta-row__title">Dispatch telephone</span>
                      <span className="contact-meta-row__val num">+92 51 8772000</span>
                      <span className="form-hint">Call only (PTCL 051 Rawalpindi landline)</span>
                    </div>

                    <div className="contact-meta-row">
                      <span className="contact-meta-row__title">Public rating</span>
                      <span className="contact-meta-row__val num">4.8 out of 5 stars (46 customer reviews)</span>
                    </div>

                    <div className="contact-meta-row">
                      <span className="contact-meta-row__title">Delivery coverage</span>
                      <span className="contact-meta-row__val">Rawalpindi, Islamabad, Chakwal, Gujar Khan, Fateh Jang, and Attock</span>
                    </div>
                  </div>
                </div>

                <div className="card-summary-strip">
                  <div className="card-summary-row">
                    <span>Gate dispatch hours</span>
                    <span className="num">06:00 AM to 06:00 PM</span>
                  </div>
                  <div className="card-summary-row">
                    <span>PTCL landline desk</span>
                    <span className="num">+92 51 8772000</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Symmetrical Booking Form Card */}
              <form className="booking-form" data-endpoint="" onSubmit={handleBookingSubmit}>
                <div>
                  <div className="card-header-block">
                    <h3 className="card-panel-title">Flock reservation enquiry</h3>
                    <p className="card-panel-desc">Submit your batch requirements for morning confirmation.</p>
                  </div>

                  <div className="form-fields-wrap">
                    <div className="form-row">
                      <label htmlFor="shed-owner">Farmer or farm name</label>
                      <input
                        id="shed-owner"
                        type="text"
                        required
                        className="form-input"
                        placeholder="Enter farm or shed name"
                      />
                    </div>

                    <div className="form-row">
                      <label htmlFor="shed-location">Farm location</label>
                      <select id="shed-location" className="form-select">
                        <option value="chakri">Chakri Road</option>
                        <option value="rawalpindi">Rawalpindi</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="chakwal">Chakwal</option>
                        <option value="gujar-khan">Gujar Khan</option>
                        <option value="fateh-jang">Fateh Jang</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <label htmlFor="flock-size">Required day-old chicks</label>
                      <input
                        id="flock-size"
                        type="number"
                        min="500"
                        step="500"
                        defaultValue="5000"
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-row">
                      <label htmlFor="contact-phone">Farmer mobile phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        className="form-input"
                        placeholder="0300 0000000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%', marginBottom: '8px' }}>
                    Submit booking inquiry
                  </button>

                  <p className="form-hint">
                    Hatchery dispatch confirms all bookings via phone. For immediate orders call +92 51 8772000.
                  </p>

                  {bookingStatus && (
                    <div className="form-notice" role="status" style={{ marginTop: '8px' }}>
                      {bookingStatus}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer: Index Columns posture */}
      <footer className="footer-index">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-col-title">Salman Poultry Hatchery Chakri</div>
              <p>
                Day-old chicks poultry hatchery supplying commercial broiler, layer, and rural flocks across Rawalpindi and Punjab.
              </p>
              <p className="num">
                Telephone: +92 51 8772000 (PTCL landline)
              </p>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Breeds</div>
              <ul className="footer-col-list">
                <li><a href="#rates">Broiler Ross 308</a></li>
                <li><a href="#rates">Layer Novogen Brown</a></li>
                <li><a href="#rates">Golden Misri</a></li>
                <li><a href="#rates">Desi Cross</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Operations</div>
              <ul className="footer-col-list">
                <li><a href="#calculator">Flock calculator</a></li>
                <li><a href="#farmer-app">Farmer mobile app</a></li>
                <li><a href="#dispatch">Hatchery biosecurity</a></li>
                <li><a href="#contact">Landline booking</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Location</div>
              <ul className="footer-col-list">
                <li><span>7QH4+77Q Chakri Rd</span></li>
                <li><span>Rawalpindi, Punjab</span></li>
                <li><span>Call only: 051 8772000</span></li>
                <li><span>Rating: 4.8 on 46 reviews</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>Salman Poultry Hatchery Chakri. Rawalpindi, Punjab.</span>
            <span>
              Photographs:
              <a href="https://commons.wikimedia.org/wiki/File:Gallus_gallus_domesticus_-_Vogelpark_Steinen_03.jpg">H. Zell</a>,
              <a href="https://commons.wikimedia.org/wiki/File:G._gallus_domesticus,_Neuss_(DE)_--_2023_--_0062.jpg">Anil Öztas</a>,
              <a href="https://commons.wikimedia.org/wiki/File:Gallus_gallus_domesticus_(Parque_Quevedo).006_-_Leon.jpg">Fernando Losada Rodríguez</a>,
              <a href="https://commons.wikimedia.org/wiki/File:Male_and_female_chicken_sitting_together.jpg">Muhammad Mahdi Karim</a>
              (Wikimedia Commons)
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
