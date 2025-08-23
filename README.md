# Dynavera Platform Frontend

## 🚀 **Cách build project với environment production**

### 📁 **Cấu trúc config tập trung:**

```
config/
├── development.js    # Cấu hình development
└── production.js     # Cấu hình production
```

### 🔧 **Cách sử dụng:**

#### **1. Build Development (mặc định):**
```bash
./build.sh
# hoặc
./build.sh development
```

#### **2. Build Production:**
```bash
./build.sh production
```

#### **3. Sử dụng npm scripts:**
```bash
npm run build:prod
npm run generate:prod
```

### 📋 **Environment Variables:**

| Environment | API Base URL | Google Redirect URI | Site URL |
|-------------|--------------|-------------------|----------|
| **Development** | `http://localhost:8080/api` | `http://localhost:3000/auth/callback` | `http://localhost:3000` |
| **Production** | `https://dynavera.net/api` | `https://koovity.dynavera.net/auth/callback` | `https://koovity.dynavera.net` |

### ✅ **Ưu điểm của config tập trung:**

- ✅ **Không phân mảnh** - Tất cả config ở một chỗ
- ✅ **Dễ quản lý** - Chỉ cần sửa 1 file để thay đổi environment
- ✅ **Tự động verification** - Script tự động kiểm tra config đúng
- ✅ **Flexible** - Có thể thêm environment mới dễ dàng

### 🎯 **Output:**

- **Build directory:** `.output/public/`
- **Static files:** HTML, CSS, JS, images
- **Ready for deployment:** Có thể deploy lên bất kỳ static hosting nào

### 🔍 **Verification:**

Script tự động kiểm tra:
- ✅ Google OAuth redirect URI đúng
- ✅ API Base URL đúng
- ✅ Build thành công

---

## 🛠 **Development**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
./build.sh production
```

## 📦 **Deployment**

```bash
# Build production
./build.sh production

# Deploy files from .output/public/ to server
```

---

**Bây giờ bạn có thể quản lý tất cả environment variables ở một chỗ!** 🎉
