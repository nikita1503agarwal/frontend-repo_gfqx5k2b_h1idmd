import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-300 text-black/90 px-4 py-2 text-sm font-extrabold shadow-[0_6px_0_#000]">
      {children}
    </span>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <div className="mb-10 text-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black drop-shadow-[0_3px_0_#FFD54F]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-black/70 text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

const floatUp = {
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const cardHover = 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_0_#000]'

export default function App() {
  return (
    <div dir="rtl" lang="fa" className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 text-black selection:bg-yellow-300 selection:text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-black text-yellow-300 shadow-[0_6px_0_#FFD54F]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300 text-black text-xl font-extrabold shadow-[0_4px_0_#000]">V</span>
            <div className="text-yellow-100">
              <div className="text-lg font-extrabold leading-5">Viewnite.ir</div>
              <div className="text-[11px] opacity-80">سیستم مدیریت دونیت ماینکرفت</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-bold">
            <a href="#features" className="hover:text-white transition-colors">ویژگی‌ها</a>
            <a href="#youtube" className="hover:text-white transition-colors">یوتیوب</a>
            <a href="#payments" className="hover:text-white transition-colors">پرداخت</a>
            <a href="#compat" className="hover:text-white transition-colors">سازگاری</a>
            <a href="#pricing" className="hover:text-white transition-colors">قیمت</a>
            <a href="#blog" className="hover:text-white transition-colors">مقالات</a>
            <a href="#community" className="hover:text-white transition-colors">جامعه</a>
          </div>
          <a href="#pricing" className="group inline-flex items-center gap-2 bg-yellow-300 text-black font-extrabold px-4 py-2 rounded-full shadow-[0_6px_0_#000] active:translate-y-1 active:shadow-[0_3px_0_#000] transition-all">
            شروع کنید
            <span className="inline-block group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>
      </nav>

      {/* Hero with Spline cover */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlay to keep text readable - pointer-events-none so Spline remains interactive if needed */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-50/80 via-amber-50/70 to-amber-100/90"></div>

        <div className="relative max-w-6xl mx-auto px-4 pt-20 md:pt-28 pb-24 md:pb-36">
          <motion.div {...floatUp} className="max-w-3xl ml-auto text-right">
            <Badge>نسخه ۱.۰ آماده است</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl leading-[1.1] font-extrabold text-black drop-shadow-[0_6px_0_#FFD54F]">
              🎮 ویونایت!
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-extrabold text-black">
              سیستم مدیریت دونیت داخل بازی!
            </p>
            <p className="mt-4 text-black/80 text-lg leading-9">
              فرض کن داخل بازی ماینکرفت مخاطبت بتونه با پنج هزار تومن بکشتت! جالب نیست؟!
            </p>
            <div className="mt-8 flex items-center justify-end gap-3">
              <a href="#features" className="animate-bounce inline-flex items-center gap-2 bg-black text-yellow-300 px-6 py-3 rounded-full font-extrabold shadow-[0_8px_0_#000] hover:shadow-[0_12px_0_#000] active:translate-y-1 transition-all">
                بیشتر بدانید
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-full font-extrabold shadow-[0_8px_0_#000] hover:shadow-[0_12px_0_#000] active:translate-y-1 transition-all">
                پلن‌ها
              </a>
            </div>
          </motion.div>

          {/* Floating doodles */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div initial={{ y: 0 }} animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute left-6 top-24 text-4xl">🧱</motion.div>
            <motion.div initial={{ y: 0 }} animate={{ y: [8, -8, 8] }} transition={{ repeat: Infinity, duration: 7 }} className="absolute right-10 top-40 text-4xl">💛</motion.div>
            <motion.div initial={{ y: 0 }} animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute left-20 bottom-16 text-4xl">💰</motion.div>
            <motion.div initial={{ scale: 0.8, opacity: 0.6 }} animate={{ scale: [0.8, 1, 0.8], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute right-24 bottom-10 text-2xl">✨</motion.div>
          </div>
        </div>
      </header>

      {/* Features */}
      <Section id="features" title="🧑‍💻 بدون نیاز به دانش فنی" subtitle="لازم نیست هیچ پیش‌زمینه فنی‌ای داشته باشی! فقط توی سی ثانیه تمام!">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '⚡ نصب سریع — فقط ۳۰ ثانیه', desc: 'نصب فوق سریع با چند کلیک.' },
            { title: '💡 کاملا ساده — حتی اگر دانش فنی نداری', desc: 'رابط کاربری دوستانه و کارتونی.' },
            { title: '👌 بدون نیاز به آموزش — همه راحت نصب می‌کنند', desc: 'بدون پیچیدگی، فقط برو جلو!' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className={`bg-yellow-200/70 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
              <h3 className="text-xl font-extrabold mb-2">{item.title}</h3>
              <p className="text-black/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* YouTube Integration */}
      <Section id="youtube" title="📺 عملکرد یوتیوب" subtitle="بیننده‌هات می‌تونن با لایک یا سابسکرایب، کارهایی مثل ظاهر کردن کریپر انجام بدن!">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <motion.div whileHover={{ y: -6 }} className={`bg-amber-200/70 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-extrabold mb-2">ادغام با یوتیوب</h3>
            <p className="text-black/80">اتصال آسان به کانال، دریافت رویدادهای لایک/ساب و اجرای اکشن‌های کارتونی داخل بازی مثل ظاهر شدن کریپر، ریختن سکه یا پر شدن قلب‌ها.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className={`bg-yellow-100 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
            <div className="flex flex-wrap gap-3 text-3xl">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-300 shadow-[0_6px_0_#000]">💥</span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-300 shadow-[0_6px_0_#000]">🧨</span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-300 shadow-[0_6px_0_#000]">💛</span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-300 shadow-[0_6px_0_#000]">🧱</span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-yellow-300 shadow-[0_6px_0_#000]">💰</span>
            </div>
            <p className="mt-4 text-black/80">نمادها و افکت‌های کارتونی برای حس بازی‌وار و فان.</p>
          </motion.div>
        </div>
      </Section>

      {/* Payments */}
      <Section id="payments" title="💳 دونیت با ریمیت" subtitle="با ریمیت، پرداخت‌ها سریع، امن و بدون دردسر انجام می‌شوند.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🛡️', title: 'امن و مطمئن', desc: 'رمزنگاری و امنیت کامل در مسیر پرداخت.' },
            { icon: '⚡', title: 'سریع', desc: 'تراکنش‌های لحظه‌ای و بدون تاخیر.' },
            { icon: '🎮', title: 'مناسب استریمرها', desc: 'یکپارچه با رویدادهای درون بازی.' },
          ].map((f, i) => (
            <motion.div key={i} whileHover={{ rotate: [0, -1.5, 1.5, 0] }} className={`bg-amber-100 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
              <div className="text-4xl mb-3">{f.icon}</div>
              <h4 className="text-xl font-extrabold">{f.title}</h4>
              <p className="mt-2 text-black/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Compatibility */}
      <Section id="compat" title="ویونایت با مادهای مختلف ماینکرفت سازگار است — هر کاری که فکرش را می‌کنی انجام بده!">
        <motion.div whileHover={{ y: -6 }} className={`bg-yellow-200/70 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
          <div className="flex flex-wrap items-center justify-between gap-4 text-2xl">
            <span>🧱 بلوک‌ها</span>
            <span>💚 کریپر</span>
            <span>❤️ قلب</span>
            <span>💰 سکه</span>
            <span>🗺️ جهان</span>
            <span>🧪 معجون</span>
          </div>
          <p className="mt-4 text-black/80">با رویدادهای کارتونی و اکشن‌های خلاقانه، تجربه‌ای سرگرم‌کننده برای بیننده‌ها بساز.</p>
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="پلن‌های قیمت‌گذاری">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Monthly */}
          <motion.div whileHover={{ y: -6 }} className={`bg-amber-50 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
            <h3 className="text-xl font-extrabold">یک‌ماهه</h3>
            <div className="mt-3 text-3xl font-extrabold">۵۹ هزار تومان</div>
            <ul className="mt-4 space-y-2 text-black/80">
              <li>شروع سریع برای تست</li>
              <li>پشتیبانی پایه</li>
            </ul>
            <button className="mt-6 w-full bg-black text-yellow-300 rounded-full py-3 font-extrabold shadow-[0_8px_0_#000] hover:shadow-[0_12px_0_#000] active:translate-y-1 transition-all animate-bounce">شروع</button>
          </motion.div>

          {/* Quarterly - Popular */}
          <motion.div whileHover={{ y: -6 }} className={`relative bg-yellow-300 border-4 border-black rounded-3xl p-6 shadow-[0_14px_0_#000] ${cardHover}`}>
            <span className="absolute -top-4 right-4 bg-black text-yellow-300 px-3 py-1 rounded-full text-sm font-extrabold">محبوب‌ترین</span>
            <h3 className="text-xl font-extrabold">سه‌ماهه</h3>
            <div className="mt-3 text-3xl font-extrabold">۱۴۹ هزار تومان</div>
            <ul className="mt-4 space-y-2 text-black/90">
              <li>بهینه برای استریم‌های مداوم</li>
              <li>پشتیبانی سریع‌تر</li>
            </ul>
            <button className="mt-6 w-full bg-black text-yellow-300 rounded-full py-3 font-extrabold shadow-[0_8px_0_#000] hover:shadow-[0_12px_0_#000] active:translate-y-1 transition-all">انتخاب این پلن</button>
          </motion.div>

          {/* Yearly */}
          <motion.div whileHover={{ y: -6 }} className={`bg-amber-100 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
            <h3 className="text-xl font-extrabold">یک‌ساله</h3>
            <div className="mt-3 text-3xl font-extrabold">۴۹۹ هزار تومان</div>
            <ul className="mt-4 space-y-2 text-black/80">
              <li>بیشترین صرفه اقتصادی</li>
              <li>پشتیبانی ویژه</li>
            </ul>
            <button className="mt-6 w-full bg-black text-yellow-300 rounded-full py-3 font-extrabold shadow-[0_8px_0_#000] hover:shadow-[0_12px_0_#000] active:translate-y-1 transition-all">ارتقا</button>
          </motion.div>
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog" title="📚 آخرین مقالات">
        <motion.a href="#" whileHover={{ y: -6 }} className={`block bg-yellow-200/70 border-4 border-black rounded-3xl p-6 shadow-[0_10px_0_#000] ${cardHover}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold">🎉 ویونایت چیه؟</h3>
              <p className="text-black/80 mt-2">۱۶ آبان ۱۴۰۴ — ۳ دقیقه مطالعه</p>
            </div>
            <div className="text-3xl">➡️</div>
          </div>
        </motion.a>
      </Section>

      {/* Community */}
      <Section id="community" title="به جامعه ما بپیوندید!" subtitle="عضو دیسکورد رسمی ویونایت شوید و از پشتیبانی ۲۴/۷ بهره‌مند شوید.">
        <motion.div whileHover={{ y: -6 }} className={`bg-black text-yellow-300 border-4 border-black rounded-3xl p-8 shadow-[0_14px_0_#000] ${cardHover}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-extrabold">جامعه فعال و صمیمی</h3>
              <p className="mt-2 text-yellow-200">سوال داری؟ ایده داری؟ همین الان به ما بپیوند.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-full font-extrabold shadow-[0_8px_0_#000] hover:shadow-[0_12px_0_#000] active:translate-y-1 transition-all animate-bounce">ورود به دیسکورد</a>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 bg-black text-yellow-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-right text-sm">
              © 1403 - 2025 ویونایت. تمامی حقوق محفوظ است.
            </p>
            <p className="text-center md:text-left text-sm">
              ساخته شده با ❤️ توسط Wabbit.ir
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
