# كيفية استخدام البيانات من قاعدة البيانات

# How to Use Database Data

## البدء السريع | Quick Start

### 1. تشغيل المشروع | Run the Project

```bash
# تشغيل Backend
cd backend
npm install
npm run dev

# في نافذة طرفية أخرى | In another terminal
cd app
npm install
npm run dev
```

### 2. زيارة صفحة عرض البيانات | Visit Data Display Page

```
العربية | Arabic: http://localhost:3000/ar/data-display
English: http://localhost:3000/en/data-display
```

---

## 🎯 البيانات المعروضة | Displayed Data

### ✅ يتم عرض:

- **العلامات التجارية** (Brands)
- **الخدمات العامة** (Services)
- **خدمات التصميم** (Design Services)
- **خدمات التطوير** (Development Services)
- **خدمات الدعم** (Support Services)
- **خدمات إصدارات التطبيقات** (App Version Services)

### ❌ لا يتم عرض:

- جميع جداول الأسعار (Pricing Tables)

---

## 📦 استخدام المكونات في صفحاتك | Use Components in Your Pages

### عرض العلامات التجارية | Display Brands

```jsx
import BrandsDisplay from "@/app/Components/DataDisplay/BrandsDisplay";

export default function MyPage() {
  return <BrandsDisplay />;
}
```

### عرض الخدمات | Display Services

```jsx
import ServicesDisplay from "@/app/Components/DataDisplay/ServicesDisplay";

export default function MyPage() {
  return (
    <div>
      {/* خدمات عامة | Regular Services */}
      <ServicesDisplay />

      {/* خدمات التصميم | Design Services */}
      <ServicesDisplay type="design" />

      {/* خدمات التطوير | Development Services */}
      <ServicesDisplay type="development" />

      {/* خدمات الدعم | Support Services */}
      <ServicesDisplay type="support" />
    </div>
  );
}
```

---

## 🔧 استخدام Hooks | Using Hooks

### الحصول على العلامات التجارية | Get Brands

```jsx
"use client";
import { useBrands } from "@/lib/hooks/useBrands";

export default function MyComponent() {
  const { data, loading, error } = useBrands();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((brand) => (
        <img key={brand.id} src={brand.img} alt="Brand" />
      ))}
    </div>
  );
}
```

### الحصول على الخدمات | Get Services

```jsx
"use client";
import { useServices } from "@/lib/hooks/useServices";

export default function MyComponent() {
  // الأنواع المتاحة | Available types:
  // "services" | "design" | "development" | "support" | "app-version"

  const { data, loading, error } = useServices("design");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 📝 أمثلة سريعة | Quick Examples

### مثال 1: صفحة خدمات بسيطة | Example 1: Simple Services Page

```jsx
"use client";
import ServicesDisplay from "@/app/Components/DataDisplay/ServicesDisplay";
import BrandsDisplay from "@/app/Components/DataDisplay/BrandsDisplay";

export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <ServicesDisplay type="design" columns={3} />
      <BrandsDisplay columns={5} />
    </div>
  );
}
```

### مثال 2: صفحة بتبديل الخدمات | Example 2: Page with Service Switcher

```jsx
"use client";
import { useState } from "react";
import { useServices } from "@/lib/hooks/useServices";

export default function DynamicServicesPage() {
  const [type, setType] = useState("design");
  const { data, loading } = useServices(type);

  return (
    <div>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="design">Design</option>
        <option value="development">Development</option>
        <option value="support">Support</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((service) => (
            <div key={service.id}>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## 🌐 دعم اللغات | Language Support

التطبيق يدعم العربية والإنجليزية تلقائياً:

The application automatically supports Arabic and English:

```
/ar/data-display  → عربي
/en/data-display  → English
```

البيانات تُعرض بناءً على اللغة المختارة (title_ar / title_en)

Data is displayed based on selected language (title_ar / title_en)

---

## ⚙️ الإعدادات | Configuration

### ملف .env.local

```bash
NEXT_PUBLIC_API_URL=http://localhost:4010
```

### المنافذ | Ports

- **Backend API**: `http://localhost:4010`
- **Frontend App**: `http://localhost:3000`

---

## 🔍 الصفحات المتاحة | Available Pages

| الصفحة       | الرابط          | الوصف                          |
| ------------ | --------------- | ------------------------------ |
| عرض البيانات | `/data-display` | عرض البيانات (بدون أسعار)      |
| اختبار API   | `/test-api`     | عرض جميع البيانات (مع الأسعار) |

---

## 📚 للمزيد من التفاصيل | For More Details

راجع الدليل الكامل | See full guide:

```
app/DATA_DISPLAY_GUIDE.md
```

---

## ❓ أسئلة شائعة | FAQ

### س: كيف أضيف بيانات جديدة؟

How do I add new data?

**ج:** استخدم Control Panel في `/cp` أو Backend API مباشرة.

**A:** Use Control Panel at `/cp` or Backend API directly.

### س: لماذا لا تظهر البيانات؟

Why is data not showing?

**ج:** تأكد من:

1. تشغيل Backend
2. وجود بيانات في قاعدة البيانات
3. إعدادات `NEXT_PUBLIC_API_URL` صحيحة

**A:** Make sure:

1. Backend is running
2. Database has data
3. `NEXT_PUBLIC_API_URL` is configured correctly

### س: كيف أعرض البيانات في صفحة معينة؟

How do I display data on a specific page?

**ج:** استخدم المكونات:

```jsx
<ServicesDisplay type="design" pageNumber={1} />
```

**A:** Use the components:

```jsx
<ServicesDisplay type="design" pageNumber={1} />
```

---

## 🚀 نصائح | Tips

1. استخدم المكونات الجاهزة `BrandsDisplay` و `ServicesDisplay` للحصول على تصميم جاهز
2. استخدم Hooks مباشرة إذا كنت تريد تخصيص العرض بالكامل
3. تحقق من صفحة `/data-display` لرؤية مثال كامل
4. راجع `/test-api` لاختبار جميع البيانات

5. Use ready-made components `BrandsDisplay` and `ServicesDisplay` for quick setup
6. Use Hooks directly if you want full customization
7. Check `/data-display` page to see complete example
8. Visit `/test-api` to test all data

---

**تحديث أخير | Last Updated:** 2025-01-10  
**الإصدار | Version:** 1.0.0

