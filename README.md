# DYNAVERA Platform Frontend

A modern proxy service platform built with Nuxt.js and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** with dark theme and cyber aesthetic
- **Google OAuth Integration** for seamless authentication
- **Responsive Design** optimized for all devices
- **Static Site Generation** for fast loading
- **Real-time Dashboard** with proxy service management

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Google OAuth credentials
- DYNAVERA API access

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dynavera-platform-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Google OAuth Configuration
   GOOGLE_CLIENT_ID=your_google_client_id_here
   
   # API Configuration
   API_BASE_URL=https://koovity.dynavera.net
   ```

## 🔧 Google OAuth Setup

1. **Create Google OAuth Credentials**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Go to Credentials → Create Credentials → OAuth 2.0 Client ID
   - Set Application Type to "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3000/auth/callback` (development)
     - `https://yourdomain.com/auth/callback` (production)

2. **Update Environment Variables**
   - Copy your Google Client ID to `.env` file
   - Update `API_BASE_URL` with your backend API URL

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
dynavera-platform-fe/
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   └── images/            # Images and icons
├── composables/           # Vue composables
│   └── useAuth.js        # Authentication logic
├── pages/                 # Page components
│   ├── index.vue         # Homepage
│   ├── login.vue         # Login page
│   ├── register.vue      # Register page
│   └── dashboard.vue     # Dashboard
├── public/               # Public assets
└── nuxt.config.ts       # Nuxt configuration
```

## 🔐 Authentication Flow

1. **User clicks "Sign in with Google"**
2. **Google OAuth popup opens**
3. **User authenticates with Google**
4. **Google returns credential token**
5. **Frontend sends token to backend API**
6. **Backend validates token and returns user data**
7. **User is redirected to dashboard**

## 🌐 API Integration

The application integrates with the DYNAVERA backend API:

- **Base URL**: `https://koovity.dynavera.net`
- **Authentication**: Bearer token
- **Endpoints**:
  - `POST /api/auth/google` - Google OAuth authentication
  - `POST /api/auth/logout` - User logout
  - Additional endpoints for proxy management

## 🎨 Customization

### Styling
- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `assets/css/tailwind.css`
- **Dark theme** with cyber aesthetic

### Components
- **Reusable components** in `components/` directory
- **Page layouts** in `layouts/` directory
- **Authentication logic** in `composables/useAuth.js`

## 📦 Deployment

### Static Site Generation
```bash
npm run build
```

The built files will be in `.output/public/` directory.

### Environment Variables for Production
Make sure to update:
- `GOOGLE_CLIENT_ID` with production credentials
- `API_BASE_URL` with production API URL
- Redirect URIs in Google Console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation
- Review the API documentation
- Contact the development team
