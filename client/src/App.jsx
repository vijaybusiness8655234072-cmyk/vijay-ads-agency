import { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight, Menu, X, Check, Facebook, Instagram,
  Target, Users, Megaphone, TrendingUp, BarChart3, MousePointer2,
  MessageCircle, Sparkles, ChevronDown, Play, Pause, Volume2, VolumeX, MapPin, Heart, Send, Bookmark,
  ChevronLeft, ChevronRight, Youtube
} from 'lucide-react';

const WHATSAPP = '918591889240';
const wa = (message = 'Hi Vijay Ads Agency, I would like to discuss growing my business.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { number: '01', title: 'Facebook Advertisement', text: 'Connect with more potential customers through creative Facebook ads.', icon: Megaphone },
  { number: '02', title: 'Instagram Advertisement', text: 'Showcase your brand through creative Instagram ads, stories and reels.', icon: Instagram },
  { number: '03', title: 'Audience Targeting', text: 'Reach the people most likely to be interested in your products or services.', icon: Target },
  { number: '04', title: 'Lead Generation', text: 'Turn ad engagement into quality enquiries and new business opportunities.', icon: Users }
];

const process = [
  'High-converting Facebook & Instagram lead generation',
  'Daily leads with a proper targeting strategy',
  'Personal mentorship and expert guidance',
  'Sales closing support to convert leads into clients',
  'Call support for better understanding',
  'Instagram & Facebook automation'
];

const ease = [0.22, 1, 0.36, 1];
const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } }
};
const revealLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } }
};
const revealRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } }
};

function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const variants = direction === 'left' ? revealLeft : direction === 'right' ? revealRight : reveal;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14, margin: '0px 0px -50px 0px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, center = false }) {
  return <div className={`eyebrow${center ? ' eyebrow-center' : ''}`}><span />{children}</div>;
}

function PhotoSlot({ className = '', label = 'YOUR PHOTO HERE' }) {
  return (
    <div className={`photo-slot ${className}`} aria-label={label}>
      <span className="photo-slot-mark">+</span>
      <span className="photo-slot-label">{label}</span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Home', '#home'], ['About', '#about'], ['Services', '#services'],
    ['Our Work', '#testimonials'], ['Connect', '#connect']
  ];
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="wordmark" aria-label="Vijay Ads Agency">
          vijay<span>ads</span><i>✳</i><small>AGENCY</small>
        </a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`nav${open ? ' nav-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}{label === 'Services' && <span className="hot">HOT</span>}
            </a>
          ))}
          <a className="nav-quote" href={wa('Hi Vijay Ads Agency, I would like to request a quote.')} target="_blank" rel="noreferrer">
            Contact Me <br />On Whatsapp 
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-artwork hero-artwork-single">
      <div className="hero-campaign-frame">
        <img
          className="hero-campaign-image"
          src="/images/hero-photo.jpg"
          alt="Vijay Ads Agency campaign"
        />
        <div className="hero-campaign-shade" />
      </div>
      <span className="hero-doodle doodle-spark">✳</span>
      <motion.span className="hero-art-tag" animate={{ y: [0, -7, 0], rotate: [-2, 1, -2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        LET'S GROW<br />TOGETHER ↗
      </motion.span>
    </div>
  );
}

function DashboardArt() {
  return (
    <div className="dashboard-art">
      <div className="dash-window">
        <div className="dash-toolbar"><span /><span /><span /><b>CAMPAIGN OVERVIEW</b></div>
        <div className="dash-layout">
          <div className="dash-sidebar"><b>V.</b><i /><i /><i /><i /></div>
          <div className="dash-main">
            <strong>Performance overview</strong>
            <div className="dash-kpis"><div><small>Reach</small><b>24.8K</b></div><div><small>Leads</small><b>1,240</b></div></div>
            <div className="dash-chart">
              <span /><span /><span /><span />
              <svg viewBox="0 0 360 100" preserveAspectRatio="none"><path d="M0 83 C35 80 45 47 82 59 S135 82 165 48 S215 58 244 25 S310 42 360 8" /></svg>
            </div>
            <div className="dash-colors"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="dash-scribble">✳</span>
      <span className="dash-sticker">PLAN<br />TRACK<br /><b>GROW</b></span>
    </div>
  );
}

function ServiceIllustration({ index }) {
  const serviceImages = [
    { src: '/images/facebook-ad.png', alt: 'Facebook advertisement icon' },
    { src: '/images/instagram-ad.png', alt: 'Instagram advertisement icon' },
    { src: '/images/audience-targeting.png', alt: 'Audience targeting icon' },
    { src: '/images/lead-generation.png', alt: 'Lead generation icon' }
  ];
  const image = serviceImages[index];

  return (
    <div className={`service-visual service-visual-${index + 1}`}>
      <img className="service-visual-image" src={image.src} alt={image.alt} />
      <span className="service-scene-index">0{index + 1}</span>
    </div>
  );
}

function ExecutionArtwork() {
  return (
    <div className="execution-art">
      <div className="execution-dots" />
      <div className="insight-card">
        <div className="insight-head">Live performance <span>↗</span></div>
        <div className="insight-orb"><BarChart3 size={38} /></div>
        <div className="insight-line" /><div className="insight-line short" />
        <div className="insight-graph"><svg viewBox="0 0 260 100"><path d="M0 82 C30 76 38 37 72 52 S125 72 149 35 S208 46 260 8" /></svg></div>
      </div>
      <motion.div className="execution-sticker" animate={{ y: [0, -9, 0], rotate: [4, 1, 4] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
        50%+<br /><b>MORE FOCUS</b>
      </motion.div>
      <span className="execution-doodle">〰</span>
    </div>
  );
}


const adReviewItems = Array.from({ length: 20 }, (_, index) => ({
  id: `ad-${index + 1}`,
  src: `/images/ad-reviews/ad-review-${String(index + 1).padStart(2, '0')}.jpg`,
  label: `AD REVIEW ${String(index + 1).padStart(2, '0')}`,
  alt: `Facebook or Instagram ad review ${index + 1}`
}));

const testimonialItems = Array.from({ length: 15 }, (_, index) => ({
  id: `testimonial-${index + 1}`,
  src: `/videos/testimonials/testimonial-${String(index + 1).padStart(2, '0')}.mp4`,
  label: `CLIENT STORY ${String(index + 1).padStart(2, '0')}`
}));

const resultItems = Array.from({ length: 17 }, (_, index) => ({
  id: `result-${index + 1}`,
  src: `/images/campaign-results/result-${String(index + 1).padStart(2, '0')}.jpg`,
  label: `AD RESULT ${String(index + 1).padStart(2, '0')}`,
  alt: `Vijay Ads Agency campaign result ${index + 1}`
}));

function MediaShowcaseColumn({ title, items, kind, onOpen }) {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const touchStartX = useRef(null);

  const goTo = (nextIndex) => {
    const safeIndex = (nextIndex + items.length) % items.length;
    setCurrentIndex(safeIndex);
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    if (kind !== 'video' && trackRef.current) {
      const track = trackRef.current;
      const card = track.children[safeIndex];
      if (card) {
        const targetLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
        track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      }
    }
  };

  const updateImageIndex = () => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closest = 0;
    let distance = Infinity;
    Array.from(track.children).forEach((card, index) => {
      const cardCenter = card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2;
      const d = Math.abs(cardCenter - trackCenter);
      if (d < distance) { distance = d; closest = index; }
    });
    setCurrentIndex(closest);
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  const onTouchStart = (event) => { touchStartX.current = event.touches[0].clientX; };
  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 55) goTo(currentIndex + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const item = items[currentIndex];

  return (
    <div className={`media-showcase-column media-showcase-${kind}`}>
      <h3 className="media-showcase-title">{title}</h3>

      {kind === 'video' ? (
        <div className="testimonial-player" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="testimonial-video-frame">
            <video
              key={item.id}
              ref={videoRef}
              src={item.src}
              muted={muted}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
              onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onClick={togglePlayback}
            />
            <span className="testimonial-count">{String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
            <button
              className="testimonial-mute"
              type="button"
              onClick={() => setMuted(value => !value)}
              aria-label={muted ? 'Unmute testimonial' : 'Mute testimonial'}
            >
              {muted ? <VolumeX size={16}/> : <Volume2 size={16}/>}
            </button>
            {!playing && (
              <button className="testimonial-big-play" type="button" onClick={togglePlayback} aria-label="Play testimonial">
                <Play size={24} fill="currentColor"/>
              </button>
            )}
            <input
              className="testimonial-seek"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              style={{ '--testimonial-progress': duration ? `${(currentTime / duration) * 100}%` : '0%' }}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (videoRef.current) videoRef.current.currentTime = next;
                setCurrentTime(next);
              }}
              aria-label="Seek through testimonial"
              disabled={!duration}
            />
          </div>
          <div className="testimonial-navigation">
            <button type="button" onClick={() => goTo(currentIndex - 1)} aria-label="Previous testimonial">
              <ChevronLeft size={19}/>
            </button>
            <div className="testimonial-dots" aria-label="Choose testimonial">
              {items.map((entry, index) => (
                <button
                  key={entry.id}
                  type="button"
                  className={index === currentIndex ? 'active' : ''}
                  onClick={() => goTo(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={() => goTo(currentIndex + 1)} aria-label="Next testimonial">
              <ChevronRight size={19}/>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            ref={trackRef}
            className={`media-showcase-deck media-showcase-deck-${kind}`}
            aria-label={`${title} card carousel. Swipe horizontally to explore.`}
            onScroll={updateImageIndex}
          >
            {items.map((entry, index) => (
              <button
                className={`media-showcase-deck-card${index === currentIndex ? ' is-current' : ''}`}
                type="button"
                key={entry.id}
                onClick={() => onOpen(kind, index)}
                aria-label={`Open ${entry.label.toLowerCase()}`}
              >
                <img
                  src={entry.src}
                  alt={entry.alt}
                  loading="lazy"
                  onError={(event) => { event.currentTarget.style.opacity = '0'; }}
                />
              </button>
            ))}
          </div>
          <div className="media-showcase-image-controls">
            <span>{String(currentIndex + 1).padStart(2, '0')} <i>/</i> {String(items.length).padStart(2, '0')}</span>
            <div>
              <button type="button" onClick={() => goTo(currentIndex - 1)} aria-label={`Previous ${title} image`}>
                <ChevronLeft size={18}/>
              </button>
              <button type="button" onClick={() => goTo(currentIndex + 1)} aria-label={`Next ${title} image`}>
                <ChevronRight size={18}/>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MediaShowcase({ onOpen }) {
  return (
    <section className="media-showcase-section" id="testimonials">
      <div className="section-wrap">
        <Reveal className="media-showcase-heading">
          <Eyebrow>THE WORK. THE FEEDBACK. THE IMPACT.</Eyebrow>
          <h2>Real Stories. <span>Real Results.</span></h2>
          <p>Explore genuine client feedback, ad reviews and campaign results that showcase the impact of our work.</p>
        </Reveal>
        <div className="media-showcase-columns">
          <MediaShowcaseColumn
            title="Campaign Performance"
            items={adReviewItems}
            kind="ad"
            onOpen={onOpen}
          />
          <MediaShowcaseColumn
            title="Client Testimonials"
            items={testimonialItems}
            kind="video"
            onOpen={onOpen}
          />
          <MediaShowcaseColumn
            title="Strategic Insights"
            items={resultItems}
            kind="result"
            onOpen={onOpen}
          />
        </div>
      </div>
    </section>
  );
}

function MediaLightbox({ active, onClose, onStep }) {
  if (!active) return null;
  const items = active.kind === 'video'
    ? testimonialItems
    : active.kind === 'ad'
      ? adReviewItems
      : resultItems;
  const item = items[active.index];

  return (
    <div className="media-lightbox" role="dialog" aria-modal="true" aria-label="Media viewer" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <button className="media-lightbox-close" type="button" onClick={onClose} aria-label="Close viewer"><X size={22}/></button>
      <button className="media-lightbox-nav media-lightbox-prev" type="button" onClick={() => onStep(-1)} aria-label="Previous item"><ChevronLeft size={27}/></button>
      <div className={`media-lightbox-content${active.kind === 'video' ? ' media-lightbox-video' : ''}`}>
        {active.kind === 'video' ? (
          <video key={item.id} src={item.src} controls autoPlay playsInline />
        ) : (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            onError={(event) => { event.currentTarget.style.display = 'none'; }}
          />
        )}
        <div className="media-lightbox-caption">
          <span>{item.label}</span>
          <span>{String(active.index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
        </div>
      </div>
      <button className="media-lightbox-nav media-lightbox-next" type="button" onClick={() => onStep(1)} aria-label="Next item"><ChevronRight size={27}/></button>
    </div>
  );
}

function CountUpMetric({ value, suffix = '' }) {
  const [count, setCount] = useState(1);
  const metricRef = useRef(null);

  useEffect(() => {
    const node = metricRef.current;
    if (!node) return;
    let frame = 0;
    let started = false;
    const duration = 850;

    const animate = () => {
      if (started) return;
      started = true;
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.max(1, Math.round(1 + (value - 1) * eased)));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      animate();
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate();
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <strong ref={metricRef}>{count.toLocaleString('en-IN')}{suffix}</strong>;
}

export default function App() {
  const [menuEmail, setMenuEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const introVideoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMedia = (kind, index) => setActiveMedia({ kind, index });
  const closeMedia = () => setActiveMedia(null);
  const stepMedia = (step) => {
    setActiveMedia(current => {
      if (!current) return current;
      const items = current.kind === 'video' ? testimonialItems : current.kind === 'ad' ? adReviewItems : resultItems;
      return { ...current, index: (current.index + step + items.length) % items.length };
    });
  };

  useEffect(() => {
    if (!activeMedia) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMedia();
      if (event.key === 'ArrowLeft') stepMedia(-1);
      if (event.key === 'ArrowRight') stepMedia(1);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeMedia]);

  useEffect(() => {
    const video = introVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Muted autoplay is allowed by most browsers.
          video.play().catch(() => setVideoPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const message = `Hi Vijay Ads Agency, I would like to discuss my project. My email is ${menuEmail}.`;
    window.open(wa(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <Reveal className="hero-copy" direction="left">
            <Eyebrow>YOUR GROWTH PARTNER IN DIGITAL ADVERTISING</Eyebrow>
            <h1>Your <span className="underlined">Success Story</span><br />Starts Now!</h1>
            <p>
              At <b>Vijay Ads Agency</b>, we help businesses, entrepreneurs, coaches, startups and local brands
              grow through strategic <strong>Facebook & Instagram advertising</strong>. Reach the right audience,
              attract quality leads and turn your advertising into meaningful opportunities.
            </p>
            <div className="hero-actions">
              <a className="outline-button" href={wa('Hi Vijay Ads Agency, I would like to get started.')} target="_blank" rel="noreferrer">
                Get Started Today! <ArrowUpRight size={19} />
              </a>
              <a className="plain-link" href="#services">Explore Our Services <span>Here</span></a>
            </div>
            <div className="hero-footnote"><span>STRATEGY · REACH · GROWTH</span><i /><span>01 / 04</span></div>
          </Reveal>
          <Reveal className="hero-visual" direction="right" delay={0.12}><HeroArtwork /></Reveal>
        </section>

        <section className="partner-strip" id="industries">
          <div className="partner-inner">
            <strong>100+ Trusted<br />Business Partners</strong>
            <div className="partner-logos">
              <span>STARTUPS</span><span>COACHES</span><span>CREATORS</span><span>LOCAL BRANDS</span><span>BUSINESSES</span><span>ENTREPRENEURS</span>
            </div>
          </div>
        </section>

        <section className="intro-video-section" id="about">
          <div className="intro-video-grid">
            <Reveal className="intro-video-media" direction="left">
              <div className="intro-video-frame">
                <span className="intro-video-label">MEET VIJAY ADS AGENCY</span>
                <video
                  ref={introVideoRef}
                  src="/videos/intro-video.mp4"
                  muted={videoMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setVideoPlaying(true)}
                  onPause={() => setVideoPlaying(false)}
                  onLoadedMetadata={(event) => setVideoDuration(event.currentTarget.duration || 0)}
                  onDurationChange={(event) => setVideoDuration(event.currentTarget.duration || 0)}
                  onTimeUpdate={(event) => setVideoCurrentTime(event.currentTarget.currentTime)}
                />
                <div className="intro-video-controls">
                  <button
                    type="button"
                    onClick={() => {
                      const video = introVideoRef.current;
                      if (!video) return;
                      if (videoPlaying) {
                        video.pause();
                      } else {
                        video.play().catch(() => setVideoPlaying(false));
                      }
                    }}
                    aria-label={videoPlaying ? 'Pause introduction video' : 'Play introduction video'}
                  >
                    {videoPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoMuted(current => !current)}
                    aria-label={videoMuted ? 'Unmute introduction video' : 'Mute introduction video'}
                  >
                    {videoMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                  </button>
                </div>
                <input
                  className="intro-video-seek"
                  type="range"
                  min="0"
                  max={videoDuration || 0}
                  step="0.1"
                  value={Math.min(videoCurrentTime, videoDuration || 0)}
                  style={{ '--video-progress': videoDuration ? `${(videoCurrentTime / videoDuration) * 100}%` : '0%' }}
                  onChange={(event) => {
                    const video = introVideoRef.current;
                    if (!video) return;
                    const nextTime = Number(event.target.value);
                    video.currentTime = nextTime;
                    setVideoCurrentTime(nextTime);
                  }}
                  aria-label="Seek through introduction video"
                  disabled={!videoDuration}
                />
              </div>
            </Reveal>

            <Reveal className="intro-video-content" direction="right">
              <Eyebrow>WELCOME TO VIJAY ADS AGENCY</Eyebrow>
              <h2>Digital advertising<br />that moves your<br /><span>business forward.</span></h2>
              <p>
                Are you looking to grow your business, attract quality leads, and reach more potential customers online?
                At <b>Vijay Ads Agency</b>, we help businesses, entrepreneurs, coaches, startups, and local brands grow
                through strategic digital advertising and performance marketing.
              </p>
              <p>
                We don't believe in simply running advertisements. We believe in building effective advertising strategies
                that connect your business with the right audience and create opportunities for sustainable growth.
              </p>
              <a className="yellow-button" href={wa()} target="_blank" rel="noreferrer">
                LET'S DISCUSS YOUR GROWTH <ArrowUpRight size={14}/>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="marketing section-wrap">
          <Reveal className="marketing-art" direction="left"><DashboardArt /></Reveal>
          <Reveal className="marketing-copy" direction="right">
            <Eyebrow>A CLEAR PLAN FOR BETTER RESULTS</Eyebrow>
            <h2>Everything starts with<br />a Marketing Plan</h2>
            <p>
              Strong advertising starts with understanding your business, your audience and your goals.
              We create a clear plan to help your campaigns reach the right people and generate meaningful enquiries.
            </p>
            <ul>{process.map(item => <li key={item}><Check size={14}/>{item}</li>)}</ul>
            <a className="text-underline" href={wa('Hi, I would like help planning my marketing campaign.')} target="_blank" rel="noreferrer">
              Let's plan your next campaign <ArrowUpRight size={14}/>
            </a>
          </Reveal>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <Reveal className="section-heading">
              <Eyebrow center>OUR DIGITAL ADVERTISING SERVICES</Eyebrow>
              <h2>We love to design & develop<br />winning marketing strategies!</h2>
              <p>We combine thoughtful planning, focused targeting and ongoing optimization to help your business move forward.</p>
            </Reveal>
            <motion.div className="services-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article className="service-card" key={service.number} variants={reveal} whileHover={{ y: -9 }} transition={{ duration: 0.3 }}>
                    <ServiceIllustration index={index}/>
                    <span className="service-number">{service.number} / 04</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <MediaShowcase onOpen={openMedia} />

        <section className="stats section-wrap">
          <Reveal className="stats-grid">
            <div><CountUpMetric value={5} suffix="+"/><span>Years of combined<br/>marketing experience</span></div>
            <div><CountUpMetric value={500} suffix="+"/><span>Services Successfully <br/>Delivered to Clients</span></div>
          </Reveal>
        </section>

        <section className="case-study social-connect" id="connect">
          <div className="social-connect-inner">
            <Reveal className="social-orbit-wrap" direction="left">
              <div className="social-orbit" aria-hidden="true">
                <motion.span className="social-orbit-ring social-orbit-ring-one" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />
                <motion.span className="social-orbit-ring social-orbit-ring-two" animate={{ rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} />
                <motion.span className="social-orbit-core" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <span>V.</span>
                  <small>LET'S<br/>CONNECT</small>
                </motion.span>
                <motion.span className="social-orbit-node social-node-whatsapp" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><MessageCircle /></motion.span>
                <motion.span className="social-orbit-node social-node-facebook" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><Facebook /></motion.span>
                <motion.span className="social-orbit-node social-node-youtube" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut' }}><Youtube /></motion.span>
                <span className="social-orbit-spark social-spark-one">✳</span>
                <span className="social-orbit-spark social-spark-two">+</span>
              </div>
            </Reveal>

            <Reveal className="social-connect-copy" direction="right">
              <Eyebrow>LET'S BUILD YOUR NEXT SUCCESS STORY</Eyebrow>
              <h2>Good things happen when we <span>connect.</span></h2>
              <p>
                Follow Vijay Ads Agency for updates, explore our work and get in touch with us directly.
                Let's turn your next business goal into a growth opportunity.
              </p>
              <div className="social-connect-note"><span className="social-live-dot" /> AVAILABLE TO DISCUSS YOUR NEXT CAMPAIGN</div>
            </Reveal>
          </div>

          <div className="social-link-grid">
            <motion.a className="social-link-card social-link-whatsapp" href={wa()} target="_blank" rel="noreferrer" whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
              <span className="social-link-icon"><MessageCircle /></span>
              <span className="social-link-copy"><small>CHAT WITH OUR TEAM</small><strong>WhatsApp</strong><em>+91 85918 89240</em></span>
              <ArrowUpRight className="social-link-arrow" />
            </motion.a>
            <motion.a className="social-link-card social-link-facebook" href="https://www.facebook.com/profile.php?id=61589511163785" target="_blank" rel="noreferrer" whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
              <span className="social-link-icon"><Facebook /></span>
              <span className="social-link-copy"><small>FOLLOW OUR PAGE</small><strong>Facebook</strong><em>Vijay Ads Agency</em></span>
              <ArrowUpRight className="social-link-arrow" />
            </motion.a>
            <motion.a className="social-link-card social-link-instagram" href="https://www.instagram.com/vijayadagency/" target="_blank" rel="noreferrer" whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
              <span className="social-link-icon"><Instagram /></span>
              <span className="social-link-copy"><small>FOLLOW OUR PAGE</small><strong>Instagram</strong><em>@vijayadagency</em></span>
              <ArrowUpRight className="social-link-arrow" />
            </motion.a>
            <motion.a className="social-link-card social-link-youtube" href="https://www.youtube.com/@VijayMarketingAgency/shorts" target="_blank" rel="noreferrer" whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
              <span className="social-link-icon"><Youtube /></span>
              <span className="social-link-copy"><small>WATCH OUR SHORTS</small><strong>YouTube</strong><em>Vijay Marketing Agency</em></span>
              <ArrowUpRight className="social-link-arrow" />
            </motion.a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-inner section-wrap">
          <div className="footer-brand-block">
            <a href="#home" className="wordmark footer-wordmark">vijay<span>ads</span><i>✳</i><small>AGENCY</small></a>
            <p>Your growth partner<br/>in digital advertising.</p>
          </div>
          <div className="footer-column"><b>EXPLORE</b><a href="#about">About us</a><a href="#services">Our services</a><a href="#testimonials">Our Work</a><a href="#connect">Connect</a></div>
          <div className="footer-column"><b>OUR SERVICES</b><a href="#services">Facebook Advertisement</a><a href="#services">Lead Generation</a><a href="#services">Audience Targeting</a><a href="#services">Instagram Advertisement</a></div>
          <div className="footer-column"><b>GET IN TOUCH</b><a href={wa()} target="_blank" rel="noreferrer">WhatsApp us</a></div>
          <div className="footer-newsletter"><b>LET'S GROW TOGETHER</b><p>Have a project in mind? Let's talk about it.</p><a href={wa()} target="_blank" rel="noreferrer">MESSAGE US <ArrowUpRight size={13}/></a></div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© 2026 Vijay Ads Agency. All rights reserved.</span>
          
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
      <MediaLightbox active={activeMedia} onClose={closeMedia} onStep={stepMedia} />
      <a className="whatsapp-float" href={wa()} target="_blank" rel="noreferrer" aria-label="Chat with Vijay Ads Agency on WhatsApp">
        <MessageCircle size={22}/><span>Let's talk</span>
      </a>
    </>
  );
}